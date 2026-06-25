import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Dither from '@/components/Dither'
import { Safari } from '@/components/ui/safari'

function App() {
  return (
    <>
      <main className="text-foreground relative h-svh w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-75">
          <Dither
            waveColor={[0.067, 0.298, 0.353]}
            waveSpeed={0.06}
            waveFrequency={2.00}
            waveAmplitude={0.35}
            colorNum={4}
            pixelSize={2}
            disableAnimation={true}
            enableMouseInteraction={false}
            mouseRadius={1}
            seed={24}
          />
        </div>

        <div className="relative z-10">
          <Header />
          <section className="mx-auto max-w-[90rem] px-6 pb-28 pt-20 md:pt-28">
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

            <div className="mx-auto mt-14 max-w-5xl">
              <Safari
                url="app.parcelfinder.com/dashboard"
                className="drop-shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
              />
            </div>
          </section>
        </div>
      </main>

      <section className="w-full bg-white py-24 text-[#172B36] md:py-32">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#114C5A]/75">
              <span className="h-px w-8 bg-[#114C5A]/30" />
              <span>Problem</span>
              <span className="h-px w-8 bg-[#114C5A]/30" />
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              Picking the right parcel is still mostly manual work
            </h2>
            <p className="mt-4 text-lg text-[#114C5A]/80">
              Teams waste hours comparing options, double-checking constraints, and revisiting decisions.
              The process is slow, inconsistent, and hard to trust at scale.
            </p>
            <p className="mt-4 text-base text-[#114C5A]/70">
              Most teams are still stitching together spreadsheets, map tools, and manual scoring.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F1F6F4] py-24 text-[#172B36] md:py-32">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#114C5A]/75">
              <span className="h-px w-8 bg-[#114C5A]/30" />
              <span>Solution</span>
              <span className="h-px w-8 bg-[#114C5A]/30" />
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              A simple 3-step workflow
            </h2>
            <p className="mt-4 text-lg text-[#114C5A]/80">
              Parcel Finder turns a messy review process into a clear, repeatable system.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            <Card className="border-[#114C5A]/15 bg-white py-0 text-[#172B36] shadow-none">
              <CardHeader className="p-6 pb-2">
                <div className="mb-2 inline-flex size-9 items-center justify-center rounded-full bg-[#114C5A] text-sm font-semibold text-white">
                  1
                </div>
                <CardTitle className="text-xl">Upload your requirements</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-sm text-[#114C5A]/80">
                  Import parcel data and define constraints in one place.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#114C5A]/15 bg-white py-0 text-[#172B36] shadow-none">
              <CardHeader className="p-6 pb-2">
                <div className="mb-2 inline-flex size-9 items-center justify-center rounded-full bg-[#114C5A] text-sm font-semibold text-white">
                  2
                </div>
                <CardTitle className="text-xl">Auto-score every option</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-sm text-[#114C5A]/80">
                  The engine ranks parcels by fit, risk, and priority.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#114C5A]/15 bg-white py-0 text-[#172B36] shadow-none">
              <CardHeader className="p-6 pb-2">
                <div className="mb-2 inline-flex size-9 items-center justify-center rounded-full bg-[#114C5A] text-sm font-semibold text-white">
                  3
                </div>
                <CardTitle className="text-xl">Choose with confidence</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-sm text-[#114C5A]/80">
                  Get a clear shortlist with reasons you can share.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
