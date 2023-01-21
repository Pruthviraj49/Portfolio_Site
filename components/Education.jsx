import React from "react";


const Education = ({ school, degree, completion, percentage }) => {
    return (
        <div className="px-20 py-20 justify-center items-center">
            <div>{school}</div>
            <div>{degree}</div>
            <div>{completion}</div>
            <div>{percentage}</div>

        </div>
    );

}
export default Education;