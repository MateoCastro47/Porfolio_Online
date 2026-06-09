import "./css/ExperienceComponent.css";

const experienceData = [
    {
        id: 1,
        type: "work",
        title: "Desarrollador Web (Prácticas)",
        organization: "Prosegur",
        period: "Mayo 2026 — Actualidad",
        description: "Desarrollo de aplicaciones web internas. Trabajo con tecnologías modernas de frontend y colaboración con el equipo de desarrollo.",
        tags: ["React", "JavaScript", "CSS"],
    },
    {
        id: 2,
        type: "education",
        title: "Desarrollo de Aplicaciones Web",
        organization: "IES",
        period: "2024 — 2026",
        description: "Ciclo formativo de grado superior (CFGS) especializado en desarrollo web full-stack, bases de datos, y despliegue de aplicaciones.",
        tags: ["HTML", "CSS", "JavaScript", "Java", "SQL"],
    },
];

const BriefcaseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="14" x2="14" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const GraduationIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M6 10v6c0 2 2.686 4 6 4s6-2 6-4v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="22" y1="7" x2="22" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

function ExperienceComponent() {
    return (
        <section className="experience-section" id="experience">
            <div className="experience-container">
                <div className="experience-header">
                    <span className="experience-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                            <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        TRAYECTORIA
                    </span>
                    <h1>Experiencia & Formación</h1>
                    <p>Mi camino en el desarrollo de software, combinando formación académica y experiencia profesional.</p>
                </div>

                <div className="timeline">
                    <div className="timeline-line" />
                    {experienceData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`timeline-item ${index % 2 === 0 ? "timeline-item--left" : "timeline-item--right"}`}
                        >
                            <div className={`timeline-dot ${item.type === "work" ? "timeline-dot--work" : "timeline-dot--edu"}`}>
                                {item.type === "work" ? <BriefcaseIcon /> : <GraduationIcon />}
                            </div>

                            <div className="timeline-card">
                                <div className="timeline-card-header">
                                    <span className={`timeline-type-badge ${item.type === "work" ? "badge--work" : "badge--edu"}`}>
                                        {item.type === "work" ? "Trabajo" : "Educación"}
                                    </span>
                                    <span className="timeline-period">{item.period}</span>
                                </div>
                                <h3>{item.title}</h3>
                                <p className="timeline-org">{item.organization}</p>
                                <p className="timeline-desc">{item.description}</p>
                                <div className="timeline-tags">
                                    {item.tags.map((tag) => (
                                        <span key={tag} className="timeline-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExperienceComponent;
