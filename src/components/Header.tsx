import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const dropdownMenus = [
  { label: 'Page 1', startPage: 1 },
  { label: 'Page 2', startPage: 4 },
  { label: 'Page 3', startPage: 7 },
  { label: 'Page 4', startPage: 10 },
]

function pageLabel(n: number) {
  return `Page ${n}`
}

function DropdownPages({ startPage }: { startPage: number }) {
  const pages = [startPage, startPage + 1, startPage + 2]

  return (
    <ul className="grid w-36 gap-1 p-2">
      {pages.map((page) => (
        <li key={page}>
          <NavigationMenuLink href="#" render={<a />}>
            {pageLabel(page)}
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  )
}

export function Header() {
  return (
    <header className="bg-transparent pt-4 text-foreground">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-semibold text-foreground">
          <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md text-sm">
            P
          </span>
          Parcel Finder
        </a>

        {/* Center nav */}
        <NavigationMenu className="text-foreground">
          <NavigationMenuList className="gap-6">
            {dropdownMenus.map((menu) => (
              <NavigationMenuItem key={menu.label}>
                <NavigationMenuTrigger>{menu.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <DropdownPages startPage={menu.startPage} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="inline-flex h-9 items-center rounded-lg px-2.5 text-sm font-medium hover:bg-muted"
                render={<a />}
              >
                Page 13
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right actions */}
        <div className="flex items-center gap-6">
          <Button variant="ghost" className="text-foreground hover:bg-muted" type="button">
            Page 14
          </Button>
          <Button type="button">Page 15</Button>
        </div>
      </div>
    </header>
  )
}
