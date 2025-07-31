export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-8 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold">Quatro Temperamentos</h4>
          <p className="text-sm text-gray-400 mt-1">
            Explorando os perfis humanos com ciência, empatia e tecnologia.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400 transition">
            YouTube
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Instagram
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            TikTok
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Sortjakke. Todos os direitos reservados.
      </div>
    </footer>
  )
}
