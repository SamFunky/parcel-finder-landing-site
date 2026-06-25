import { ArrowRight, Eye, ListOrdered, MapPin, SlidersHorizontal, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const STEPS = [
  {
    icon: ListOrdered,
    title: "Category scores",
    body: "Data rolls into categories — each gets one number.",
  },
  {
    icon: SlidersHorizontal,
    title: "Your weights",
    body: "Slide priorities up or down to match your project.",
  },
  {
    icon: ArrowRight,
    title: "Ranked shortlist",
    body: "Top parcels in your area, sorted your way.",
  },
]

const CATEGORY_TAGS = [
  { icon: MapPin, label: "Neighborhood" },
  { icon: Users, label: "Demographic fit" },
  { icon: Eye, label: "Accessibility" },
]

export function SolutionSection() {
  return (
    <section className="w-full bg-black py-24 text-foreground md:py-32">
      <div className="mx-auto max-w-[90rem] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-mystic-mint/75">
            <span className="h-px w-8 bg-mystic-mint/30" />
            <span>Solution</span>
            <span className="h-px w-8 bg-mystic-mint/30" />
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Score it. Weight it. Rank it.
          </h2>
          <p className="text-mystic-mint mt-4 text-lg">
            Parcel data grouped into categories, weighted by you, delivered as a shortlist.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 sm:grid-cols-3 sm:gap-8">
          {STEPS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-center">
              <div className="bg-oceanic-noir border-mystic-mint/15 mx-auto flex size-14 items-center justify-center rounded-xl border">
                <Icon className="text-forsythia size-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-mystic-mint/80 mt-2 text-base leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {CATEGORY_TAGS.map(({ icon: Icon, label }) => (
            <Badge
              key={label}
              variant="outline"
              className="border-mystic-mint/20 text-mystic-mint/85 gap-2 px-4 py-1.5 text-sm font-normal"
            >
              <Icon className="size-3.5" />
              {label}
            </Badge>
          ))}
          <Badge
            variant="outline"
            className="border-mystic-mint/15 text-mystic-mint/50 px-4 py-1.5 text-sm font-normal"
          >
            + more categories
          </Badge>
        </div>
      </div>
    </section>
  )
}
