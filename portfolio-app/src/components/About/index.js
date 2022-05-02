import React from "react";

function About() {
    return (
        <div>
            <h1 className="text-center border-bottom border-dark p-3">About Me</h1>
            <div className="text-center p-2">
                <img src={require('../../assets/images/Taylor.jpeg')} alt="profile" className='img-thumbnail rounded'></img>
                <p className="m-3">
                    I am currently a Fullstack Web Developer student who is passionate about learning more about the craft.  I am originally located in the Southern California area and am looking to exapnd my horizons with new projects.  I am currently honing my skills and would like to keep learning in any way that I can.
                    
                </p>
            </div>
        </div>
    );
}

export default About;

