import { Client } from '@/components/client'

const words = await import('./basic.json')

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Client validWords={words.default} />
    </main>
  )
}
