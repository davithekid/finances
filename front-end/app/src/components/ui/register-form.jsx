import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "../themes/mode-toggle"

export function RegisterForm({ className, ...props }) {
  return (
    <div className={cn("flex flex-col items-center justify-center min-h-screen gap-6 p-4", className)} {...props}>
      
      <ModeToggle />

      <Card className="w-full max-w-3xl overflow-hidden shadow-xl rounded-2xl transition-transform hover:scale-[1.01] duration-200">
        <CardContent className="grid md:grid-cols-2 p-0">

          <form className="p-6 md:p-10 flex flex-col gap-6 w-full">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
              Registre-se
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" placeholder="Digite seu user" required className="text-sm" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" type="text" placeholder="Digite seu nome" required className="text-sm" />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="exemplo@email.com" required className="text-sm" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" placeholder="******" required className="text-sm" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="confirm-password">Confirmar Senha</Label>
                <Input id="confirm-password" type="password" placeholder="******" required className="text-sm" />
              </div>
            </div>

            <Button type="submit" className="w-full py-2 md:py-3 text-base md:text-lg font-medium mt-2">
              Registrar
            </Button>

            <div className="text-center text-sm mt-2">
              Já possui uma conta?{" "}
              <a href="/login" className="underline hover:text-purple-600">Login</a>
            </div>
          </form>

          <div className="relative hidden md:block w-full max-h-[500px]">
            <img
              src="https://static.vecteezy.com/system/resources/previews/049/575/179/non_2x/melody-character-head-free-vector.jpg"
              alt="Light"
              className="absolute inset-0 h-full w-full object-cover dark:hidden"
            />
            <img
              src="https://img.icons8.com/?size=512&id=CvGu0jSeBZLs&format=png"
              alt="Dark"
              className="absolute inset-0 h-full w-full object-cover hidden dark:block"
            />
          </div>

        </CardContent>
      </Card>

      <div className="text-muted-foreground text-center text-xs">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline hover:text-purple-600">Terms of Service</a> and{" "}
        <a href="#" className="underline hover:text-purple-600">Privacy Policy</a>.
      </div>
    </div>
  )
}
