import { ArrowRight } from 'lucide-react'
import FadeIn from './FadeIn'

const CTA = 'https://mulaearn.com/register.php?ref=Workfromhome'

export default function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50 border-y border-gray-100">
      <div className="container-xl">
        <FadeIn className="max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Ready to start earning in Uganda?
          </h2>
          <p className="text-[17px] text-gray-600 leading-relaxed mb-8">
            Join 50,000 earners already using AfroChatPay. Registration takes under two minutes and your first task is waiting. Payouts straight to MTN or Airtel Money.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[15px] px-7"
            >
              Create free account <ArrowRight size={16} />
            </a>
            <a
              href={CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-semibold text-gray-600 hover:text-gray-900 transition-colors min-h-[44px] flex items-center"
            >
              Already have an account? Log in →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
