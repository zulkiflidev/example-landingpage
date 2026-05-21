function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800" 
              alt="Our Coffee Shop Atmosphere" 
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          {/* Text Side */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Simple Coffee Co. started with a very basic idea: 
              serving great coffee in a space where everyone feels welcome. 
              We don't do anything fancy, we just focus on the quality of our beans.
            </p>
            <p className="text-gray-600 leading-relaxed">
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
