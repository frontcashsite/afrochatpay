import FadeIn from './FadeIn'

const testimonials = [
  {
    quote: "I withdrew my first UGX 15,000 within 24 hours of signing up. The platform is straightforward — you do the task, you get paid. No drama at all.",
    name: 'Brian Ssemakula',
    role: 'Freelancer, Kampala',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format&q=75',
    earned: 'UGX 182,000 earned',
  },
  {
    quote: "The referral program is genuinely passive income. I shared my link once in a WhatsApp group and now earn UGX 5,000 for every person who activates. It works exactly as described.",
    name: 'Grace Nakayiza',
    role: 'Teacher, Gulu',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face&auto=format&q=75',
    earned: 'UGX 126,500 earned',
  },
  {
    quote: "I've tested other platforms and none deliver like AfroChatPay does. Earnings are credited immediately to my MTN wallet. No waiting period, no minimum threshold games.",
    name: 'Robert Opiyo',
    role: 'Student, Mbarara',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&auto=format&q=75',
    earned: 'UGX 89,000 earned',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-[#0D0D1A]" id="testimonials">
      <div className="container-xl">
        <FadeIn className="mb-10">
          <span className="section-label">Earner stories</span>
          <h2 className="section-heading">From people who use it every day</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map(({ quote, name, role, img, earned }, i) => (
            <FadeIn key={name} delay={i * 100}>
              <div className="h-full bg-[#111126] rounded-xl border border-white/[0.08] p-6 flex flex-col hover:border-[#5B4FE8]/30 hover:-translate-y-0.5 transition-all duration-200">
                <div className="mb-5">
                  <span className="inline-block bg-emerald-500/15 text-emerald-400 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-emerald-500/20">
                    {earned}
                  </span>
                </div>
                <blockquote className="text-[14px] text-gray-400 leading-relaxed flex-1 mb-6">
                  "{quote}"
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                  <img
                    src={img}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    width="36"
                    height="36"
                    className="w-9 h-9 rounded-full object-cover flex-shrink-0 border-2 border-white/10"
                  />
                  <div>
                    <p className="text-[13px] font-semibold text-white leading-none mb-0.5">{name}</p>
                    <p className="text-[11px] text-gray-500">{role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
