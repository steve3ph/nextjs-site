import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className="fixed top-0 bg-transparent z-[20] w-full flex  gap-5 md:justify-between md:px-60 p-5">
        {/* <img src="@/assets/volkko.png" alt="Company Logo" className="w-16 h-16" /> */}
        <h1 className="text-white text-[45px]">
        Volkkommen 
      </h1>
      <div className="flex flex-row gap-5">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={24}
            height={24}
          />
        ))}
      </div>
    </div>
  )
}

export default Navbar