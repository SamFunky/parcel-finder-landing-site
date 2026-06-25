import { Button } from '@/components/ui/button'

function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-semibold tracking-tight">
        Parcel Finder
      </h1>
      <p className="text-muted-foreground text-center text-sm">
        React + Vite + TypeScript with shadcn/ui and Magic UI ready to go.
      </p>
      <Button>Get started</Button>
    </main>
  )
}

export default App
