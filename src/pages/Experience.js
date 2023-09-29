import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1396-1398"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element--education">
            AHMADIE High School
          </h3>
          <p>High School Diploma </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1398-1402"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element--education">
            islamic azad university (IAU)
          </h3>
          <p>Bachelor of Computer engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="present"
          iconStyle={{ background: "#cde84a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element--education">Projects</h3>
          <h5>Food-web </h5>
          <p>
            Food-web is a react-based app and tailwind for styling and more
            focus on UI and using a custom local Api for list-rendering
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="present"
          iconStyle={{ background: "#cde84a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element--education">Projects</h3>
          <h5>Task-Tracker</h5>
          <p>
            Task-Tracker is a react-based app for add, remove and changing
            personal task in order to make a list with a friendly UI.{" "}
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
