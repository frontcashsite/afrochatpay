const CTA = 'https://mulaearn.com/register.php?ref=Workfromhome'

const cols = {
  Product: [
    { label: 'How It Works',    href: '#how-it-works' },
    { label: 'All Tasks',       href: '#tasks' },
    { label: 'Earning Methods', href: '#showcase' },
    { label: 'Features',        href: '#features' },
  ],
  Company: [
    { label: 'About',    href: CTA },
    { label: 'Blog',     href: CTA },
    { label: 'Careers',  href: CTA },
    { label: 'Press',    href: CTA },
  ],
  Support: [
    { label: 'Help Center', href: CTA },
    { label: 'Contact Us',  href: CTA },
    { label: 'Status',      href: CTA },
    { label: 'Community',   href: CTA },
  ],
  Legal: [
    { label: 'Privacy Policy',   href: CTA },
    { label: 'Terms of Service', href: CTA },
    { label: 'Cookie Policy',    href: CTA },
    { label: 'Compliance',       href: CTA },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#08080E] border-t border-white/[0.08] pt-14 pb-10">
      <div className="container-xl">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#5B4FE8] rounded-md flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">ACP</span>
              </div>
              <span className="text-[14px] font-semibold text-white tracking-tight">
                Afro<span className="text-[#7C6FF7]">ChatPay</span>
              </span>
            </div>
            <p className="text-[13px] text-gray-500 leading-relaxed max-w-[220px]">
              Verified micro-tasks. Instant MTN Mobile Money payouts. Transparent earnings for Ugandans.
            </p>
          </div>

          {Object.entries(cols).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-4">{heading}</p>
              <ul className="space-y-3">
                {links.map(({ label, href }) => {
                  const external = href.startsWith('http')
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className="text-[13px] text-gray-500 hover:text-white transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-gray-600">© {new Date().getFullYear()} AfroChatPay. All rights reserved.</p>
          <a
            href="https://wa.me/256726956773"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] text-green-500 hover:text-green-400 font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp us here
          </a>
          <p className="text-[12px] text-gray-600">Serving earners across Uganda, Kenya & Tanzania.</p>
        </div>
      </div>
    </footer>
  )
}
