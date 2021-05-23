import React, { useEffect, useState } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './Projects.css';
import GithubLogo from '../../images/GitHub_Logo.png'


function Projects() {

    const [projects, setProjects] = useState([])

    async function GetMyProjects() {
        await fetch('https://api.github.com/users/SamiHei/repos')
        .then(res => {res.json()
        .then(projects => {setProjects(projects)});
        })
    }

    function CapitalizeProjectNames(text) {
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

    const Arrow = ({ text, className }) => {
        return (
            <div
                className={className}
            >{text}</div>
        );
    };

    const MenuItem = ({url, text, language, selected}) => {
        return <a href={url} target="_blank" rel="noreferrer"
            className={`project-item-container ${selected ? 'active' : ''}`}>
                <div className="project-item-content">{text}</div>
                <div className="project-language">{language}</div> 
                <img src={GithubLogo} className="project-github-logo" />
            </a>
    }

    const Menu = () =>
        projects.map(item => {
        const name = CapitalizeProjectNames(item.name);
        const {language} = item;
        const {html_url} = item;

        return <MenuItem url={html_url} text={name} language={language} key={name} />;
    });

    const menu = Menu();

    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev'});
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

    return (
        <div className="page-3">
            <h1>Projects</h1>
            <div className="centered">
                <ScrollMenu data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                wheel={false}
                transition="1"
                />
            </div>
        </div>
    );
}

export default Projects;

// example for scroll
// https://www.npmjs.com/package/react-horizontal-scrolling-menu

// TODO: Create list of the items for the menu that are in <div></div> and styled