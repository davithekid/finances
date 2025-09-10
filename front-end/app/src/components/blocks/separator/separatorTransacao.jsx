import { Separator } from "@/components/ui/separator"
import { TableDemo } from "../table/table"
import { AlertDialogTransacao } from "@/components/dialogs/transacao"
import { AlertDialogSimulacao } from "@/components/dialogs/simulacao"
import { CardDemo } from "../card/card"
import { AccordionTransacao } from "../accordion/AccordionTransacao"
import { CardTransacao } from "../card/transacao"

export function SeparatorTransacao() {
    return (
        <div>
            <div className="space-y-1">
                <h4 className="text-sm lg:text-xl leading-none font-bold">Transações</h4>


                <p className="text-muted-foreground text-sm py-3">
                    Faça sua transação, simule e confira!
                </p>
                <div className="grid grid-cols-3 py-4">
                    <CardTransacao />
                </div>              

            </div>      
            <Separator className="my-4" />
            <section className="mx-auto container py-8 ">
                <AccordionTransacao />
            </section>
        </div>
    )           
}
