import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import MenuHighlight from '../components/MenuHighlight'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

// Kak, kita buat interface props-nya biar TypeScript ga marah ya!
interface HomeProps {
  theme: string
  toggleTheme: () => void
}

function Home({ theme, toggleTheme }: HomeProps) {
  return (
    // Di sini kita tambahin class dark:bg-zinc-950 biar pas mode dark background utamanya berubah!
    // Kita juga tambahin transition-colors duration-300 biar transisi warnanya smooth kayak bioskop!
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Kita oper props theme dan toggleTheme ke Navbar ya Kak! */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AboutUs />
        <MenuHighlight />
        <Gallery />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default Home

