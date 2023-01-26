import Head from 'next/head';
import Link from 'next/link';
import sun from '../public/sun.svg'
import moon from '../public/moon.svg'

import { useState, useEffect } from "react"
import { useTheme } from 'next-themes'
import Image from 'next/image'


export default function Home() {
    const [navbar, setNavbar] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
        <div>
            <Head>

                <meta
                    name="description"
                    content="Create Next JS Responsive Menu with Tailwind CSS"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>




            <nav className="w-full z-50 top-0 font-chivoMono">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link className='text-3xl font-bold ' href="/"> Portfolio </Link>


                            <div className="md:hidden">
                                <button className="p-1 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border" onClick={() => setNavbar(!navbar)}>
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-500"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="items-center justify-center space-y-1 md:flex md:space-x-6 md:space-y-0 ">
                                <li ><Link className=' font-semibold hover:underline mx-3 my-4 md:my-0' href="/">Home</Link></li>
                                <li><Link className=' font-semibold hover:underline mx-3 my-4 md:my-0' href="/education">Education</Link></li>
                                <li ><Link className=' font-semibold hover:underline mx-3 my-4 md:my-0' href="#">Experience</Link></li>
                                <li ><Link className=' font-semibold hover:underline mx-3 my-4 md:my-0' href="#">Projects</Link></li>
                                <li><Link className=' font-semibold hover:underline mx-3 my-4 md:my-0' href="/contact">Contact me</Link></li>
                                <div className='px-3'>
                                    <div >
                                        {currentTheme === 'dark' ? (
                                            <button
                                                className=" "
                                                onClick={() => setTheme('light')}
                                            >
                                                {' '}
                                                <Image src={sun} alt="logo" height="20" width="20" />

                                            </button>
                                        ) : (
                                            <button
                                                className=" "
                                                onClick={() => setTheme('dark')}
                                            >
                                                <Image src={moon} alt="logo" height="20" width="20" />


                                            </button>
                                        )}
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}