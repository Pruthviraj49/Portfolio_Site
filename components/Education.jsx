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
    },


];

const Education = () => {
    return (
        <div className="flex flex-col justify-center md:px-40 sm:px-16 px-10 font-chivoMono">
            <h1 className="text-xl sm:text-2xl font-bold py-5">Educational Background :</h1>

            <table className="shadow-lg bg-gray-500 sm:mx-20 ">
                <thead>
                    <tr className='border-2'>
                        <th className='border-2 bg-orange-300 text-left px-2 py-2 text-lg sm:text-xl'>College Name </th>
                        <th className='border-2 bg-orange-300 text-left px-2 py-2 text-lg sm:text-xl'>Degree</th>
                        <th className='border-2 bg-orange-300 text-left px-2 py-2 text-lg sm:text-xl'>Year</th>
                        <th className='border-2 bg-orange-300 text-left px-2 py-2 text-lg sm:text-xl'>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {jsonData.map(item => (
                        <tr key={item.college}>
                            <td className='border-2 px-2 py-2 sm:text-lg font-bold'>{item.college}</td>
                            <td className='border-2 px-2 py-2 sm:text-lg font-bold'>{item.degree}</td>
                            <td className='border-2 px-2 py-2 sm:text-lg font-bold'>{item.year}</td>
                            <td className='border-2 px-2 py-2 sm:text-lg font-bold'>{item.marks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <h1 className="text-xl sm:text-2xl font-bold py-5">Extra Curricular Activities :</h1>

            </div>
        </div>

    );
};

export default Education;