import { Coffee, Utensils, Zap } from 'lucide-react'

function MenuHighlight() {
  // Kak, di sini kita tambahin class dark:text-orange-500 di setiap icon biar pas mode dark warnanya tetep bersinar hangat!
  const highlights = [
    {
      icon: <Coffee className="w-8 h-8 text-orange-700 dark:text-orange-500 transition-colors duration-300" />,
      title: "Premium Coffee",
      description: "Directly sourced from the world's best sustainable farms."
    },
    {
      icon: <Utensils className="w-8 h-8 text-orange-700 dark:text-orange-500 transition-colors duration-300" />,
      title: "Fresh Pastries",
      description: "Baked daily in our kitchen with organic ingredients."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-700 dark:text-orange-500 transition-colors duration-300" />,
      title: "Fast Service",
      description: "Get your morning fuel without the long waiting lines."
    }
  ]

  return (
    // Section pembungkus kita kasih bg-gray-50 buat light, dan dark:bg-zinc-900 buat dark mode
    <section className="py-16 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-zinc-100 transition-colors duration-300">Why Choose Us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            // Kak, untuk kartunya kita kasih border tipis di mode gelap biar ada pemisah yang elegan (dark:border-zinc-800)
            <div 
              key={index} 
              className="bg-white dark:bg-zinc-950 p-8 rounded-xl shadow-sm hover:shadow-md dark:shadow-zinc-950/20 border border-transparent dark:border-zinc-800/80 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-zinc-100 transition-colors duration-300">{item.title}</h3>
              <p className="text-gray-600 dark:text-zinc-400 transition-colors duration-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuHighlight

