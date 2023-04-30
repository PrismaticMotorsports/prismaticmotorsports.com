import Footer from "@/components/footer";
import Sponsors from "@/components/sponsors";


export default function Home() {
  return (
    <div className="bg-peach text-white min-h-screen flex flex-col ">
      <div className="flex flex-col items-center text-center sm:space-y-24 mb-8">
        <div className="text-white p-24">
          <h1 className="font-pp sm:pt-32 md:pt-64 md:text-7xl sm:text-6xl text-4xl">
            Prismatic Motorsports
          </h1>
          <h2 className="md:text-3xl sm:text-xl">
            Coming Soon
          </h2>
        </div>
        <div className="">
          <Sponsors/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
