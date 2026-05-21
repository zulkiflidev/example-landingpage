import { Coffee, Sun, Moon } from 'lucide-react'

// Kak, di sini kita definisiin props-nya biar aman dari TypeScript error ya!
interface NavbarProps {
  theme: string
  toggleTheme: () => void
}

function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    // Kak, ini navigasinya kita tambahin dark:bg-zinc-900 dan border bawah tipis biar cantik banget pas gelap
    <nav className="bg-white dark:bg-zinc-900/90 dark:backdrop-blur-md shadow-md dark:shadow-zinc-950/20 p-4 sticky top-0 z-50 border-b border-gray-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Coffee className="w-6 h-6 text-orange-700 dark:text-orange-500" />
          <span className="font-bold text-xl tracking-tight text-gray-800 dark:text-zinc-100">Simple Coffee Co.</span>
        </div>

        {/* Navigation Links + Toggle Button */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-gray-600 dark:text-zinc-300 font-medium">
            <a href="#" className="hover:text-orange-700 dark:hover:text-orange-500 transition-colors">Home</a>
            <a href="#" className="hover:text-orange-700 dark:hover:text-orange-500 transition-colors">Menu</a>
            <a href="#" className="hover:text-orange-700 dark:hover:text-orange-500 transition-colors">About</a>
            <a href="#" className="hover:text-orange-700 dark:hover:text-orange-500 transition-colors">Contact</a>
          </div>

          {/* 
            Kak, ini tombol toggle theme-nya!
            Kita pasang Sun dan Moon icon. Kita pake transisi scale biar pas di-klik kayak membal (tactile)!
          */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-600 dark:text-zinc-300 border border-gray-200 dark:border-zinc-700 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none cursor-pointer"
            title={theme === 'light' ? 'Nyalakan Mode Gelap' : 'Nyalakan Mode Terang'}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-gray-700 transition-all duration-300" />
            ) : (
              <Sun className="w-5 h-5 text-amber-400 rotate-0 transition-all duration-300" />
            )}
          </button>

          {/* Mobile Menu Icon Placeholder */}
          <button className="md:hidden p-2 text-gray-600 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg">
            Menu
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

