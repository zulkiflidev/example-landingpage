import { Coffee } from 'lucide-react'

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-brown-600">
          <Coffee className="w-6 h-6 text-orange-700" />
          <span className="font-bold text-xl tracking-tight">Simple Coffee Co.</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-orange-700">Home</a>
          <a href="#" className="hover:text-orange-700">Menu</a>
          <a href="#" className="hover:text-orange-700">About</a>
          <a href="#" className="hover:text-orange-700">Contact</a>
        </div>

        {/* Mobile Menu Icon Placeholder */}
        <button className="md:hidden p-2 text-gray-600">
          Menu
        </button>
      </div>
    </nav>
  )
}

export default Navbar
