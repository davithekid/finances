'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { TableGastos } from "../table/table"

export function AccordionTransacao() {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
        >
            <div className="mx-auto container">

                <AccordionItem value="item-1">
                    <AccordionTrigger className={"font-bold flex justify-center"}>Transações Recentes</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                            <TableGastos />
                       
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className={"font-bold flex justify-center"}>Simulações Recentes</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                    
                            <TableGastos />
                        
                    </AccordionContent>
                </AccordionItem>
            </div>
        </Accordion>
    )
}
