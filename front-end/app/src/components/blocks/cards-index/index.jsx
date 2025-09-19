import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
export default function CardIndex() {
    const cards = [
        {
            id: 1,
            title: 'Saldo Atual',
            content: 'R$ 1.200,00',
            icon: 'saldo_icon',
            button: 'Ver extrato',
        },
        {
            id: 2,
            title: 'Despesas',
            content: 'R$ 850,00',
            icon: 'despesas_icon',
            button: 'Ver despesas',
        },
        {
            id: 3,
            title: 'Entradas',
            content: 'R$ 2.050,00',
            icon: 'entradas_icon',
            button: 'Ver entradas',
        },
    ];



    return (
        <>

            {cards.map((card) => (

                <Card key={card.id} className="max-w-xs w-full bg-pink-200 dark:bg-violet-950">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground flex items-end leading-6">
                        <span className="text-4xl leading-none font-bold text-foreground">
                            {card.content}
                        </span>
                    </CardContent>
                    <CardFooter className="mt-2 flex justify-between">
                        <Button size="lg" className="w-full">
                            {card.button}
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </>
    );
}