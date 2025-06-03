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
            <div className="flex flex-col lg:flex-row justify-center items-center relative my-12 z-10 gap-24">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col">
                    <div className="mb-14">
                        <TextGenerateEffect
                            className="text-center text-[32px] md:text-4xl lg:text-4xl font-bold"
                            words="Brittney Oeur"
                        />
                        <TextGenerateEffect
                            className="text-center text-[32px] md:text-4xl lg:text-[20px]"
                            words="Developer + Designer"
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
                    <div className="mt-16">
                        <FadingText
                            className="text-center md:tracking-wider mb-20 text-sm md:text-md lg:text-[18px]"
                            delay={0.2}
                        />
                    </div>
                </div>
                <Projects/>
            </div>
        </div>
    </div>
  )
};

export default Hero