import { Zap, Shield, BarChart2, Smartphone, Users, Headphones } from 'lucide-react'
import FadeIn from './FadeIn'

const features = [
  {
    Icon: Zap,
    title: 'Instant MTN Mobile Money Payouts',
    body: 'Earnings reach your MTN or Airtel Money wallet within minutes of task approval. No holds, no arbitrary delays.',
  },
  {
    Icon: Shield,
    title: 'Verified Task Marketplace',
    body: 'Every task is reviewed before publishing. You only see guaranteed-pay opportunities from validated sources.',
  },
  {
    Icon: BarChart2,
    title: 'Transparent Earnings Tracker',
    body: 'View your complete history — pending tasks, completed work, payout records — all in one dashboard.',
  },
  {
    Icon: Users,
    title: 'Multiple Income Streams',
    body: 'Chat tasks, video reviews, surveys, and referrals. Diversify across earning types to maximise income.',
  },
  {
    Icon: Smartphone,
    title: 'Works on Any Phone',
    body: 'No app required. Access AfroChatPay from any smartphone browser on any connection speed across Uganda.',
  },
  {
    Icon: Headphones,
    title: 'Responsive Support',
    body: 'Reach us via WhatsApp or email. Most issues are resolved within a few hours — not days.',
  },
]

export default function Features() {
  return (
    <section className="py-16 lg:py-24 bg-[#0D0D1A]" id="features">
      <div className="container-xl">
        <FadeIn className="max-w-xl mb-12">
          <span className="section-label">Platform features</span>
          <h2 className="section-heading mb-4">
            Built for consistent,<br />reliable earning
          </h2>
          <p className="text-[17px] text-gray-400 leading-relaxed">
            Every part of the platform is designed to make earning straightforward — from how tasks are sourced to how payments land in your mobile wallet.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ Icon, title, body }, i) => (
            <FadeIn key={title} delay={(i % 3) * 80}>
              <div className="group h-full p-6 rounded-xl border border-white/[0.08] bg-[#111126] hover:border-[#5B4FE8]/40 hover:shadow-md hover:shadow-[#5B4FE8]/10 hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-9 h-9 bg-white/5 group-hover:bg-[#5B4FE8]/20 rounded-lg flex items-center justify-center mb-4 transition-colors duration-200">
                  <Icon size={16} className="text-gray-400 group-hover:text-[#7C6FF7] transition-colors duration-200" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
