function Hero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-white">
      {/* Background Image from Unsplash */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200')" 
        }}
      >
        {/* Dark Overlay to make text readable */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Awaken Your Senses
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Experience the finest coffee beans roasted to perfection. 
          Your daily dose of happiness starts here.
        </p>
        <button className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Order Now
        </button>
      </div>
    </section>
  )
}

export default Hero
