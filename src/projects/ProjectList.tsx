import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import { Project } from "./Projects";

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

export default function ProjectList({ projects, onSave }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  return (
    <ul className="row">
      {projects.map((project) => {
        return (
          <div className="cols-sm" key={project.id}>
            {project === projectBeingEdited ? (
              <ProjectForm
                onCancel={cancelEditing}
                onSave={onSave}
                project={project}
              />
            ) : (
              <ProjectCard project={project} onEdit={handleEdit} />
            )}
          </div>
        );
      })}
    </ul>
  );
}
