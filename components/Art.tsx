import { art, graphics } from "@/data";
import React from "react";

const Art = () => {
    return (
        <section id="art">
            <div id="projects">
                <h1 className="heading text-purple">
                    Selection of {' '}
                    <span className="text-darkpurple">Artworks</span>
                </h1>

                <h2 className="text-4xl text-purple text-center mt-16">Illustrations</h2>
                <div className="flex items-center justify-center mt-5">
                        {art.map(({ id, img }) => (
                            <div key={id} className="pr-6 items-center justify-center w-[80vw]">
                                <img
                                    className="w-full"
                                    src={img}
                                    alt="Artwork"
                                />
                            </div>
                        ))}
                </div>

                <h2 className="text-4xl text-purple text-center mt-16">Twitter / X Headers</h2>
                <div className="items-center justify-center mt-5">
                        {graphics.map(({ id, img }) => (
                            <div key={id} className="items-center justify-center mb-7">
                                <img src={img} alt="Artwork" />
                            </div>
                        ))}
                </div>
            </div>
        </section>  
    );
};

export default Art;