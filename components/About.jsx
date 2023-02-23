import React from "react";
import { motion, variants } from "framer-motion";

const About = () => {
    return (


        <div className="pt-24 ">
            <motion.div className="pt-20 md:px-40 sm:px-16 px-8 font-chivoMono md:pb-20"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{
                    type: "spring",
                    bounce: 0.4,
                    duration: 1
                }}
            >
                <motion.h1 className="text-xl md:text-2xl font-bold text-start pb-10 underline decoration-orange-400 underline-offset-4">
                    About me
                </motion.h1>
            </motion.div>
            <section className="font-chivoMono ">

                <motion.div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
                    initial={{ x: 250, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.25 }}
                >
                    <div className=" absolute top-0 left-4 w-4 h-full bg-gray-400 dark:bg-gray-700 rounded-md"></div>
                    <ul className="relative z-10 px-10 sm:grid sm:grid-cols-3 justify-evenly sm:gap-x-8">
                        <li className="sm:py-12">
                            <div className="relative pb-8 border-gray-400 dark:border-gray-700">
                                <span className="absolute top-0 left-0  w-5 h-5 rounded-full bg-gray-400 dark:bg-gray-700 "></span>
                                <div className="relative flex items-start space-x-4">
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                        <div>
                                            <span className="block text-base font-bold text-gray-700 dark:text-gray-400">2020 - Present</span>
                                            <span className="block text-xl font-bold text-gray-900 dark:text-white">B-Tech in IT</span>
                                            <span className="block text-base font-semibold text-gray-500 dark:text-gray-400">VJTI, Mumbai</span>
                                            <span className="block text-base font-semibold text-gray-500 dark:text-gray-400">CGPA: 7.51</span>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="sm:py-12">
                            <div className="relative pb-8 border-gray-400 dark:border-gray-700">
                                <span className="absolute top-0 left-0 w-5 h-5 rounded-full bg-gray-400 dark:bg-gray-700"></span>
                                <div className="relative flex items-start space-x-4">
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                        <div>
                                            <span className="block text-base font-bold text-gray-700 dark:text-gray-400">2020</span>
                                            <span className="block text-xl font-bold text-gray-900 dark:text-white">HSC 12th</span>
                                            <span className="block text-base font-semibold text-gray-500 dark:text-gray-400">Ichalkaranji, Kolhapur</span>
                                            <span className="block text-base font-semibold text-gray-500 dark:text-gray-400">Percentage: 87.38%</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="sm:py-12">
                            <div className="relative pb-8 border-gray-400 dark:border-gray-700">
                                <span className="absolute top-0 left-0 w-5 h-5 rounded-full bg-gray-400 dark:bg-gray-700"></span>
                                <div className="relative flex items-start space-x-4">
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                        <div>
                                            <span className="block text-base font-bold text-gray-700 dark:text-gray-400">2018</span>
                                            <span className="block text-xl font-bold text-gray-900 dark:text-white">SSC 10th</span>
                                            <span className="block text-base font-semibold text-gray-500 dark:text-gray-400">Ichalkaranji, Kolhapur</span>
                                            <span className="block text-base font-semibold text-gray-500 dark:text-gray-400">Percentage: 96.80%</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>


                </motion.div>




            </section>
        </div>
    );
};

export default About;