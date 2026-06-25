import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
  {
    id: "faq-1",
    question: "How quickly can we get started?",
    answer:
      "Most teams are live in under a day. Import your search area, set category weights, and you'll have a ranked shortlist the same afternoon.",
  },
  {
    id: "faq-2",
    question: "Can we customize scoring criteria?",
    answer:
      "Yes. Weight each category to match your project — neighborhood, demographic fit, accessibility, and more — so rankings reflect how your team actually decides.",
  },
  {
    id: "faq-3",
    question: "Do you support enterprise security requirements?",
    answer:
      "Enterprise plans include SSO, audit trails, and deployment options tailored to your organization's security policies.",
  },
  {
    id: "faq-4",
    question: "What if we need help onboarding?",
    answer:
      "We offer guided onboarding and best-practice setup so your team can ship defensible recommendations without a long ramp-up.",
  },
] as const

const TALLEST_FAQ = FAQS.reduce((tallest, faq) =>
  faq.answer.length > tallest.answer.length ? faq : tallest
)

/** Invisible layout shell — reserves height for all rows + longest answer so open/close won't shift the page. */
function FaqAccordionSizer() {
  return (
    <div aria-hidden className="pointer-events-none invisible flex flex-col gap-2">
      {FAQS.map((faq) => (
        <div
          key={faq.id}
          className="rounded-lg border border-mystic-mint/12 px-4 py-3 md:px-5 md:py-3.5"
        >
          <p className="text-sm font-medium md:text-base">{faq.question}</p>
          {faq.id === TALLEST_FAQ.id && (
            <p className="text-mystic-mint/80 px-0 pb-3 text-sm leading-relaxed md:pb-3.5">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export function FaqSection() {
  return (
    <section className="w-full bg-black py-24 text-foreground md:py-32">
      <div className="mx-auto max-w-[90rem] px-6">
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[1fr_1.35fr] lg:items-start lg:gap-16 xl:gap-24">
          <div className="lg:sticky lg:top-24">
            <p className="text-forsythia text-sm font-semibold uppercase tracking-widest">FAQ</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Questions teams usually ask
            </h2>
            <p className="text-mystic-mint/85 mt-4 text-lg leading-relaxed">
              Straight answers on getting started, customization, and support.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <FaqAccordionSizer />
            <Accordion
              defaultValue={["faq-1"]}
              className="absolute inset-x-0 top-0 gap-2 overflow-visible rounded-none border-0 bg-transparent"
            >
              {FAQS.map(({ id, question, answer }) => (
                <AccordionItem
                  key={id}
                  value={id}
                  className="border-mystic-mint/12 bg-midnight-depth/50 overflow-hidden rounded-lg border not-last:border-b! data-open:border-mystic-mint/25 data-open:bg-midnight-depth/80 [&_[data-slot=accordion-content]]:px-0"
                >
                  <AccordionTrigger className="text-foreground hover:bg-mystic-mint/[0.04] gap-4 px-4 py-3 text-sm font-medium no-underline hover:no-underline md:px-5 md:py-3.5 md:text-base **:data-[slot=accordion-trigger-icon]:size-3.5 **:data-[slot=accordion-trigger-icon]:text-mystic-mint/40 group-aria-expanded/accordion-trigger:**:data-[slot=accordion-trigger-icon]:text-forsythia">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-mystic-mint/80 px-4 pb-3 text-sm leading-relaxed md:px-5 md:pb-3.5">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
