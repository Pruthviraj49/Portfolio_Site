import React from "react";

const About = () => {
    return (
        // <div className="py-6">
        //     <h2 className="text-2xl font-bold mb-4">Educational Details</h2>
        //     <div className="bg-white p-6 rounded-lg shadow-md">
        //         <div className="flex items-center mb-4">
        //             <div className="w-10 h-10 bg-indigo-500 rounded-full mr-4"></div>
        //             <div>
        //                 <h3 className="font-medium text-lg">Degree Title</h3>
        //                 <p className="text-gray-700">Institute Name</p>
        //             </div>
        //         </div>
        //         <div className="flex items-center mb-4">
        //             <div className="w-10 h-10 bg-indigo-500 rounded-full mr-4"></div>
        //             <div>
        //                 <h3 className="font-medium text-lg">Degree Title</h3>
        //                 <p className="text-gray-700">Institute Name</p>
        //             </div>
        //         </div>
        //         <div className="flex items-center mb-4">
        //             <div className="w-10 h-10 bg-indigo-500 rounded-full mr-4"></div>
        //             <div>
        //                 <h3 className="font-medium text-lg">Degree Title</h3>
        //                 <p className="text-gray-700">Institute Name</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="pt-24 ">
            <div className="md:px-40 sm:px-16 px-8 font-chivoMono">
                <h1 className="text-xl md:text-2xl font-bold text-start underline decoration-orange-400 underline-offset-4 pb-5 md:pb-20">About me</h1>
            </div>
            <section className="font-chivoMono ">

                <div className="grid justify-center pl-12 pr-12">
                    <div className="col-span-2 pb-5">
                        <div className="flex flex-col">
                            <div className="flex">
                                <span className="text-3xl md:text-4xl pr-1">🎓</span>
                                <h3 className="text-lg font-bold text-center pt-2" >B-Tech in Information Technology</h3>
                            </div>
                            <div className="flex flex-col px-16 text-gray-600 dark:text-gray-200">
                                <span className="text-base font-bold">VJTI, Mumbai</span>
                                <span className="text-base font-bold">2020-2024</span>
                                <span className="text-base font-bold pb-5">CGPI : 7.51</span>
                            </div>

                        </div>
                        <hr className="w-full border-1 border-gray-900 dark:border-gray-200" />
                    </div>



                    <div className="col-span-2  pb-5">
                        <div className="flex flex-col">
                            <div className="flex">
                                <span className="text-3xl md:text-4xl pr-1">🎓</span>
                                <h3 className="text-lg font-bold text-center pt-2" >HSC (12th Science)</h3>
                            </div>
                            <div className="flex flex-col px-16  text-gray-600 dark:text-gray-200">
                                <span className="text-base font-bold">Ichalkaranji High School, Ichalkaranji</span>
                                <span className="text-base font-bold">2019-2020</span>
                                <span className="text-base font-bold pb-5">Percentage : 87.38 %</span>
                            </div>

                        </div>
                        <hr className="w-full border-1 border-gray-900 dark:border-gray-200" />
                    </div>


                    <div className="col-span-2">
                        <div className="flex flex-col">
                            <div className="flex">
                                <span className="text-3xl md:text-4xl pr-1">🎓</span>
                                <h3 className="text-lg font-bold text-center pt-2" >SSC (10th)</h3>
                            </div>
                            <div className="flex flex-col px-16  text-gray-600 dark:text-gray-200">
                                <span className="text-base font-bold">Vyankatrao High School, Ichalkaranji</span>
                                <span className="text-base font-bold">2017-2018</span>
                                <span className="text-base font-bold pb-5">Percentage : 96.80 %</span>
                            </div>

                        </div>
                        <hr className="w-full border-1 border-gray-900 dark:border-gray-200" />
                    </div>

                </div>




            </section>
        </div>
    );
};

export default About;