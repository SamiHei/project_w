import React, { useEffect, useState } from 'react';

import './App.css';


function Projects() {

    const [projects, setProjects] = useState([])

    async function GetMyProjects() {
        await fetch('https://api.github.com/users/SamiHei/repos')
        .then(res => {res.json()
        .then(projects => {setProjects(projects)});
        })
    }


    useEffect(() => {
        GetMyProjects();
        console.log(projects);
    },[])

    return (
        <div className="page-3">
            <h1>Projects</h1>
        </div>
    );
}

export default Projects;
