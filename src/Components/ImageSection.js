import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpg";
import PrimaryButton from "./PrimaryButton";
import MyPDF from "../img/Maria_Camila_Barona_Martinez_-_Programadora_Jr_New.pdf";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Maria</span>
        </h4>
        <p className="paragraph">
          Jr Software Developer who is working to improve her skills through
          different personal and business projects in addition to being
          continuously searching for knowledge.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Languages </p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Maria Camila</p>
            <p>: 22</p>
            <p>: Spanish, English </p>
            <p>: Cali, Colombia</p>
            <p>: Jr Developer</p>
          </div>
        </div>
        <PrimaryButton
          title={"Download CV"}
          link={MyPDF}
          target="_blank"
          rel="noreferrer"
        />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
