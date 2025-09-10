"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FaCreditCard, FaMoneyBillWave, FaExchangeAlt } from "react-icons/fa"
import { SiPix } from "react-icons/si"

const transactions = [
  { type: "Cartão de Crédito", sender: "João Silva", totalAmount: "R$250,00", date: "01/09/2025" },
  { type: "Pix", sender: "Maria Oliveira", totalAmount: "R$150,00", date: "02/09/2025" },
  { type: "Transferência Bancária", sender: "Carlos Santos", totalAmount: "R$350,00", date: "03/09/2025" },
  { type: "Cartão de Crédito", sender: "Ana Paula", totalAmount: "R$450,00", date: "04/09/2025" },
  { type: "Pix", sender: "Lucas Lima", totalAmount: "R$550,00", date: "05/09/2025" }
]

function getIcon(type) {
  switch (type) {
    case "Cartão de Crédito":
      return <FaCreditCard className="w-6 h-6 text-blue-500" />
    case "Pix":
      return <SiPix className="w-6 h-6 text-green-500" />
    case "Transferência Bancária":
      return <FaExchangeAlt className="w-6 h-6 text-purple-500" />
    default:
      return <FaMoneyBillWave className="w-6 h-6 text-gray-500" />
  }
}

function getBadgeColor(type) {
  switch (type) {
    case "Cartão de Crédito":
      return "bg-blue-100 text-blue-700"
    case "Pix":
      return "bg-green-100 text-green-700"
    case "Transferência Bancária":
      return "bg-purple-100 text-purple-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

export function ListDemo() {
  return (
    <div className="flex flex-col items-center space-y-4 mt-8 w-full">
      <div className="flex w-full max-w-5xl bg-purple-50 rounded-lg p-4 font-semibold text-purple-800 shadow-inner">
        <span className="w-2/5">Remetente</span>
        <span className="w-1/5">Data</span>
        <span className="w-1/5">Tipo</span>
        <span className="w-1/5 text-right">Valor</span>
      </div>

      {transactions.map((tx, index) => (
        <Card
          key={index}
          className="w-full max-w-5xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <CardContent className="flex items-center justify-between p-5 gap-4">
            <div className="flex items-center gap-4 w-2/5">
              {getIcon(tx.type)}
              <span className="font-semibold text-lg">{tx.sender}</span>
            </div>
            <span className="w-1/5 text-sm text-muted-foreground">{tx.date}</span>
            <Badge className={`w-1/5 text-center py-1 ${getBadgeColor(tx.type)}`}>
              {tx.type}
            </Badge>
            <span
              className={`w-1/5 text-right font-bold text-lg ${
                tx.type === "Pix" ? "text-green-600" : "text-gray-800"
              }`}
            >
              {tx.totalAmount}
            </span>
          </CardContent>
        </Card>
      ))}
     
    </div>
  )
}
