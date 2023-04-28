import Sponsors from "@/components/sponsors";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-center">
      <div className="mt-auto mb-auto text-white">
        <h1 className="font-pp sm:pt-32 md:pt-64 md:text-7xl sm:text-6xl text-4xl">
          Prismatic Motorsports
        </h1>
        <h2 className="md:text-3xl sm:text-xl">
          Coming Soon
        </h2>
      </div>
      <div className="mt-auto pt-32">
        <Sponsors/>
      </div>
    </main>
  )
}
