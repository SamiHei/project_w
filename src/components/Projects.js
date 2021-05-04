import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import ScrollMenu from 'react-horizontal-scrolling-menu';
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
            <div className="test">
                <ScrollMenu data={projects.map(project => <div>{project.html_url}</div>)}/>
            </div>
        </div>
    );
}

export default Projects;

// example for scroll
// https://www.npmjs.com/package/react-horizontal-scrolling-menu