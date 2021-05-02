import React from 'react';

import './App.css';

// TODO: Continue from here
// * Get individual datas from data to be shown url example
const data = fetch('https://api.github.com/users/SamiHei/repos')
.then(response => response.json());

console.log(data);

function Projects() {
    return (
        <div className="page-3">
            <h1>Projects</h1>
        </div>
    );
}

export default Projects;
