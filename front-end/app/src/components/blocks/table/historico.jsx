"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Search, DollarSign, CalendarDays } from "lucide-react"

const initialTransactions = [
  { title: "Aluguel", description: "Apartamento centro", amount: 1200, date: "2025-09-01" },
  { title: "Supermercado", description: "Compras semanais", amount: 450, date: "2025-09-02" },
  { title: "Internet", description: "Plano de 500MB", amount: 100, date: "2025-09-03" },
  { title: "Academia", description: "Mensalidade", amount: 200, date: "2025-09-04" },
  { title: "Transporte", description: "Cartão de metrô", amount: 150, date: "2025-09-05" },
  { title: "Restaurante", description: "Jantar com amigos", amount: 90, date: "2025-09-06" },
  { title: "Streaming", description: "Assinatura mensal", amount: 35, date: "2025-09-07" },
  { title: "Farmácia", description: "Remédios e higiene", amount: 75, date: "2025-09-08" },
  { title: "Educação", description: "Curso online", amount: 300, date: "2025-09-09" },
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
      <Card className="w-full max-w-4xl shadow-xl border-gray-100 rounded-xl transition-all duration-300 hover:shadow-2xl">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 p-6 border-b border-gray-100">
          <div className="flex flex-col space-y-1.5">
            <CardTitle className="text-2xl font-extrabold  flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-purple-600" />
              Seu Histórico de Gastos
            </CardTitle>
        
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Pesquisar por item ou detalhes..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-all duration-200"
            />
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <ScrollArea className="h-[450px] overflow-y-auto">
            <Table className="w-full text-sm">
              <TableHeader className="sticky top-0 border-b border-gray-100 z-10 shadow-sm">
                <TableRow>
                  <TableHead className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider">Título</TableHead>
                  <TableHead className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider hidden md:table-cell">Descrição</TableHead>
                  <TableHead className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider hidden sm:table-cell">Data</TableHead>
                  <TableHead className="py-3 px-6 text-right text-xs font-semibold uppercase tracking-wider">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((tx, index) => (
                    <TableRow key={index} className="border-b border-gray-100 last:border-0 hover:bg-purple-50 dark:hover:bg-zinc-800 transition-colors duration-150 ease-in-out group">
                      <TableCell className="py-4 px-6 font-medium group-hover:text-purple-700 transition-colors duration-150">
                        {tx.title}
                      </TableCell>
                      <TableCell className="py-4 px-6 hidden md:table-cell text-xs sm:text-sm">
                        {tx.description || <span className="text-gray-400 italic">Sem descrição</span>}
                      </TableCell>
                      <TableCell className="py-4 px-6 hidden sm:table-cell text-xs sm:text-sm">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="w-3 h-3 text-gray-400" />
                          {tx.date}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-6 text-right font-bold group-hover:text-red-600 transition-colors duration-150">
                        {formatCurrency(tx.amount)}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-gray-500 py-12 text-base">
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-lg font-medium">Nenhum gasto encontrado!</span>
                        <span className="text-sm text-gray-400 max-w-xs">
                          Parece que não há despesas correspondendo à sua busca. Tente um termo diferente.
                        </span>
                      </div>
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