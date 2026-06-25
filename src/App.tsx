import { Header } from '@/components/Header'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Dither from '@/components/Dither'
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
            downGradient={[50, 30]}
            upGradient={[20, -3]}
            disableAnimation={true}
            enableMouseInteraction={false}
            mouseRadius={1}
            seed={5}
          /> */}
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

          <section className="py-24 md:py-32">
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

      <section className="w-full bg-white py-24 text-[#172B36] md:py-32">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#114C5A]/75">
              <span className="h-px w-8 bg-[#114C5A]/30" />
              <span>Results</span>
              <span className="h-px w-8 bg-[#114C5A]/30" />
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              Outcomes teams care about
            </h2>
            <p className="mt-4 text-lg text-[#114C5A]/80">
              Faster recommendations, better consistency, and clear reasoning behind every shortlist.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            <Card className="border-[#114C5A]/15 bg-[#F1F6F4] py-0 text-[#172B36] shadow-none">
              <CardHeader className="p-6 pb-3">
                <CardTitle className="text-4xl">70%</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-sm text-[#114C5A]/80">Less time spent creating initial parcel shortlists.</p>
              </CardContent>
            </Card>

            <Card className="border-[#114C5A]/15 bg-[#F1F6F4] py-0 text-[#172B36] shadow-none">
              <CardHeader className="p-6 pb-3">
                <CardTitle className="text-4xl">3x</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-sm text-[#114C5A]/80">More candidate parcels evaluated in the same review window.</p>
              </CardContent>
            </Card>

            <Card className="border-[#114C5A]/15 bg-[#F1F6F4] py-0 text-[#172B36] shadow-none">
              <CardHeader className="p-6 pb-3">
                <CardTitle className="text-4xl">100%</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-sm text-[#114C5A]/80">Traceable scoring rationale for every recommendation.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F1F6F4] py-24 text-[#172B36] md:py-32">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#114C5A]/75">
              <span className="h-px w-8 bg-[#114C5A]/30" />
              <span>Social proof</span>
              <span className="h-px w-8 bg-[#114C5A]/30" />
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              Trusted by teams making high-stakes parcel decisions
            </h2>
            <p className="mt-4 text-lg text-[#114C5A]/80">
              Replace these placeholders with real customer quotes as you onboard early users.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
            <Card className="border-[#114C5A]/15 bg-white py-0 text-[#172B36] shadow-none">
              <CardContent className="p-6">
                <p className="text-base leading-relaxed text-[#114C5A]/85">
                  “Parcel Finder cut our first-pass analysis time from days to hours. The shortlist quality
                  improved immediately.”
                </p>
                <div className="mt-6 border-t border-[#114C5A]/15 pt-4">
                  <p className="font-medium">Operations Lead</p>
                  <p className="text-sm text-[#114C5A]/70">Regional Logistics Firm</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#114C5A]/15 bg-white py-0 text-[#172B36] shadow-none">
              <CardContent className="p-6">
                <p className="text-base leading-relaxed text-[#114C5A]/85">
                  “The scoring transparency helped us align stakeholders fast. Everyone could see why a
                  parcel ranked where it did.”
                </p>
                <div className="mt-6 border-t border-[#114C5A]/15 pt-4">
                  <p className="font-medium">Site Selection Manager</p>
                  <p className="text-sm text-[#114C5A]/70">Industrial Developer</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#114C5A]/15 bg-white py-0 text-[#172B36] shadow-none">
              <CardContent className="p-6">
                <p className="text-base leading-relaxed text-[#114C5A]/85">
                  “We finally have a consistent decision framework instead of ad-hoc spreadsheet logic. It’s
                  easier to defend every recommendation.”
                </p>
                <div className="mt-6 border-t border-[#114C5A]/15 pt-4">
                  <p className="font-medium">Director of Expansion</p>
                  <p className="text-sm text-[#114C5A]/70">Multi-site Retail Group</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-24 text-[#172B36] md:py-32">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#114C5A]/75">
              <span className="h-px w-8 bg-[#114C5A]/30" />
              <span>Pricing</span>
              <span className="h-px w-8 bg-[#114C5A]/30" />
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              Start simple, scale as you grow
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
            <Card className="min-h-[38rem] border-[#06b6d4]/25 bg-[radial-gradient(120%_120%_at_15%_0%,#114C5A_0%,#0a2030_55%,#08141f_100%)] py-0 text-[#F1F6F4] shadow-[0_0_0_1px_rgba(6,182,212,0.15),0_16px_40px_rgba(0,0,0,0.45)]">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-2xl text-white">Starter</CardTitle>
                <p className="text-sm text-[#D9E8E2]/80">For small teams validating locations</p>
              </CardHeader>
              <CardContent className="flex h-full flex-col px-6 pb-6">
                <p className="text-4xl font-semibold text-white">$99<span className="text-base font-normal text-[#D9E8E2]/70">/mo</span></p>
                <p className="mt-2 text-sm font-medium text-[#D9E8E2]">Included benefits</p>
                <ul className="mt-4 space-y-2 text-sm text-[#D9E8E2]/85">
                  <li className="flex items-start gap-2"><span className="mt-1 size-2.5 rounded-sm bg-[#06b6d4]" />Up to 3 active projects</li>
                  <li className="flex items-start gap-2"><span className="mt-1 size-2.5 rounded-sm bg-[#06b6d4]" />Core scoring engine</li>
                  <li className="flex items-start gap-2"><span className="mt-1 size-2.5 rounded-sm bg-[#06b6d4]" />Email support</li>
                </ul>
                <Button className="mt-auto w-full bg-[#06b6d4] text-[#08141f] hover:bg-[#22d3ee]" type="button">Choose Starter</Button>
              </CardContent>
            </Card>

            <Card className="relative min-h-[40.5rem] border-[#06b6d4]/45 bg-[radial-gradient(120%_120%_at_15%_0%,#114C5A_0%,#0a2030_55%,#08141f_100%)] py-0 text-[#F1F6F4] shadow-[0_0_0_1px_rgba(6,182,212,0.3),0_24px_50px_rgba(0,0,0,0.5)]">
              <CardHeader className="p-6 pb-2">
                <div className="mb-1 inline-flex w-fit rounded-full bg-[#06b6d4] px-2 py-1 text-xs font-semibold text-[#08141f]">
                  Most popular
                </div>
                <CardTitle className="text-2xl text-white">Pro</CardTitle>
                <p className="text-sm text-[#D9E8E2]/80">For operations teams and analysts</p>
              </CardHeader>
              <CardContent className="flex h-full flex-col px-6 pb-6">
                <p className="text-4xl font-semibold text-white">$299<span className="text-base font-normal text-[#D9E8E2]/70">/mo</span></p>
                <p className="mt-2 text-sm font-medium text-[#D9E8E2]">Included benefits</p>
                <ul className="mt-4 space-y-2 text-sm text-[#D9E8E2]/85">
                  <li className="flex items-start gap-2"><span className="mt-1 size-2.5 rounded-sm bg-[#06b6d4]" />Unlimited projects</li>
                  <li className="flex items-start gap-2"><span className="mt-1 size-2.5 rounded-sm bg-[#06b6d4]" />Custom weighted scoring</li>
                  <li className="flex items-start gap-2"><span className="mt-1 size-2.5 rounded-sm bg-[#06b6d4]" />Team collaboration</li>
                </ul>
                <Button className="mt-auto w-full bg-[#06b6d4] text-[#08141f] hover:bg-[#22d3ee]" type="button">Choose Pro</Button>
              </CardContent>
            </Card>

            <Card className="min-h-[38rem] border-[#06b6d4]/25 bg-[radial-gradient(120%_120%_at_15%_0%,#114C5A_0%,#0a2030_55%,#08141f_100%)] py-0 text-[#F1F6F4] shadow-[0_0_0_1px_rgba(6,182,212,0.15),0_16px_40px_rgba(0,0,0,0.45)]">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-2xl text-white">Enterprise</CardTitle>
                <p className="text-sm text-[#D9E8E2]/80">For multi-region and custom workflows</p>
              </CardHeader>
              <CardContent className="flex h-full flex-col px-6 pb-6">
                <p className="text-4xl font-semibold text-white">Custom</p>
                <p className="mt-2 text-sm font-medium text-[#D9E8E2]">Everything in Pro, plus</p>
                <ul className="mt-4 space-y-2 text-sm text-[#D9E8E2]/85">
                  <li className="flex items-start gap-2"><span className="mt-1 size-2.5 rounded-sm bg-[#06b6d4]" />Private deployment options</li>
                  <li className="flex items-start gap-2"><span className="mt-1 size-2.5 rounded-sm bg-[#06b6d4]" />API and integrations</li>
                  <li className="flex items-start gap-2"><span className="mt-1 size-2.5 rounded-sm bg-[#06b6d4]" />Priority onboarding</li>
                </ul>
                <Button className="mt-auto w-full bg-[#06b6d4] text-[#08141f] hover:bg-[#22d3ee]" type="button">Talk to sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F1F6F4] py-24 text-[#172B36] md:py-32">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#114C5A]/75">
              <span className="h-px w-8 bg-[#114C5A]/30" />
              <span>FAQ</span>
              <span className="h-px w-8 bg-[#114C5A]/30" />
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              Questions teams usually ask
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-4xl">
            <Accordion defaultValue={['faq-1']} className="border-[#114C5A]/15 bg-white">
              <AccordionItem value="faq-1">
                <AccordionTrigger>How quickly can we get started?</AccordionTrigger>
                <AccordionContent>
                  Most teams are live in under a day with CSV import and basic requirement setup.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>Can we customize scoring criteria?</AccordionTrigger>
                <AccordionContent>
                  Yes. You can set custom weights and constraints so rankings match your internal process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Do you support enterprise security requirements?</AccordionTrigger>
                <AccordionContent>
                  Enterprise plans include SSO options, audit trails, and deployment paths tailored to your policies.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger>What if we need help onboarding?</AccordionTrigger>
                <AccordionContent>
                  We provide guided onboarding and best-practice setup so your team can ship recommendations fast.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#114C5A] py-24 text-[#F1F6F4] md:py-32">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Ready to find better parcels faster?
            </h2>
            <p className="mt-4 text-lg text-[#D9E8E2]">
              Book a quick demo and see how Parcel Finder fits your current workflow.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button type="button">Book demo</Button>
              <Button variant="secondary" type="button">Start free trial</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
