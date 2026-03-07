import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="bg-background text-foreground selection:bg-foreground selection:text-background antialiased overflow-x-hidden">
      <Navbar dark={dark} onToggleDark={() => setDark(d => !d)} />
      <main>
        <Hero dark={dark} />
        <About />
        <Projects dark={dark} />
        <Experience />
        <Contact dark={dark} />
      </main>
      <Footer />
    </div>
  )
}
