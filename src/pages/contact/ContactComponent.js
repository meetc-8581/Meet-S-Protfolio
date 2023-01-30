import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
// import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";
// import { style } from "glamor";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContactData = contactPageData.contactSection;

function Contact(props) {
  const theme = props.theme;

  // const styles = style({
  //   backgroundColor: `${theme.accentBright}`,
  //   ":hover": {
  //     boxShadow: `0 5px 15px ${theme.accentBright}`,
  //   },
  // });

  const ContactLinkComponent = styled.a`
    background-color: ${theme.accentBright};
    text-decoration: none;
  `;

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
                <a href="mailto:meetchanchad7@gmail.com?subject=Hire Meet Chanchad">
                  Here.
                </a>
              </p>

              <SocialMedia />
              <br />
              <br />
              {/* <a {...styles} className="general-btn" href={greeting.resumeLink}>
                See my Resume
              </a> */}
              <ContactLinkComponent
                className="general-btn"
                href="./meet_resume.pdf"
                target="_blank"
              >
                See my Resume
              </ContactLinkComponent>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
