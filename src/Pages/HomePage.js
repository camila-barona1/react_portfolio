import React from "react";
import styled from "styled-components";
import GithubIcon from "@material-ui/icons/GitHub";
import Particle from "../Components/Particle";
import { LinkedIn, MailOutline } from "@material-ui/icons";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi all, I'm <span>Maria</span>
        </h1>
        <p>
          A passionate Junior Software Developer 🌟 Learning JavaScript /
          Reactjs / Nodejs and some other cool libraries and frameworks.
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/maria-camila-321a091ab/"
            target="_blank"
            rel="noreferrer"
            className="icon i-facebook"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/camila-barona1"
            target="_blank"
            rel="noreferrer"
            className="icon i-github"
          >
            <GithubIcon />
          </a>
          <a
            href="mailto:camilabarona1@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="icon i-youtube"
          >
            <MailOutline />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid white;
          color: white;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
