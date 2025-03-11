import React from 'react'
import { projects } from '@/data'
import { CardBody, CardContainer, CardItem } from './ui/3d-Card-Effect'

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">

      <h1 className="heading text-pink-500">
        Selections of {' '}
        <span className="text-darkpurple">Projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 mt-15">

        {projects.map(({
          id, title, des, img, iconLists, link, live}) => (
          <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"> {/* Changes the layout of the cards of each project */}

        {/* -- Card Containers -- */}
        <CardContainer className="inter-var">
          <CardBody className="absolute group/card dark:bg-darkpurple dark:hover:shadow-2xl dark:hover:shadow-pink-500/[0.5] dark:border-white/[0.2] border-black/[0.1] w-[80vw] sm:w-[590px] md:h-[55vh] lg:h-[500px] rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >

            {/* -- Card Title -- */}
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              {title}
            </h1>
            </CardItem>

            {/* -- Card Image -- */}
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={img}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
              </CardItem>

            {/* -- Card Descrption -- */}
            <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-300 mt-2 dark:text-neutral-300 pt-5 line-clamp-2"
              >
                {des}
            </CardItem>

            {/* -- Card Footer Section -- */}
            {/* -- Card Tools Icon -- */}
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center">

                {/* Handles icon */} 
                {iconLists.map((icon, index) => (
                    <div 
                      key={index} 
                      className="border border-white/[0.2] rounded-xl bg-white bg-opacity-20 lg:w-11 lg:h-11 w-10 h-10 flex justify-center items-center mx-1 hover:shadow-pink-500" 
                      style={{transform: `translateX(-${5 * index * 2} px)`}}
                      
                    >  
                      <img src={icon} alt={icon} className="p-3"/>
                    </div>
                ))}
              </div>
              
              {/* -- Card Live Site -- */}
              <div className="flex justify-center items-center gap-5">
                <a href={link} target="_blank"><p className="flex lg:text-xl md:text-xs text-sm text-pink-100">Github</p></a>
                <a href={live} target="_blank"><p className="flex lg:text-xl md:text-xs text-sm text-pink-100">Live</p></a>
              </div>
            </div>

          </CardBody>
        </CardContainer>
        </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects