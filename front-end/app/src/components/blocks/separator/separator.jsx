import { Separator } from "@/components/ui/separator"
import { CardDemo } from "../card/card"
import { ChartPieLabel, Component } from "@/components/graficos/Barra"


export function SeparatorDemo() {
    return (
        <div>
            <div className="space-y-1">
                <h4 className="text-sm lg:text-xl leading-none font-bold">Dashboard</h4>
                <p className="text-muted-foreground text-sm">
                    Acompanhe seus componentes principais.
                </p>
                <div className="grid grid-cols-3 py-4">
                    <CardDemo />
                </div>
            </div>
            <section className="mx-auto container ">
                <div className="space-y-1 ">
                    <h4 className="text-sm lg:text-xl leading-none  flex justify-center font-bold">Acompanhe seu rendimento</h4>
                    <p className="text-muted-foreground text-sm flex justify-center">
                        Gráfico correpondente a sua entrada, saida e metas.
                    </p>
                </div>
                <div className="flex py-8">
                    <Component/>
                    <Component/>
                </div>
            </section>
            <Separator className="my-4" />
        </div>

    )
}
