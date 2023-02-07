import React from 'react'
import Skills from './Skills'


export default function Experience() {
    return (
        <div className='pb-32'>
            <div className="pt-20 md:px-40 sm:px-16 px-10 font-chivoMono pb-20">
                <h1 className="text-xl md:text-2xl font-bold text-start pb-10 underline decoration-orange-400 underline-offset-4">Experience and Skills</h1>
            </div>

            <div className='flex flex-col md:flex-row justify-evenly font-chivoMono pb-16'>
                <div className='md:pl-52 sm:px-16 px-12'>
                    <div className='text-lg sm:text-xl md:text-2xl font-bold pb-3'>
                        <span className='text-3xl  md:text-5xl'>🧑‍🎓</span> Internship
                    </div>
                    <div className='pb-5'>
                        <h1 className='text-base sm:text-lg md:text-xl font-bold text-orange-400'>Flutter Developer</h1>
                        <h2 className=''>Incipient Technologies Pvt.Ltd</h2>
                        <h3>(Aug&apos;22 - Oct&apos;22)</h3>

                    </div>
                </div>
                <div className='md:pl-52 sm:px-16 px-12 pb-12 sm:pb-0'>
                    <div className='text-lg sm:text-xl md:text-2xl font-bold pb-3'>
                        <span className='text-3xl  md:text-5xl'>👨‍🏫</span>  Voluntouring
                    </div>
                    <div className='pb-5'>
                        <h1 className='text-base sm:text-lg md:text-xl font-bold text-orange-400'>Web Developer</h1>
                        <h2 className=''>Technovanza (Technical Club)</h2>
                        <h3>(Oct&apos;22 - Present)</h3>

                    </div>
                </div>


            </div>
            <div className='md:px-52 sm:px-16 px-12 md:text-center'>
                <div className='pb-20'>
                    <div className='text-lg sm:text-xl md:text-2xl font-bold pb-3'>
                        <span className='text-3xl md:text-5xl'>👨‍💻</span>  Certifications
                    </div>
                    <div className='pb-5'>
                        <h1 className='text-base sm:text-lg md:text-xl font-bold text-orange-400'>Udemy</h1>
                        <a href='https://www.udemy.com/certificate/UC-b5276f5d-8929-42ad-95c2-167ffc21c60f/' className='underline font-semibold underline-offset-1 hover:underline-offset-2'>Flutter & Dart - The Complete Guide </a>


                    </div>
                </div>
                <div className='text-xl md:text-2xl font-bold font-chivoMono underline decoration-orange-400 underline-offset-4'>
                    Skills
                </div>
            </div>
            <div className=' pt-20 md:px-40 sm:px-16 px-10 font-chivoMono font-bold'>
                <Skills />
            </div>




        </div >
    )
}
