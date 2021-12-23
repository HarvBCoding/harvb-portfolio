import React from "react";
import resumeFile from "../../assets/resume/2021BreResume.pdf";

function Resume() {
    return (
        <div>
            <h1 id="resume">Bre's Resume</h1>
            <iframe 
                id="resume-pdf" 
                title="Bre Resume" 
                src={resumeFile}
                frameboarder="1"
                scrolling="auto"
                height="1100"
                width="75%"></iframe>
        </div>
    )
}

export default Resume;