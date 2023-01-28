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
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 60) {
            setColor(true)
        }
        else {
            setColor(false)
        }

    }

    useEffect(() => {
        setMounted(true);

    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    window.addEventListener('scroll', changeColor)
    return (
        <div>
            <Head>

                <meta
                    name="description"
                    content="Create Next JS Responsive Menu with Tailwind CSS"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>




            <nav className={color ? 'nav-color w-full fixed z-50 top-0 shadow-lg ' : 'w-full fixed z-50 top-0 nav-change'}>
                <div className="font-chivoMono justify-between px-4 py-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-2 md:block">
                            <Link className='text-3xl font-bold' href="/"> Portfolio </Link>

                            {/* hamburger */}
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
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-4 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="items-center justify-center space-y-1 md:flex md:space-x-6 md:space-y-0 ">
                                <li className="pb-2 text-base font-semibold md:text-lg px-3 text-teal-500 text-center hover:underline md:hover:bg-transparent">
                                    <Link href="#home" onClick={() => setNavbar(!navbar)}>
                                        Home
                                    </Link>
                                </li>
                                <li className="pb-2 text-base font-semibold md:text-lg px-3 text-teal-500 text-center hover:underline md:hover:bg-transparent">
                                    <Link href="#education" onClick={() => setNavbar(!navbar)}>
                                        Education
                                    </Link>
                                </li>
                                <li className="pb-2 text-base font-semibold md:text-lg px-3 text-teal-500 text-center hover:underline md:hover:bg-transparent">
                                    <Link href="#experience" onClick={() => setNavbar(!navbar)}>
                                        Experience
                                    </Link>
                                </li>
                                <li className="pb-2 text-base font-semibold md:text-lg px-3 text-teal-500 text-center hover:underline md:hover:bg-transparent">
                                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                                        Projects
                                    </Link>
                                </li>
                                <li className="pb-2 text-base font-semibold md:text-lg px-3 text-teal-500 text-center hover:underline md:hover:bg-transparent">
                                    <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                                        Contact
                                    </Link>
                                </li>

                                <div className='px-3 text-center '>
                                    <div onClick={() => setNavbar(!navbar)} >
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



{/*                             <li ><Link className=' font-semibold hover:underline mx-3 my-4 md:my-0' onClick={() => setNavbar(!navbar)} href="#home">Home</Link></li>
                                <li><Link className=' font-semibold hover:underline mx-3 my-4 md:my-0' onClick={() => setNavbar(!navbar)} href="#education">Education</Link></li>
                                <li ><Link className=' font-semibold hover:underline mx-3 my-4 md:my-0' onClick={() => setNavbar(!navbar)} href="#experience">Experience</Link></li>
                                <li ><Link className=' font-semibold hover:underline mx-3 my-4 md:my-0' onClick={() => setNavbar(!navbar)} href="#projects">Projects</Link></li>
                                <li><Link className=' font-semibold hover:underline mx-3 my-4 md:my-0' onClick={() => setNavbar(!navbar)} href="#contact">Contact me</Link></li> */}