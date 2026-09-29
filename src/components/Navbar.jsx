import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-transparent backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8" aria-label="Main">
        <div className="flex h-16 sm:h-18 md:h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <img src="/Logo-White1.png" alt="NextGen Labz Logo" className="h-8 sm:h-9 w-auto transition-transform group-hover:scale-[1.03]" />
          </Link>
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-[13px] lg:text-sm font-medium text-neutral-300">
            <li><Link to="/" className="hover:text-white px-1 py-1 rounded focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white px-1 py-1 rounded focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-white px-1 py-1 rounded focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors">Contact</Link></li>
            <li><Link to="/services" className="hover:text-white px-1 py-1 rounded focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors">Services</Link></li>
            <li><a href="/#works" className="hover:text-white px-1 py-1 rounded focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors">Works</a></li>
            <li>
              <Link to="/quote" className="inline-flex items-center gap-1 rounded-full bg-purple-600 px-5 lg:px-6 py-2 text-[11px] lg:text-xs text-white shadow-sm shadow-purple-600/40 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition">Get Quote</Link>
            </li>
          </ul>
          <button
            type="button"
            onClick={() => setOpen(o => !o)}
            className="md:hidden inline-flex items-center justify-center rounded-lg h-10 w-10 text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-purple-500/60 transition"
            aria-controls="mobile-nav"
            aria-expanded={open}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg className={`h-6 w-6 transition-transform duration-200 ${open ? 'scale-0 opacity-0 absolute' : 'scale-100 opacity-100'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            <svg className={`h-6 w-6 transition-transform duration-200 ${open ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </nav>
      <div id="mobile-nav" className={`md:hidden absolute inset-x-0 top-full bg-black/80 backdrop-blur-xl overflow-hidden transition-[max-height,opacity] duration-300 ${open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <ul className="flex flex-col gap-1.5 pb-4 pt-2 text-[13px] font-medium text-neutral-300">
            <li><Link onClick={() => setOpen(false)} to="/" className="block rounded px-3 py-2 hover:bg-neutral-800/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40">Home</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/about" className="block rounded px-3 py-2 hover:bg-neutral-800/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40">About</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/contact" className="block rounded px-3 py-2 hover:bg-neutral-800/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40">Contact</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/services" className="block rounded px-3 py-2 hover:bg-neutral-800/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40">Services</Link></li>
            <li><a onClick={() => setOpen(false)} href="/#works" className="block rounded px-3 py-2 hover:bg-neutral-800/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40">Works</a></li>
            <li><Link onClick={() => setOpen(false)} to="/quote" className="mt-1 inline-flex items-center gap-1 rounded-full bg-purple-600 px-5 py-2 text-[11px] text-white shadow-sm shadow-purple-600/40 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/60 self-start">Get Quote</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
