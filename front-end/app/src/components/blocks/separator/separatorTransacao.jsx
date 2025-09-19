import { Separator } from "@/components/ui/separator"
import { TableDemo } from "../table/table"
import {  CardSimulacao } from "@/components/blocks/card/simulacao"
import { CardDemo } from "../card/card"
import { AccordionTransacao } from "../accordion/AccordionTransacao"
import { CardGastos } from "../card/transacao"
import { AccordionDemo } from "../accordion/Accordion"
import AccordionBoxContainedDemo from "@/components/accordion-05"

export function SeparatorTransacao() {
    return (
        <div className="">
            <div className="space-y-1 py-12">
                <h4 className="text-sm lg:text-xl leading-none font-bold">Gastos</h4>


                <p className="text-muted-foreground text-sm py-3">
                    Faça sua transação, simule e confira!
                </p>
                <div className="flex flex-wrap py-4 gap-12">
                    <CardGastos />
                    <CardSimulacao/>
                </div>                  

            </div>      
            <Separator className="my-4" />
            <section className="mx-auto container py-8  ">
                <AccordionBoxContainedDemo/>
            </section>
        </div>
    )           
}
