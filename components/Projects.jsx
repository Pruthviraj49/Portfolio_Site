import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Project2 from '../public/Project2.png'
import Project1 from '../public/Project1.png'



const Projects = () => {
    return (
        <div className='pt-24'>
            <div className=" md:px-40 sm:px-16 px-10 font-chivoMono pb-10">
                <h1 className="text-xl md:text-2xl font-bold text-start underline decoration-orange-400 underline-offset-4 pb-10">Projects</h1>
            </div>
            <div className='flex flex-col justify-center md:flex-row pt-10 font-chivoMono items-center w-full '>

                <div className='w-fit md:pl-52 sm:px-16 px-10 md:w-1/2  pb-5'>
                    <Image className='  border-2 dark:border-gray-200 border-gray-800' src={Project1} height={300} layout="fit" objectFit='cover' alt="default" />
                </div>
                <div className="w-full px-10 sm:px-16 md:w-1/2 text-start">
                    <h2 className="text-base sm:text-lg md:text-xl font-bold cursor-pointer hover:underline  mb-2">NewsMania (Flutter App)</h2>
                    <p className="text-sm sm:text-base md:text-lg font-bold px-5 ">NewsMania essentially uses a News API to fetch
                        Real-time data. We can search news &amp;
                        read it on the article posted by that publisher, it also redirected it to particular article through WebView.</p>
                    <div className="flex text-start text-sm sm:text-base md:text-md text-gray-100 gap-3 mt-2 flex-wrap">

                        <div className='flex gap-3 flex-wrap'>
                            <div class="rounded-md bg-orange-500 p-1">Flutter</div>
                        </div>
                        <div className='flex gap-3 flex-wrap'>
                            <div class="rounded-md bg-orange-500 p-1">Dart</div>
                        </div>
                        <div className='flex gap-3 flex-wrap'>
                            <div class="rounded-md bg-orange-500 p-1 ">REST-API</div>
                        </div>
                        <div className='flex gap-3 flex-wrap'>
                            <div class="rounded-md bg-orange-500 p-1 ">WebView</div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='flex flex-col md:flex-row pt-10 justify-center font-chivoMono items-center w-full '>

                <div className='w-fit md:pl-52 sm:px-16 px-10 md:w-1/2 pb-5'>
                    <Image className=' border-2 dark:border-gray-200 border-gray-800' src={Project2} height={300} layout="" objectFit='contain' alt="default" />
                </div>
                <div className="w-full px-10 sm:px-16 md:w-1/2 text-start">
                    <h2 className="text-base sm:text-lg md:text-xl font-bold cursor-pointer hover:underline mb-2">TakeNote (Flutter App)</h2>
                    <p className="text-sm sm:text-base md:text-lg font-bold px-5 ">NoteTake app is a short notes&ndash;taking app. In this app, we can perform
                        CRUD operations with a user&ndash;friendly UI design.
                        Also integrated Google Authentication using firebase.</p>
                    <div className="flex text-sm sm:text-base md:text-md text-gray-100 gap-3 flex-wrap">

                        <div className='flex gap-3 flex-wrap'>
                            <div class="rounded-md bg-orange-500 p-1 mt-2">Flutter</div>
                        </div>
                        <div className='flex gap-3 flex-wrap'>
                            <div class="rounded-md bg-orange-500 p-1 mt-2">Dart</div>
                        </div>
                        <div className='flex gap-3 flex-wrap'>
                            <div class="rounded-md bg-orange-500 p-1 mt-2">SQFlite</div>
                        </div>
                        <div className='flex gap-3 flex-wrap'>
                            <div class="rounded-md bg-orange-500 p-1 mt-2">SQL</div>
                        </div>
                        <div className='flex gap-3 flex-wrap'>
                            <div class="rounded-md bg-orange-500 p-1 mt-2">FireBase</div>
                        </div>
                    </div>


                </div>
            </div>

            {/* <div className='flex flex-col md:flex-row pt-10 justify-center font-chivoMono items-center w-full '>

                <div className='w-full md:px-52 sm:px-16 px-10 md:w-1/2'>
                    <Image src={pruthvi} height={300} layout="" objectFit='contain' alt="default" />
                </div>
                <div className="w-full px-10 sm:px-16 md:w-1/2 text-start">
                    <h2 className=" text-xl font-bold cursor-pointer hover:underline  mb-2">Mape Labs</h2>
                    <p className="font-bold px-5 ">An NFT Project on Solana I made for Mape Labs</p>
                    <div className="flex text-gray-200 gap-4 flex-wrap">
                        <p></p>

                        <div className='flex text-gray-200 gap-4 flex-wrap'>
                            <div class="rounded-md bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-1 mt-2">Flutter</div>
                        </div>
                    </div>


                </div>
            </div> */}
            {/* <div className='flex flex-col md:flex-row pt-10 justify-center font-chivoMono items-center w-full '>

                <div className='w-full md:px-52 sm:px-16 px-10 md:w-1/2'>
                    <Image src={pruthvi} height={300} layout="" objectFit='contain' alt="default" />
                </div>
                <div className="w-full px-10 sm:px-16 md:w-1/2 text-start">
                    <h2 className=" text-xl font-bold cursor-pointer hover:underline mb-2">Mape Labs</h2>
                    <p className="font-bold px-5 ">An NFT Project on Solana I made for Mape Labs</p>
                    <div className="flex text-gray-200 gap-4 flex-wrap">
                        <p></p>

                        <div className='flex text-gray-200 gap-4 flex-wrap'>
                            <div class="rounded-md bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 p-1 mt-2">Flutter</div>
                        </div>
                    </div>


                </div>
            </div> */}

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