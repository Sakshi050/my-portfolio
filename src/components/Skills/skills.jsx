import React from 'react'
import styled from "styled-components";
import {FaHtml5} from "react-icons/fa";
import {IoLogoCss3} from "react-icons/io";
import {IoLogoJavascript} from "react-icons/io";
import {SiCplusplus} from "react-icons/si";
import {FaJava} from "react-icons/fa";
import {GrReactjs} from "react-icons/gr";
import {Slide} from "react-awesome-reveal"
import Card from "../Skills/card";

const skills = () => {
  return (
    <div>
      <Container id='skills'>
            <h1>My Skills</h1>
        <Cards>
            <Slide direction='right'>
                <Card Icon={FaHtml5} title={"HTML5"}/>
            </Slide>
            <Slide direction='right'>
                <Card Icon={IoLogoCss3} title={"CSS3"}/>
            </Slide>
            <Slide direction='right'>
                <Card Icon={IoLogoJavascript} title={"JavaScript"}/>
            </Slide>
            <Slide direction='left'>
                <Card Icon={GrReactjs} title={"React"}/>
            </Slide>
            <Slide direction='left'>
                <Card Icon={SiCplusplus} title={"C++"}/>
            </Slide>
            <Slide direction='left'>
                <Card Icon={FaJava} title={"Java"}/>
            </Slide>
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
  width: 85%;
  color:wheat;
  margin: 0 auto;
  padding: 3rem 0;
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 3.5rem;
  cursor:pointer;

`;