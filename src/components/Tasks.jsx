import { ArrowRight } from 'lucide-react'
import FadeIn from './FadeIn'

const CTA = 'https://mulaearn.com/register.php?ref=Workfromhome'

const tasks = [
  {
    title: 'Paid Chat With Lonely Foreigners',
    desc: 'Chat with foreigners looking for friendly conversation. Get paid per session directly to your MTN wallet.',
    pay: 'UGX 20,000',
    unit: 'per session',
    cta: 'SIGN UP TO CHAT',
    img: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=480&h=280&fit=crop&auto=format&q=75',
    badge: 'Popular',
    badgeCls: 'bg-[#5B4FE8]/80 text-white',
  },
  {
    title: 'Paid YouTube Videos',
    desc: 'Watch YouTube videos and submit short reviews. Each verified watch earns you instant cash.',
    pay: 'UGX 1,500–3,000',
    unit: 'per video',
    cta: 'REGISTER TO WATCH',
    img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=480&h=280&fit=crop&auto=format&q=75',
    badge: null,
  },
  {
    title: 'Paid Trivia Questions',
    desc: 'Answer fun trivia quizzes on topics you already know. The more you know, the more you earn.',
    pay: 'UGX 2,000–5,000',
    unit: 'per quiz',
    cta: 'REGISTER TO ANSWER',
    img: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=480&h=280&fit=crop&auto=format&q=75',
    badge: 'Fast',
    badgeCls: 'bg-amber-500/80 text-white',
  },
  {
    title: 'Paid Movies',
    desc: 'Watch short movie clips and give your honest feedback. Earn while you enjoy content from your phone.',
    pay: 'UGX 3,000–6,000',
    unit: 'per movie',
    cta: 'SIGN UP TO WATCH',
    img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=480&h=280&fit=crop&auto=format&q=75',
    badge: null,
  },
  {
    title: 'Paid WhatsApp Status Views',
    desc: 'Post promotional content to your WhatsApp status and get paid for each confirmed view your network sees.',
    pay: 'UGX 1,000–2,500',
    unit: 'per post',
    cta: 'REGISTER TO POST',
    img: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=480&h=280&fit=crop&auto=format&q=75',
    badge: 'Easy',
    badgeCls: 'bg-emerald-500/80 text-white',
  },
  {
    title: 'Downloading TikTok Videos',
    desc: 'Download specified TikTok videos and confirm completion. Simple tasks that pay fast.',
    pay: 'UGX 500–1,500',
    unit: 'per download',
    cta: 'REGISTER TO DOWNLOAD',
    img: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=480&h=280&fit=crop&auto=format&q=75',
    badge: null,
  },
  {
    title: 'Paid TikTok Videos',
    desc: 'Watch TikTok videos and engage with content. Stack earnings by completing multiple tasks daily.',
    pay: 'UGX 1,000–2,500',
    unit: 'per video',
    cta: 'SIGN UP TO WATCH',
    img: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=480&h=280&fit=crop&auto=format&q=75',
    badge: 'High volume',
    badgeCls: 'bg-violet-500/80 text-white',
  },
  {
    title: 'Paid Online Music',
    desc: 'Listen to new music tracks and rate them. Artists pay for genuine feedback — you get paid to provide it.',
    pay: 'UGX 800–2,000',
    unit: 'per track',
    cta: 'SIGN UP TO LISTEN',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=480&h=280&fit=crop&auto=format&q=75',
    badge: null,
  },
]

export default function Tasks() {
  return (
    <section className="py-16 lg:py-24 bg-[#08080E]" id="tasks">
      <div className="container-xl">
        <FadeIn className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="section-label">Available tasks</span>
            <h2 className="section-heading">Pick a task. Get paid.</h2>
          </div>
          <a
            href={CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7C6FF7] hover:text-white transition-colors flex-shrink-0 min-h-[44px]"
          >
            View all tasks <ArrowRight size={14} />
          </a>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tasks.map(({ title, desc, pay, unit, cta, img, badge, badgeCls }, i) => (
            <FadeIn key={title} delay={(i % 4) * 70}>
              <div className="group flex flex-col h-full rounded-xl border border-white/10 bg-[#111126] overflow-hidden hover:border-[#5B4FE8]/50 hover:shadow-lg hover:shadow-[#5B4FE8]/10 hover:-translate-y-0.5 transition-all duration-200">
                <div className="relative overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    width="480"
                    height="280"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {badge && (
                    <span className={`absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeCls}`}>
                      {badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-col flex-1 p-4">
                  <h3 className="text-[13px] font-semibold text-white leading-snug mb-1.5">{title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed flex-1 mb-3">{desc}</p>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-[15px] font-bold text-white">{pay}</span>
                    <span className="text-[11px] text-gray-500">{unit}</span>
                  </div>

                  <a
                    href={CTA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#5B4FE8] hover:bg-[#4A3ED4] text-white text-[11px] font-bold tracking-wider py-3 rounded-lg transition-colors min-h-[44px] flex items-center justify-center"
                  >
                    {cta}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
