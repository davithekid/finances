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

const cards = [
    {
        id: 1,
        title: 'Saldo Atual',
        price: "R$40,00",
        footer: 'Total disponivel'
    },
    {
        id: 2,
        title: 'Gastos do mes',
        price: "R$40,00",
        footer: 'Total disponivel'
    },
    {
        id: 3,
        title: 'Saldo Atual',
        price: "R$40,00",
        footer: 'Total disponivel'
    },
]


export function CardDemo() {
    return (
        <>
            {cards.map((card) => (
                <div key={card.id}>
                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{card.price}</p>
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <p>{card.footer}</p>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </>
    )
}
