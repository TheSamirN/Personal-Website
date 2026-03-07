import { useState, useEffect } from 'react'
import Waves from './Waves'

function LocationTag() {
  const [isHovered, setIsHovered] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          timeZone: 'America/Toronto',
        })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center gap-2 md:gap-3 rounded-full border border-border/60 bg-secondary/50 px-3 py-1.5 md:px-4 md:py-2.5 transition-all duration-500 ease-out hover:border-foreground/20 hover:bg-secondary/80 hover:shadow-[0_0_20px_rgba(0,0,0,0.04)] cursor-default scale-[0.7] md:scale-100 origin-center"
    >
      <div className="relative flex items-center justify-center">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
      </div>
      <div className="relative flex items-center overflow-hidden h-5">
        <span
          className="text-sm font-medium text-foreground transition-all duration-500 whitespace-nowrap"
          style={{
            transform: isHovered ? 'translateY(-100%)' : 'translateY(0)',
            opacity: isHovered ? 0 : 1,
          }}
        >
          Toronto, Canada
        </span>
        <span
          className="absolute text-sm font-medium text-foreground transition-all duration-500 whitespace-nowrap"
          style={{
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            opacity: isHovered ? 1 : 0,
          }}
        >
          {currentTime} EST
        </span>
      </div>
      <svg
        className="h-3 w-3 text-muted-foreground transition-all duration-300"
        style={{
          transform: isHovered ? 'translateX(2px) rotate(-45deg)' : 'translateX(0) rotate(0)',
          opacity: isHovered ? 1 : 0.5,
        }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </div>
  )
}

export default function Contact({ dark }) {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-8 md:px-16 relative overflow-hidden" id="contact">
      <Waves
        key={dark ? 'dark' : 'light'}
        className="pointer-events-none"
        strokeColor={dark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}
        backgroundColor="transparent"
      />
      <div className="w-full max-w-7xl relative z-10">
        <div className="group relative bg-muted p-12 md:p-24 overflow-hidden rounded-sm transition-all duration-700 hover:shadow-[0_0_60px_rgba(0,0,0,0.15),0_0_120px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_60px_rgba(255,255,255,0.1),0_0_120px_rgba(255,255,255,0.05)]">
          {/* Animated Background Element */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-foreground/5 rounded-full blur-3xl group-hover:scale-[2] group-hover:bg-foreground/10 transition-all duration-1000"></div>
          <div className="absolute -left-20 -top-20 w-72 h-72 bg-foreground/0 rounded-full blur-3xl group-hover:scale-[2] group-hover:bg-foreground/8 transition-all duration-1000 delay-100"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-8">Ready to Start?</span>
            <h2 className="text-6xl md:text-9xl font-serif leading-[0.85] tracking-tighter mb-12">
              Let's Work <br /> <span className="italic">Together</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
              <a className="group/link relative inline-block" href="mailto:SamirN@Live.ca">
                <span className="text-xl md:text-2xl font-serif">SamirN@Live.ca</span>
                <div className="h-[1px] bg-foreground w-full mt-2 origin-left scale-x-100 group-hover/link:scale-x-0 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 h-[1px] bg-foreground w-full origin-right scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500"></div>
              </a>
              <div className="hidden md:block w-12 h-[1px] bg-border"></div>
              <div className="flex space-x-8 font-mono text-[10px] tracking-widest uppercase">
                <a className="hover:text-muted-foreground transition-colors" href="https://www.linkedin.com/in/samirnazim" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="hover:text-muted-foreground transition-colors" href="https://github.com/TheSamirN" target="_blank" rel="noopener noreferrer">Github</a>
              </div>
            </div>
            <div className="mt-10">
              <LocationTag />
            </div>
            <div className="md:hidden mt-10">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-border/30 ring-offset-2 ring-offset-background shadow-lg mx-auto">
                <img alt="Samir Nazim" className="w-full h-full object-cover contrast-[0.95] brightness-105" src="/selfie.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
