import React from "react";
import "./ProjectLanguages.css";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";

function ProjectLanguages(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {props.logos.map((logo) => {
            return (
              <li
                className="software-skill-inline-languages"
                name={logo.skillName}
              >
                <div>
                  <span
                    className="iconify"
                    data-icon={logo.iconifyClass}
                    data-inline="false"
                  ></span>
                </div>
                <div>
                  <span className="language-name">{logo.name}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectLanguages;
