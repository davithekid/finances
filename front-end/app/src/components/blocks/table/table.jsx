"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CalendarDays, DollarSign } from "lucide-react"
import { Input } from "@/components/ui/input"

const initialTransactions = [
  { title: "Aluguel", description: "Apartamento centro", amount: 1200, date: "2025-09-01" },
  { title: "Supermercado", description: "Compras semanais", amount: 450, date: "2025-09-02" },
  { title: "Internet", description: "Plano de 500MB", amount: 100, date: "2025-09-03" },
  { title: "Academia", description: "Mensalidade do mês", amount: 200, date: "2025-09-04" },
  { title: "Transporte", description: "Cartão de metrô", amount: 150, date: "2025-09-05" },
]

export function TableGastos() {
  const [transactions] = useState(initialTransactions)

  const formatCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value)

  return (
    <div className="flex justify-center p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-4xl shadow-xl border-gray-100 rounded-xl transition-all duration-300 hover:shadow-2xl">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 p-6 border-b border-gray-100">
          <div className="flex flex-col space-y-1.5">
            <CardTitle className="text-2xl font-extrabold text-gray-800 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-purple-600" />
              Gastos Recentes
            </CardTitle>

          </div>
        </CardHeader>

        <CardContent className="p-0">
          <Table className="w-full text-sm">
            <TableHeader className="sticky top-0 bg-gray-50 border-b border-gray-100 z-10 shadow-sm">
              <TableRow>
                <TableHead className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Título</TableHead>
                <TableHead className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell">Descrição</TableHead>
                <TableHead className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden sm:table-cell">Data</TableHead>
                <TableHead className="py-3 px-6 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.length > 0 ? (
                transactions.map((tx, index) => (
                  <TableRow key={index} className="border-b border-gray-100 last:border-0 hover:bg-purple-50 transition-colors duration-150 ease-in-out group">
                    <TableCell className="py-4 px-6 font-medium text-gray-800 group-hover:text-purple-700 transition-colors duration-150">
                      {tx.title}
                    </TableCell>
                    <TableCell className="py-4 px-6 text-gray-500 hidden md:table-cell text-xs sm:text-sm">
                      {tx.description || <span className="text-gray-400 italic">Sem descrição</span>}
                    </TableCell>
                    <TableCell className="py-4 px-6 text-gray-500 hidden sm:table-cell text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-3 h-3 text-gray-400" />
                        {tx.date}
                      </div>
                    </TableCell>
                    <TableCell className="py-4 px-6 text-right font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-150">
                      {formatCurrency(tx.amount)}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-gray-500 py-12 text-base">
                    Nenhum gasto registrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
