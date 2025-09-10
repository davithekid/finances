import { Separator } from "@/components/ui/separator"
import { CardTransacao } from "../card/transacao"
import { TableDemo } from "../table/table"
import { AlertDialogTransacao } from "@/components/dialogs/transacao"
import { AlertDialogSimulacao } from "@/components/dialogs/simulacao"
import { CalendarDemo } from "@/components/calendarios/calendarioTransacao"

export function SeparatorTransacao() {
    return (
        <div>
            <div className="space-y-1">
                <h4 className="text-sm lg:text-xl leading-none font-bold">Transações</h4>
                <div className="flex">

                    <p className="text-muted-foreground text-sm py-3">
                        Faça sua transação, simule e confira!
                    </p>
                    <div className="ml-auto">
                        <AlertDialogTransacao />
                        <AlertDialogSimulacao />
                    </div>
                </div>


            </div>
            <div className="mx-auto container py-8">
                <TableDemo />
            </div>
            <Separator className="my-4" />
        </div>
    )
}
