import React from 'react'
import Image from 'next/image'

import pruthvi from '../public/myselfN.png'

const Projects = () => {
    return (
        <div>
            <div className="pt-20 md:px-40 sm:px-16 px-10 font-chivoMono">
                <h1 className="text-xl md:text-2xl font-bold text-start pb-10">Projects</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center pt-10 font-chivoMono items-center w-full '>

                <div className='w-full md:px-52 sm:px-16 px-10 md:w-1/2'>
                    <Image src={pruthvi} height={300} layout="" objectFit='contain' alt="default" />
                </div>
                <div className="w-full px-10 sm:px-16 md:w-1/2 text-start">
                    <h2 className=" text-xl font-bold cursor-pointer hover:underline  mb-2">Mape Labs</h2>
                    <p className="font-bold px-5 ">An NFT Project on Solana I made for Mape Labs. Make a choose between "Bearish" and "Bullish", and earn NFT if you win.</p>
                    <div className="flex text-gray-200 gap-4 flex-wrap">
                        <p></p>

                        <div className='flex text-gray-200 gap-4 flex-wrap'>
                            <div class="rounded-md bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-1 mt-2">Flutter</div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='flex flex-col md:flex-row pt-10 justify-center font-chivoMono items-center w-full '>

                <div className='w-full md:px-52 sm:px-16 px-10 md:w-1/2'>
                    <Image src={pruthvi} height={300} layout="" objectFit='contain' alt="default" />
                </div>
                <div className="w-full px-10 sm:px-16 md:w-1/2 text-start">
                    <h2 className=" text-xl font-bold cursor-pointer hover:underline  mb-2">Mape Labs</h2>
                    <p className="font-bold px-5 ">An NFT Project on Solana I made for Mape Labs. Make a choose between "Bearish" and "Bullish", and earn NFT if you win.</p>
                    <div className="flex text-gray-200 gap-4 flex-wrap">
                        <p></p>

                        <div className='flex text-gray-200 gap-4 flex-wrap'>
                            <div class="rounded-md bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-1 mt-2">Flutter</div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='flex flex-col md:flex-row pt-10 justify-center font-chivoMono items-center w-full '>

                <div className='w-full md:px-52 sm:px-16 px-10 md:w-1/2'>
                    <Image src={pruthvi} height={300} layout="" objectFit='contain' alt="default" />
                </div>
                <div className="w-full px-10 sm:px-16 md:w-1/2 text-start">
                    <h2 className=" text-xl font-bold cursor-pointer hover:underline  mb-2">Mape Labs</h2>
                    <p className="font-bold px-5 ">An NFT Project on Solana I made for Mape Labs. Make a choose between "Bearish" and "Bullish", and earn NFT if you win.</p>
                    <div className="flex text-gray-200 gap-4 flex-wrap">
                        <p></p>

                        <div className='flex text-gray-200 gap-4 flex-wrap'>
                            <div class="rounded-md bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-1 mt-2">Flutter</div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='flex flex-col md:flex-row pt-10 justify-center font-chivoMono items-center w-full '>

                <div className='w-full md:px-52 sm:px-16 px-10 md:w-1/2'>
                    <Image src={pruthvi} height={300} layout="" objectFit='contain' alt="default" />
                </div>
                <div className="w-full px-10 sm:px-16 md:w-1/2 text-start">
                    <h2 className=" text-xl font-bold cursor-pointer hover:underline mb-2">Mape Labs</h2>
                    <p className="font-bold px-5 ">An NFT Project on Solana I made for Mape Labs. Make a choose between "Bearish" and "Bullish", and earn NFT if you win.</p>
                    <div className="flex text-gray-200 gap-4 flex-wrap">
                        <p></p>

                        <div className='flex text-gray-200 gap-4 flex-wrap'>
                            <div class="rounded-md bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-1 mt-2">Flutter</div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
export default Projects




// <div className='py-4 md:py-20 lg:py-32 max-w-5xl mx-auto'>
{/* <ul className='flex flex-wrap justify-center md:justify-start w-full px-4 sm:px-8'>
                <li >

                    <div class="mx-2 my-4 max-w-sm cursor-pointer bg-gray-100  dark:bg-gray-700 border border-palette-lighter shadow-lg rounded p-4 hover:bg-palette-lighter dark:hover:bg-palette-dark">
                        <Image src={pruthvi} height={300} layout="" objectFit='contain' alt="default" />
                        <div class="font-bold text-base md:text-lg pt-6 text-gray-900 dark:text-white">New Post XYZ</div>
                        <div class="text-xs text-gray-700 dark:text-gray-200 mb-2 sm:mb-4">March 11, 2021</div>
                        <div class="text-sm sm:text-base text-gray-800 dark:text-gray-100">A Colorful Life</div>
                    </div>



                </li>
                <li >

                    <div class="mx-2 my-4 max-w-xs cursor-pointer bg-gray-100  dark:bg-gray-700 border border-palette-lighter shadow-lg rounded p-4 hover:bg-palette-lighter dark:hover:bg-palette-dark">
                        <Image src={pruthvi} height={300} layout="" objectFit='contain' alt="default" />
                        <div class="font-bold text-base md:text-lg pt-6 text-gray-900 dark:text-white">New Post XYZ</div>
                        <div class="text-xs text-gray-700 dark:text-gray-200 mb-2 sm:mb-4">March 11, 2021</div>
                        <div class="text-sm sm:text-base text-gray-800 dark:text-gray-100">A Colorful Life</div>
                    </div>



                </li>
                <li >

                    <div class="mx-2 my-4 max-w-xs cursor-pointer bg-gray-100  dark:bg-gray-700 border border-palette-lighter shadow-lg rounded p-4 hover:bg-palette-lighter dark:hover:bg-palette-dark">
                        <Image src={pruthvi} height={300} layout="" objectFit='contain' alt="default" />
                        <div class="font-bold text-base md:text-lg pt-6 text-gray-900 dark:text-white">New Post XYZ</div>
                        <div class="text-xs text-gray-700 dark:text-gray-200 mb-2 sm:mb-4">March 11, 2021</div>
                        <div class="text-sm sm:text-base text-gray-800 dark:text-gray-100">A Colorful Life</div>
                    </div>



                </li>
                <li >

                    <div class="mx-2 my-4 max-w-xs cursor-pointer bg-gray-100  dark:bg-gray-700 border border-palette-lighter shadow-lg rounded p-4 hover:bg-palette-lighter dark:hover:bg-palette-dark">
                        <Image src={pruthvi} height={300} layout="" objectFit='contain' alt="default" />
                        <div class="font-bold text-base md:text-lg pt-6 text-gray-900 dark:text-white">New Post XYZ</div>
                        <div class="text-xs text-gray-700 dark:text-gray-200 mb-2 sm:mb-4">March 11, 2021</div>
                        <div class="text-sm sm:text-base text-gray-800 dark:text-gray-100">A Colorful Life</div>
                    </div>



                </li>
                <li >

                    <div class="mx-2 my-4 max-w-xs cursor-pointer bg-gray-100  dark:bg-gray-700 border border-palette-lighter shadow-lg rounded p-4 hover:bg-palette-lighter dark:hover:bg-palette-dark">
                        <Image src={pruthvi} height={300} layout="" objectFit='contain' alt="default" />
                        <div class="font-bold text-base md:text-lg pt-6 text-gray-900 dark:text-white">New Post XYZ</div>
                        <div class="text-xs text-gray-700 dark:text-gray-200 mb-2 sm:mb-4">March 11, 2021</div>
                        <div class="text-sm sm:text-base text-gray-800 dark:text-gray-100">A Colorful Life</div>
                    </div>



                </li>
            </ul>  */}
<div />