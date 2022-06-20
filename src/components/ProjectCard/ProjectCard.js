import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import styled from "styled-components";

export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const ProjectCardComponent = styled.div`
    color: rgb(88, 96, 105);
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
    padding: 2rem;
    cursor: pointer;
    border-radius: 5px;
    height: 100%;
    transition: all 0.2s ease-in-out;
    &:hover {
      box-shadow: ${theme.imageDark} 0 2px 15px;
    }
  `;

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <ProjectCardComponent
          className="project-card-class"
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages
              logos={repo.languages}
              style={{ color: theme.text }}
            />
          </div>
        </ProjectCardComponent>
      </Fade>
    </div>
  );
}
