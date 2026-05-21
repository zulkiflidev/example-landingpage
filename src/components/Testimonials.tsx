import { Star } from 'lucide-react'

function Testimonials() {
  const reviews = [
    {
      name: "Alex Johnson",
      text: "The best espresso in town. Simple and effective!",
      rating: 5
    },
    {
      name: "Sarah Miller",
      text: "I love the atmosphere here. It's my favorite place to work.",
      rating: 5
    },
    {
      name: "Mike Ross",
      text: "Great coffee and very friendly staff. Highly recommended.",
      rating: 4
    }
  ]

  return (
    // Kak, section Testimonials kita buat putih di light mode dan dark:bg-zinc-950 di dark mode
    <section className="py-16 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-zinc-100 transition-colors duration-300">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            // Kartunya kita ubah background-nya pas dark mode jadi dark:bg-zinc-900 dan border dark:border-zinc-850
            <div 
              key={index} 
              className="border border-gray-100 dark:border-zinc-850 p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900 shadow-sm dark:shadow-zinc-950/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500 dark:fill-orange-400 dark:text-orange-400 transition-all duration-300" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-zinc-400 mb-4 italic transition-colors duration-300">"{review.text}"</p>
              <p className="font-bold text-gray-800 dark:text-zinc-200 transition-colors duration-300">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

