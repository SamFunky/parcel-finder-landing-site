import { Globe, Mail } from "lucide-react"

const FOOTER_LINKS = {
  Product: [
    { label: "How it works", href: "#solution" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
} as const

export function Footer() {
  return (
    <footer className="border-mystic-mint/10 bg-carbon border-t text-foreground">
      <div className="mx-auto max-w-[90rem] px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))] lg:gap-10">
          <div className="max-w-sm">
            <a href="#" className="inline-flex items-center gap-2 font-semibold text-foreground">
              <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md text-sm">
                P
              </span>
              Parcel Finder
            </a>
            <p className="text-mystic-mint/75 mt-4 text-sm leading-relaxed">
              Rank parcels by what matters to your project — neighborhood, demographics,
              accessibility, and more.
            </p>
            <a
              href="mailto:hello@parcelfinder.com"
              className="text-mystic-mint/80 hover:text-forsythia mt-5 inline-flex items-center gap-2 text-sm transition-colors"
            >
              <Mail className="size-4" aria-hidden />
              hello@parcelfinder.com
            </a>
          </div>

          {(Object.entries(FOOTER_LINKS) as [keyof typeof FOOTER_LINKS, (typeof FOOTER_LINKS)[keyof typeof FOOTER_LINKS]][]).map(
            ([title, links]) => (
              <div key={title}>
                <p className="text-foreground text-sm font-semibold">{title}</p>
                <ul className="mt-4 space-y-2.5">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-mystic-mint/70 hover:text-foreground text-sm transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        <div className="border-mystic-mint/10 mt-14 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-mystic-mint/55 text-sm">
            © {new Date().getFullYear()} Parcel Finder. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Website"
              className="border-mystic-mint/15 text-mystic-mint/70 hover:border-mystic-mint/30 hover:text-foreground flex size-9 items-center justify-center rounded-lg border transition-colors"
            >
              <Globe className="size-4" />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="border-mystic-mint/15 text-mystic-mint/70 hover:border-mystic-mint/30 hover:text-foreground flex size-9 items-center justify-center rounded-lg border transition-colors"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
