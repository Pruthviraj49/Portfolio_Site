import React from 'react'
import Image from 'next/image'
import { motion, variants } from "framer-motion";
import A_a from '../public/android_logo.png'
import A_f from '../public/flutter_logo.png'

import { BsPatchCheckFill } from "react-icons/bs"
export default function Skills() {
    return (
        <div >
            <motion.div className="pt-20 md:px-28 sm:px-12 px-8 font-chivoMono md:pb-20"
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

            <div className='font-chivoMono flex flex-col justify-center items-center text-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 p-10 md:gap-20 items-center justify-center text-center mx-auto my-auto max-w-5xl px-16 pb-10 shadow-lg rounded-md shadow-black'>
                    <div>
                        <div className='flex flex-wrap gap-3'>
                            <Image src={A_a} alt="Image" className="w-10 h-10" />
                            <h1 className='text-base sm:text-lg md:text-xl font-bold underline underline-offset-4 decoration-orange-00'>Android Development</h1>
                        </div>
                        <div className='text-start'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolore eveniet molestiae iure a rerum eligendi! Quam quia perferendis assumenda.</p>
                        </div>
                    </div>
                    <div className='rounded-xl justify-center item-center text-center max-w-fit pl-5 md:pl-10'>
                        <div class="grid grid-cols-3 gap-4">
                            <div className='flex flex-wrap'>
                                <div class="rounded-md ">
                                    <Image src={A_f} className="w-12 h-12" />
                                    FireBase
                                </div>
                            </div>
                            <div className='flex flex-wrap'>
                                <div class="rounded-md   ">
                                    <Image src={A_f} className="w-12 h-12" />
                                    FireBase
                                </div>
                            </div>
                            <div className='flex flex-wrap'>
                                <div class="rounded-md ">
                                    <Image src={A_f} className="w-12 h-12" />
                                    FireBase
                                </div>
                            </div>
                            <div className='flex flex-wrap'>
                                <div class="rounded-md  ">
                                    <Image src={A_f} className="w-12 h-12" />
                                    FireBase
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 p-10 items-center justify-center text-center mx-auto my-auto max-w-5xl px-16 pb-10 shadow-lg rounded-md shadow-black'>
                        <div>
                            <div className='flex flex-wrap gap-3'>
                                <Image src={A_a} alt="Image" className="w-10 h-10" />
                                <h1 className='text-base sm:text-lg md:text-xl font-bold underline underline-offset-4 decoration-orange-00'>Web Development</h1>
                            </div>
                            <div className='text-start'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolore eveniet molestiae iure a rerum eligendi! Quam quia perferendis assumenda.</p>
                            </div>

                        </div>
                        <div className='rounded-xl justify-center item-center text-center max-w-fit pl-5 md:pl-10'>
                            <div class="grid grid-cols-3 gap-4">

                                <div className='flex flex-wrap'>

                                    <div class="rounded-md ">
                                        <Image src={A_f} className="w-12 h-12" />
                                        FireBase
                                    </div>
                                </div>
                                <div className='flex flex-wrap'>

                                    <div class="rounded-md   ">
                                        <Image src={A_f} className="w-12 h-12" />
                                        FireBase
                                    </div>
                                </div>
                                <div className='flex flex-wrap'>

                                    <div class="rounded-md ">
                                        <Image src={A_f} className="w-12 h-12" />
                                        FireBase
                                    </div>
                                </div>
                                <div className='flex flex-wrap'>

                                    <div class="rounded-md  ">
                                        <Image src={A_f} className="w-12 h-12" />
                                        FireBase
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='pt-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 p-10 items-center justify-center text-center mx-auto my-auto max-w-5xl px-16 pb-10 shadow-lg rounded-md shadow-black'>
                        <div>
                            <div className='flex flex-wrap gap-3'>
                                <Image src={A_a} alt="Image" className="w-10 h-10" />
                                <h1 className='text-base sm:text-lg md:text-xl font-bold underline underline-offset-4 decoration-orange-00'>BlockChain</h1>
                            </div>
                            <div className='text-start'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolore eveniet molestiae iure a rerum eligendi! Quam quia perferendis assumenda.</p>
                            </div>

                        </div>
                        <div className='rounded-xl justify-center item-center text-center max-w-fit pl-5 md:pl-10'>
                            <div class="grid grid-cols-3 gap-x-6 gap-y-3">

                                <div className='flex flex-wrap'>

                                    <div class="rounded-md ">
                                        <Image src={A_f} className="w-12 h-12" />
                                        FireBase
                                    </div>
                                </div>
                                <div className='flex flex-wrap'>

                                    <div class="rounded-md   ">
                                        <Image src={A_f} className="w-12 h-12" />
                                        FireBase
                                    </div>
                                </div>
                                <div className='flex flex-wrap'>

                                    <div class="rounded-md ">
                                        <Image src={A_f} className="w-12 h-12" />
                                        FireBase
                                    </div>
                                </div>
                                <div className='flex flex-wrap'>

                                    <div class="rounded-md  ">
                                        <Image src={A_f} className="w-12 h-12" />
                                        FireBase
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>




            {/* <div className='grid md:grid-flow-col  grid-flow-row  justify-evenly'>
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
            </div> */}

        </div>
    )
}
