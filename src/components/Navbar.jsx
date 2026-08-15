import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const CTA = 'https://mulaearn.com/register.php?ref=Workfromhome'

const links = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Tasks',        href: '#tasks' },
  { label: 'Earnings',     href: '#showcase' },
  { label: 'FAQ',          href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-[#08080E] transition-all duration-200 ${
        scrolled ? 'border-b border-white/10 shadow-lg shadow-black/40' : 'border-b border-transparent'
      }`}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-7 h-7 bg-[#5B4FE8] rounded-[6px] flex items-center justify-center">
              <span className="text-white text-[9px] font-bold tracking-tight">ACP</span>
            </div>
            <span className="text-[15px] font-semibold text-white tracking-tight">
              Afro<span className="text-[#7C6FF7]">ChatPay</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-3.5 py-2 rounded-md hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-3.5 py-2"
            >
              Log in
            </a>
            <a
              href={CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-400 hover:text-white rounded-md min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0D0D1A]">
          <div className="container-xl py-4 flex flex-col gap-1">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[15px] font-medium text-gray-300 hover:text-white hover:bg-white/5 px-3 py-3 rounded-md transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
              <a href={CTA} target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-gray-400 px-3 py-3">
                Log in
              </a>
              <a href={CTA} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center text-[15px]">
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
