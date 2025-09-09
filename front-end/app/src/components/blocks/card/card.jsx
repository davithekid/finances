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
        title: 'Saldo Atual',
        icon: FaMoneyCheckAlt,
        price: "R$40,00",
        footer: 'Total disponivel'
    },
    {
        id: 2,
        title: 'Receitas do mes',
        icon: FaMoneyCheckAlt,
        price: "R$40,00",
        footer: 'Total disponivel'
    },
    {
        id: 3,
        title: 'Despesas do mes',
        icon: FaMoneyCheckAlt,
        price: "R$40,00",
        footer: 'Total disponivel'
    },
]


export function CardDemo() {
    return (
        <>
            {cards.map((card) => (
                <div key={card.id}>
                    <Card className="w-full max-w-sm bg-purple-100">
                        <CardHeader>
                            <CardTitle className={"lg:text-xl"}>{card.title}</CardTitle>
                            <CardAction className={'text-2xl'}>
                                <card.icon/>
                            </CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="font-bold lg:text-xl">{card.price}</p>
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <p className="font-mono">{card.footer}</p>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </>
    )
}
