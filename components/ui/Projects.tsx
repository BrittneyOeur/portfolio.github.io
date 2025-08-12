"use client"
import React from 'react';
import { projects } from '@/data';
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, staggerChildren: 0.3 }}
        >
            {projects.map(({ id, title, des, img, iconLists, link, live }) => (
                <motion.div 
                    key={id} 
                    className="p-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: id * 0.2 }}
                >
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-dustygreen text-2xl font-bold">{title}</h1>
                        <div className="flex">
                            {iconLists.map((icon, index) => (
                                <div
                                    key={index}
                                    className="flex w-10 h-10 lg:w-11 lg:h-11 justify-center items-center pb-3"
                                >
                                    <img src={icon} alt={icon} className="px-3"/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <h2 className="text-black">{des}</h2>
                    <div className="flex pt-4 gap-4">
                        <a href={link} className="underline text-black hover:text-orange duration-75 ease-in-out">GitHub</a>
                        <a href={live} className="underline text-black hover:text-orange duration-75 ease-in-out">Live</a>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Projects;