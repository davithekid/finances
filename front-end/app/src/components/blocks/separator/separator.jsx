import { Separator } from "@/components/ui/separator"
import { CardDemo } from "../card/card"
import { ChartPieLabel } from "@/components/graficos/PieLabel"
import { ChartBarLabel } from "@/components/graficos/BarLabel"
import { ChartLineLinear } from "@/components/graficos/LineChart"


export function SeparatorDemo() {
    return (
        <div>
            <section>
                <div className="space-y-1">
                    <h4 className="text-sm lg:text-xl leading-none font-bold">Dashboard</h4>
                    <p className="text-muted-foreground text-sm">
                        Acompanhe seus componentes principais.
                    </p>
                    <div className="grid grid-cols-3 py-4">
                        <CardDemo />
                    </div>
                </div>
            </section>

            <section className="mx-auto container py-8 ">
                <div className="space-y-1 ">
                    <h4 className="text-sm lg:text-xl leading-none  flex justify-center font-bold">Acompanhe seu rendimento</h4>
                    <p className="text-muted-foreground text-sm flex justify-center">
                        Gráfico correpondente a sua entrada, saida e metas.
                    </p>
                </div>
                <div className="flex justify-center gap-12 py-8">
                    <ChartBarLabel />
                    <ChartPieLabel />
                    <ChartLineLinear />
                </div>
            </section>
            <Separator className="my-4" />
        </div>

    )
}
