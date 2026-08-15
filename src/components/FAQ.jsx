import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const CTA = 'https://mullaprime.com/user/register.php?ref=ClickPesa'

const faqs = [
  {
    q: 'Is it free to create an account?',
    a: 'Yes, registration is free. A one-time activation unlocks the full task marketplace and higher-paying task categories.',
  },
  {
    q: 'How and when are payments processed?',
    a: 'Earnings are transferred to MTN Mobile Money or Airtel Money typically within minutes of task approval. We process continuously — not in daily batches.',
  },
  {
    q: 'What is the minimum withdrawal amount?',
    a: 'The minimum withdrawal is UGX 2,000. There are no fees on withdrawals to mobile money wallets.',
  },
  {
    q: 'What types of tasks are available?',
    a: 'Tasks include paid chat sessions, YouTube video reviews, trivia quizzes, movie reviews, WhatsApp status posts, TikTok tasks, music reviews, and referral programs. New task types are added regularly.',
  },
  {
    q: 'Do I need to download an app?',
    a: 'No. Click Pesa runs entirely in your browser. It works on any smartphone, tablet, or computer — even on a slow data connection.',
  },
  {
    q: 'How does the referral program work?',
    a: 'Each account has a unique referral link. When someone registers and activates through your link, you receive UGX 5,000, plus a share of their ongoing earnings for a set period.',
  },
  {
    q: 'Is my information secure?',
    a: 'We use 256-bit SSL encryption and follow industry-standard data protection practices. We do not sell personal data to third parties.',
  },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.08] last:border-0">
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left group min-h-[56px]"
      >
        <span className="text-[14px] font-semibold text-gray-200 pr-6 group-hover:text-white transition-colors">
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-48 pb-5' : 'max-h-0'}`}>
        <p className="text-[14px] text-gray-500 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-16 lg:py-24 bg-[#08080E]" id="faq">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left */}
          <div className="lg:col-span-4">
            <span className="section-label">FAQ</span>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Common questions</h2>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              Can't find an answer?{' '}
              <a href={CTA} target="_blank" rel="noopener noreferrer" className="text-[#7C6FF7] font-medium hover:text-white transition-colors">
                Contact support
              </a>
            </p>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 lg:col-start-6">
            {faqs.map(item => <Item key={item.q} {...item} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
