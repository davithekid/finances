import { AlertDialogAdicionar } from "@/components/dialogs/dinheiroMetas";
import { AlertDialogMetas } from "@/components/dialogs/metas";
import { ProgressDemo } from "@/components/progress/ProgressMetas";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaMoneyCheckAlt } from "react-icons/fa";


const cards = [
    {
        id: 1,
        title: 'Despesas do mes',
        icon: FaMoneyCheckAlt,
        price: "R$40,00",
        date: '31 de mai, 2025',
        footer: 'Sonho conhecer a terra da hello kitty'
    },
    {
        id: 2,
        title: 'Despesas do mes',
        icon: FaMoneyCheckAlt,
        price: "R$40,00",
        date: '31 de mai, 2025',
        footer: 'Sonho conhecer a terra da hello kitty'
    },
    {
        id: 3,
        title: 'Despesas do mes',
        icon: FaMoneyCheckAlt,
        price: "R$40,00",
        date: '31 de mai, 2025',
        footer: 'Sonho conhecer a terra da hello kitty'
    },
]


export function CardMetas() {
    return (
        <>
            {cards.map((card) => (
                <div key={card.id}>
                    <Card className="w-full max-w-sm bg-purple-100">
                        <CardHeader>
                            <div className="flex gap-8">

                                <p>img</p>
                                <CardTitle className={"lg:text-xl"}>{card.title}</CardTitle>
                            </div>
                            <p className="flex justify-center">tag</p>
                            <CardAction className={'text-2xl'}>
                                <card.icon />
                            </CardAction>
                        </CardHeader>
                        <CardContent>
                            <ProgressDemo />
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <p className="font-mono">{card.date}</p>
                            <p className="font-mono">{card.footer}</p>
                            <AlertDialogAdicionar />
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </>
    )
}
