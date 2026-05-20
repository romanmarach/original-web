import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navLinks } from '../data/content'

function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur"
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <NavLink to="/" className="font-display text-sm tracking-[0.25em] text-white">
          ROMAN
        </NavLink>
        <div className="flex gap-2 md:gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-1 text-xs uppercase tracking-wider transition ${
                  isActive ? 'bg-white text-black' : 'text-gray-300 hover:text-white'
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
