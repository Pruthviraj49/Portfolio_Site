import React from "react";


const jsonData = [
    {
        "college": "Veermata Jijabai Technological Institute, Mumbai",
        "degree": "B-Tech in IT",
        "year": "May-24",
        "marks": "7.51"
    },
    {
        "college": "Ichalkaranji HighSchool and Junior College, Ichalkaranji",
        "degree": "12th HSC",
        "year": "Mar-20",
        "marks": "87.38 %"
    },
    {
        "college": "Vyankatrao HighSchool and Junior College, Ichalkaranji",
        "degree": "10th SSC",
        "year": "Apr-18",
        "marks": "96.80 %"
    }


];

const About = () => {
    return (
        <div>
            <div className="md:px-40 sm:px-16 px-10 font-chivoMono">
                <h1 className="text-xl md:text-2xl font-bold text-start underline decoration-orange-400 underline-offset-4 pb-10">About me</h1>
            </div>
            <div>


            </div>

            <div className="flex flex-col items-center justify-center md:px-40 sm:px-16 px-10 font-chivoMono">

                <h1 className="text-lg sm:text-xl font-bold py-5">Educational Background :</h1>

                <table className="shadow-lg bg-gray-500 sm:mx-20 rounded-lg">
                    <thead>
                        <tr className='border-2'>
                            <th className='border-2 bg-orange-400 text-left px-2 py-2 text-base sm:text-xl'>College Name </th>
                            <th className='border-2 bg-orange-400 text-left px-2 py-2 text-base sm:text-xl'>Degree</th>
                            <th className='border-2 bg-orange-400 text-left px-2 py-2 text-base sm:text-xl'>Year</th>
                            <th className='border-2 bg-orange-400 text-left px-2 py-2 text-base sm:text-xl'>Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jsonData.map(item => (
                            <tr key={item.college}>
                                <td className='border-2 px-2 py-2 text-sm sm:text-lg font-bold'>{item.college}</td>
                                <td className='border-2 px-2 py-2 text-sm sm:text-lg font-bold'>{item.degree}</td>
                                <td className='border-2 px-2 py-2 text-sm sm:text-lg font-bold'>{item.year}</td>
                                <td className='border-2 px-2 py-2 text-sm sm:text-lg font-bold'>{item.marks}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                <h1 className="text-lg sm:text-xl font-bold py-5">Achievements :</h1>
                <ul className="list-outside sm:px-36 font-bold list-disc">
                    <li className="text-start  sm:text-lg md:text-xl text-base py-2 leading-6">
                        I have secured a 100 percentile score
                        in Chemistry subject and got a rank of
                        260 among 2 lakh students in MHT-
                        CET.
                    </li>
                    <li className="text-start sm:text-lg md:text-xl text-base py-2 leading-6">
                        Code chef highest global rank 1951 with
                        1465 ratting.
                    </li>
                    <li className="text-start sm:text-lg md:text-xl text-base py-2 leading-6">
                        I have been part of our official college kho-kho team.
                    </li>
                </ul>


            </div>
        </div>
    );
};

export default About;