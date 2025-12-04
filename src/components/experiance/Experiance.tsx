import type { FC } from 'react';
import './Experiance.css';

interface TimelineItem {
    year: string;
    title: string;
    company: string;
    description: string;
    skills: string[];
}

const Experiance: FC = () => {
    const experiences: TimelineItem[] = [
        {
            year: '2023 - Present',
            title: 'Senior Software Engineer',
            company: 'Tech Company Inc.',
            description: 'Led development of scalable microservices architecture using TypeScript and Node.js. Mentored junior developers and improved code quality by implementing best practices.',
            skills: ['TypeScript', 'Node.js', 'Microservices', 'Mentoring'],
        },
        {
            year: '2021 - 2023',
            title: 'Full Stack Developer',
            company: 'Digital Solutions Ltd.',
            description: 'Built and maintained React applications with TypeScript. Developed RESTful APIs using Node.js and Express. Collaborated with cross-functional teams.',
            skills: ['TypeScript', 'Node.js', 'Microservices', 'Mentoring'],
        },
        {
            year: '2019 - 2021',
            title: 'Junior Developer',
            company: 'StartUp Co.',
            description: 'Developed web applications using React and JavaScript. Fixed bugs and optimized application performance. Participated in code reviews.',
            skills: ['TypeScript', 'Node.js', 'Microservices', 'Mentoring'],
        },
    ];

    return (
        <section className="experience-container">
            <h2>Work Experience</h2>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <div className="experience-title"></div>
                        <div className="timeline-content">
                            <span className="experience-date">{exp.year}</span>
                            <h2>{exp.title}</h2>
                            <p className="experience-company">{exp.company}</p>
                            <p className="experience-description">{exp.description}</p>
                            <div className="experience-skills">
                                {exp.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-badge">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiance;