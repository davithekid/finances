"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const initialTransactions = [
  { title: "Aluguel", description: "Apartamento centro", amount: 1200, date: "2025-09-01" },
  { title: "Supermercado", description: "Compras semanais", amount: 450, date: "2025-09-02" },
  { title: "Internet", description: "", amount: 100, date: "2025-09-03" },
  { title: "Academia", description: "Mensalidade", amount: 200, date: "2025-09-04" },
  { title: "Transporte", description: "", amount: 150, date: "2025-09-05" },
]

export function HistoricoGastos() {
  const [transactions] = useState(initialTransactions)
  const [search, setSearch] = useState("")

  const formatCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value)

  const filteredTransactions = transactions.filter(tx =>
    tx.title.toLowerCase().includes(search.toLowerCase()) ||
    (tx.description && tx.description.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="flex justify-center p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-4xl shadow-lg border-gray-100 rounded-xl">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 p-6 border-b border-gray-100">
          <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            Histórico de Gastos
          </CardTitle>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Pesquisar título ou descrição..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-all duration-200"
            />
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <ScrollArea className="h-[450px] overflow-y-auto">
            <Table className="w-full text-sm">
              <TableHeader className="sticky top-0 bg-gray-50 border-b border-gray-100 z-10">
                <TableRow>
                  <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</TableHead>
                  <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</TableHead>
                  <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</TableHead>
                  <TableHead className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((tx, index) => (
                    <TableRow key={index} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                      <TableCell className="py-4 px-6 font-medium text-gray-700">{tx.title}</TableCell>
                      <TableCell className="py-4 px-6 text-gray-500">{tx.description || "-"}</TableCell>
                      <TableCell className="py-4 px-6 text-gray-500">{tx.date}</TableCell>
                      <TableCell className="py-4 px-6 text-right font-semibold">{formatCurrency(tx.amount)}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-gray-500 py-8 text-base">
                      Nenhum registro encontrado.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
