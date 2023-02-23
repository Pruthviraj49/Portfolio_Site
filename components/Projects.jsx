import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Project2 from '../public/Project2.png'
import Project1 from '../public/Project1.png'
import Project3 from '../public/newsMania.png'
import { motion, Variants } from 'framer-motion'



const Projects = () => {

    const textAnimate = {
        offScreen: { y: 50, },
        onScreen: {
            y: 0,

            transition: {
                duration: 1,

            }
        }
    }

    return (
        <div className="pb-32">
            <motion.div className="pt-20 md:px-40 sm:px-16 px-8 font-chivoMono md:pb-20"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                    type: "spring",
                    bounce: 0.4,
                    duration: 1
                }}
            >
                <motion.h1 className="text-xl md:text-2xl font-bold text-start pb-10 underline decoration-orange-400 underline-offset-4">
                    Projects
                </motion.h1>
            </motion.div>

            <motion.div class="grid grid-cols-1 justify-evenly items-center md:grid-cols-3 sm:grid-cols-2 gap-8 md:px-40 sm:px-16 px-10 "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5 }}
            >

                <motion.div className='bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg pt-10 font-chivoMono pb-20'>
                    <motion.div className='px-10 sm:px-20 md:px-5'

                        whileHover={{ scale: 1.05 }}
                    >
                        <Image className='border-2 dark:border-white border-gray-800 rounded-lg' src={Project1} height={250} layout="" objectFit='cover' alt="default" />
                    </motion.div>
                    <div className="text-center justify-center pt-10 px-5 sm:px-12 md:px-5">
                        <motion.h2 className="text-base sm:text-lg md:text-xl font-bold cursor-pointer hover:underline mb-2"
                            initial={"offScreen"}
                            whileInView={"onScreen"}
                            viewport={{ once: false, amount: 0.25 }}
                            variants={textAnimate}
                            whileHover={{ scale: 1.1 }}
                        >NewsMania (Flutter App)</motion.h2>
                        <p className="text-sm sm:text-base md:text-lg px-5">NewsMania essentially uses a News API to fetch Real-time data. We can search news &amp; read it on the article posted by that publisher.</p>
                        <motion.div className="flex flex-wrap justify-center font-medium text-xs sm:text-sm md:text-base text-gray-100 gap-3 mt-2 " whileHover={{ scale: 1.05 }}>
                            <div className='flex gap-3 flex-wrap'>
                                <div className="rounded-md bg-orange-500 p-1">Flutter</div>
                            </div>
                            <div className='flex gap-3 flex-wrap'>
                                <div className="rounded-md bg-orange-500 p-1">Dart</div>
                            </div>
                            <div className='flex gap-3 flex-wrap'>
                                <div className="rounded-md bg-orange-500 p-1 ">REST-API</div>
                            </div>
                            <div className='flex gap-3 flex-wrap'>
                                <div className="rounded-md bg-orange-500 p-1 ">WebView</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
                <div className='bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg pt-10 font-chivoMono pb-20'>
                    <motion.div className='px-10 sm:px-20 md:px-5'

                        whileHover={{ scale: 1.05 }}
                    >
                        <Image className='border-2 dark:border-white border-gray-800 rounded-lg' src={Project2} height={250} layout="" objectFit='cover' alt="default" />
                    </motion.div>
                    <div className="text-center justify-center pt-10 px-5 sm:px-12 md:px-5">
                        <motion.h2 className="text-base sm:text-lg md:text-xl font-bold cursor-pointer hover:underline mb-2"
                            initial={"offScreen"}
                            whileInView={"onScreen"}
                            viewport={{ once: false, amount: 0.25 }}
                            variants={textAnimate}
                            whileHover={{ scale: 1.1 }}
                        >NoteTake (Flutter App)</motion.h2>
                        <p className="text-sm sm:text-base md:text-lg px-5">NoteTake app is a short notes&ndash;taking app. In this app, we can perform CRUD operations with a user&ndash;friendly UI design.</p>
                        <motion.div className="flex flex-wrap justify-center font-medium text-xs sm:text-sm md:text-base text-gray-100 gap-3 mt-2 " whileHover={{ scale: 1.05 }}>
                            <div className='flex gap-3 flex-wrap'>
                                <div className="rounded-md bg-orange-500 p-1">Flutter</div>
                            </div>
                            <div className='flex gap-3 flex-wrap'>
                                <div className="rounded-md bg-orange-500 p-1">Dart</div>
                            </div>
                            <div className='flex gap-3 flex-wrap'>
                                <div class="rounded-md bg-orange-500 p-1 ">SQFlite</div>
                            </div>
                            <div className='flex gap-3 flex-wrap'>
                                <div class="rounded-md bg-orange-500 p-1 ">SQL</div>
                            </div>
                            <div className='flex gap-3 flex-wrap'>
                                <div class="rounded-md bg-orange-500 p-1 ">FireBase</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div
                    className='bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg pt-10 font-chivoMono pb-20'

                >
                    <motion.div className='px-10 sm:px-20 md:px-5'

                        whileHover={{ scale: 1.05 }}
                    >
                        <Image

                            className='border-2 dark:border-white border-gray-800 rounded-lg'
                            src={Project3}
                            height={250}
                            layout='fit'
                            objectFit='cover'
                            alt='default'

                        />
                    </motion.div>
                    <div className='text-center justify-center pt-10 px-5 sm:px-12 md:px-5'>
                        <motion.h2
                            className='text-base sm:text-lg md:text-xl font-bold cursor-pointer hover:underline mb-2'
                            initial={"offScreen"}
                            whileInView={"onScreen"}
                            viewport={{ once: false, amount: 0.25 }}
                            variants={textAnimate}
                            whileHover={{ scale: 1.1 }}
                        >
                            NewsMania (Web App)
                        </motion.h2>
                        <p className='text-sm sm:text-base md:text-lg px-5'>

                            NewsMania essentially uses a News API to fetch Real-time data. We can
                            search news &amp; read it on the article posted by that publisher.
                        </p>
                        <motion.div
                            className='flex flex-wrap justify-center font-medium text-xs sm:text-sm md:text-base text-gray-100 gap-3 mt-2 '
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className='flex gap-3 flex-wrap'>
                                <div className='rounded-md bg-orange-500 p-1'>HTML</div>
                            </div>
                            <div className='flex gap-3 flex-wrap'>
                                <div className='rounded-md bg-orange-500 p-1'>CSS</div>
                            </div>
                            <div className='flex gap-3 flex-wrap'>
                                <div className='rounded-md bg-orange-500 p-1 '>JavaScript</div>
                            </div>
                            <div className='flex gap-3 flex-wrap'>
                                <div className='rounded-md bg-orange-500 p-1 '>Bootstrap</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </motion.div>
        </div>
    )
}
export default Projects




