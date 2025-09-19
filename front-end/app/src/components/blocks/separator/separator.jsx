import { Separator } from "@/components/ui/separator"
import { ChartPieLabel } from "@/components/graficos/PieLabel"
import { ChartBarLabel } from "@/components/graficos/BarLabel"
import { ChartLineLinear } from "@/components/graficos/LineChart"
import CardIndex from "../cards-index"

export function SeparatorDemo() {
    return (
        <div className=""> 
            <section className="px-4">
                <div className="space-y-1">
                    <div className="flex justify-center flex-wrap gap-4 md:gap-8 py-4">
                        <CardIndex />
                    </div>
                </div>
            </section>

            <section className="mx-auto container py-8">
                <div className="space-y-1 text-center">
                    <h4 className="text-lg md:text-2xl lg:text-3xl font-bold">
                        Acompanhe seu rendimento
                    </h4>
                    <p className="text-muted-foreground text-sm">
                        Gráfico correspondente à sua entrada, saída e metas.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                    <ChartBarLabel />
                    <ChartPieLabel />
                    <ChartLineLinear />
                </div>
            </section>
        </div>
    )
}
