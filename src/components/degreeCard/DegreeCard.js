import React from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
// import { style } from "glamor";
import styled from "styled-components";

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;

  const StyleImgComponent = styled.div`
    width: 220px;
    height: auto;
    border-radius: 50%;
    padding: 10px;
    border: 1px solid ${theme.accentColor};
    margin-right: 50px;
    box-shadow: 0px 0px 5px ${theme.accentColor};
    transition: all 0.2s ease-in-out;
    &.hover {
      color: rgba(255, 255, 255, 1);
      box-shadow: 0 5px 15px ${theme.accentColor};
    }
    @media (max-width: 768px) {
      margin-left: 50px;
      margin-bottom: 15px;
      width: 175px;
    }
  `;

  const CardBodyComponent = styled.div`
    border-bottom: 1px solid ${theme.accentColor};
    border-left: 1px solid ${theme.accentColor};
    border-right: 1px solid ${theme.accentColor};
    border-radius: 7px;
    width: 90%;
    margin: 10px;
    box-shadow: 0px 1px 5px ${theme.accentColor};
    transition: all 0.2s ease-in-out;
    &:hover {
      color: rgba(255, 255, 255, 1);
      box-shadow: 0 5px 15px ${theme.accentColor};
    }
    @media (max-width: 768px) {
      width: "100%";
    }
  `;

  const ButtonVisitComponent = styled.p`
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    background: ${theme.accentColor};
    padding: 15px 15px;
    margin-top: 25px;
    border-radius: 4px;
    border-width: 0px;
    margin-bottom: 20px;
    width: 200px;
    height: 50px;
    font-weight: bold;
    font-family: Google Sans Regular;
    font-size: 17px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover: {
      color: rgba(255, 255, 255, 1);
      box-shadow: 0 5px 10px ${theme.accentColor};
    }
  `;

  return (
    <div className="degree-card">
      <Flip left duration={2000}>
        <StyleImgComponent
        // {...style_img}
        >
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              // transform: "scale(-50%, -50%)",
            }}
            src={require(`../../assests/images/${degree.logo_path}`)}
            alt={degree.alt_name}
          />
        </StyleImgComponent>
      </Flip>

      <CardBodyComponent
      // {...card_body}
      >
        <Fade right duration={2000} distance="40px">
          <div
            className="body-header"
            style={{ backgroundColor: theme.accentColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div classname="body-content">
            <div className="course">
              <h4>Relevant Courses</h4>
            </div>

            {degree.descriptions.map((sentence) => {
              return (
                <p className="content-list" style={{ color: theme.text }}>
                  {sentence}
                </p>
              );
            })}
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <ButtonVisitComponent
                // {...button_visit}
                style={{
                  marginRight: "23px",
                  textDecoration: "none",
                  float: "right",
                  backgroundColor: theme.accentColor,
                }}
              >
                Visit Website
              </ButtonVisitComponent>
            </a>
          </div>
        </Fade>
      </CardBodyComponent>
    </div>
  );
}

export default DegreeCard;
