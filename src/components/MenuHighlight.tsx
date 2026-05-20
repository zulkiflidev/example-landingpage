import { Coffee, Utensils, Zap } from 'lucide-react'

function MenuHighlight() {
  const highlights = [
    {
      icon: <Coffee className="w-8 h-8 text-orange-700" />,
      title: "Premium Coffee",
      description: "Directly sourced from the world's best sustainable farms."
    },
    {
      icon: <Utensils className="w-8 h-8 text-orange-700" />,
      title: "Fresh Pastries",
      description: "Baked daily in our kitchen with organic ingredients."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-700" />,
      title: "Fast Service",
      description: "Get your morning fuel without the long waiting lines."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center">
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuHighlight
