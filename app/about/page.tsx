"use client"

import { motion } from "framer-motion";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

const About = () => {
    return (
        <div className="relative flex flex-col min-h-screen mx-auto px-6 sm:px-6 md:px-14">

            <NavBar />
            
            {/* Content with semi-transparent white background */}
            <div className="flex-1 flex justify-center items-center relative">
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
                            Bachelor&apos;s degree in <span className="text-dustygreen underline">Applied Computing</span> and a minor in <span className="text-dustygreen underline">Informatics</span>.
                        </motion.p>

                        <motion.p className="p-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                            My passion for technology and art has always gone side by side, <br/> 
                            one fuels my curiosity, the other my creativity. <br/>
                            Blending them feels like creating a piece of who I am.
                        </motion.p>

                        <motion.p className="pt-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
                            I want to use my skills to create something my. <br />
                            younger self would think is super cool.
                        </motion.p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;