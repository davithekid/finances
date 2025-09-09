import { Separator } from "@/components/ui/separator"
import { CardTransacao } from "../card/transacao"
import { TableDemo } from "../table/table"

export function SeparatorTransacao() {
    return (
        <div>
            <div className="space-y-1">
                <h4 className="text-sm leading-none font-medium">Transações</h4>
                <p className="text-muted-foreground text-sm">
                    Faça sua transação, simule e confira!
                </p>
            </div>
            <div className="mx-auto container py-8">
                <TableDemo />
            </div>
            <Separator className="my-4" />
        </div>
    )
}
