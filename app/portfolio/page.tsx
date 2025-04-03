"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Search,
  ArrowDown,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Settings,
  Lock,
  ArrowRight,
  RefreshCw,
  X,
  Copy,
  ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@/context/user-context";
import { useAuth } from "@/components/AuthProvider";
import { useToast } from "@/context/toast-context"; // Use your custom toast context

// Define wallet data type
interface WalletData {
  id: number;
  user_id: string;
  btc: string;
  eth: string;
  ltc: string;
  bch: string;
  usdt: string;
  trx: string;
  doge: string;
  ada: string;
  xrp: string;
  bnb: string;
  inr: string;
  shib: string;
  bitbop: string;
  not?: string;
  created_at: string;
  updated_at: string;
  [key: string]: string | number | undefined;
}

// Crypto asset info
const cryptoInfo: Record<string, {
  name: string;
  symbol: string;
  color: string;
}> = {
  btc: { name: "Bitcoin", symbol: "BTC", color: "from-orange-500 to-yellow-500" },
  eth: { name: "Ethereum", symbol: "ETH", color: "from-blue-500 to-purple-500" },
  ltc: { name: "Litecoin", symbol: "LTC", color: "from-gray-400 to-gray-500" },
  bch: { name: "Bitcoin Cash", symbol: "BCH", color: "from-green-500 to-green-600" },
  usdt: { name: "Tether", symbol: "USDT", color: "from-green-400 to-teal-500" },
  trx: { name: "Tron", symbol: "TRX", color: "from-red-500 to-red-600" },
  doge: { name: "Dogecoin", symbol: "DOGE", color: "from-yellow-400 to-yellow-500" },
  ada: { name: "Cardano", symbol: "ADA", color: "from-blue-400 to-blue-500" },
  xrp: { name: "Ripple", symbol: "XRP", color: "from-blue-300 to-blue-400" },
  bnb: { name: "Binance Coin", symbol: "BNB", color: "from-yellow-500 to-yellow-600" },
  shib: { name: "Shiba Inu", symbol: "SHIB", color: "from-orange-400 to-orange-500" },
  bitbop: { name: "Bitbop", symbol: "BITBOP", color: "from-purple-500 to-blue-500" },
  not: { name: "Notcoin", symbol: "NOT", color: "from-gray-500 to-gray-600" }
};

