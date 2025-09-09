"use client"

import { AlertDialogAdicionar } from "@/components/dialogs/dinheiroMetas"
import { ProgressDemo } from "@/components/progress/ProgressMetas"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaWallet, FaArrowUp, FaArrowDown, FaEdit, FaRegCalendarAlt } from "react-icons/fa"

const cards = [
  {
    id: 1,
    tipo: FaWallet,
    title: "Saldo Atual",
    editar: FaEdit,
    price: "R$ 2.500,00",
    date: "31 de mai, 2025",
    footer: "Total disponível para uso",
  },
  {
    id: 2,
    tipo: FaArrowUp,
    title: "Receitas do mês",
    editar: FaEdit,
    price: "R$ 4.000,00",
    date: "31 de mai, 2025",
    footer: "Entradas acumuladas no mês",
  },
  {
    id: 3,
    tipo: FaArrowDown,
    title: "Despesas do mês",
    editar: FaEdit,
    price: "R$ 1.500,00",
    date: "31 de mai, 2025",
    footer: "Gastos registrados até agora",
  },
]

export function CardMetas() {
  return (
    <>
      {cards.map((card) => (
        <Card key={card.id} className="w-full max-w-sm bg-purple-100 shadow-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <card.tipo className="text-xl text-purple-700" />
                <CardTitle className="lg:text-xl">{card.title}</CardTitle>
              </div>

              <button className="text-gray-600 hover:text-gray-900">
                <card.editar />
              </button>
            </div>

            <div className="mt-2 px-7">
              <span className="inline-block bg-pink-400 text-white font-bold rounded-xl px-3 py-1 text-xs">
                tagasd
              </span>
            </div>
          </CardHeader>

          <CardContent className="flex justify-center">
            <ProgressDemo />
          </CardContent>

          {/* Rodapé */}
          <CardFooter className="flex-col gap-2 items-start">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <FaRegCalendarAlt className="w-4 h-4" />
              {card.date}
            </p>
            <p className="text-muted-foreground text-sm">{card.footer}</p>

            <AlertDialogAdicionar />
          </CardFooter>
        </Card>
      ))}
    </>
  )
}
