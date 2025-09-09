import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "../themes/mode-toggle"

export function RegisterForm({ className, ...props }) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="m-auto">
                <ModeToggle />
            </div>

            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">

                    <div className="bg-muted relative hidden md:block">
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

                    <form className="p-6 md:p-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Register</h1>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" type="username" required />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" type="name" required />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" required />
                            </div>

                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="password">Confirm Password</Label>
                                <Input id="password" type="password" required />
                            </div>
                            <Button type="submit" className="w-full">
                                Register
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>

            {/* Termos */}
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    )
}
