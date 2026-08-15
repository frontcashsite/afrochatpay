import { CheckCircle, ArrowRight } from 'lucide-react'
import FadeIn from './FadeIn'

const CTA = 'https://mulaearn.com/register.php?ref=Workfromhome'

const earnTypes = [
  { name: 'Chat Sessions',           rate: 'UGX 20,000 / hr',          desc: 'Engage in moderated conversations with verified clients' },
  { name: 'Video & Content Reviews', rate: 'UGX 1,500–3,000 / task',   desc: 'Watch content and provide structured feedback' },
  { name: 'Survey Completion',       rate: 'UGX 3,000–8,000 / survey', desc: 'Answer market research questionnaires' },
  { name: 'Referral Program',        rate: 'UGX 5,000+ / referral',    desc: 'Earn for every verified person you refer' },
]

const tasks = [
  { title: 'Feedback on mobile banking app UX',   category: 'Product Review', pay: 'UGX 4,000',  eta: '~12 min', badge: 'Urgent',   badgeCls: 'bg-amber-500/20 text-amber-400' },
  { title: 'Customer support chat session',        category: 'Chat Task',      pay: 'UGX 20,000', eta: '~30 min', badge: null },
  { title: 'Mobile money usability survey',        category: 'Survey',         pay: 'UGX 8,000',  eta: '~20 min', badge: null },
  { title: 'Social media comment moderation',      category: 'Moderation',     pay: 'UGX 5,500',  eta: '~25 min', badge: 'High pay', badgeCls: 'bg-emerald-500/20 text-emerald-400' },
]

export default function Showcase() {
  return (
    <section className="py-16 lg:py-24 bg-[#0D0D1A]" id="showcase">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left – task list mockup */}
          <FadeIn className="order-2 lg:order-1" delay={120}>
            <div className="bg-[#111126] rounded-2xl border border-white/[0.08] p-5">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-semibold text-white">Available Tasks</h4>
                <span className="text-[11px] bg-[#5B4FE8]/20 text-[#7C6FF7] font-semibold px-2.5 py-1 rounded-full">24 new</span>
              </div>
              <p className="text-xs text-gray-500 mb-5">Updated 3 minutes ago</p>

              {tasks.map((t, i) => (
                <div key={i} className="flex items-center gap-3 py-3.5 border-t border-white/[0.06] first:border-0">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <span className="text-[13px] font-medium text-gray-200 truncate">{t.title}</span>
                      {t.badge && (
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${t.badgeCls}`}>
                          {t.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-gray-500">{t.category} · {t.eta}</p>
                  </div>
                  <span className="text-sm font-bold text-white flex-shrink-0">{t.pay}</span>
                </div>
              ))}

              <div className="pt-4 mt-1 border-t border-white/[0.06]">
                <a href={CTA} target="_blank" rel="noopener noreferrer" className="text-[13px] font-semibold text-[#7C6FF7] hover:text-white transition-colors">
                  View all available tasks →
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right – copy */}
          <FadeIn className="order-1 lg:order-2">
            <span className="section-label">Earning methods</span>
            <h2 className="section-heading mb-4">
              Your earnings,<br />structured and clear
            </h2>
            <p className="text-[17px] text-gray-400 leading-relaxed mb-8">
              Each task category has a defined payout range. You know what you'll earn before you start — no surprises, no hidden deductions.
            </p>

            <div className="space-y-2.5 mb-8">
              {earnTypes.map(({ name, rate, desc }) => (
                <div key={name} className="flex items-start gap-3 px-4 py-3.5 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:border-[#5B4FE8]/30 transition-colors duration-200">
                  <CheckCircle size={15} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap mb-0.5">
                      <span className="text-sm font-semibold text-white">{name}</span>
                      <span className="text-xs font-semibold text-[#7C6FF7]">{rate}</span>
                    </div>
                    <p className="text-xs text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href={CTA} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Start earning now <ArrowRight size={15} />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
