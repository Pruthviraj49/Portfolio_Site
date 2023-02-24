import React from "react";
import Skills from "./Skills";
import { motion, variants } from "framer-motion";

export default function Experience() {


    return (
        <div className="pb-32 pt-16">
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
                    Experience
                </motion.h1>
            </motion.div>
            <div className="pb-10 px-10">

                <div className="grid md:grid-cols-2 gap-8 md:px-40 sm:px-16 px-6 font-chivoMono pb-7">
                    <motion.div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg p-6"
                        initial={{ x: -50, y: -50, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5 }}

                    >
                        <div className="text-lg sm:text-xl md:text-xl font-bold pb-3">
                            <span className="text-2xl md:text-3xl">🧑‍🎓</span> Internship
                        </div>
                        <div className="pb-5">
                            <h1 className="text-base sm:text-lg md:text-xl font-meduim text-orange-400">
                                Flutter Developer
                            </h1>
                            <h2>Incipient Technologies Pvt.Ltd</h2>
                            <h3>(Aug&apos;22 - Oct&apos;22)</h3>
                        </div>

                    </motion.div>
                    <motion.div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg p-6"
                        initial={{ x: 50, y: -50, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-lg sm:text-xl md:text-xl font-bold pb-3">
                            <span className="text-2xl md:text-3xl">👨‍🏫</span> Voluntouring
                        </div>
                        <div className="pb-5">
                            <h1 className="text-base sm:text-lg md:text-xl font-meduim text-orange-400">
                                Web Developer
                            </h1>
                            <h2>Technovanza (Technical Club)</h2>
                            <h3>(Oct&apos;22 - Present)</h3>
                        </div>

                        <div className="pb-5">

                            <h2>AeroVJTI (Technical Club)</h2>
                            <h3>(Jan&apos;23 - Present)</h3>
                        </div>
                    </motion.div>
                </div>



                <div className="grid md:grid-cols-2 gap-8 md:px-40 sm:px-16 px-6 font-chivoMono">
                    <motion.div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg p-6"
                        initial={{ x: -50, y: 50, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-lg sm:text-xl md:text-xl font-bold pb-3">
                            <span className="text-2xl md:text-3xl">📜</span> Certifications
                        </div>
                        <div className="pb-5">
                            <h1 className="text-base sm:text-lg md:text-xl font-meduim text-orange-400">
                                Udemy
                            </h1>
                            <a
                                href="https://www.udemy.com/certificate/UC-b5276f5d-8929-42ad-95c2-167ffc21c60f/"
                                className="underline font-semibold underline-offset-1 hover:underline-offset-2"
                            >
                                Flutter & Dart - The Complete Guide{" "}
                            </a>
                        </div>
                    </motion.div>
                    <motion.div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg p-6"
                        initial={{ x: 50, y: 50, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-lg sm:text-xl md:text-xl font-bold pb-3">
                            <span className="text-2xl md:text-3xl">🙎‍♂️</span> Extracurricular
                        </div>
                        <div className="pb-5">
                            <h1 className="text-base sm:text-lg md:text-xl font-meduim text-orange-400">
                                KHO-KHO player
                            </h1>
                            <h2 className="">Official college team</h2>

                        </div>
                    </motion.div>
                </div>

            </div>

        </div>
    );
}
