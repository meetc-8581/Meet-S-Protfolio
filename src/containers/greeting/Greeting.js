import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
// import { style } from "glamor";
import styled from "styled-components";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const ContactButtonComponent = styled.button`
    background: ${theme.accentBright};
    &.hover {
      box-shadow: 0 5px 15px ${theme.accentBright};
    }
  `;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <ContactButtonComponent
                  className="button"
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  Contact Me
                </ContactButtonComponent>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
