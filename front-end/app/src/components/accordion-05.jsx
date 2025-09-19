import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Is it accessible?",
    content: '',
  },
  {
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },

];

export default function AccordionBoxContainedDemo() {
  return (
    <Accordion type="single" collapsible className="max-w-lg my-4 w-full">
      {items.map(({ title, content }, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="last:border-none first:rounded-t-md last:rounded-b-md px-4 bg-muted">
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
