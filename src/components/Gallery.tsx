function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1497933321162-0732bd5660c6?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=400"
  ]

  return (
    // Kak, section Gallery ini kita kasih bg-gray-50 buat terang, dan dark:bg-zinc-900 buat gelap biar selaras sama Menu Highlight!
    <section className="py-16 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-zinc-100 transition-colors duration-300">Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            // Kita bungkus gambarnya pake border tipis dark:border-zinc-800 biar pas gelap kelihatan rapi dan premium!
            <div key={index} className="overflow-hidden rounded-lg border border-transparent dark:border-zinc-850 shadow-sm dark:shadow-zinc-950/20 transition-all duration-300">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

