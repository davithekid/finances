"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AlertDialogMetas() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">+ Nova Meta</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Adicionar Nova Meta</AlertDialogTitle>
          <AlertDialogDescription>
            Preencha os campos abaixo para cadastrar sua nova meta.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="grid gap-4 py-2">
          <div className="grid gap-1">
            <Label htmlFor="titulo">Título da Meta*</Label>
            <Input id="titulo" placeholder="Ex: Comprar notebook" />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="tipo">Tipo*</Label>
            <Input id="tipo" placeholder="Ex: Comprar notebook" />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="valor">Valor da Meta*</Label>
            <Input id="valor" type="number" placeholder="Ex: 5000" />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="data">Data Limite</Label>
            <Input id="data" type="date" />
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction>Cadastrar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
