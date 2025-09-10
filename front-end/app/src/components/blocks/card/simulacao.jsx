"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { FaPlus } from "react-icons/fa"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"

export function CardSimulacao() {
  const [gastos, setGastos] = useState([{ id: 1, nome: "", valor: "" }])

  const handleChange = (id, field, value) => {
    setGastos(prev =>
      prev.map(g => (g.id === id ? { ...g, [field]: value } : g))
    )
  }

  const handleAddGasto = () => {
    setGastos(prev => [...prev, { id: Date.now(), nome: "", valor: "" }])
  }

  const handleRemoveGasto = (id) => {
    setGastos(prev => prev.filter(g => g.id !== id))
  }

  const total = gastos.reduce((acc, g) => acc + Number(g.valor || 0), 0)

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Card className="w-full max-w-sm bg-pink-200 dark:bg-[#1c1917] hover:cursor-pointer hover:shadow-lg hover:scale-101 duration-200 ">
          <CardHeader className="flex items-center justify-between p-4">
            <div>
              <CardTitle className="lg:text-xl dark:text-white">Simulação</CardTitle>
            </div>
            <FaPlus className="text-2xl text-purple-700" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 dark:text-white">Clique para adicionar gastos e calcular o total.</p>
          </CardContent>
        </Card>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>Simulação de Gastos</AlertDialogTitle>
          <AlertDialogDescription>
            Adicione seus gastos e veja o total acumulado em tempo real.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <ScrollArea className="h-80 py-2">
          <div className="space-y-4">
            {gastos.map((gasto) => (
              <div
                key={gasto.id}
                className="flex gap-2 items-end bg-muted p-3 rounded-md border"
              >
                <div className="flex-1">
                  <Label htmlFor={`nome-${gasto.id}`}>Nome do gasto</Label>
                  <Input
                    id={`nome-${gasto.id}`}
                    value={gasto.nome}
                    onChange={(e) => handleChange(gasto.id, "nome", e.target.value)}
                    placeholder="Ex: Aluguel"
                  />
                </div>

                <div className="w-32">
                  <Label htmlFor={`valor-${gasto.id}`}>Valor</Label>
                  <Input
                    id={`valor-${gasto.id}`}
                    type="number"
                    value={gasto.valor}
                    onChange={(e) => handleChange(gasto.id, "valor", e.target.value)}
                    placeholder="0"
                  />
                </div>

                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => handleRemoveGasto(gasto.id)}
                  className="mt-5"
                >
                  ×
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex justify-between items-center mt-4">
          <Button variant="outline" onClick={handleAddGasto}>
            + Adicionar gasto
          </Button>
          <span className="font-bold text-lg">Total: R$ {total.toFixed(2)}</span>
        </div>

        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel>Fechar</AlertDialogCancel>
          <AlertDialogAction>Confirmar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
