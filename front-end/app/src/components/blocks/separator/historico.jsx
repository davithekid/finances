import { Separator } from "@/components/ui/separator"
import { ListDemo, TableDemo } from "../table/table"
import { CardSimulacao } from "@/components/blocks/card/simulacao"
import { CardDemo } from "../card/card"
import { AccordionTransacao } from "../accordion/AccordionTransacao"
import { CardGastos } from "../card/transacao"
import { HistoricoGastos } from "../table/historico"

export function SeparatorHistorico() {
    return (
        <div>
            <div className="space-y-1">
                <div className="lg:mx-26">
                    <h4 className="text-sm lg:text-xl leading-none font-bold">Historico</h4>
                    <p className="text-muted-foreground text-sm py-3">
                        Acompanhe aqui seu historico completo de gastos!!
                    </p>
                </div>
                <div className="">
                    <HistoricoGastos />
                </div>

            </div>
            <Separator className="my-4" />

        </div>
    )
}
