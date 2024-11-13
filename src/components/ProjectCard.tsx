"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

interface Props {
    image: string;
    title: string;
    text: string;
    link:string;
}

const ProjectCard = ({ image, title, text , link}: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if(!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
  return (
    <div
    onClick={handleFlip}
    className='md:w-[350px] md:h-[200px] sm:w-[250px] sm:h-[150px] lg:w-[460px] lg:h-[280px] w-[160px] h-[100px] rounded-md cursor-pointer '>
        <motion.div
        className='flip-card-inner w-full h-full'
        initial={false}
        animate={{rotateY: isFlipped ? 180 : 360}}
        transition={{ duration: 0.6, animationDirection: 'normal'}}
        onAnimationComplete={() => setIsAnimating(false)}
        >
            <div
            style={{backgroundImage: `url(${image})`}}
            className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40'/>
                    <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
                    
                    <Link className='text-gray-200 text-[20px]' href={link} target='_blank' >Learn more &gt;</Link>
                    </div>
            </div>
            <div
            style={{backgroundImage: `url(${image})`}}
            className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0  rounded-md bg-black opacity-50 z-[-1] w-full h-full'/>
                  <div className='flex flex-col gap-20 py-3 z-[30]'>
                    <h1 className='text-whote sm:text-2xl text-md sm:font-semibold '>{title}</h1>
                    <p className='text-gray-200 text-[20px] hidden lg:block'>
                        {text}
                    </p>
                  </div>
            </div>
        </motion.div>
    </div>
  )
}

export default ProjectCard