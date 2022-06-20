import React from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import styled from "styled-components";

function CertificationCard(props) {
  const certificate = props.certificate;
  const theme = props.theme;

  const CertificationCardComponent = styled.div`
    width: 25vw;
    height: 30vh;
    display: inline-block;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 30px;
    flex: 0 0 30%;
    transition: all 0.2s ease-in-out;

    box-shadow: 0px 2px 5px ${certificate.color_code};
    border: 1px solid ${certificate.color_code};
    &:hover {
      box-shadow: 0 5px 15px ${certificate.color_code};
    }
  `;

  return (
    <Fade bottom duration={2000} distance="20px">
      <CertificationCardComponent className="cert-card">
        <div className="content">
          <a
            href={certificate.certificate_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay"></div>
            <div
              className="cert-header"
              style={{ backgroundColor: certificate.color_code }}
            >
              <img
                className="logo_img"
                src={require(`../../assests/images/${certificate.logo_path}`)}
                alt={certificate.alt_name}
              />
            </div>
            {/* <div className="content-details fadeIn-top">
              <h3 className="content-title" style={{ color: theme.body }}>
                Certificate
              </h3>
            </div> */}
          </a>
        </div>
        <div className="cert-body">
          <h2 className="cert-body-title" style={{ color: theme.text }}>
            {certificate.title}
          </h2>
          <h3
            className="cert-body-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {certificate.subtitle}
          </h3>
        </div>
      </CertificationCardComponent>
    </Fade>
  );
}

export default CertificationCard;
