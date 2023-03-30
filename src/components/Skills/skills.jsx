import React from 'react'
import styled from "styled-components";
import {FaHtml5} from "react-icons/fa";
import {IoLogoCss3} from "react-icons/io";
import {IoLogoJavascript} from "react-icons/io";
import {SiCplusplus} from "react-icons/si";
import {FaJava} from "react-icons/fa";
import {GrReactjs} from "react-icons/gr";
import {Slide} from "react-awesome-reveal"
import { Fade,Zoom } from "react-awesome-reveal";
import Card from "../Skills/card";


const skills = () => {
  return (
    <div>
      <Container id='skills'>
        <Zoom>
            <h1>My Skills</h1>
        </Zoom>
        <Cards>
          <Fade cascade>
            <Slide triggerOnce direction='right'>
                <Card Icon={FaHtml5} title={"HTML5"}/>
            </Slide>
            <Slide triggerOnce direction='right'>
                <Card Icon={IoLogoCss3} title={"CSS3"}/>
            </Slide>
            <Slide triggerOnce direction='right'>
                <Card Icon={IoLogoJavascript} title={"JavaScript"}/>
            </Slide>
            </Fade>
            <Fade cascade>
            <Slide triggerOnce direction='right'>
                <Card Icon={GrReactjs} title={"React"}/>
            </Slide>
            <Slide triggerOnce direction='right'>
                <Card Icon={SiCplusplus} title={"C++"}/>
            </Slide>
            <Slide triggerOnce direction='right'>
                <Card Icon={FaJava} title={"Java"}/>
            </Slide>
          </Fade>
        </Cards>
      </Container>
    </div>
  )
}

export default skills

const Container = styled.div`
h1{
    color:black;
}
  color:wheat;
  width: 90%;
  margin: 0 auto;
  padding: 3rem 0;
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3.5rem;
  margin-top: 4rem;
  cursor:pointer;

`;