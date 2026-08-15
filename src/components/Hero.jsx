import { ArrowRight, Shield, Zap, Users, MessageSquare, Play, CheckSquare, TrendingUp } from 'lucide-react'

const CTA = 'https://mulaearn.com/register.php?ref=Workfromhome'

const recentActivity = [
  { Icon: MessageSquare, label: 'Chat session completed', sub: '2 minutes ago',  amount: '+UGX 20,000', bg: 'bg-[#5B4FE8]/20',   color: 'text-[#7C6FF7]' },
  { Icon: Play,          label: 'Video review submitted', sub: '20 minutes ago', amount: '+UGX 2,000',  bg: 'bg-red-500/15',     color: 'text-red-400' },
  { Icon: CheckSquare,   label: 'Survey completed',       sub: '1 hour ago',     amount: '+UGX 8,000',  bg: 'bg-emerald-500/15', color: 'text-emerald-400' },
]

function DashboardCard() {
  return (
    <div className="bg-[#111126] rounded-2xl border border-white/10 shadow-2xl shadow-black/60 p-5 w-full">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <img
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face&auto=format&q=80"
            alt="Sandra Nakato"
            loading="eager"
            decoding="async"
            width="36"
            height="36"
            className="w-9 h-9 rounded-full object-cover flex-shrink-0 border-2 border-white/10"
          />
          <div>
            <p className="text-[13px] font-semibold text-white leading-none mb-0.5">Sandra Nakato</p>
            <p className="text-[11px] text-gray-500">Personal account</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="block w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[11px] text-gray-500 font-medium">Active</span>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl px-4 py-3.5 mb-4 border border-white/[0.08]">
        <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-1">Available balance</p>
        <span className="text-[24px] font-bold text-white tracking-tight leading-none block">UGX 423,000</span>
        <div className="flex items-center gap-1.5 mt-1.5">
          <TrendingUp size={12} className="text-emerald-400" />
          <span className="text-[11px] font-semibold text-emerald-400">UGX 34,500 earned this week</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2.5">Recent earnings</p>
        <div className="space-y-0.5">
          {recentActivity.map(({ Icon, label, sub, amount, bg, color }) => (
            <div key={label} className="flex items-center gap-3 py-2.5 border-b border-white/[0.08] last:border-0">
              <div className={`w-7 h-7 ${bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon size={13} className={color} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-medium text-gray-200 leading-none mb-0.5">{label}</p>
                <p className="text-[11px] text-gray-500">{sub}</p>
              </div>
              <span className="text-[12px] font-semibold text-emerald-400">{amount}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href={CTA}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full justify-center text-sm rounded-xl"
      >
        Withdraw to MTN Mobile Money
      </a>
    </div>
  )
}

const trustItems = [
  { Icon: Shield, label: '256-bit encryption' },
  { Icon: Zap,    label: 'Instant payouts' },
  { Icon: Users,  label: '50,000+ earners' },
]

export default function Hero() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#08080E]" id="home">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left – text, plays on page load */}
          <div className="lg:col-span-6 xl:col-span-7 hero-fade">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block flex-shrink-0" />
              Live in Uganda · Kenya · Tanzania
            </div>

            <h1 className="text-4xl lg:text-[52px] font-bold text-white leading-[1.1] tracking-tight mb-5">
              Get paid for every<br />
              task you complete<br />
              online.
            </h1>

            <p className="text-[17px] text-gray-400 leading-relaxed mb-8 max-w-lg">
              AfroChatPay connects you with verified online tasks — chat, watch videos, answer surveys — and pays directly to your MTN or Airtel Money wallet.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-9">
              <a href={CTA} target="_blank" rel="noopener noreferrer" className="btn-primary text-[15px] px-6">
                Create free account <ArrowRight size={16} />
              </a>
              <a href="#tasks" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-gray-400 hover:text-white transition-colors py-3 min-h-[44px]">
                See all tasks <ArrowRight size={14} />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              {trustItems.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon size={14} className="text-gray-600 flex-shrink-0" />
                  <span className="text-sm text-gray-500">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – card, slightly delayed */}
          <div className="lg:col-span-6 xl:col-span-5 hero-fade-late">
            <div className="relative">
              <div className="absolute -inset-6 bg-[#5B4FE8]/8 rounded-3xl blur-3xl -z-10" />
              <DashboardCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
