import ProjectItem from "../components/ProjectsItem";
import proj1 from "../assets/1.jpg";
import proj2 from "../assets/2.jpg";
import proj3 from "../assets/3.jpg";

import "../style/projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My personal Projects</h1>
      <div className="projectList">
        <Link to="https://github.com/Amirmohaammaadd/Food-web.git">
          <ProjectItem name="Food-web-app" image={proj1} />
        </Link>
        <Link to="https://github.com/Amirmohaammaadd/Task-Tracker.git">
          <ProjectItem name="Task-Tracker" image={proj2} />
        </Link>
        <Link to="https://github.com/Amirmohaammaadd/Instagram-clone.git">
          <ProjectItem name="Instagram-clone-app" image={proj3} />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
