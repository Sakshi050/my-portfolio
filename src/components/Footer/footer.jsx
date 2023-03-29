import React from 'react'
import {Slide} from "react-awesome-reveal";
import {FiPhoneCall} from "react-icons/fi"
import {TfiEmail} from "react-icons/tfi"
import {BsGithub} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
import {CgProfile} from "react-icons/cg";
import {BiMessageDetail} from "react-icons/bi";
import styled from 'styled-components';
import { Fade,Zoom } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

function AnimatedComponent({ children }) {
  return <Reveal keyframes={customAnimation}>{children}</Reveal>;
}

const footer = () => {
  return (
    <Container id="footer">
      <Fade left>
        <Slide triggerOnce direction='left'>
          <AnimatedComponent>
            <Profiles>
            <h2 >Contact me directly :</h2>
            <div>
                <span>
                <FiPhoneCall/>
                <a href="tel:+918839947171">+8839947171</a>
                </span>
            </div>
            <div>
                <span>
                <TfiEmail/>
                <a href="mailto:serratia070@gmail.com">serratia070@gmail.com</a>
                </span>
            </div>
            <div className="profiles">
                {/* <h2>Connect with me on:</h2> */}
                <div>
                  <Zoom>

                <span>
                    <a href="https://github.com/Sakshi050">
                  <BsGithub />
                    </a>
                    GitHub
                </span>
                  </Zoom>
                </div>
                <div>
                  <Zoom>
                <span>
                <a href="https://www.linkedin.com/in/sakshi-sahu-48079122a/">
                  <FaLinkedinIn />
                </a>
                LinkedIn
              </span>
                  </Zoom>
                </div>
            </div>
            </Profiles>
          </AnimatedComponent>
        </Slide>
      </Fade>
      <Fade right>
        <Form>
        <Slide triggerOnce direction="right">
          <AnimatedComponent>
          <form>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input type="text" placeholder="Fullname..." />
            </div>
            <div className="email">
              <span>
                <TfiEmail />
              </span>
              <input type="email" placeholder="Email..." />
            </div>
            <div className="msg">
              <span>
                <BiMessageDetail />
              </span>
              <textarea cols="30" rows="10" placeholder="Message..."></textarea>
            </div>
            <button>Submit</button>
          </form>
          </AnimatedComponent>
        </Slide>
      </Form>
      </Fade>
    </Container>
  )
}

export default footer

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(200px,100px,0);
  }
to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const Container=styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`
const Profiles=styled.div`
  div{
    display:flex;
    align-items:center;
    padding:1rem 0;
  }
  span{
    padding:5px 10px;
    border-radius:4px;
    background-color: rgb(89 67 67);
  }
  a{
    padding:10px 10px;
    color:wheat;
    text-decoration:none;
  }
  .profiles{
    gap:1.2rem;
    span{
        border-radius:50px;
    }
  }
`

const Form=styled.div`
    background-color: rgb(89 67 67);
    padding: 1rem;
    border-radius: 7px;
    .name,.email,.msg {
      display: flex;
      border: 1px solid wheat;
      margin-bottom: 0.5rem;
      input,textarea {
        width: 100%;
        border: none;
        color: black;
        background-color: transparent;
        padding: 1rem 4rem;
      }
      span {
        background-color: #3e3e3e;
        width: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .msg{
        span{
            size:10px;
            align-items:flex-start;
            padding-top:15px;
        }
    }
    button {
      width: 5rem;
      height: 1.8rem;
      background-color: grey;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      :hover {
        filter: drop-shadow(4px 4px 4px black);
      }
    }
  }
`
