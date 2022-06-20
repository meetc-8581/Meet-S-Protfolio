import React from "react";
import "./Skills.css";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import FullStackImg from "./FullStackImg";

function SkillSection(props) {
  return (
    <div className="skill-container">
      {/* {skills.data.map((skill, index) => {
        return ( */}
      <div className="skills-main-div">
        <Fade left duration={2000}>
          <div className="skills-image-div">
            <FullStackImg theme={props.theme} />
          </div>
        </Fade>

        <div className="skills-text-div">
          <Fade>
            <ul className="skill-list">
              {skills.softwareSkills.map((skill, index) => {
                return (
                  <li className="skill-item">
                    <div className="">
                      <span
                        className="iconify skill-icon"
                        data-icon={skill.fontAwesomeClassname}
                        style={skill.style}
                        data-inline="false"
                      ></span>
                    </div>
                    <div className="skill-name">
                      <div>{skill.skillName}</div>
                    </div>
                    {/* <div className="skill-level"></div> */}
                  </li>
                );
              })}
            </ul>
          </Fade>
        </div>
      </div>
      {/* );
      })} */}
    </div>
  );
}

export default SkillSection;
