import FadeIn from './FadeIn'

const partners = [
  'MTN Mobile Money',
  'Airtel Money Uganda',
  'Stanbic Bank Uganda',
  'dfcu Bank',
  'Centenary Bank',
  'ABSA Uganda',
]

export default function TrustedBy() {
  return (
    <section className="py-10 bg-gray-50 border-y border-gray-200">
      <div className="container-xl">
        <FadeIn>
          <p className="text-center text-[10px] font-semibold text-gray-600 uppercase tracking-[0.15em] mb-7">
            Payments processed through trusted providers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {partners.map(name => (
              <span key={name} className="text-[13px] font-semibold text-gray-600 select-none">
                {name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
