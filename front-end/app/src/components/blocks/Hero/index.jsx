import { Star } from "lucide-react";
import React from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";



const Hero7 = ({
  heading = "Gerencie suas finanças com facilidade",
  description = "Tenha controle total dos seus gastos e acompanhe sua evolução financeira de forma simples.",
  button = {
    text: "Começar agora",
  },
}) => {
  return (
    <section className="py-22">
      <div className="container text-center">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">{heading}</h1>
          <p className="text-muted-foreground text-balance lg:text-lg">
            {description}
          </p>
        </div>
        <div className="mx-auto  flex w-fit flex-col items-center gap-4 sm:flex-row">
        </div>
      </div>
    </section>
  );
};

export { Hero7 };
