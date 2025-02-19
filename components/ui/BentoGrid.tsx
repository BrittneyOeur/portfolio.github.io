'use client'

import { cn } from "@/utils/cn";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { FaFilePdf } from "react-icons/fa";
import { Meteors } from "./Meteors";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('oeur.brittney@gmail.coiim')

    setCopied(true);
  }
  
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}>

      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        {id == 1 && (
          <Meteors number={20}/>
        )}

        <div 
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            <img
            src={spareImg}
            alt={spareImg}
            className={'object-cover, object-center w-full h-full'}
            />
          )}
        </div>

        <div 
            className={cn(
            titleClassName, 
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-50 md:text-xs lg:text-base text-sm text-[#c1c2d3] z-10">
            {description}
          </div>
          <div className={"font-sans font-bold text-lg lg:text-3xl max-w-96 z-10"}>
          {title}
        </div>
      
      {/* Third Card */}
      {id == 3 && (
        <div className="flex gap-1 lg:gap-5 w-fit absolute lg:right-20 z-10"> 
          <a href="/Resume, Brittney Oeur (2025).pdf" target="_blank">
                <MagicButton
                  title="Resume"
                  icon={<FaFilePdf />}
                  position="right"
                  otherClasses="bg-[#151a31] cursor-pointer"
                  handleClick={handleCopy}
                />
          </a>
        </div>
      )}
      </div>
    </div>
  </div>
  );
};
