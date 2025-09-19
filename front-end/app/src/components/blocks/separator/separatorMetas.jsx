import { Separator } from "@/components/ui/separator"
import { AlertDialogSimulacao } from "@/components/blocks/card/simulacao"
import { AlertDialogMetas } from "@/components/dialogs/metas"
import { CardDemo } from "../card/card"
import { CardMetas } from "../card/metas"

export function SeparadorMetas() {
    return (
        <div className="">
            <div className="space-y-1 p-2">
                <div className="mx-5 lg:mx-31">

                <h4 className="text-sm lg:text-xl leading-none font-bold">Metas Financeiras</h4>
                <div className="flex">

                    <p className="text-muted-foreground text-sm py-3">
                        Realize seus sonhos com planejamento.
                    </p>
                </div>
                    <div className="ml-auto">
                        <AlertDialogMetas />
                    </div>
                </div>

            <div className="flex flex-wrap gap-8 justify-center py-2">
                <CardMetas/>
            </div>
            </div>
           
        </div>
    )
}
