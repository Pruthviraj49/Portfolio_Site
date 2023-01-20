import Education from '../../components/Education';
import React from 'react';


const Education_details = () => {
    return (
        <section>
            <div>
                <Education
                    school='Vyankatrao HighSchool and Junior College, Ichalkaranji'
                    degree='10th SSC'
                    completion='April 2018'
                    percentage='96.80 %'
                />
                <Education
                    school='Ichalkaranji HighSchool and Junior College, Ichalkaranji'
                    degree='12th HSC'
                    completion='March 2020'
                    percentage='87.38 %'
                />
                <Education
                    school='Veermata Jijabai Technological Institute, Mumbai'
                    degree='B-Tech Undergraduate in Informational Technology'
                    completion='May 2024'
                    percentage='7.51 till 5th Semester'
                />
            </div>

        </section>
    );
};

export default Education_details;