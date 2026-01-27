import "./css/ProjectsComponent.css"
import { useState } from "react";

const projectsData = [
    {
        id: 1,
        title: "Gestor NBA",
        description: "This project is a comprehensive REST API for the integrated management of basketball leagues, developed with Spring Boot. The system allows you to manage all aspects related to the competition, from creating leagues and teams to managing player transfers and recording detailed match statistics.",
        image: "/assets/imagen_spring.png",
        link: "https://github.com/MateoCastro47/SpringBoot-Basket",
        category: "Back-end",
        technologies: ["Spring Boot", "Java", "REST API"]
    },
    {
        id: 2,
        title: "Gestor Conciertos",
        description: "This project is a Java console application that allows for the management of concert tickets. Users can reserve tickets, view their reservation, and see a list of sold and available tickets",
        image: "/assets/imagen_java.png",
        link: "https://github.com/MateoCastro47/GestorConciertos",
        category: "Back-end",
        technologies: ["Java", "Console App"]
    },
    {
        id: 3,
        title: "Pokedex",
        description: "This project is an interactive Pokédex that displays the first 151 Pokémon in the PokéAPI.Users can filter Pokémon by type and view details such as their Pokédex number, name, image, height and weight.",
        image: "/assets/imagen_pokedex.png",
        link: "https://github.com/MateoCastro47/Pokedex",
        category: "Front-end",
        technologies: ["HTML5", "JavaScript", "CSS3"]
    },
    {
        id: 4,
        title: "MVP",
        description: "Website created with my colleague Mateo Quintela for the presentation of his book. A clean and modern landing page design.",
        image: "/assets/imagen_mvp.png",
        link: "https://github.com/MateoCastro47/MVP",
        category: "Front-end",
        technologies: ["REACT", "FIGMA", "TYPESCRIPT", "TAILWIND"]
    }
]
function ProjectComponent() {
    const [activeFilter, setActiveFilter] = useState("All Work");
    const filteredProjects = activeFilter === "All Work" ? projectsData : projectsData.filter(project => project.category === activeFilter);
    const filters = ["All Work", "Front-end", "Back-end", "Full-stack", "UI/UX"];

    return (
        <section className="project-section">
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