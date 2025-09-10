export default function Footer() {
  return (
    <footer className="bg-purple-50 dark:bg-gray-900 rounded-t-3xl shadow-inner mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-8 text-center md:text-left">
        
        <h1 className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Seu site favorito para o controle das suas finanças com nossa querida kuromi e my melody!
        </h1>
        
        <section className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
         <h1>Desenvolvido por: Davi Chagas</h1>
        </section>

      </div>
    </footer>
  );
}
