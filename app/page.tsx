import Particle from '@/components/Particle'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/bg-new.avif')]">
      <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
        <Particle />
      </div>
      <div className="absolute right-10 md:right-60 bottom-30 z-[10]">
        <Image
          src="/assets/block.png"
          alt="MoustacheMan"
          width={560}
          height={560}
          className="w-[300px] h-[300px] z-[1] md:h-[560px] md:w-[560px]"
        />
      </div>

      <div className="flex flex-col gap-3 z-[10] pl-40 pt-20">
      <h1 className="text-[50px] text-white max-w-[500px]">
      Transforming ideas into{" "}
          <span className="text-red-500">Digital Reality</span>
        </h1>
        <p className="text-[16px] text-gray-200 md:text-white-400 mb-10 md:pb-2 max-w-[400px] text-bold">
        Innovation and customer focus drive us to solve today's challenges, build long-term client relationships, honor commitments, and passionately create world-changing products.
        </p>
      </div>
    </main>
  )
}
