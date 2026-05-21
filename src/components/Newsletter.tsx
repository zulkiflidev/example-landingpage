function Newsletter() {
  return (
    <section className="py-16 bg-orange-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-8 opacity-90 max-w-xl mx-auto">
          Get the latest updates on our new blends and special discounts 
          directly in your inbox. No spam, we promise!
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="px-6 py-3 rounded-full text-gray-800 w-full focus:outline-none"
            required
          />
          <button 
            type="submit" 
            className="bg-gray-900 hover:bg-black text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
