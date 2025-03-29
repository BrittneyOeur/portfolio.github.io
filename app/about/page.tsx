"use client"

import { motion } from "framer-motion";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

const About = () => {
    return (
        <div className="relative flex flex-col min-h-screen mx-auto sm:px-6 md:px-14">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-[url('/star-chrome.png')] bg-no-repeat bg-fixed bg-center bg-[length:1200px_675px]"
            />

            <NavBar />
            
            {/* Content with semi-transparent white background */}
            <div className="flex-1 flex justify-center items-center bg-white bg-opacity-80 relative">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col">
                    <div className="text-center whitespace-normal mt-16">
                        <motion.h1 
                            className="text-dustygreen text-xl font-bold mb-2"
                            initial={{ opacity: 0, y: 10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Hello, my name is Brittney!
                        </motion.h1>

                        <motion.p className="p-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                            I graduated from the University of Washington with a <br />
                            Bachelor's degree in <span className="text-dustygreen underline">Applied Computing</span> and a minor in <span className="text-dustygreen underline">Informatics</span>.
                        </motion.p>

                        <motion.p className="p-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                            From a young age, I have been passionate about both technology and art.<br />
                            Whether it was playing on my Nintendo DS in bed or sketching in my notebook during class.
                        </motion.p>

                        <motion.p className="pt-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
                            My goal is to use my skills to create meaningful and <br />
                            impactful experiences that benefit others.
                        </motion.p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;