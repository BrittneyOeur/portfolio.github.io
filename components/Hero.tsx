"use client"

import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Projects from './ui/Projects'
import { FadingText } from './ui/FadingText'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
        <div className="pb-20 pt-20 lg:pt-30 lg:pb-30">
            <div className="flex justify-center relative my-12 z-10 gap-24">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col pt-10">
                    <TextGenerateEffect
                        className="text-left text-[32px] md:text-4xl lg:text-5xl"
                        words="Brittney Oeur"
                    />
                    <div className="text-center md:tracking-wider mb-10 text-sm md:text-lg lg:text-[20px] text-black">
                        <FadingText
                            text="A software engineer by day and an artist by heart"
                            className="text-center md:tracking-wider mb-20 text-sm md:text-lg lg:text-[20px]"
                            delay={0.2}
                        />
                    </div>
                    <motion.img 
                        src="/Nike-Dunks.png" 
                        width="450" 
                        height="450"
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.5 }}
                    />
                </div>
                <Projects/>
            </div>
        </div>
    </div>
  )
};

export default Hero