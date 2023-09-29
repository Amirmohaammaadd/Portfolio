import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../style/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hello, My Name is AmirMohammad</h2>
        <div className="prompt">
          <p>A Front-end developer with passsion for learning and creating </p>
          <Link title="Github" to='https://github.com/Amirmohaammaadd'>
            <GitHubIcon />
          </Link>
          <Link title="LinkedIn"   >
            <LinkedInIcon />
          </Link>
          <Link title="Email" to='https://amirmuhaammaadd@gmail.com'>
            <EmailIcon />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1>Siklls</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-end</h2>
            <span>
              HTML, CSS, Tailwind, React-bootstrap, material Ui, JSON, React,
              NPM ,Redux
            </span>
          </li>
          <li className="item">
            <h2>Language</h2>
            <span>JavaScript, React </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
