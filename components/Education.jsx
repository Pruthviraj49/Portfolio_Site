import React from "react";


const Education = ({ school, degree, completion, percentage }) => {
    return (
        <div>
            <div>{school}</div>
            <div>{degree}</div>
            <div>{completion}</div>
            <div>{percentage}</div>

        </div>
    );

}
export default Education;