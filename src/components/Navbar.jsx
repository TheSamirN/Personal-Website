import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, Briefcase, Clock, GraduationCap, Mail, Sun, Moon, Github, Linkedin } from 'lucide-react'
import Switch from './Switch'

const menuItems = [
  {
    icon: <Home className="h-4 w-4" />,
    label: 'About',
    href: '#about',
    gradient: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)',
    iconColor: 'text-blue-500',
  },
  {
    icon: <Briefcase className="h-4 w-4" />,
    label: 'Work',
    href: '#projects',
    gradient: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)',
    iconColor: 'text-orange-500',
  },
  {
    icon: <Clock className="h-4 w-4" />,
    label: 'Career',
    href: '#experience',
    gradient: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)',
    iconColor: 'text-green-500',
  },
  {
    icon: <GraduationCap className="h-4 w-4" />,
    label: 'Education',
    href: '#education',
    gradient: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)',
    iconColor: 'text-purple-500',
  },
  {
    icon: <Mail className="h-4 w-4" />,
    label: 'Contact',
    href: '#contact',
    gradient: 'radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)',
    iconColor: 'text-red-500',
  },
]

const socialItems = [
  {
    icon: <Github className="h-4 w-4" />,
    label: 'Github',
    href: 'https://github.com/TheSamirN',
    gradient: 'radial-gradient(circle, rgba(156,163,175,0.15) 0%, rgba(107,114,128,0.06) 50%, rgba(75,85,99,0) 100%)',
    iconColor: 'text-gray-500',
    external: true,
  },
  {
    icon: <Linkedin className="h-4 w-4" />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/samirnazim',
    gradient: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)',
    iconColor: 'text-blue-500',
    external: true,
  },
]

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: 'spring', stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
}

const sharedTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

function ThemeToggle({ dark, onToggleDark }) {
  return (
    <div className="flex items-center space-x-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          dark ? 'text-[#A1A1AA] scale-75 rotate-12' : 'text-foreground scale-100 rotate-0'
        }`}
      />
      <Switch
        checked={dark}
        onCheckedChange={onToggleDark}
        aria-label="Toggle theme"
        className="transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110"
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          !dark ? 'text-[#A1A1AA] scale-75 rotate-12' : 'text-foreground scale-100 rotate-0'
        }`}
      />
    </div>
  )
}

