import React, { useEffect, useState } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './Projects.css';
import GithubLogo from '../../images/GitHub_Logo.png'

interface Arrow {
    text : string;
    className : string;
}

interface MenuItem {
    url : string;
    text : string;
    language : string;
}

interface Project {
    name : string;
    language: string;
    html_url : string;
}


function Projects() {

    const [projects, setProjects] = useState<Project[]>([])

    async function GetMyProjects() {
        await fetch('https://api.github.com/users/SamiHei/repos')
        .then(res => {res.json()
        .then(projects => {setProjects(projects)});
        })
    }

    function CapitalizeProjectNames(text : string) {
        let parts = text.split('_');
        let res = '';
        let len = parts.length;

        for (var i = 0; i < len; i++) {
            res += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
            if (i !== (len - 1)) {
                res += ' ';
            }
        }

        return res;
    }

    useEffect(() => {
        GetMyProjects();
    },[])

    const Arrow = ( arrow : Arrow ) => {
        return (
            <div
                className={arrow.className}
            >{arrow.text}</div>
        );
    };

    const MenuItem = ( menuItem : MenuItem) => {
        return <a href={menuItem.url} target="_blank" rel="noreferrer"
            className={`project-item-container`}>
                <div className="project-item-content">{menuItem.text}</div>
                <div className="project-language">{menuItem.language}</div> 
                <img src={GithubLogo} className="project-github-logo" alt="GitHub" />
            </a>
    }

    const Menu = () =>
        projects.map(item => {
        const name = CapitalizeProjectNames(item.name);
        const language = item.language;
        const html_url = item.html_url;

        return <MenuItem url={html_url} text={name} language={language} key={name} />;
    });

    const menu = Menu();

    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev'});
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

    return (
        <div id="page-3">
            <div className="project-header">Projects</div>
            <div className="centered">
                <ScrollMenu data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                wheel={false}
                transition={1}
                />
            </div>
        </div>
    );
}

export default Projects;
