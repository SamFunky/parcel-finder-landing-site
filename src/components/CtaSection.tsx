import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="border-mystic-mint/10 relative overflow-hidden border-t bg-midnight-depth text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_-15%,#114c5a_0%,transparent_55%)]"
      />
      <div
        aria-hidden
        className="from-forsythia/8 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r via-transparent to-transparent"
      />

      <div className="relative mx-auto max-w-[90rem] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-forsythia text-sm font-semibold uppercase tracking-widest">
            Get started
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Ready to find better parcels faster?
          </h2>
          <p className="text-mystic-mint/90 mx-auto mt-4 max-w-xl text-lg leading-relaxed">
            Book a quick demo and see how Parcel Finder fits your current workflow.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" type="button">
              Book demo
            </Button>
            <Button
              size="lg"
              type="button"
              variant="outline"
              className="border-mystic-mint/30 text-foreground hover:bg-mystic-mint/10 hover:text-foreground"
            >
              Start free trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
