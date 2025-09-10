"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaCreditCard, FaMoneyBillWave, FaExchangeAlt } from "react-icons/fa"
import { SiPix } from "react-icons/si"

const initialTransactions = [
  { type: "Cartão de Crédito", sender: "João Silva", totalAmount: 250, date: "2025-09-01" },
  { type: "Pix", sender: "Maria Oliveira", totalAmount: 150, date: "2025-09-02" },
  { type: "Transferência Bancária", sender: "Carlos Santos", totalAmount: 350, date: "2025-09-03" },
  { type: "Cartão de Crédito", sender: "Ana Paula", totalAmount: 450, date: "2025-09-04" },
  { type: "Pix", sender: "Lucas Lima", totalAmount: 550, date: "2025-09-05" }
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

export function HistoricoGastos() {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [search, setSearch] = useState("")
  const [filterType, setFilterType] = useState("Todos")

  // Filtro por tipo e pesquisa
  const filteredTransactions = transactions.filter(tx => {
    const matchesSearch = tx.sender.toLowerCase().includes(search.toLowerCase())
    const matchesType = filterType === "Todos" || tx.type === filterType
    return matchesSearch && matchesType
  })

  return (
    <Card className="w-full max-w-6xl mt-8">
      <CardHeader>
        <CardTitle>Histórico de Gastos</CardTitle>
        <div className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0">
          <Input
            placeholder="Pesquisar por remetente..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Select onValueChange={setFilterType} value={filterType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filtrar por tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Todos">Todos</SelectItem>
              <SelectItem value="Cartão de Crédito">Cartão de Crédito</SelectItem>
              <SelectItem value="Pix">Pix</SelectItem>
              <SelectItem value="Transferência Bancária">Transferência Bancária</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[400px]">
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
              {filteredTransactions.map((tx, index) => (
                <TableRow key={index} className="hover:bg-purple-50 transition-colors">
                  <TableCell className="flex items-center gap-2">{getIcon(tx.type)} {tx.sender}</TableCell>
                  <TableCell>{tx.date}</TableCell>
                  <TableCell className="text-center">
                    <Badge className={`py-1 ${getBadgeColor(tx.type)}`}>{tx.type}</Badge>
                  </TableCell>
                  <TableCell className={`text-right font-bold ${tx.type === "Pix" ? "text-green-600" : "text-gray-800"}`}>
                    R$ {tx.totalAmount.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
              {filteredTransactions.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground py-4">
                    Nenhum registro encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
