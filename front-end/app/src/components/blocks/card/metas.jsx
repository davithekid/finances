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
import { FaWallet, FaEdit, FaRegCalendarAlt } from "react-icons/fa";

const cards = [
  {
    id: 1,
    tipo: FaWallet,
    title: "Viajar ao Japão",
    editar: FaEdit,
    price: 12000,
    date: "31/12/2025",
    footer: "Economizar para a viagem dos sonhos",
  },
  {
    id: 2,
    tipo: FaWallet,
    title: "Comprar Notebook",
    editar: FaEdit,
    price: 8000,
    date: "15/10/2025",
    footer: "Investimento em equipamento de trabalho",
  },
  {
    id: 3,
    tipo: FaWallet,
    title: "Curso de Inglês",
    editar: FaEdit,
    price: 2500,
    date: "01/09/2025",
    footer: "Aprimorar habilidades para carreira",
  },
];

export function CardMetas() {
  return (
    <>
      {cards.map((card) => (
        <Card key={card.id} className="w-full max-w-sm bg-pink-200 dark:bg-[#1c1917] shadow-md">
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
