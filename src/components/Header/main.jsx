import React from "react";
import styled from "styled-components";
import {BsGithub} from "react-icons/bs";
import {FaWhatsapp} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {ImTwitter} from "react-icons/im";
import {Slide} from "react-awesome-reveal";
import ss from "../Header/ss.png";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>Hello I am</h4>
          <h1>Sakshi Sahu</h1>
          <p>
            I am a 2nd year Undergrad at National Institute Of Technology Raipur pursuing B.Tech in Information Technology. 
          </p>
          <button><a href="mailto:serratia070@gmail.com">Let's connect</a>
            </button>
          <Social>
            <h4>Check out my :</h4>
            <div className="social-icons">
              <span>
                <a href="https://github.com/Sakshi050">
                  <BsGithub />
                </a>
              </span>
              <span>
                <a href="https://api.whatsapp.com/send?phone=8839947171">
                  <FaWhatsapp />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/sakshi-sahu-48079122a/">
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a href="/">
                  <ImTwitter />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={ss}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
//   background-color:lavender;
  padding-top: 3rem;
  width: 85%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;-portfolio
`;
const Texts = styled.div`
  flex: 1;
  text-align:left;
  h4{
    padding: 0 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  p {
    font-weight: 300;
  }
  button {
    padding: 0.7rem 2rem;
    margin-top: 75px;
    cursor: pointer;
    background-color: rgb(89 67 67);
    border: none;
    color: wheat;
    font-size: 15px;
    font-weight: 500;
    border-radius:8px;
    filter: drop-shadow(3px 3px 3px black);
    :hover {
      filter: drop-shadow(6px 6px 6px black);
    }
    a{
      color:wheat;
      text-decoration:none;
    }
  }
`;
const Social = styled.div`
  margin-top:3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  h4{
    font-size: 0.9rem;
  }
  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      background-color: rgb(89 67 67);
      border-radius:20px;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: translateY(-7px);
      }
    }
    a {
      color: wheat;
      top:5%;
      transform:translate(25%,25%);
      right:40%;
      position: absolute;
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 0px 10px black);
    transition: transform 400ms ease-in-out;
    border-radius:8px;
    :hover {
      transform: translateY(-10px);
      border-radius:15px;
    }
  }
`;