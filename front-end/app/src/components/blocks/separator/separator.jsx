import { Separator } from "@/components/ui/separator"
import { CardDemo } from "../card/card"
import { Component } from "@/components/graficos/Barra"

export function SeparatorDemo() {
    return (
        <div>
            <div className="space-y-1">
                <h4 className="text-sm lg:text-xl leading-none font-bold">Ultimas transações</h4>
                <p className="text-muted-foreground text-sm">
                    An open-source UI component library.
                </p>
                <div className="grid grid-cols-3 py-4">
                    <CardDemo />
                </div>
            </div>
            <section className="mx-auto container ">
                <div className="space-y-1 ">
                    <h4 className="text-sm lg:text-xl leading-none font-medium flex justify-center">Ultimas transações</h4>
                    <p className="text-muted-foreground text-sm flex justify-center">
                        An open-source UI component library.
                    </p>
                </div>
                <Component />
            </section>
            <Separator className="my-4" />
        </div>

    )
}
