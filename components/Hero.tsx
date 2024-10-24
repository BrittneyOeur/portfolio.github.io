import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaHeart, FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    /* pb = padding bottom, pt = padding top */
    <div className="pb-20 pt-36">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        
        {/* h = horizontal, screen will fill the entire */}
        <div className="h-screen w-full dark:bg-pink-100 bg-pink dark:bg-dot-black/[0.2] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-pink-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <TextGenerateEffect 
                    className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    words="Hi, Brittney here"
                />
                <p className="text-center md:tracking-wider mb-10 text-sm md:text-lg lg:text-[15px] text-darkpurple">
                    An software engineer by day and an artist by heart. <br></br> I have a passion in coding and creating.
                </p>
                <a href="#projects">
                    <MagicButton 
                        title="Check out my work!"
                        icon={<FaHeart />}
                        position="right"
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero