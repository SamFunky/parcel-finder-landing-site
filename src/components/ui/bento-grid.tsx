import { type ComponentPropsWithoutRef, type ReactNode } from "react"

import { cn } from "@/lib/utils"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[minmax(11rem,auto)] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[14rem]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface BentoTileProps extends ComponentPropsWithoutRef<"div"> {
  icon: ReactNode
  title: string
  description: string
  className?: string
  accent?: string
  badge?: ReactNode
}

const BentoTile = ({
  icon,
  title,
  description,
  className,
  accent = "from-mystic-mint/20 to-transparent",
  badge,
  ...props
}: BentoTileProps) => (
  <div
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl border border-mystic-mint/15 bg-oceanic-noir p-5 transition-colors hover:border-mystic-mint/30",
      className
    )}
    {...props}
  >
    {badge}
    <div
      className={cn(
        "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity group-hover:opacity-100",
        accent
      )}
    />
    <div className="relative z-10 flex size-10 items-center justify-center rounded-lg border border-mystic-mint/20 bg-black/30 text-mystic-mint">
      {icon}
    </div>
    <div className="relative z-10 mt-auto pt-6">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="text-mystic-mint/75 mt-1 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
)

export { BentoGrid, BentoTile }
