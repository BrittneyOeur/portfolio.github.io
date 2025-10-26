"use client"
import React from 'react';
import { work } from '@/data';
import { motion } from "framer-motion";

const Work = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, staggerChildren: 0.3 }}
        >
            <h1 className="text-dustygreen text-2xl font-bold px-6">WORK</h1>
            {work.map(({ id, title, company, location, duration, des, link }) => (
                <motion.div 
                    key={id} 
                    className="p-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: id * 0.2 }}
                >
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-dustygreen text-2xl font-bold">{company}</h1>
                        <h2 className="text-dustygreen text-lg font-bold">{location}</h2> 
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-orange text-xl font-bold pb-3">{title}</h1>
                        <h2 className="text-black text-lg italic">{duration}</h2>
                    </div>
                    <h2 className="text-black pb-3">{des}</h2>                    
                    <div className="flex gap-4">
                        <a href={link} target="_blank" className="underline text-black hover:text-orange duration-75 ease-in-out"><p>{link}</p></a>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Work;