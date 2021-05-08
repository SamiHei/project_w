import React, { useEffect, useState } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './Projects.css';


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

    const Arrow = ({ text, className }) => {
        return (
            <div
                className={className}
            >{text}</div>
        );
    };

    const MenuItem = ({url, text, selected}) => {
        return <a href={url}
            className={`project-item-container ${selected ? 'active' : ''}`}>
                <div className="project-item-image"></div>
                <div className="project-item-content">{text}</div>
            </a>
    }

    const Menu = () =>
        projects.map(item => {
        const {name} = item;
        const {html_url} = item;

        return <MenuItem url={html_url} text={name} key={name} />;
    });

    const menu = Menu();

    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

    return (
        <div className="page-3">
            <h1>Projects</h1>
            <div className="centered">
                <ScrollMenu data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                wheel={false}
                />
            </div>
        </div>
    );
}

export default Projects;

// example for scroll
// https://www.npmjs.com/package/react-horizontal-scrolling-menu

// TODO: Create list of the items for the menu that are in <div></div> and styled