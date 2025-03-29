import React from 'react'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-4 mb-[100px] md:mb-5 bg-white " id="contact">
        <div className="flex mt:16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light text-black">Copyright © 2025 Brittney</p>
            <div className="flex items-center md:gap-5 gap-6">
                {socialMedia.map((profile) => (
                    <a href={profile.link} target="_blank" key={profile.id}>
                        <div key={profile.id} className="cursor-pointer flex justify-center items-center text-black hover:text-orange">
                            {profile.name}
                        </div>
                    </a>
                ))}           

            </div>
        </div>
    </footer>
  )
};

export default Footer