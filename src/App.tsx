import { CtaSection } from '@/components/CtaSection'
import { FaqSection } from '@/components/FaqSection'
import { Header } from '@/components/Header'
import { PricingSection } from '@/components/PricingSection'
import { ResultsProofSection } from '@/components/ResultsProofSection'
import { SolutionSection } from '@/components/SolutionSection'
import { Button } from '@/components/ui/button'
// import Dither from '@/components/Dither'
import { Safari } from '@/components/ui/safari'

function App() {
  return (
    <>
      <main className="text-foreground relative min-h-svh w-full flow-root overflow-x-hidden bg-black">
        <div className="pointer-events-none absolute inset-0">
          {/* <Dither
            waveColor={[0.067, 0.298, 0.353]}
            waveSpeed={0.06}
            waveFrequency={2.75}
            waveAmplitude={0.35}
            colorNum={4}
            pixelSize={2}
            downGradient={[50, 10]}
            upGradient={[20, -3]}
            disableAnimation={true}
            enableMouseInteraction={false}
            mouseRadius={1}
            seed={5}
          /> */}
        </div>

        <div className="relative z-10">
          <Header />
          <section className="mx-auto max-w-[90rem] px-6 pb-0 pt-20 md:pt-28">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <span className="mb-6 inline-flex items-center rounded-full border border-mystic-mint/30 bg-oceanic-noir/60 px-4 py-1 text-sm">
                New parcel matching engine
              </span>
              <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
                Find the Right Parcel Faster
              </h1>
              <p className="text-mystic-mint mt-6 max-w-2xl text-lg">
                Upload your requirements and get the best parcel matches in seconds.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" type="button">
                  Create account
                </Button>
                <Button variant="secondary" size="lg" type="button">
                  Demo video
                </Button>
              </div>
            </div>

            <div className="relative mx-auto mt-14 max-w-5xl">
              <Safari
                url="app.parcelfinder.com/dashboard"
                className="relative z-0 drop-shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black"
              />
            </div>
          </section>

          <section className="relative z-20 -mt-24 pt-8 pb-24 md:-mt-32 md:pt-12 md:pb-32">
            <div className="mx-auto max-w-[90rem] px-6">
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-mystic-mint/75">
                  <span className="h-px w-8 bg-mystic-mint/30" />
                  <span>Problem</span>
                  <span className="h-px w-8 bg-mystic-mint/30" />
                </div>
                <h2 className="mt-6 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  Picking the right parcel is still mostly manual work
                </h2>
                <p className="text-mystic-mint mt-4 text-lg">
                  Teams waste hours comparing options, double-checking constraints, and revisiting decisions.
                  The process is slow, inconsistent, and hard to trust at scale.
                </p>
                <p className="text-mystic-mint/80 mt-4 text-base">
                  Most teams are still stitching together spreadsheets, map tools, and manual scoring.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SolutionSection />

      <ResultsProofSection />

      <PricingSection />

      <FaqSection />

      <CtaSection />
    </>
  )
}

export default App
