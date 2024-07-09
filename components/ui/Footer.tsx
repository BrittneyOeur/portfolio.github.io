import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 mb-[100px] md:mb-5" id="contact">
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-p[45vw]">
                Made with <span className="text-purple">love</span>
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">Contact</p>
            <a href="mailto:oeur.brittney@gmail.com">
                <MagicButton
                 title="Email"
                 icon={<FaLocationArrow />}
                 position="right"
                />
            </a>
        </div>
        <div className="flex mt:16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 Brittney</p>
            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) => (
                    <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                        <img src={profile.img}
                        width={20} height={20} />
                    </div>
                ))}           

            </div>
        </div>
    </footer>
  )
}

export default Footer