import sponsors from '@/data/sponsors'
import Image from 'next/image'

const Sponsors = () => {
    return <div className="max-w-screen-2xl">
    <div className="flex flex-col items-center font-pp">
      <h1 className='text-4xl'>Our Partners</h1>
    </div>
    <div className="flex flex-wrap flex-row mt-6 justify-center content-center gap-2 w-full">
      {sponsors.map((sponsor, i) => {
        return <div key={i} className="flex items-center py-3 bg-white xl:w-1/5 lg:w-1/4 sm:w-1/3 h-40 p-5 mt-auto">
          <Image
            style={{objectFit: 'contain'}}
            className='w-full h-full'
            width={1000}
            height={500}
            src={`/img/sponsors/${sponsor.short_name}.png`}
            alt={`${sponsor.name} Logo`}
          />
        </div>
      })}
    </div>
  </div>
}

export default Sponsors;