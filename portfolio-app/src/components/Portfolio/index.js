import React from "react";

function Portfolio() {
    const projects = [
        {
            title: 'Project Harmony',
            liveLink: 'https://eltont45.github.io/Project-Harmony/',
            repoLink: 'https://github.com/TayHern/Project-Harmony',
        },
        {
            title: 'Techy-tech blog',
            liveLink: 'https://frozen-hamlet-95508.herokuapp.com/',
            repoLink: 'https://github.com/TayHern/techy-tech-news',
            
        },
        {
            title: 'Note Taker',
            liveLink: 'https://note-taker-ucla-22.herokuapp.com/',
            repoLink: 'https://github.com/TayHern/Note-Taker',

        },
        {
            title: 'Workday Scheduler',
            liveLink: 'https://tayhern.github.io/UCLA-Challenge-Workday-Scheduler/',
            repoLink: 'https://github.com/TayHern/UCLA-Challenge-Workday-Scheduler',
        },
        
    ]

    return (
        <div className="text-center">
            <h1 className="border-bottom border-dark p-3">Portfolio</h1>
            <p>Here are some of my most recent projects I have completed.  Note that some of the projects listed are a work in progress and still are being updated to being fully functional.</p>
            <div className="flex-row justify-content-around">
                {projects.map((project) => (
                    <div key={project.title} className='m-3 p-3 rounded shadow-lg'>
                        <h2>{project.title}</h2>
                        <img
                          src={project.image}
                          alt={project.title}
                          className='img-thumbnail'
                        />
                        <div className="m-3">
                            <a href={project.liveLink} className='text-decoration-none'>Deployed Link</a>
                            <br></br>
                            <a href={project.repoLink} className='text-decoration-none'>GitHub Repo Link</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;