export default function PortfolioPage() {
  const { user } = useUser();
  const { openSignIn } = useAuth();
  const { toast } = useToast(); // Use the custom toast hook
  const [walletData, setWalletData] = useState<WalletData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCoin, setSelectedCoin] = useState<string>("bitbop");
  const [showCoinDropdown, setShowCoinDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"crypto" | "account">("crypto");
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [depositStep, setDepositStep] = useState<"select" | "amount" | "qrcode">("select");
  const [depositCoin, setDepositCoin] = useState<string>("usdt");
  const [depositAmount, setDepositAmount] = useState<string>("");
  const [depositAddress, setDepositAddress] = useState<string>("");
  const [isGeneratingAddress, setIsGeneratingAddress] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCoinDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        if (depositStep === "select") {
          setShowDepositModal(false);
        }
      }
    }
    if (showDepositModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDepositModal, depositStep]);

  // Fetch wallet data when user is logged in
  useEffect(() => {
    const fetchWalletData = async () => {
      if (!user?.id) return;
      setIsLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Authentication token not found');
        const response = await fetch(`https://api.bitbopbank.com/api/wallet/${user.id}`, {
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Failed to fetch wallet data');
        if (data.success && data.wallet) setWalletData(data.wallet);
      } catch (err) {
        console.error('Error fetching wallet data:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while fetching wallet data');
      } finally {
        setIsLoading(false);
      }
    };
    if (user?.id) fetchWalletData();
  }, [user?.id]);

  // Get all coins with balances
  const getCoinsWithBalances = () => {
    if (!walletData) return [];
    return Object.entries(walletData)
      .filter(([key]) => 
        key !== 'id' && 
        key !== 'user_id' && 
        key !== 'created_at' && 
        key !== 'updated_at' &&
        key.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map(([key, value]) => ({
        key,
        name: cryptoInfo[key]?.name || key.toUpperCase(),
        symbol: cryptoInfo[key]?.symbol || key.toUpperCase(),
        amount: typeof value === 'string' ? value : '0',
        color: cryptoInfo[key]?.color || "from-gray-500 to-gray-600"
      }));
  };

  // Format number with proper decimal places
  const formatNumber = (num: string | undefined) => {
    if (!num) return "0.00000000";
    const parsedNum = parseFloat(num);
    if (isNaN(parsedNum) || parsedNum === 0) return "0.00000000";
    if (parsedNum < 0.00001) return parsedNum.toFixed(8);
    if (parsedNum < 0.001) return parsedNum.toFixed(6);
    if (parsedNum < 1) return parsedNum.toFixed(4);
    if (parsedNum < 1000) return parsedNum.toFixed(2);
    return parsedNum.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  // Safely get wallet value
  const getWalletValue = (key: string): string => {
    if (!walletData) return "0";
    return (walletData[key] as string) || "0";
  };

  return (
    <section id="portfolio" className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {user ? (
        <div className="container mx-auto px-4 relative z-10">
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 mb-8 text-center">
              <p className="text-white">{error}</p>
              <Button onClick={() => window.location.reload()} className="mt-4 bg-white/10 hover:bg-white/20">
                Try Again
              </Button>
            </div>
          ) : walletData ? (
            <div className="space-y-8">
              {/* Page Title */}
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Your Crypto Portfolio
                </h1>
                <p className="text-gray-400 mt-2">Manage and track your cryptocurrency assets</p>
              </div>
              {/* Wallet Header */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700/50">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <h2 className="text-lg font-medium text-gray-300">Est. Total Value</h2>
                      <Eye className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="flex space-x-3">
                      <button className="bg-gray-700/50 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                        <Settings className="h-5 w-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="w-full">
                      <div className="flex items-center space-x-3 flex-wrap md:flex-nowrap">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-0">{formatNumber(getWalletValue(selectedCoin))}</h1>
                        <div className="relative w-full md:w-auto" ref={dropdownRef}>
                          <div 
                            className="flex items-center space-x-2 bg-gray-700/50 hover:bg-gray-700 px-3 py-2 rounded-lg cursor-pointer transition-colors"
                            onClick={() => setShowCoinDropdown(!showCoinDropdown)}
                          >
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-r flex items-center justify-center text-xs text-white font-bold ${cryptoInfo[selectedCoin]?.color || "from-gray-500 to-gray-600"}`}>
                              {cryptoInfo[selectedCoin]?.symbol.charAt(0) || "C"}
                            </div>
                            <span className="text-xl font-medium">{cryptoInfo[selectedCoin]?.symbol || selectedCoin.toUpperCase()}</span>
                            <ArrowDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${showCoinDropdown ? 'rotate-180' : ''}`} />
                          </div>
                          {showCoinDropdown && (
                            <>
                              <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setShowCoinDropdown(false)}></div>
                              <div className="fixed bottom-0 left-0 right-0 z-50 md:absolute md:bottom-auto md:inset-auto md:top-full md:left-0 md:mt-2 w-full md:w-80 bg-[#1a2235] md:rounded-lg shadow-xl overflow-hidden border border-gray-800/50 rounded-t-xl md:rounded-xl">
                                <div className="flex md:hidden justify-between items-center p-4 border-b border-gray-800/50">
                                  <h3 className="font-medium text-lg text-white">Select Currency</h3>
                                  <button className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700" onClick={() => setShowCoinDropdown(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                      <line x1="18" y1="6" x2="6" y2="18"></line>
                                      <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                  </button>
                                </div>
                                <div className="p-4 border-b border-gray-800/50 sticky top-0 bg-[#1a2235] z-20">
                                  <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                                    <Input
                                      placeholder="Search currency"
                                      className="pl-9 bg-[#232b3e] border-gray-700/50 focus:ring-purple-500 text-sm text-white"
                                      value={searchQuery}
                                      onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                  </div>
                                </div>
                                <div className="overflow-y-auto py-0 max-h-[60vh] md:max-h-80">
                                  {Object.entries(cryptoInfo)
                                    .filter(([key, coin]) => 
                                      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
                                    )
                                    .map(([key, coin]) => (
                                      <div
                                        key={key}
                                        className={`flex items-center px-4 py-5 hover:bg-[#232b3e] cursor-pointer transition-colors ${key === selectedCoin ? "bg-[#232b3e]" : ""}`}
                                        onClick={() => {
                                          setSelectedCoin(key);
                                          setShowCoinDropdown(false);
                                        }}
                                      >
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r mr-4 flex items-center justify-center text-xl text-white font-bold ${coin.color}`}>
                                          {coin.symbol.charAt(0)}
                                        </div>
                                        <div className="flex flex-col">
                                          <span className="font-medium text-white text-lg">{coin.symbol}</span>
                                          <span className="text-sm text-gray-400">{coin.name}</span>
                                        </div>
                                        <div className="ml-auto text-right">
                                          <span className="text-white">{formatNumber(getWalletValue(key))}</span>
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mt-2">≈${formatNumber(getWalletValue(selectedCoin))}</p>
                    </div>
                  </div>
                </div>
                {/* Quick Action Buttons */}
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="flex flex-col items-center group cursor-pointer" onClick={() => { setDepositStep("select"); setShowDepositModal(true); console.log("Opening deposit modal"); }}>
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-full p-4 shadow-lg group-hover:shadow-purple-500/20 group-hover:from-purple-600/20 group-hover:to-purple-800/20 transition-all duration-300">
                      <Download className="h-6 w-6 text-yellow-500" />
                    </div>
                    <span className="text-sm mt-2 text-gray-300 group-hover:text-white transition-colors">Deposit</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-full p-4 shadow-lg group-hover:shadow-purple-500/20 group-hover:from-purple-600/20 group-hover:to-purple-800/20 transition-all duration-300">
                      <ArrowUpRight className="h-6 w-6 text-yellow-500" />
                    </div>
                    <span className="text-sm mt-2 text-gray-300 group-hover:text-white transition-colors">Withdraw</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-full p-4 shadow-lg group-hover:shadow-purple-500/20 group-hover:from-purple-600/20 group-hover:to-purple-800/20 transition-all duration-300">
                      <RefreshCw className="h-6 w-6 text-yellow-500" />
                    </div>
                    <span className="text-sm mt-2 text-gray-300 group-hover:text-white transition-colors">Swap</span>
                  </div>
                </div>
              </div>
              {/* Tabs */}
              <div className="border-b border-gray-800">
                <div className="flex">
                  <button className={`py-2 px-4 font-medium relative ${activeTab === "crypto" ? "text-white" : "text-gray-400"}`} onClick={() => setActiveTab("crypto")}>
                    Crypto
                    {activeTab === "crypto" && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500" layoutId="tabIndicator" />}
                  </button>
                </div>
              </div>
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <Input
                  placeholder="Search cryptocurrencies"
                  className="pl-10 bg-gray-800 border-gray-700 focus:border-purple-500 focus:ring-purple-500/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {/* Coin List */}
              <div className="space-y-4">
                {/* BITBOP */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="flex items-center justify-between p-4 hover:bg-gray-800/50 bg-gray-800/20 rounded-xl transition-colors border border-gray-700/30">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r mr-3 flex items-center justify-center text-lg font-bold text-white ${cryptoInfo.bitbop.color}`}>
                      B
                    </div>
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center">
                        <h3 className="font-medium">BITBOP</h3>
                        <span className="md:ml-2 text-xs text-gray-400">Bitbop</span>
                      </div>
                      <span className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-full hidden md:inline-block mt-1">Native</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatNumber(getWalletValue('bitbop'))}</p>
                    <p className="text-xs text-gray-400">$0.00</p>
                  </div>
                </motion.div>
                {/* USDT */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="flex items-center justify-between p-4 hover:bg-gray-800/50 bg-gray-800/20 rounded-xl transition-colors border border-gray-700/30">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r mr-3 flex items-center justify-center text-lg font-bold text-white ${cryptoInfo.usdt.color}`}>
                      U
                    </div>
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center">
                        <h3 className="font-medium">USDT</h3>
                        <span className="md:ml-2 text-xs text-gray-400">Tether</span>
                      </div>
                      <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-300 rounded-full hidden md:inline-block mt-1">Stablecoin</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatNumber(getWalletValue('usdt'))}</p>
                    <p className="text-xs text-gray-400">$0.00</p>
                  </div>
                </motion.div>
                {/* BTC */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="flex items-center justify-between p-4 hover:bg-gray-800/50 bg-gray-800/20 rounded-xl transition-colors border border-gray-700/30">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r mr-3 flex items-center justify-center text-lg font-bold text-white ${cryptoInfo.btc.color}`}>
                      B
                    </div>
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center">
                        <h3 className="font-medium">BTC</h3>
                        <span className="md:ml-2 text-xs text-gray-400">Bitcoin</span>
                      </div>
                      <span className="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-300 rounded-full hidden md:inline-block mt-1">Top Cap</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatNumber(getWalletValue('btc'))}</p>
                    <p className="text-xs text-gray-400">$0.00</p>
                  </div>
                </motion.div>
                {/* Dynamic list for other coins */}
                {getCoinsWithBalances()
                  .filter(coin => !['bitbop', 'usdt', 'btc'].includes(coin.key))
                  .map((coin, index) => (
                    <motion.div 
                      key={coin.key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                      className="flex items-center justify-between p-4 hover:bg-gray-800/50 bg-gray-800/20 rounded-xl transition-colors border border-gray-700/30"
                    >
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r mr-3 flex items-center justify-center text-lg font-bold text-white ${coin.color}`}>
                          {coin.symbol.charAt(0)}
                        </div>
                        <div>
                          <div className="flex flex-col md:flex-row md:items-center">
                            <h3 className="font-medium">{coin.symbol}</h3>
                            <span className="md:ml-2 text-xs text-gray-400">{coin.name}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatNumber(coin.amount)}</p>
                      </div>
                    </motion.div>
                  ))}
                {getCoinsWithBalances().length === 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center py-12 px-4 bg-gray-800/20 rounded-xl border border-gray-700/30">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-700/50 flex items-center justify-center">
                      <RefreshCw className="h-8 w-8 text-gray-400" />
                    </div>
                    <p className="text-gray-300 font-medium">No cryptocurrencies found in your wallet</p>
                    <p className="text-sm text-gray-400 mt-2 mb-6">Your wallet is empty or no results match your search</p>
                    <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                      Add Crypto
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center py-12 px-4 bg-gray-800/20 rounded-xl border border-gray-700/30 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-700/50 flex items-center justify-center">
                <RefreshCw className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-gray-300 font-medium">No wallet data available</p>
              <p className="text-sm text-gray-400 mt-2 mb-6">Try refreshing the page or contact support</p>
              <Button onClick={() => window.location.reload()} className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                Refresh
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Portfolio Management
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Track, analyze, and optimize your crypto portfolio with advanced analytics and real-time insights.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Sign In to Access Your Portfolio</h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Create an account or sign in to access your portfolio dashboard and manage your crypto assets.
            </p>
            <Button onClick={openSignIn} className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-xl">
              Sign In to Continue
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      )}
      {showDepositModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl border border-gray-700/50"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <div className="flex items-center">
                {depositStep !== "select" && (
                  <button onClick={() => setDepositStep(depositStep === "qrcode" ? "amount" : "select")} className="mr-2 p-2 rounded-full hover:bg-gray-700/50">
                    <ChevronLeft className="h-5 w-5 text-gray-400" />
                  </button>
                )}
                <h3 className="font-medium text-lg text-white">
                  {depositStep === "select" ? "Select Deposit Currency" : 
                   depositStep === "amount" ? "Deposit Funds" : 
                   `Deposit ${cryptoInfo[depositCoin]?.symbol || depositCoin.toUpperCase()}`}
                </h3>
              </div>
              <button onClick={() => setShowDepositModal(false)} className="p-2 rounded-full hover:bg-gray-700/50">
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>
            <div className="p-4">
              {depositStep === "select" && (
                <div className="space-y-4">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      placeholder="Search currency"
                      className="pl-9 bg-gray-700/30 border-gray-600 focus:border-purple-500 focus:ring-purple-500/20 text-white"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                    {Object.entries(cryptoInfo)
                      .filter(([key, coin]) => 
                        coin.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map(([key, coin]) => (
                        <div
                          key={key}
                          className="flex items-center p-3 hover:bg-gray-700/30 rounded-xl cursor-pointer transition-colors"
                          onClick={() => {
                            setDepositCoin(key);
                            setDepositStep("amount");
                          }}
                        >
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r mr-3 flex items-center justify-center text-lg font-bold text-white ${coin.color}`}>
                            {coin.symbol.charAt(0)}
                          </div>
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-medium text-white">{coin.symbol}</h3>
                              <span className="ml-2 text-xs text-gray-400">{coin.name}</span>
                            </div>
                            {key === "usdt" && (
                              <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-300 rounded-full mt-1 inline-block">Recommended</span>
                            )}
                          </div>
                          <ArrowRight className="ml-auto h-5 w-5 text-gray-500" />
                        </div>
                      ))}
                  </div>
                </div>
              )}
              {depositStep === "amount" && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Amount</label>
                    <Input
                      placeholder="Enter Amount to Deposit"
                      className="bg-gray-700/30 border-gray-600 focus:border-purple-500 focus:ring-purple-500/20 text-white text-lg py-6"
                      type="number"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 text-red-300 text-sm">
                    <p>* Only deposit using {cryptoInfo[depositCoin]?.symbol || depositCoin.toUpperCase()} (TRC20) protocol to ensure your transaction is successfully processed.</p>
                    <p>* Do not close the app while the transaction is in progress, as it may disrupt the deposit process.</p>
                    <p>* If your payment goes into a processing state, it may take up to 24 hours to settle.</p>
                  </div>
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-6 rounded-xl flex items-center justify-center"
                      onClick={() => {
                        setIsGeneratingAddress(true);
                        setTimeout(() => {
                          setDepositAddress("TVLvSyc2bUYHm16bkV3RGiqDspLdxevAp8");
                          setIsGeneratingAddress(false);
                          setDepositStep("qrcode");
                        }, 1500);
                      }}
                      disabled={!depositAmount || parseFloat(depositAmount) <= 0 || isGeneratingAddress}
                    >
                      {isGeneratingAddress ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                          Generating Address...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          Continue to Deposit
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </div>
                      )}
                    </Button>
                  </div>
                </div>
              )}
              {depositStep === "qrcode" && (
                <div className="space-y-6 text-center">
                  <div>
                    <h4 className="text-lg font-medium text-gray-300 mb-1">Deposit Amount</h4>
                    <p className="text-3xl font-bold text-blue-400 mb-1">
                      {depositAmount} {cryptoInfo[depositCoin]?.symbol || depositCoin.toUpperCase()}
                    </p>
                    <p className="text-sm text-gray-400">≈ {depositAmount} USD</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl mx-auto w-64 h-64 flex items-center justify-center">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${depositAddress}`}
                      alt="Deposit QR Code"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-300">Please send {cryptoInfo[depositCoin]?.symbol || depositCoin.toUpperCase()} to address:</p>
                    <div className="flex items-center bg-gray-700/30 p-3 rounded-lg">
                      <p className="text-sm text-gray-200 flex-1 text-left break-all">{depositAddress}</p>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(depositAddress);
                          toast({
                            title: "Address Copied",
                            description: "Deposit address copied to clipboard",
                            variant: "success",
                            duration: 2000,
                          });
                        }}
                        className="ml-2 p-1.5 rounded-md hover:bg-gray-600"
                      >
                        <Copy className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-400">Network: Tron Blockchain (TRC20)</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-yellow-400">
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-yellow-400"></div>
                    <p>Detecting Transaction</p>
                  </div>
                  <p className="text-sm text-yellow-400">Waiting for payment - 14:56</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}