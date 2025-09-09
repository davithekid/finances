import { Separator } from "@/components/ui/separator"
import { AlertDialogSimulacao } from "@/components/dialogs/simulacao"
import { AlertDialogMetas } from "@/components/dialogs/metas"
import { CardDemo } from "../card/card"
import { CardMetas } from "../card/metas"

export function SeparadorMetas() {
    return (
        <div>
            <div className="space-y-1">
                <h4 className="text-sm lg:text-xl leading-none font-bold">Metas</h4>
                <div className="flex">

                    <p className="text-muted-foreground text-sm py-3">
                        Crie e acompanhe suas metas!!
                    </p>
                    <div className="ml-auto">
                        <AlertDialogMetas />
                    </div>
                </div>

            <div className="grid grid-cols-3 py-2">
                <CardMetas/>
            </div>
            </div>
           
            <Separator className="my-4" />
        </div>
    )
}
