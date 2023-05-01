import Footer from "@/components/footer";
import Sponsors from "@/components/sponsors";
import socials from "@/data/social";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <div className="bg-peach text-white min-h-screen flex flex-col w-screen">
      <div className="flex flex-col items-center text-center sm:space-y-24 mb-8">
        <div className="text-white p-24 bg-no-repeat lg:bg-[length:700px] lg:bg-[center_top_7rem] md:bg-[length:500px] md:bg-[center_top_11rem] bg-[length:200px] bg-[center_top_1.8rem] bg-[url('/img/pris_assets/half-buddy.png')]">
          <h1 className="font-pp sm:pt-32 md:pt-64 md:text-7xl sm:text-6xl text-4xl">
            Prismatic Motorsports
          </h1>
          <h2 className="md:text-3xl sm:text-xl">
            Coming Soon
          </h2>
          <div className="flex justify-center gap-4 mt-6 text-4xl">
            {socials.map((social, i) => {
                return <a key={i} href={social.link}>
                  <FontAwesomeIcon icon={social.fa_icon} className="hover:text-gray-100"/>
                </a>
              })}
          </div>
        </div>
        <div className="">
          <Sponsors/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
