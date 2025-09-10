"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { FaPlus } from "react-icons/fa"

const cards = [
  { id: 1, title: "Transação", description: "Adicione uma nova transação." },
  { id: 2, title: "Simulação", description: "Simule valores rapidamente." },
  { id: 3, title: "Outro exemplo", description: "Exemplo de card com modal." },
]

export function CardTransacao() {
  return (
    <>
      {cards.map((card) => (
        <AlertDialog key={card.id}>
          <AlertDialogTrigger asChild>
            {/* Card clicável */}
            <Card className="w-full max-w-sm bg-purple-100 hover:cursor-pointer hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="flex items-center justify-between p-4">
                <div>
                  <CardTitle className="lg:text-xl">{card.title}</CardTitle>
                  <p className="text-xs text-muted-foreground">{card.description}</p>
                </div>
                <FaPlus className="text-2xl text-purple-700" />
              </CardHeader>
            </Card>
          </AlertDialogTrigger>

          <AlertDialogContent className="max-w-md">
            <AlertDialogHeader>
              <AlertDialogTitle>{card.title}</AlertDialogTitle>
              <AlertDialogDescription>{card.description}</AlertDialogDescription>
            </AlertDialogHeader>

            <div className="grid gap-4 py-2">
              <div className="grid gap-1">
                <label htmlFor={`valor-${card.id}`}>Valor</label>
                <input
                  id={`valor-${card.id}`}
                  type="number"
                  placeholder="Ex: 500"
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor={`descricao-${card.id}`}>Descrição</label>
                <input
                  id={`descricao-${card.id}`}
                  type="text"
                  placeholder="Ex: Salário, presente, etc."
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
            </div>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction>Adicionar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ))}
    </>
  )
}
