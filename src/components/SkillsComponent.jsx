import "./css/SkillsComponent.css"

const skillsData = [
    {
        name: "HTML5",
        desc: "SEMANTIC MARKUP",
        color: "#f97316",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        name: "CSS3",
        desc: "RESPONSIVE DESIGN",
        color: "#3b82f6",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        name: "JavaScript",
        desc: "ES6+ & DOM",
        color: "#eab308",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        name: "TypeScript",
        desc: "STATIC TYPING",
        color: "#007ACC",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
        name: "React",
        desc: "COMPONENT ARCHITECTURE",
        color: "#06b6d4",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        name: "Java",
        desc: "BACKEND DEVELOPMENT",
        color: "#ed8b00",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
        name: "Spring Boot",
        desc: "REST API & BACKEND",
        color: "#6DB33F",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
    },
    {
        name: ".NET 8",
        desc: "MINIMAL APIS & EF CORE",
        color: "#512BD4",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
    },
    {
        name: "PostgreSQL",
        desc: "RELATIONAL DATABASE",
        color: "#336791",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    },
    {
        name: "Git & GitHub",
        desc: "VERSION CONTROL",
        color: "#ef4444",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
        name: "Figma",
        desc: "UI DESIGN",
        color: "#a855f7",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
];

function SkillsComponent() {
    return (
        <section className="skills-section" id="skills">
            <article className="skills-container">
                <div className="skills-header">
                    <div className="skills-badge">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                        TECHNICAL PROFICIENCY
                    </div>
                    <h1>Skills and Technologies</h1>
                    <p>Tools I use and am mastering on my path to becoming a full-stack developer.</p>
                </div>
                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-icon-wrapper" style={{ backgroundColor: `${skill.color}15` }}>
                                <img src={skill.icon} alt={skill.name} />
                            </div>
                            <h3>{skill.name}</h3>
                            <span className="skill-desc">{skill.desc}</span>
                        </div>
                    ))}
                </div>

                <div className="skills-learning-bar">
                    <div className="learning-info">
                        <div className="learning-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z" /></svg>
                        </div>
                        <div>
                            <strong>Currently exploring</strong>
                            <p>Deepening backend architecture and cloud deployment</p>
                        </div>
                    </div>
                    <div className="learning-tags">
                        <span className="learning-tag">Next.js</span>
                        <span className="learning-tag">Docker</span>
                        <span className="learning-tag">CI/CD</span>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default SkillsComponent;