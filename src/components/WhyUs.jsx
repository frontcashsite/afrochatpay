import FadeIn from './FadeIn'

const stats = [
  { value: '50,000+',   label: 'Active earners',      desc: 'Across Uganda, Kenya, and Tanzania' },
  { value: '99.2%',     label: 'Payout success rate', desc: 'Payments processed reliably, every time' },
  { value: '< 5 min',   label: 'Average payout time', desc: 'From task approval to MTN Mobile Money' },
  { value: 'UGX 2,000', label: 'Minimum withdrawal',  desc: 'No large balance required to cash out' },
]

export default function WhyUs() {
  return (
    <section className="py-16 lg:py-24 bg-[#08080E]" id="how-it-works">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <FadeIn>
            <span className="section-label">Why Click Pesa</span>
            <h2 className="section-heading mb-5">
              Reliability isn't a feature.<br />It's the baseline.
            </h2>
            <p className="text-[17px] text-gray-400 leading-relaxed mb-5">
              Most earning platforms are slow to pay, vague about rates, or inconsistent in task supply. Click Pesa is designed to be the opposite — predictable, transparent, and honest about what's possible.
            </p>
            <p className="text-[15px] text-gray-500 leading-relaxed">
              We verify every task source, process payments at the moment of approval, and give you a complete audit trail of every transaction in your account.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label, desc }, i) => (
              <FadeIn key={label} delay={i * 80}>
                <div className="h-full p-5 rounded-xl border border-white/[0.08] bg-[#111126] hover:border-[#5B4FE8]/30 hover:-translate-y-0.5 transition-all duration-200">
                  <p className="text-[26px] font-bold text-white leading-none mb-2">{value}</p>
                  <p className="text-sm font-semibold text-gray-200 mb-1">{label}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
