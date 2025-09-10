import { Separator } from "@/components/ui/separator"
import { Profile } from "../card/perfil"

export function SeparatorProfile() {
    return (
        <div>
            <section>
                <div className="space-y-1">
                    <h2 className="text-sm lg:text-xl leading-none font-bold">Perfil</h2>
                    <h2 className="text-sm lg:text-xl leading-none font-bold">Seja bem-vindo cherry!!</h2>
                    <p className="text-muted-foreground text-sm">
                        Dados do seu perfil.
                    </p>

                    <div className="py-4 gap-6 md:gap-8">
                        <Profile />
                        <div className="bg-white dark:bg-zinc-900 shadow-md rounded-lg p-6 py-12 space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Davi Chagas</h1>
                                <p className="text-sm text-muted-foreground">
                                    Desenvolvedor Back-end | Java | JavaScript | Spring Boot | Node.js | Docker | SQL | Git
                                </p>
                            </div>

                            {/* seguidores e seguindo */}
                            <div className="flex gap-6 md:gap-12">
                                <div className="flex flex-col items-center bg-gray-100 dark:bg-zinc-800 rounded-lg px-4 py-3 shadow-sm">
                                    <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">295</h2>
                                    <p className="text-xs text-muted-foreground">seguidores</p>
                                </div>
                                <div className="flex flex-col items-center bg-gray-100 dark:bg-zinc-800 rounded-lg px-4 py-3 shadow-sm">
                                    <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">205</h2>
                                    <p className="text-xs text-muted-foreground">seguindo</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Separator className="my-6" />
        </div>
    )
}
