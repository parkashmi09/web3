"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
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
  RefreshCw
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useUser } from "@/context/user-context"
import { useAuth } from "@/components/AuthProvider"

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
  not?: string; // Making 'not' optional since it might not be in the API response
  created_at: string;
  updated_at: string;
  [key: string]: string | number | undefined; // Index signature for dynamic access
}

// Crypto asset info
const cryptoInfo: Record<string, {
  name: string;
  symbol: string;
  color: string;
}> = {
  btc: {
    name: "Bitcoin",
    symbol: "BTC",
    color: "from-orange-500 to-yellow-500"
  },
  eth: {
    name: "Ethereum",
    symbol: "ETH",
    color: "from-blue-500 to-purple-500"
  },
  ltc: {
    name: "Litecoin",
    symbol: "LTC",
    color: "from-gray-400 to-gray-500"
  },
  bch: {
    name: "Bitcoin Cash",
    symbol: "BCH",
    color: "from-green-500 to-green-600"
  },
  usdt: {
    name: "Tether",
    symbol: "USDT",
    color: "from-green-400 to-teal-500"
  },
  trx: {
    name: "Tron",
    symbol: "TRX",
    color: "from-red-500 to-red-600"
  },
  doge: {
    name: "Dogecoin",
    symbol: "DOGE",
    color: "from-yellow-400 to-yellow-500"
  },
  ada: {
    name: "Cardano",
    symbol: "ADA",
    color: "from-blue-400 to-blue-500"
  },
  xrp: {
    name: "Ripple",
    symbol: "XRP",
    color: "from-blue-300 to-blue-400"
  },
  bnb: {
    name: "Binance Coin",
    symbol: "BNB",
    color: "from-yellow-500 to-yellow-600"
  },
  shib: {
    name: "Shiba Inu",
    symbol: "SHIB",
    color: "from-orange-400 to-orange-500"
  },
  bitbop: {
    name: "Bitbop",
    symbol: "BITBOP",
    color: "from-purple-500 to-blue-500"
  },
  not: {
    name: "Notcoin",
    symbol: "NOT",
    color: "from-gray-500 to-gray-600"
  }
};

