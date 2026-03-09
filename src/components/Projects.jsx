const projects = [
  {
    category: 'AI Agent',
    title: 'Memex',
    description: 'An AI meeting agent that joins your Microsoft Teams calls live, transcribes conversations, searches vector memory, and handles tasks autonomously.',
    image: '/memex-icon.svg',
    reversed: false,
    link: '/Memex/',
    external: true,
    noGrayscale: true,
  },
  {
    category: 'Fintech Solutions',
    title: 'Vanguard Finance',
    description: 'A complete overhaul of the digital banking experience focusing on real-time data visualization and secure cross-border transactions.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0PP1zLvfPDG2uHocLj17_ySkw0ByQhXYoiNhMDdHYO5GQd0PHRNKdpmuS0cQrTUubw35IWdc1AtNJfq5fZ9pKxAG9Aqn-_-31EwCyRpWCiADttDavJmTfrxFJaYzJikuMYFIH5p73tnf_3qNk3AY5Gl_Lg27ORNZQ_Q9MhyXZAG4WM4HY3SlohvVtgPp_tphhXv4f8a98M9rBLOEijLwMdzzBAi9Er2Y3NATXRP77OTf2S9WxInFcXr088AL8hGmd7M0TROuvlYc',
    reversed: true,
  },
  {
    category: 'E-Commerce',
    title: 'Noir Atelier',
    description: 'A minimalist boutique shopping platform built with Next.js and Shopify Hydrogen, featuring a headless architecture.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAriUkQoNJRJ02jjy0rLpXW4qpHUzsrZwYsmaI57KpYK32Uj2f7ktv8p-85tIu8dkxfcBFQ0zCvdfKngw7SgOswo9TbkKozkCOxtO-jJuJaePSMggB04gXwAAQcMfuzQxsBl3ifDlLO9eRNYTCEj4cGKkpCKPU7ryONf_FoJ1rdQJRTD4x5AVbl4pMus8iIEzam6wKKT9fbOhc7UV9lk9Q32wQmSSafsk-T4-1o3ZMxMrJuIJlmpyt9fYw1kv5TvFcW2Fd9K2exysk',
    reversed: false,
  },
]

function ArrowIcon({ className }) {
  return (
    <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  )
}

function DesktopProject({ category, title, description, image, reversed, link, external, noGrayscale }) {
  const linkProps = external ? { href: link || '#', target: '_blank', rel: 'noopener noreferrer' } : { href: link || '#' }
  const imgClass = `w-full aspect-video object-cover transition-all duration-700${noGrayscale ? '' : ' grayscale hover:grayscale-0'}`
  return (
    <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 last:mb-0 items-center overflow-hidden">
      {reversed ? (
        <>
          <div className="lg:col-span-5 lg:order-1 order-2 lg:pr-12 flex flex-col justify-center lg:text-right lg:items-end">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">{category}</span>
            <h3 className="text-4xl font-serif mb-6 group-hover:translate-x-4 transition-transform duration-500">{title}</h3>
            <div className="h-[1px] bg-border w-full mb-6"></div>
            <p className="text-muted-foreground mb-8 leading-relaxed">{description}</p>
            <a className="inline-flex items-center space-x-4 group/btn font-mono text-[10px] uppercase tracking-widest" {...linkProps}>
              <ArrowIcon className="rotate-180 transition-transform duration-300 group-hover/btn:-translate-x-2" />
              <span>Learn More</span>
            </a>
          </div>
          <div className="lg:col-span-7 lg:order-2 order-1 overflow-hidden relative flex items-center justify-center">
            <div className="w-[60%] transition-transform duration-700 ease-[var(--ease-expo-out)] group-hover:scale-105">
              <img alt={title} className={imgClass} src={image} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="lg:col-span-7 overflow-hidden relative flex items-center justify-center">
            <div className="w-[60%] transition-transform duration-700 ease-[var(--ease-expo-out)] group-hover:scale-105 relative">
              <img alt={title} className={imgClass} src={image} />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pl-12 flex flex-col justify-center">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">{category}</span>
            <h3 className="text-4xl font-serif mb-6 group-hover:translate-x-4 transition-transform duration-500">{title}</h3>
            <div className="h-[1px] bg-border w-full mb-6"></div>
            <p className="text-muted-foreground mb-8 leading-relaxed">{description}</p>
            <a className="inline-flex items-center space-x-4 group/btn font-mono text-[10px] uppercase tracking-widest" {...linkProps}>
              <span>Learn More</span>
              <ArrowIcon className="transition-transform duration-300 group-hover/btn:translate-x-2" />
            </a>
          </div>
        </>
      )}
    </div>
  )
}

function MobileProjectCard({ category, title, description, image, link, external, noGrayscale }) {
  const linkProps = { href: link || '#' }
  return (
    <div>
      <div className="relative overflow-hidden rounded-3xl bg-black h-[400px] group">
        <img alt={title} className={`absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000${noGrayscale ? '' : ' grayscale'}`} src={image} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end text-white">
          <span className="font-mono text-[8px] tracking-[0.4em] uppercase opacity-70 mb-2">{category}</span>
          <h3 className="text-3xl font-serif mb-4">{title}</h3>
          <p className="text-xs text-white/70 leading-relaxed mb-6">{description}</p>
          <div className="flex justify-between items-center">
            <a className="font-mono text-[8px] uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full" {...linkProps}>Learn More</a>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useRef, useState } from 'react'
import Waves from './Waves'

export default function Projects({ dark }) {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToCard = (index) => {
    const container = scrollRef.current
    if (!container) return
    const cards = container.children
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      setActiveIndex(index)
    }
  }

  const handleScroll = () => {
    const container = scrollRef.current
    if (!container) return
    const scrollLeft = container.scrollLeft
    const cardWidth = container.children[0]?.offsetWidth || 1
    const gap = 24 // gap-6 = 1.5rem = 24px
    const index = Math.round(scrollLeft / (cardWidth + gap))
    setActiveIndex(Math.min(index, projects.length - 1))
  }
  return (
    <section className="py-20 px-8 md:px-16 relative overflow-hidden" id="projects">
      <Waves
        key={dark ? 'dark' : 'light'}
        className="pointer-events-none"
        strokeColor={dark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}
        backgroundColor="transparent"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-16 md:mb-24">
          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">02 — Selected Works</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4">Featured <br />Projects</h2>
          </div>
          <div className="hidden md:block">
            <span className="font-mono text-[10px] tracking-widest uppercase">Archive [12]</span>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          {projects.map((project) => (
            <DesktopProject key={project.title} {...project} />
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div ref={scrollRef} onScroll={handleScroll} className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-8 px-8 gap-6">
            {projects.map((project, i) => (
              <div key={project.title} className="flex-none w-[85%] snap-center cursor-pointer" onClick={() => scrollToCard(i)}>
                <MobileProjectCard {...project} />
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-3">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className={`w-16 h-[3px] rounded-full transition-colors duration-300 ${
                  i === activeIndex ? 'bg-foreground' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
