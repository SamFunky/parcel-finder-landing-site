import { Header } from '@/components/Header'

function App() {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground mx-auto max-w-[90rem] px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">
          Parcel Finder
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Landing page content goes here.
        </p>
      </main>
    </>
  )
}

export default App
