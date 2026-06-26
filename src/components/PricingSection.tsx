import { Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For small teams validating locations",
    price: "$99",
    priceSuffix: "/mo",
    features: ["Up to 3 active projects", "Core scoring engine", "Email support"],
    cta: "Choose Starter",
    featured: false,
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For operations teams and analysts",
    price: "$299",
    priceSuffix: "/mo",
    features: [
      "Unlimited projects",
      "Custom weighted scoring",
      "Team collaboration",
      "Priority support",
    ],
    cta: "Choose Pro",
    featured: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For multi-region and custom workflows",
    price: "Custom",
    priceSuffix: null,
    featuresLabel: "Everything in Pro, plus",
    features: ["Private deployment options", "API and integrations", "Priority onboarding"],
    cta: "Talk to sales",
    featured: false,
  },
] as const

const CARD_SURFACES: Record<(typeof PLANS)[number]["id"], string> = {
  starter:
    "bg-[radial-gradient(ellipse_95%_75%_at_0%_0%,#114c5a_0%,transparent_52%),linear-gradient(145deg,#0b1b21_0%,#050d10_55%,#101010_100%)]",
  pro: "bg-[radial-gradient(ellipse_80%_65%_at_50%_-8%,#114c5a_0%,transparent_48%),linear-gradient(180deg,#172b36_0%,#0b1b21_38%,#101010_100%)]",
  enterprise:
    "bg-[radial-gradient(ellipse_95%_75%_at_100%_0%,#114c5a_0%,transparent_52%),linear-gradient(215deg,#0b1b21_0%,#050d10_55%,#101010_100%)]",
}

function PricingCard({
  plan,
}: {
  plan: (typeof PLANS)[number]
}) {
  const { id, featured, name, tagline, price, priceSuffix, features, cta } = plan
  const featuresLabel = "featuresLabel" in plan ? plan.featuresLabel : "Included benefits"

  return (
    <Card
      className={cn(
        "relative flex flex-col overflow-hidden border-2 py-0 text-foreground shadow-none transition-transform",
        CARD_SURFACES[id],
        featured
          ? "border-forsythia/35 z-10 min-h-[42rem] md:min-h-[44rem] md:scale-[1.06] md:shadow-[0_0_60px_-12px_rgba(255,200,1,0.25)]"
          : "border-mystic-mint/25 min-h-[40rem] md:min-h-[42rem] md:scale-[1.02]"
      )}
    >
      {featured && (
        <div
          aria-hidden
          className="from-forsythia/15 pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b to-transparent"
        />
      )}

      <CardHeader className={cn("relative p-6 pb-2", featured && "md:p-8 md:pb-3")}>
        {featured && (
          <Badge className="bg-forsythia text-oceanic-noir mb-3 w-fit border-0 font-semibold">
            Most popular
          </Badge>
        )}
        <CardTitle className={cn("text-foreground", featured ? "text-3xl" : "text-2xl")}>
          {name}
        </CardTitle>
        <p className="text-mystic-mint/75 mt-1 text-sm">{tagline}</p>
      </CardHeader>

      <CardContent
        className={cn("flex flex-1 flex-col px-6 pb-6", featured && "md:px-8 md:pb-8")}
      >
        <p className={cn("font-semibold text-foreground", featured ? "text-5xl" : "text-4xl")}>
          {price}
          {priceSuffix && (
            <span className="text-mystic-mint/70 text-base font-normal">{priceSuffix}</span>
          )}
        </p>
        <p className="text-mystic-mint/90 mt-3 text-sm font-medium">{featuresLabel}</p>
        <ul className="mt-4 flex-1 space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className={cn(
                "flex items-start gap-2.5",
                featured ? "text-mystic-mint/90 text-sm" : "text-mystic-mint/85 text-sm"
              )}
            >
              <Check
                className={cn(
                  "mt-0.5 size-4 shrink-0",
                  featured ? "text-forsythia" : "text-mystic-mint"
                )}
                strokeWidth={2.5}
              />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          type="button"
          size={featured ? "lg" : "default"}
          variant={featured ? "default" : "outline"}
          className={cn(
            "mt-8 w-full",
            !featured &&
              "border-mystic-mint/25 text-foreground hover:bg-mystic-mint/10 hover:text-foreground"
          )}
        >
          {cta}
        </Button>
      </CardContent>
    </Card>
  )
}

export function PricingSection() {
  return (
    <section id="pricing" className="w-full bg-carbon py-24 text-foreground md:py-32">
      <div className="mx-auto max-w-[90rem] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-mystic-mint/75">
            <span className="h-px w-8 bg-mystic-mint/30" />
            <span>Pricing</span>
            <span className="h-px w-8 bg-mystic-mint/30" />
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Start simple, scale as you grow
          </h2>
          <p className="text-mystic-mint/85 mt-4 text-lg">
            Flexible plans for every stage of your parcel search workflow.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl items-end gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
          {PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
