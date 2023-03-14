import SingleProject from '@/components/Project/SingleProject/SingleProject';
import styles from "./ProjectList.module.scss";

interface Project {
    name: string;
    description: string;
    linkGithub: string;
    image: string;
}

interface ProjectListProps {
    projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
    return (
        <>
            {projects.map((project, index) => (
                <>
                    <SingleProject
                        key={index}
                        index={index}
                        name={project.name}
                        description={project.description}
                        linkGithub={project.linkGithub}
                        image={project.image}
                    />
                    {index !== projects.length - 1 && <div className={styles.border}></div>}
                </>
            ))}
        </>
    );
};

export default ProjectList;