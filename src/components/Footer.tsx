import { Mail, MessageCircle, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Simple Coffee Co.</h3>
            <p className="text-sm">
              Your neighborhood coffee sanctuary. We believe in great coffee and even better community.
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Opening Hours</h3>
            <ul className="text-sm">
              <li className="mb-2">Mon - Fri: 07:00 AM - 09:00 PM</li>
              <li className="mb-2">Sat - Sun: 08:00 AM - 10:00 PM</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <div className="flex gap-4">
              <a href="#" title="Email Us" className="hover:text-white"><Mail className="w-5 h-5" /></a>
              <a href="#" title="Chat with Us" className="hover:text-white"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" title="Call Us" className="hover:text-white"><Phone className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs">
          <p>&copy; 2026 Simple Coffee Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
