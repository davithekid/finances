export default function Footer() {
  return (
    <footer className="bg-purple-100 rounded-t-3xl h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-6 text-center md:text-left">
        <h1 className="text-sm text-gray-700">
          © {new Date().getFullYear()} Site da Kuromi — inspirado para...
        </h1>
        <nav className="flex gap-4 text-sm text-gray-700">
          <a href="#" className="hover:text-black transition-colors">
            Sobre
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Contato
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Suporte
          </a>
        </nav>
      </div>
    </footer>
  );
}
