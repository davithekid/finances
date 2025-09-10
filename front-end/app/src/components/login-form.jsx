import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "./themes/mode-toggle"

export function LoginForm({

  className,
  ...props

}) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="m-auto">
        <ModeToggle />
      </div>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>

              </div>
              <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="username" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="/redifined" className="ml-auto text-sm underline-offset-2 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>


              <div className="text-center text-sm">
                Ainda não possui uma conta?{" "}
                <a href="/register" className="underline underline-offset-4">
                  Registrar
                </a>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
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
      <div
        className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
