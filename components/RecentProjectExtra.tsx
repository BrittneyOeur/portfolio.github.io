import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import { CardBody, CardContainer, CardItem } from './ui/3d-Card-Effect'

const RecentProjects = () => {
  return (
    /* padding for 20 on y-axis */
    <div className="py-20" id="projects">

      {/* controls the text sizing */}
      <h1 className="heading">
        Selections of {' '}
        <span className="text-purple">Recent Projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({
          id, title, des, img, iconLists, link}) => (
          <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"> {/* Changes the layout of the cards of each project */}
          <PinContainer 
            title={link} 
            href={link}
          >
            {/* Controls the size of the entire card */}
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
              <div 
                className="relative w-full h-full overflow-hidden lg:rounded-3xl" 
                style = {{backgroundColor: "#13162D"}}
              > {/* wrapper for image */}
                <img src="/bg.png" alt="big-img"/>
              </div>

                <img 
                  src={img} 
                  alt={title} 
                  className="z-10 absolute bottom-0"
                />
              </div>

              {/* Title of the card */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              {/* Description per card */}
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style = {{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>
              
              {/* The tools section */}
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                      <div 
                        key={index} 
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" 
                        style={{transform: `translateX(-${5 * index * 2} px)`
                        }}
                      >

                        <img src={icon} alt={icon} className="p-2"/>
                      </div>
                  ))}

                </div>

                <div className="flex justify-center items-center">
                  <a href={link}><p className="flex lg:text-xl md:text-xs text-sm text-purple">Github</p></a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
            </div>
          </PinContainer>

          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects