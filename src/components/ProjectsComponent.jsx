import "./css/ProjectsComponent.css"
import { useState } from "react";

const projectsData = [
    {
        id: 1,
        title: "ApiFichajes",
        description: "Production-grade REST API for WiFi-based attendance monitoring via the UniFi Controller API. Built with .NET 8 Minimal APIs, EF Core, PostgreSQL and a Background Service that polls device connections every 30 seconds. Features a custom repository pattern, cookie-based authentication via DelegatingHandler, and a 11-table schema with custom PostgreSQL ENUMs.",
        image: "/assets/imagen_dotnet.png",
        link: "https://github.com/MateoCastro47/ApiFichajes",
        category: "Back-end",
        technologies: [".NET 8", "EF Core", "PostgreSQL", "REST API"],
        badge: null
    },
    {
        id: 2,
        title: "Nexly",
        description: "Full-stack social network with a React frontend and Spring Boot + Spring Security + JWT backend. Features 15 database tables across 6 main entities, designed in Figma and built as the end-of-cycle capstone project for the DAW programme.",
        image: "/assets/imagen_nexly.png",
        link: "https://github.com/MateoCastro47",
        category: "Full-stack",
        technologies: ["React", "Spring Boot", "JWT", "PostgreSQL"],
        badge: "In Progress"
    },
    {
        id: 3,
        title: "Gestor NBA",
        description: "Comprehensive REST API for basketball league management built with Spring Boot. Handles leagues, teams, player transfers and detailed match statistics. Served as the foundation for learning backend architecture patterns before migrating to .NET.",
        image: "/assets/imagen_spring.png",
        link: "https://github.com/MateoCastro47/SpringBoot-Basket",
        category: "Back-end",
        technologies: ["Spring Boot", "Java", "REST API"],
        badge: null
    },
    {
        id: 4,
        title: "Pokédex",
        description: "Interactive Pokédex consuming the PokéAPI that displays the first 151 Pokémon with filtering by type and detail views showing Pokédex number, name, image, height and weight.",
        image: "/assets/imagen_pokedex.png",
        link: "https://github.com/MateoCastro47/Pokedex",
        category: "Front-end",
        technologies: ["HTML5", "JavaScript", "CSS3"],
        badge: null
    },
    {
        id: 5,
        title: "MVP",
        description: "Landing page built with a colleague for the presentation of his book. Clean, modern design focused on conversion and readability, built with React, TypeScript and Tailwind CSS from a Figma prototype.",
        image: "/assets/imagen_mvp.png",
        link: "https://github.com/NaXeMate/MVP-Web",
        category: "Front-end",
        technologies: ["React", "TypeScript", "Tailwind", "Figma"],
        badge: null
    }
]

function ProjectComponent() {
    const [activeFilter, setActiveFilter] = useState("All Work");
    const filteredProjects = activeFilter === "All Work" ? projectsData : projectsData.filter(project => project.category === activeFilter);
    const filters = ["All Work", "Front-end", "Back-end", "Full-stack"];

    return (
        <section className="project-section" id="projects">
            <aside className="project-header">
                <h1>Featured Projects</h1>
                <p>A collection of projects completed during my time as a student</p>
                <nav className="project-navbar">
                    <ul>
                        {filters.map((filter, index) => (
                            <li key={index}>
                                <button
                                    className={activeFilter === filter ? "active" : ""}
                                    onClick={() => setActiveFilter(filter)}
                                >
                                    {filter}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            <article className="projects-grid">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-card-header">
                            <div className="project-category">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <span>{project.category}</span>
                            </div>
                            {project.badge && (
                                <span className="project-badge">{project.badge}</span>
                            )}
                        </div>

                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">#{tech}</span>
                                ))}
                            </div>

                            <div className="project-actions">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-code">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 3L1.5 8L5.5 13M10.5 3L14.5 8L10.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </article>
        </section>
    )
}

export default ProjectComponent;