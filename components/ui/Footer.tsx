import React from 'react'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10 mb-[100px] md:mb-5" id="contact">
        <div className="flex mt:16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light dark:text-darkpurple">Copyright © 2024 Brittney</p>
            <div className="flex items-center md:gap-5 gap-6">
                {socialMedia.map((profile) => (
                    <a href={profile.link} target="_blank" key={profile.id}>
                        {/*<div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">*/}
                        <div key={profile.id} className="cursor-pointer flex justify-center items-center text-darkpurple font-bold hover:text-purple">
                            {profile.name}
                            {/*<img src={profile.img} width={20} height={20} />*/}
                        </div>
                    </a>
                ))}           

            </div>
        </div>
    </footer>
  )
}

export default Footer