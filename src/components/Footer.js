import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import "../style/Footer.css";


const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link title="Github" to="https://github.com/Amirmohaammaadd">
          <GitHubIcon />
        </Link>
        <Link title="LinkedIn">
          <LinkedInIcon />
        </Link>
        <Link title="Email" to="https://amirmuhaammaadd@gmail.com">
          <EmailIcon />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
