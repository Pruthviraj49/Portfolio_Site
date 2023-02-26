import React from 'react'
import Image from 'next/image'
import { motion, variants } from "framer-motion";
import A_a from '../public/android_logo.png'
import A_f from '../public/flutter_logo.png'
import A_d from '../public/android_dart.png'
import A_j from '../public/android_java.png'
import A_fb from '../public/android_fire.png'
import W_h from '../public/web_html.png'
import W_c from '../public/web_css.png'
import W_r from '../public/web_reactjs.png'
import W_n from '../public/web_next.png'
import W_js from '../public/web_Javascipt.png'
import W_my from '../public/web_mysql.png'
import W_node from '../public/web_node.png'
import B_e from '../public/block_ethereum.png'
import B_h from '../public/block_hardhat.png'
import B_s from '../public/block_solidity.png'












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
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 p-5 md:gap-20 items-center justify-center text-center mx-auto my-auto max-w-5xl px-16 pb-5 '>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.75 }}
                    >
                        <div className='flex flex-wrap gap-3'>
                            {/* <Image src={A_a} alt="Image" className="w-10 h-10" /> */}
                            <h1 className='text-base sm:text-lg md:text-xl font-bold decoration-orange-00'>Android Development</h1>
                        </div>
                        <div className='text-start'>
                            <p>App developers work on a wide range of projects, from simple games to complex enterprise applications used by businesses.
                                It involves the use of programming languages such as Java, Swift, and Kotlin to create the user interface, functionality,
                                and overall performance of the app.

                            </p>
                        </div>
                    </motion.div>
                    <motion.div className='rounded-xl justify-center item-center text-center max-w-fit pl-5 md:pl-10'
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1 }}
                    >
                        <div class="grid grid-cols-3 gap-4">
                            <div className='flex flex-wrap'>
                                <div class="rounded-md ">
                                    <Image src={A_a} className="w-12 h-12" />
                                    Android
                                </div>
                            </div>
                            <div className='flex flex-wrap'>
                                <div class="rounded-md ">
                                    <Image src={A_f} className="w-12 h-12" />
                                    Flutter
                                </div>
                            </div>
                            <div className='flex flex-wrap'>
                                <div class="rounded-md   ">
                                    <Image src={A_fb} className="w-12 h-12" />
                                    FireBase
                                </div>
                            </div>
                            <div className='flex flex-wrap'>
                                <div class="rounded-md ">
                                    <Image src={A_d} className="w-12 h-12" />
                                    Dart
                                </div>
                            </div>
                            <div className='flex flex-wrap'>
                                <div class="rounded-md  ">
                                    <Image src={A_j} className="w-12 h-12" />
                                    Java
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className='pt-20 pb-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 p-5 items-center justify-center text-center mx-auto my-auto max-w-5xl px-16 pb-5 '>
                        <motion.div className='rounded-xl justify-center item-center text-center max-w-fit pl-5 md:pl-10'
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.75 }}
                        >
                            <div class="grid grid-cols-3 gap-4">

                                <div className='flex flex-wrap'>

                                    <div class="rounded-md ">
                                        <Image src={W_h} className="w-12 h-12" />
                                        Html
                                    </div>
                                </div>
                                <div className='flex flex-wrap'>

                                    <div class="rounded-md   ">
                                        <Image src={W_c} className="w-12 h-12" />
                                        CSS
                                    </div>
                                </div>
                                <div className='flex flex-wrap'>

                                    <div class="rounded-md ">
                                        <Image src={W_js} className="w-12 h-12" />
                                        Javascript
                                    </div>
                                </div>
                                <div className='flex flex-wrap'>

                                    <div class="rounded-md  ">
                                        <Image src={W_node} className="w-12 h-12" />
                                        Node.js
                                    </div>
                                </div>
                                <div className='flex flex-wrap'>

                                    <div class="rounded-md  ">
                                        <Image src={W_n} className="w-16 h-12" />
                                        Next.js
                                    </div>
                                </div>
                                <div className='flex flex-wrap'>

                                    <div class="rounded-md  ">
                                        <Image src={W_r} className="w-12 h-12" />
                                        React.js
                                    </div>
                                </div>
                                <div className='flex flex-wrap'>

                                    <div class="rounded-md  ">
                                        <Image src={W_my} className="w-12 h-12" />
                                        MySQL
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.75 }}
                        >
                            <div className='flex flex-wrap gap-3'>
                                {/* <Image src={A_a} alt="Image" className="w-10 h-10" /> */}
                                <h1 className='text-base sm:text-lg md:text-xl font-bold decoration-orange-00'>Web Development</h1>
                            </div>
                            <div className='text-start'>
                                <p>Web development is the process of designing, building, and maintaining websites and web applications.
                                    In today's digital age, web development plays a crucial role in providing access to information,
                                    enabling communication and collaboration, and driving business growth.
                                </p>
                            </div>

                        </motion.div>


                    </div>
                </div>

                <div className='pt-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 p-5 items-center justify-center text-center mx-auto my-auto max-w-5xl px-16 pb-5 '>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.75 }}
                        >
                            <div className='flex flex-wrap gap-3'>
                                {/* <Image src={A_a} alt="Image" className="w-10 h-10" /> */}
                                <h1 className='text-base sm:text-lg md:text-xl font-bold decoration-orange-00'>Blockchain Development</h1>
                            </div>
                            <div className='text-start'>
                                <p>Blockchain development involves designing, building, and maintaining decentralized systems that enable secure and transparent transactions
                                    Effective blockchain development requires a deep understanding of cryptography, consensus algorithms, and network architecture.
                                </p>
                            </div>

                        </motion.div>
                        <motion.div className='rounded-xl justify-center item-center text-center max-w-fit pl-5 md:pl-10'
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.75 }}
                        >
                            <div class="grid grid-cols-3 gap-x-6 gap-y-3">

                                <div className='flex flex-wrap'>

                                    <div class="rounded-md ">
                                        <Image src={B_e} className="w-12 h-12" />
                                        Ethereum
                                    </div>
                                </div>
                                <div className='flex flex-wrap'>

                                    <div class="rounded-md   ">
                                        <Image src={B_s} className="w-12 h-12" />
                                        Solidity
                                    </div>
                                </div>
                                <div className='flex flex-wrap'>

                                    <div class="rounded-md ">
                                        <Image src={B_h} className="w-12 h-12" />
                                        Hardhat
                                    </div>
                                </div>

                            </div>
                        </motion.div>



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