export default function PortfolioPage() {
  const { user } = useUser()
  const { openSignIn } = useAuth()
  const [walletData, setWalletData] = useState<WalletData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedCoin, setSelectedCoin] = useState<string>("bitbop")
  const [showCoinDropdown, setShowCoinDropdown] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState<"crypto" | "account">("crypto")
  
  // Reference for dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCoinDropdown(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Fetch wallet data when user is logged in
  useEffect(() => {
    const fetchWalletData = async () => {
      if (!user?.id) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Authentication token not found');
        }
        
        const response = await fetch(`https://api.bitbopbank.com/api/wallet/${user.id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch wallet data');
        }
        
        if (data.success && data.wallet) {
          setWalletData(data.wallet);
        }
      } catch (err) {
        console.error('Error fetching wallet data:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while fetching wallet data');
      } finally {
        setIsLoading(false);
      }
    };
    
    if (user?.id) {
      fetchWalletData();
    }
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
      .map(([key, value]) => {
        return {
          key,
          name: cryptoInfo[key]?.name || key.toUpperCase(),
          symbol: cryptoInfo[key]?.symbol || key.toUpperCase(),
          amount: typeof value === 'string' ? value : '0',
          color: cryptoInfo[key]?.color || "from-gray-500 to-gray-600"
        };
      });
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
              <Button 
                onClick={() => window.location.reload()} 
                className="mt-4 bg-white/10 hover:bg-white/20"
              >
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
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700/50">
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
                    <div>
                      <div className="flex items-center space-x-3">
                        <h1 className="text-4xl font-bold text-white">{formatNumber(getWalletValue(selectedCoin))}</h1>
                        <div className="relative" ref={dropdownRef}>
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
                            <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg z-10 border border-gray-700/50 overflow-hidden">
                              <div className="p-3 border-b border-gray-700">
                                <div className="relative">
                                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                                  <Input
                                    placeholder="Search currency"
                                    className="pl-9 bg-gray-700 border-gray-600 focus:ring-purple-500 text-sm"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="max-h-60 overflow-y-auto py-2">
                                {Object.entries(cryptoInfo)
                                  .filter(([key, coin]) => 
                                    coin.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                    coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
                                  )
                                  .map(([key, coin]) => (
                                    <div
                                      key={key}
                                      className={`flex items-center p-3 hover:bg-gray-700 cursor-pointer transition-colors ${
                                        key === selectedCoin ? "bg-gray-700" : ""
                                      }`}
                                      onClick={() => {
                                        setSelectedCoin(key);
                                        setShowCoinDropdown(false);
                                      }}
                                    >
                                      <div 
                                        className={`w-8 h-8 rounded-full bg-gradient-to-r mr-3 flex items-center justify-center text-xs text-white font-bold ${coin.color}`}
                                      >
                                        {coin.symbol.charAt(0)}
                                      </div>
                                      <div className="flex flex-col">
                                        <span className="font-medium">{coin.symbol}</span>
                                        <span className="text-xs text-gray-400">{coin.name}</span>
                                      </div>
                                      <div className="ml-auto text-right">
                                        <span className="text-sm">{formatNumber(getWalletValue(key))}</span>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mt-2">≈${formatNumber(getWalletValue(selectedCoin))}</p>
                    </div>
                  </div>
                </div>
                
                {/* Quick Action Buttons */}
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="flex flex-col items-center group">
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
                  <button
                    className={`py-2 px-4 font-medium ${
                      activeTab === "crypto"
                        ? "text-white border-b-2 border-yellow-500"
                        : "text-gray-400"
                    }`}
                    onClick={() => setActiveTab("crypto")}
                  >
                    Crypto
                  </button>
                </div>
              </div>
              
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <Input
                  placeholder="Search"
                  className="pl-10 bg-gray-800 border-gray-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Coin List */}
              <div className="space-y-4">
                {/* BITBOP */}
                <div className="flex items-center justify-between p-4 hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r mr-3 flex items-center justify-center text-lg font-bold text-white ${cryptoInfo.bitbop.color}`}>
                      B
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-medium">BITBOP</h3>
                        <span className="ml-2 text-sm text-gray-400">Bitbop</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatNumber(getWalletValue('bitbop'))}</p>
                    <p className="text-sm text-gray-400">$0.00</p>
                  </div>
                </div>
                
                {/* USDT */}
                <div className="flex items-center justify-between p-4 hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r mr-3 flex items-center justify-center text-lg font-bold text-white ${cryptoInfo.usdt.color}`}>
                      U
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-medium">USDT</h3>
                        <span className="ml-2 text-sm text-gray-400">Tether</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatNumber(getWalletValue('usdt'))}</p>
                    <p className="text-sm text-gray-400">$0.00</p>
                  </div>
                </div>
                
                {/* BTC */}
                <div className="flex items-center justify-between p-4 hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r mr-3 flex items-center justify-center text-lg font-bold text-white ${cryptoInfo.btc.color}`}>
                      B
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-medium">BTC</h3>
                        <span className="ml-2 text-sm text-gray-400">Bitcoin</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatNumber(getWalletValue('btc'))}</p>
                    <p className="text-sm text-gray-400">$0.00</p>
                  </div>
                </div>
                
                {/* Dynamic list for other coins */}
                {getCoinsWithBalances()
                  .filter(coin => !['bitbop', 'usdt', 'btc'].includes(coin.key))
                  .map((coin) => (
                    <div 
                      key={coin.key}
                      className="flex items-center justify-between p-4 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r mr-3 flex items-center justify-center text-lg font-bold text-white ${coin.color}`}>
                          {coin.symbol.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">{coin.symbol}</h3>
                            <span className="ml-2 text-sm text-gray-400">{coin.name}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatNumber(coin.amount)}</p>
                      </div>
                    </div>
                  ))
                }
                
                {getCoinsWithBalances().length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    <p>No cryptocurrencies found in your wallet</p>
                    <Button 
                      className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                    >
                      Add Crypto
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center py-12">
              <p className="text-gray-400">No wallet data available</p>
            </div>
          )}
        </div>
      ) : (
        /* Content for non-logged in users */
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Portfolio Management
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Track, analyze, and optimize your crypto portfolio with advanced analytics and real-time insights.
            </p>
          </motion.div>

          {/* Login prompt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center"
          >
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Sign In to Access Your Portfolio</h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Create an account or sign in to access your portfolio dashboard and manage your crypto assets.
            </p>
            <Button 
              onClick={openSignIn}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-xl"
            >
              Sign In to Continue
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      )}
    </section>
  )
}