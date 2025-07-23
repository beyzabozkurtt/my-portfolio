import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">

        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        {/* Sırayla About, Projects, Contact eklenecek */}
      </main>
    </>
  )
}

export default App
