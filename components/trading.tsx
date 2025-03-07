"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpDown, BarChart3, Clock, ChevronUp, ChevronDown, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const cryptoData = [
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    price: 65432.1,
    change: 2.34,
    volume: "32.5B",
    marketCap: "1.2T",
    chart: "/placeholder.svg?height=50&width=120",
  },
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    price: 3521.45,
    change: -1.23,
    volume: "15.7B",
    marketCap: "420.5B",
    chart: "/placeholder.svg?height=50&width=120",
  },
  {
    id: "sol",
    name: "Solana",
    symbol: "SOL",
    price: 143.78,
    change: 5.67,
    volume: "4.2B",
    marketCap: "58.3B",
    chart: "/placeholder.svg?height=50&width=120",
  },
  {
    id: "bnb",
    name: "Binance Coin",
    symbol: "BNB",
    price: 567.89,
    change: 0.45,
    volume: "2.1B",
    marketCap: "87.6B",
    chart: "/placeholder.svg?height=50&width=120",
  },
  {
    id: "ada",
    name: "Cardano",
    symbol: "ADA",
    price: 0.56,
    change: -2.78,
    volume: "1.5B",
    marketCap: "19.8B",
    chart: "/placeholder.svg?height=50&width=120",
  },
]

export default function Trading() {
  const [selectedCrypto, setSelectedCrypto] = useState("btc")
  const [amount, setAmount] = useState("")

  return (
    <section id="trading" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Trading Platform
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Trade cryptocurrencies with powerful tools, real-time data, and competitive fees on our secure trading
            platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-1">
              <div className="bg-black/60 rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Market Overview</h3>
                      <p className="text-white/50 text-sm">
                        Updated <Clock className="inline h-3 w-3" /> 2 minutes ago
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 text-white/70 font-medium">Asset</th>
                        <th className="text-right py-3 text-white/70 font-medium">Price</th>
                        <th className="text-right py-3 text-white/70 font-medium">24h Change</th>
                        <th className="text-right py-3 text-white/70 font-medium">Volume</th>
                        <th className="text-right py-3 text-white/70 font-medium">Market Cap</th>
                        <th className="text-right py-3 text-white/70 font-medium">Last 7 Days</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cryptoData.map((crypto) => (
                        <tr
                          key={crypto.id}
                          className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                          onClick={() => setSelectedCrypto(crypto.id)}
                        >
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <div className="bg-gradient-to-br from-white/10 to-white/5 p-1 rounded-full">
                                <div className="bg-black rounded-full h-8 w-8 flex items-center justify-center">
                                  {crypto.symbol.charAt(0)}
                                </div>
                              </div>
                              <div>
                                <div className="font-medium">{crypto.name}</div>
                                <div className="text-white/50 text-sm">{crypto.symbol}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 text-right font-medium">${crypto.price.toLocaleString()}</td>
                          <td className={`py-4 text-right ${crypto.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                            <div className="flex items-center justify-end gap-1">
                              {crypto.change >= 0 ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                              {Math.abs(crypto.change)}%
                            </div>
                          </td>
                          <td className="py-4 text-right text-white/70">{crypto.volume}</td>
                          <td className="py-4 text-right text-white/70">{crypto.marketCap}</td>
                          <td className="py-4 text-right">
                            <img
                              src={crypto.chart || "/placeholder.svg"}
                              alt={`${crypto.name} chart`}
                              className="inline-block"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-1 h-full">
              <div className="bg-black/60 rounded-lg p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <ArrowUpDown className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold">Quick Trade</h3>
                </div>

                <Tabs defaultValue="buy" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger
                      value="buy"
                      className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-500"
                    >
                      Buy
                    </TabsTrigger>
                    <TabsTrigger
                      value="sell"
                      className="data-[state=active]:bg-red-500/20 data-[state=active]:text-red-500"
                    >
                      Sell
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="buy" className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm text-white/70">Select Asset</label>
                      <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {cryptoData.map((crypto) => (
                            <SelectItem key={crypto.id} value={crypto.id}>
                              {crypto.name} ({crypto.symbol})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-white/70">Amount (USD)</label>
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>

                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-white/70">Price</span>
                        <span>${cryptoData.find((c) => c.id === selectedCrypto)?.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white/70">Fee (0.1%)</span>
                        <span>${amount ? (Number.parseFloat(amount) * 0.001).toFixed(2) : "0.00"}</span>
                      </div>
                      <div className="flex justify-between font-medium pt-2 border-t border-white/10">
                        <span>You will receive</span>
                        <span>
                          {amount
                            ? (
                                Number.parseFloat(amount) /
                                (cryptoData.find((c) => c.id === selectedCrypto)?.price || 1)
                              ).toFixed(6)
                            : "0.00"}{" "}
                          {cryptoData.find((c) => c.id === selectedCrypto)?.symbol}
                        </span>
                      </div>
                    </div>

                    <Button className="w-full bg-green-500 hover:bg-green-600">Buy Now</Button>
                  </TabsContent>

                  <TabsContent value="sell" className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm text-white/70">Select Asset</label>
                      <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {cryptoData.map((crypto) => (
                            <SelectItem key={crypto.id} value={crypto.id}>
                              {crypto.name} ({crypto.symbol})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-white/70">
                        Amount ({cryptoData.find((c) => c.id === selectedCrypto)?.symbol})
                      </label>
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>

                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-white/70">Price</span>
                        <span>${cryptoData.find((c) => c.id === selectedCrypto)?.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white/70">Fee (0.1%)</span>
                        <span>
                          $
                          {amount
                            ? (
                                Number.parseFloat(amount) *
                                (cryptoData.find((c) => c.id === selectedCrypto)?.price || 0) *
                                0.001
                              ).toFixed(2)
                            : "0.00"}
                        </span>
                      </div>
                      <div className="flex justify-between font-medium pt-2 border-t border-white/10">
                        <span>You will receive</span>
                        <span>
                          $
                          {amount
                            ? (
                                Number.parseFloat(amount) *
                                (cryptoData.find((c) => c.id === selectedCrypto)?.price || 0) *
                                0.999
                              ).toFixed(2)
                            : "0.00"}
                        </span>
                      </div>
                    </div>

                    <Button className="w-full bg-red-500 hover:bg-red-600">Sell Now</Button>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