function GlowMenu({ dark }) {
  return (
    <motion.nav
      className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className={`absolute -inset-2 bg-gradient-radial from-transparent ${
          dark
            ? 'via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%'
            : 'via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%'
        } to-transparent rounded-3xl z-0 pointer-events-none`}
        variants={navGlowVariants}
      />
      <ul className="flex items-center gap-2 relative z-10">
        {menuItems.map((item) => (
          <motion.li key={item.label} className="relative">
            <motion.div
              className="block rounded-xl overflow-visible group relative"
              style={{ perspective: '600px' }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                variants={glowVariants}
                style={{
                  background: item.gradient,
                  opacity: 0,
                  borderRadius: '16px',
                }}
              />
              <motion.a
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl font-mono text-[10px] tracking-[0.3em] uppercase"
                variants={itemVariants}
                transition={sharedTransition}
                style={{ transformStyle: 'preserve-3d', transformOrigin: 'center bottom' }}
              >
                <span className="transition-colors duration-300 text-foreground">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </motion.a>
              <motion.a
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl font-mono text-[10px] tracking-[0.3em] uppercase"
                variants={backVariants}
                transition={sharedTransition}
                style={{ transformStyle: 'preserve-3d', transformOrigin: 'center top', rotateX: 90 }}
              >
                <span className="transition-colors duration-300 text-foreground">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </motion.a>
            </motion.div>
          </motion.li>
        ))}
        <li className="text-foreground/30 text-xl font-bold select-none px-1">|</li>
        {socialItems.map((item) => (
          <motion.li key={item.label} className="relative">
            <motion.div
              className="block rounded-xl overflow-visible group relative"
              style={{ perspective: '600px' }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                variants={glowVariants}
                style={{
                  background: item.gradient,
                  opacity: 0,
                  borderRadius: '16px',
                }}
              />
              <motion.a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl font-mono text-[10px] tracking-[0.3em] uppercase"
                variants={itemVariants}
                transition={sharedTransition}
                style={{ transformStyle: 'preserve-3d', transformOrigin: 'center bottom' }}
              >
                <span className="transition-colors duration-300 text-foreground">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </motion.a>
              <motion.a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl font-mono text-[10px] tracking-[0.3em] uppercase"
                variants={backVariants}
                transition={sharedTransition}
                style={{ transformStyle: 'preserve-3d', transformOrigin: 'center top', rotateX: 90 }}
              >
                <span className="transition-colors duration-300 text-foreground">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </motion.a>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}

function MobileGlowMenu({ dark, onClose }) {
  const allMobileItems = [...menuItems, ...socialItems]
  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {allMobileItems.map((item, i) => (
        <motion.div
          key={item.label}
          className="block rounded-xl overflow-visible group relative w-full"
          style={{ perspective: '600px' }}
          whileHover="hover"
          whileTap="hover"
          initial="initial"
        >
          {i === menuItems.length && (
            <div className="absolute -top-2 left-6 right-6 h-px bg-border/40" />
          )}
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none"
            variants={glowVariants}
            style={{
              background: item.gradient,
              opacity: 0,
              borderRadius: '16px',
            }}
          />
          <motion.a
            href={item.href}
            onClick={onClose}
            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="flex items-center gap-4 px-6 py-4 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl font-mono text-[10px] tracking-[0.3em] uppercase"
            variants={itemVariants}
            transition={sharedTransition}
            style={{ transformStyle: 'preserve-3d', transformOrigin: 'center bottom' }}
          >
            <span className="transition-colors duration-300 text-foreground">
              {item.icon}
            </span>
            <span>{item.label}</span>
          </motion.a>
          <motion.a
            href={item.href}
            onClick={onClose}
            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="flex items-center gap-4 px-6 py-4 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl font-mono text-[10px] tracking-[0.3em] uppercase"
            variants={backVariants}
            transition={sharedTransition}
            style={{ transformStyle: 'preserve-3d', transformOrigin: 'center top', rotateX: 90 }}
          >
            <span className="transition-colors duration-300 text-foreground">
              {item.icon}
            </span>
            <span>{item.label}</span>
          </motion.a>
        </motion.div>
      ))}
    </div>
  )
}

export default function Navbar({ dark, onToggleDark }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-4 md:px-16 flex justify-center items-center bg-background/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-6">
        <GlowMenu dark={dark} />
        <ThemeToggle dark={dark} onToggleDark={onToggleDark} />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between w-full">
        <ThemeToggle dark={dark} onToggleDark={onToggleDark} />
        <button className="p-2" onClick={() => setMobileOpen(true)}>
          <span className="material-symbols-outlined text-2xl text-foreground">menu</span>
        </button>

        {/* Mobile Panel */}
        <div
          className={`fixed inset-0 bg-background z-[100] transform transition-transform duration-500 ease-[var(--ease-expo-out)] ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-border flex justify-between items-center">
              <ThemeToggle dark={dark} onToggleDark={onToggleDark} />
              <button className="material-symbols-outlined text-foreground" onClick={() => setMobileOpen(false)}>close</button>
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div
                className="p-4 rounded-2xl bg-background/95 backdrop-blur-lg border border-border/40 shadow-lg"
              >
                <MobileGlowMenu dark={dark} onClose={() => setMobileOpen(false)} />
              </div>
            </div>
            <div className="p-8 border-t border-border flex justify-center">
              <span className="font-mono text-[8px] uppercase text-muted-foreground italic">v1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
