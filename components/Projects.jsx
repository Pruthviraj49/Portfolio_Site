import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Project2 from '../public/Project2.png'
import Project1 from '../public/Project1.png'



const Projects = () => {
    return (
        <div className='pt-24'>
            <div className=" md:px-40 sm:px-16 px-8 font-chivoMono pb-10">
                <h1 className="text-xl md:text-2xl font-bold text-start underline decoration-orange-400 underline-offset-4 pb-10">Projects</h1>
            </div>
            <div className='md:px-52 sm:px-16 px-5 justify-center '>


                <div className='flex flex-col md:flex-row w-full gap-2 pt-10 font-chivoMono pb-20'>

                    <div className='w-full md:w-1/2 justify-center item-center px-10 sm:px-20 md:px-5'>
                        <Image className='border-2 dark:border-white border-gray-800' src={Project1} height={275} layout="fit" objectFit='cover' alt="default" />
                    </div>
                    <div className="w-full md:w-1/2 text-center justify-center pt-10 px-5 sm:px-12 md:px-5">
                        <h2 className="text-base sm:text-lg md:text-xl font-bold cursor-pointer hover:underline  mb-2">NewsMania (Flutter App)</h2>
                        <p className="text-sm sm:text-base md:text-lg font-bold px-5 ">NewsMania essentially uses a News API to fetch
                            Real-time data. We can search news &amp;
                            read it on the article posted by that publisher, it also redirected it to particular article through WebView.</p>
                        <div className="flex flex-wrap justify-center text-sm sm:text-base md:text-md text-gray-100 gap-3 mt-2 ">

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


                <div className='flex flex-col md:flex-row w-full  gap-2 pt-10 font-chivoMono pb-20'>
                    <div className='w-full md:w-1/2 justify-center item-center px-10 sm:px-20 md:px-5'>
                        <Image className=' border-2 dark:border-white border-gray-800' src={Project2} height={275} layout="" objectFit='contain' alt="default" />
                    </div>
                    <div className="w-full md:w-1/2 text-center justify-center pt-10  px-5 sm:px-12 md:px-5">
                        <h2 className="text-base sm:text-lg md:text-xl font-bold cursor-pointer hover:underline mb-2">TakeNote (Flutter App)</h2>
                        <p className="text-sm sm:text-base md:text-lg font-bold px-5 ">NoteTake app is a short notes&ndash;taking app. In this app, we can perform
                            CRUD operations with a user&ndash;friendly UI design.
                            Also integrated Google Authentication using firebase.</p>
                        <div className="flex flex-wrap justify-center text-sm sm:text-base md:text-md text-gray-100 gap-3 ">

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
            </div>



        </div>
    )
}
export default Projects




