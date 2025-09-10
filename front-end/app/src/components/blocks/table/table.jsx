"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
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
    case "Cartão de Crédito": return <FaCreditCard className="w-5 h-5 text-blue-500" />
    case "Pix": return <SiPix className="w-5 h-5 text-green-500" />
    case "Transferência Bancária": return <FaExchangeAlt className="w-5 h-5 text-purple-500" />
    default: return <FaMoneyBillWave className="w-5 h-5 text-gray-500" />
  }
}

function getBadgeColor(type) {
  switch (type) {
    case "Cartão de Crédito": return "bg-blue-100 text-blue-700"
    case "Pix": return "bg-green-100 text-green-700"
    case "Transferência Bancária": return "bg-purple-100 text-purple-700"
    default: return "bg-gray-100 text-gray-700"
  }
}

export function ListDemo() {
  return (
    <div className="flex flex-col items-center space-y-4 mt-8 w-full">
      <ScrollArea className="w-full max-w-5xl">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Remetente</TableHead>
              <TableHead>Data</TableHead>
              <TableHead className="text-center">Tipo</TableHead>
              <TableHead className="text-right">Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx, index) => (
              <TableRow key={index} className="hover:bg-purple-50 transition-colors">
                <TableCell className="flex items-center gap-2">
                  {getIcon(tx.type)}
                  {tx.sender}
                </TableCell>
                <TableCell>{tx.date}</TableCell>
                <TableCell className="text-center">
                  <Badge className={`py-1 ${getBadgeColor(tx.type)}`}>{tx.type}</Badge>
                </TableCell>
                <TableCell className={`text-right font-bold ${tx.type === "Pix" ? "text-green-600" : "text-gray-800"}`}>
                  {tx.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  )
}
