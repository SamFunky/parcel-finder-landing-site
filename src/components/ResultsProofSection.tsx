import { Quote } from "lucide-react"

const STATS = [
  {
    value: "70%",
    label: "Less time spent building initial parcel shortlists.",
  },
  {
    value: "3×",
    label: "More candidates evaluated in the same review window.",
  },
  {
    value: "100%",
    label: "Traceable scoring rationale on every recommendation.",
  },
]

const TESTIMONIALS = [
  {
    quote:
      "Parcel Finder cut our first-pass analysis time from days to hours. The shortlist quality improved immediately.",
    name: "Operations Lead",
    company: "Regional Logistics Firm",
  },
  {
    quote:
      "The scoring transparency helped us align stakeholders fast. Everyone could see why a parcel ranked where it did.",
    name: "Site Selection Manager",
    company: "Industrial Developer",
  },
  {
    quote:
      "We finally have a consistent decision framework instead of ad-hoc spreadsheet logic. It's easier to defend every recommendation.",
    name: "Director of Expansion",
    company: "Multi-site Retail Group",
  },
]

export function ResultsProofSection() {
  return (
    <section className="border-mystic-mint/10 border-y bg-midnight-depth text-foreground">
      <div className="mx-auto max-w-[90rem] px-6 py-24 md:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-16 xl:gap-24">
          <div>
            <p className="text-forsythia text-sm font-semibold uppercase tracking-widest">
              Results & proof
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Faster decisions teams can stand behind
            </h2>
            <p className="text-mystic-mint/90 mt-4 max-w-md text-lg leading-relaxed">
              Real outcomes from teams replacing manual parcel review with a ranked, explainable
              workflow.
            </p>

            <dl className="mt-12 divide-mystic-mint/15 divide-y border-mystic-mint/15 border-t">
              {STATS.map(({ value, label }) => (
                <div key={value} className="flex gap-6 py-6 first:pt-6">
                  <dt className="text-forsythia w-24 shrink-0 text-4xl font-semibold tracking-tight md:text-5xl">
                    {value}
                  </dt>
                  <dd className="text-mystic-mint/85 self-center text-base leading-relaxed">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-16 flex flex-col gap-6 lg:mt-2">
            {TESTIMONIALS.map((item, index) => (
              <figure
                key={item.name}
                className={
                  index === 1
                    ? "border-forsythia/25 from-forsythia/5 rounded-2xl border bg-gradient-to-br to-transparent p-6 md:p-8"
                    : "border-mystic-mint/10 rounded-2xl border bg-carbon/25 p-6 md:p-8"
                }
              >
                <Quote
                  className={
                    index === 1 ? "text-forsythia size-8 opacity-80" : "text-mystic-mint/30 size-7"
                  }
                  aria-hidden
                />
                <blockquote className="text-foreground/95 mt-4 text-base leading-relaxed md:text-lg">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div
                    className={
                      index === 1
                        ? "bg-forsythia/20 size-9 shrink-0 rounded-full"
                        : "bg-mystic-mint/15 size-9 shrink-0 rounded-full"
                    }
                    aria-hidden
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.name}</p>
                    <p className="text-mystic-mint/65 text-sm">{item.company}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
