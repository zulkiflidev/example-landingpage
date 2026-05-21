function Newsletter() {
  return (
    // Kak, section Newsletter kita kasih bg-orange-700 biar jreng, tapi pas dark mode kita redupkan dikit jadi dark:bg-zinc-900/40 
    // dengan border atas-bawah tipis biar estetikanya tetep dapet!
    <section className="py-16 bg-orange-700 dark:bg-zinc-900 border-t border-b border-transparent dark:border-zinc-850 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-8 opacity-90 max-w-xl mx-auto text-orange-100 dark:text-zinc-400 transition-colors duration-300">
          Get the latest updates on our new blends and special discounts 
          directly in your inbox. No spam, we promise!
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
          {/* Input kita kasih dark:bg-zinc-950 dan border soft di mode dark */}
          <input 
            type="email" 
            placeholder="Your email address" 
            className="px-6 py-3 rounded-full text-gray-800 dark:text-zinc-100 bg-white dark:bg-zinc-950 border border-transparent dark:border-zinc-800 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
            required
          />
          {/* Tombol subscribe kita sesuaikan warnanya di dark mode */}
          <button 
            type="submit" 
            className="bg-gray-900 hover:bg-black dark:bg-orange-700 dark:hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter

