import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TableGastos } from "./blocks/table/table";

const items = [
  {
    title: "Tabela de Gastos",
    content: <TableGastos />, 
  },
  {
    title: "Outro conteúdo",
     content: <TableGastos />, 
  },
];

export default function AccordionBoxContainedDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-100 lg:w-200 px-4 lg:px-0"
    >
      {items.map(({ title, content }, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="last:border-none first:rounded-t-md last:rounded-b-md px-4 bg-muted "
        >
          <AccordionTrigger className={'font-bold'}>{title}</AccordionTrigger>
          <AccordionContent className="p-2"> 
            {content}
          </AccordionContent>                 
        </AccordionItem>
      ))}
    </Accordion>
  );
}
