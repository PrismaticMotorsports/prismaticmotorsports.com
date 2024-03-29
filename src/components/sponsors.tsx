import sponsors from '@/data/sponsors'
import Image from 'next/image'

const Sponsors = () => {
    return <div className="max-w-screen-2xl">
    <div className="flex flex-col items-center font-pp">
      <h1 className='text-4xl'>Our Partners</h1>
    </div>
    <div className="flex flex-wrap flex-row mt-6 justify-center content-center gap-2 w-full sm:px-0">
      {sponsors.map((sponsor, i) => {
        return <div key={i} className="flex items-center py-3 bg-white xl:w-1/5 lg:w-1/4 sm:w-1/3 w-4/5 h-40 p-5 mt-auto">
          <a href={sponsor.link}>
              <Image
                style={{objectFit: 'contain'}}
                className='h-auto'
                width={500}
                height={250}
                src={`/img/sponsors/${sponsor.short_name}.png`}
                alt={`${sponsor.name} Logo`}
              />
          </a>
        </div>
      })}
    </div>
  </div>
}

export default Sponsors;