function AboutUs() {
  return (
    // Kak, section About Us kita kasih bg-white buat mode terang, dan dark:bg-zinc-950 buat mode gelap.
    // Ditambah transition-colors biar transisi warnanya asyik!
    <section className="py-16 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800" 
              alt="Our Coffee Shop Atmosphere" 
              className="rounded-2xl shadow-lg dark:shadow-zinc-900/50 w-full h-[400px] object-cover border border-transparent dark:border-zinc-800 transition-all duration-300"
            />
          </div>

          {/* Text Side */}
          <div className="md:w-1/2">
            {/* Teks judul cerita kita kasih dark:text-zinc-100 */}
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-zinc-100">Our Story</h2>
            {/* Teks isi cerita kita kasih dark:text-zinc-400 */}
            <p className="text-gray-600 dark:text-zinc-400 mb-4 leading-relaxed transition-colors duration-300">
              Simple Coffee Co. started with a very basic idea: 
              serving great coffee in a space where everyone feels welcome. 
              We don't do anything fancy, we just focus on the quality of our beans.
            </p>
            <p className="text-gray-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300">
              Every cup we serve is made from locally roasted beans, 
              carefully selected to bring you the best flavor possible. 
              Whether you're here for a quick espresso or a long chat with friends, 
              we're happy to have you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

