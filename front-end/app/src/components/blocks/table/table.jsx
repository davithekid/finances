"use client"

import {
  Table,
  TableBody,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table"

const transactions = [
  { type: "Cartão de Crédito", sender: "João Silva", totalAmount: "R$250,00" },
  { type: "Pix", sender: "Maria Oliveira", totalAmount: "R$150,00" },
  { type: "Transferência Bancária", sender: "Carlos Santos", totalAmount: "R$350,00" },
  { type: "Cartão de Crédito", sender: "Ana Paula", totalAmount: "R$450,00" },
  { type: "Pix", sender: "Lucas Lima", totalAmount: "R$550,00" },
  { type: "Transferência Bancária", sender: "Fernanda Souza", totalAmount: "R$200,00" },
  { type: "Cartão de Crédito", sender: "Rafael Costa", totalAmount: "R$300,00" },
]

export function TableDemo() {
  return (
    <div className="overflow-x-auto rounded-md border shadow-sm mx-6">
      <Table className="min-w-[500px]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Tipo</TableHead>
            <TableHead className="w-[180px]">Remetente</TableHead>
            <TableHead className="text-right w-[120px]">Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx, index) => (
            <TableRow key={index}>
              <TableCell>{tx.type}</TableCell>
              <TableCell>{tx.sender}</TableCell>
              <TableCell className="text-right">{tx.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>    
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} className="font-semibold">
              Total
            </TableCell>
            <TableCell className="text-right font-semibold">R$2.500,00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
