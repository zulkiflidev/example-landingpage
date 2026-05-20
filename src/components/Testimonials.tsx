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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="border border-gray-100 p-6 rounded-2xl bg-gray-50 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
              <p className="font-bold text-gray-800">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
