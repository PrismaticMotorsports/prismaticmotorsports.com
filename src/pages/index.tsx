import sponsors from '@/data/sponsors'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mt-auto mb-auto text-white">
        <h1 className="font-pp md:text-7xl sm:text-6xl text-4xl">
          Prismatic Motorsports
        </h1>
        <h2 className="md:text-3xl sm:text-xl">
          Coming Soon
        </h2>
      </div>
      <div className="mt-auto max-w-screen-2xl">
        <div className="flex flex-col items-center font-pp">
          <h1 className='text-4xl'>Our Partners</h1>
        </div>
        <div className="flex flex-wrap flex-row mt-6 justify-center content-center gap-2 w-full">
          {sponsors.map((sponsor, i) => {
            return <div key={i} className="flex items-center py-3 bg-white xl:w-1/5 lg:w-1/4 h-40 p-5 mt-auto">
              <Image
                style={{objectFit: 'contain'}}
                width={1000}
                height={500}
                src={`/img/sponsors/${sponsor.short_name}.png`}
                alt={`${sponsor.name} Logo`}
              />
            </div>
          })}
        </div>
      </div>
    </main>
  )
}
