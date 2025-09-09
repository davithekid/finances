"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const valorAtual = 1500
  const meta = 8000
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const porcentagem = Math.min((valorAtual / meta) * 100, 100) 
    const timer = setTimeout(() => setProgress(porcentagem), 500)
    return () => clearTimeout(timer)
  }, [valorAtual, meta])

  return (
    <div className="w-[90%] space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium">Progresso</h2>
        <span className="text-xs text-muted-foreground">{progress.toFixed(0)}%</span>
      </div>

      <Progress value={progress} className="h-3 rounded-full" />

      <div className="flex justify-between text-xs text-muted-foreground">
        <span>R$ {valorAtual.toLocaleString("pt-BR")}</span>
        <span>R$ {meta.toLocaleString("pt-BR")}</span>
      </div>
    </div>
  )
}
