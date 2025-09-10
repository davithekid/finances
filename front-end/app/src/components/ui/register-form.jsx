import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "../themes/mode-toggle"

export function RegisterForm({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-8 items-center justify-center min-h-screen p-4", className)} {...props}>
      
      <ModeToggle />

      <Card className="w-full max-w-3xl overflow-hidden shadow-xl rounded-2xl transition-transform hover:scale-[1.01] duration-200">
        <CardContent className="grid md:grid-cols-2 gap-0 p-0">
          
          <div className="relative hidden md:block">
            <img
              src="https://i.pinimg.com/474x/a7/72/6d/a7726dfdba5741ae21f3298d1de7c1a0.jpg"
              alt="Light"
              className="absolute inset-0 h-full w-full object-cover dark:hidden"
            />
            <img
              src="https://i.pinimg.com/236x/e2/42/69/e2426985e7fc262b37649c8d6bf7b60b.jpg"
              alt="Dark"
              className="absolute inset-0 h-full w-full object-cover hidden dark:block"
            />
          </div>

          <form className="p-8 md:p-10 flex flex-col gap-6 bg-white dark:bg-gray-900">
            <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 text-center">
              Crie sua conta
            </h1>

            <div className="grid gap-4">
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="text" placeholder="Digite seu username" required />
            </div>

            <div className="grid gap-4">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" type="text" placeholder="Digite seu nome completo" required />
            </div>

            <div className="grid gap-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="exemplo@email.com" required />
            </div>

            <div className="grid gap-4">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="Crie uma senha segura" required />
            </div>

            <div className="grid gap-4">
              <Label htmlFor="confirm-password">Confirmar Senha</Label>
              <Input id="confirm-password" type="password" placeholder="Confirme sua senha" required />
            </div>

            <Button type="submit" className="w-full py-3 text-lg font-medium">
              Registrar
            </Button>

            <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
              Ao clicar em registrar, você concorda com nossos{" "}
              <a href="#" className="underline hover:text-purple-600">Termos de Serviço</a> e{" "}
              <a href="#" className="underline hover:text-purple-600">Política de Privacidade</a>.
            </p>
          </form>

        </CardContent>
      </Card>
    </div>
  )
}
