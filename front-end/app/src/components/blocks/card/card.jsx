"use client"

import { Card, CardHeader, CardTitle, CardAction, CardContent, CardFooter } from "@/components/ui/card"
import { FaWallet, FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa"

const cards = [
  {
    id: 1,
    title: "Saldo Atual",
    icon: FaWallet,
    price: "R$ 4.500,00",
    footer: "Saldo disponível",
  },
  {
    id: 2,
    title: "Receitas do mês",
    icon: FaArrowCircleUp,
    price: "R$ 6.200,00",
    footer: "Total de entradas",
  },
  {
    id: 3,
    title: "Despesas do mês",
    icon: FaArrowCircleDown,
    price: "R$ 1.700,00",
    footer: "Total de gastos",
  },
]

export function CardDemo() {
  return (
    <>
      {cards.map((card) => (
        <Card
          key={card.id}
          className="w-full max-w-sm bg-pink-200 dark:bg-[#1c1917] shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <CardHeader className="flex justify-between items-center p-4">
            <CardTitle className="text-lg font-semibold dark:text-white">{card.title}</CardTitle>
            <CardAction className="text-2xl text-pink-700">
              <card.icon />
            </CardAction>
          </CardHeader>

          <CardContent className="px-4 py-2">
            <p className="text-2xl font-bold text-gray-800 dark:text-white">{card.price}</p>
          </CardContent>

          <CardFooter className="px-4 py-2">
            <p className="text-sm font-mono text-gray-600 dark:text-white">{card.footer}</p>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}
