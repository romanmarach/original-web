import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navLinks } from '../data/content'

function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-gold bg-[#0a0a0fd9] backdrop-blur-xl"
    >
      <nav className="section-shell flex min-h-16 flex-wrap items-center justify-between gap-2 py-2 md:py-0">
        <NavLink
          to="/"
          className="font-display text-[17px] tracking-[0.04em] text-gold no-underline"
        >
          Roman Marach
        </NavLink>

        <div className="flex flex-wrap gap-1 md:gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-1.5 font-body text-[10px] uppercase tracking-[0.18em] no-underline transition-colors ${
                  isActive
                    ? 'bg-gold font-bold text-ink'
                    : 'text-muted-fg hover:text-paper'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar
