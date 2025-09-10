"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Monthly transaction totals"

const chartData = [
  { month: "January", total: 4200 },
  { month: "February", total: 5300 },
  { month: "March", total: 4800 },
  { month: "April", total: 6100 },
  { month: "May", total: 4700 },
  { month: "June", total: 5900 },
]

const chartConfig = {
  total: {
    label: "Total Transações",
    color: "var(--purple-500)", 
  },
}

export function ChartBarLabel() {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader>
        <CardTitle>Transações Mensais</CardTitle>
        <CardDescription>Jan - Jun 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-60">
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
              bottom: 10,
            }}
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="total" fill="var(--purple-500)" radius={8}>
              <LabelList
                position="top"
                offset={8}
                className="fill-foreground"
                fontSize={12}
                formatter={(value) => `R$${value.toLocaleString()}`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Crescimento de 8% este mês <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="text-muted-foreground leading-none">
          Total de transações registradas nos últimos 6 meses
        </div>
      </CardFooter>
    </Card>
  )
}
      