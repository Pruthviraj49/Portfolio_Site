import React from 'react'
import Image from 'next/image'
import { motion, variants } from "framer-motion";
import A_a from '../public/android_logo.png'
import A_f from '../public/flutter_logo.png'

import { BsPatchCheckFill } from "react-icons/bs"
export default function Skills() {
    return (
        <div >
            <motion.div className="pt-20 md:px-28 sm:px-16 px-8 font-chivoMono md:pb-20"
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
                    Skills
                </motion.h1>
            </motion.div>

            <div className='grid md:grid-flow-col  grid-flow-row  justify-evenly'>
                <div className='pb-20'>
                    <div className='rounded p-10 bg-gradient-to-r from-orange-200 to-orange-300 dark:text-gray-900 overflow-hidden shadow-lg'>
                        <h1 className='text-lg sm:text-xl md:text-xl text-center pb-5'>Android</h1>
                        <div className='text-sm sm:text-sm md:text-base'>
                            <article className='flex'>
                                <BsPatchCheckFill />
                                <div className='px-2'>
                                    <h3>Flutter</h3>

                                </div>

                            </article>
                            <article className='flex'>
                                <BsPatchCheckFill />
                                <div className='px-2'>
                                    <h3>Dart</h3>

                                </div>

                            </article>
                            <article className='flex'>
                                <BsPatchCheckFill />
                                <div className='px-2'>
                                    <h3>Java</h3>

                                </div>

                            </article>
                            <article className='flex'>
                                <BsPatchCheckFill />
                                <div className='px-2'>
                                    <h3>Flutter</h3>

                                </div>

                            </article>
                            <article className='flex'>
                                <BsPatchCheckFill />
                                <div className='px-2'>
                                    <h3>Flutter</h3>

                                </div>

                            </article>
                            <article className='flex'>
                                <BsPatchCheckFill />
                                <div className='px-2'>
                                    <h3>Flutter</h3>

                                </div>

                            </article>
                        </div>

                    </div>
                </div>
                <div className='pb-20'>
                    <div className='rounded p-10  bg-gradient-to-r from-orange-200 to-orange-300 dark:text-gray-900 overflow-hidden shadow-lg'>
                        <h1 className='text-lg sm:text-xl md:text-xl text-center pb-5'>Web</h1>
                        <div className='text-sm sm:text-sm md:text-base'>
                            <article className='flex'>
                                <BsPatchCheckFill />
                                <div className='px-2'>
                                    <h3>Android Studio</h3>
                                    <small>Intermediate</small>
                                </div>
                            </article>
                        </div>

                    </div>
                </div>
                <div className='pb-20'>
                    <div className='rounded p-10  bg-gradient-to-r from-orange-200 to-orange-300 dark:text-gray-900 overflow-hidden shadow-lg'>
                        <h1 className='text-lg sm:text-xl md:text-xl text-center pb-5'>BlockChain</h1>
                        <div className='text-sm sm:text-sm md:text-base'>
                            <article className='flex'>
                                <BsPatchCheckFill />
                                <div className='px-2'>
                                    <h3>Android Studio</h3>
                                    <small>Intermediate</small>
                                </div>

                            </article>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
