import React from 'react'
import styled from 'styled-components';
import Project from "../Projects/project";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg"
import { Slide } from 'react-awesome-reveal';
import { Fade,Zoom } from "react-awesome-reveal";


const projects = () => {
  return (
    <Container id="projects">
      <Zoom>
      <h1>Recent Projects</h1>
      </Zoom>
      <div className='proj'>
        <Fade right cascade>
        <Slide direction='left'>
          <span>
            <Project title={"Travel Blog"} desc={"Designed a Travel Blog website using HTML,CSS and JavaScript.Various concepts of CSS such as flexbox, hover effects, keyframes have been implemented."} />
            <span>
              <a href="https://github.com/Sakshi050/Travel-blog"><BsGithub /></a>
              <a href="https://sakshi050.github.io/Travel-blog/"><CgWebsite /></a>
            </span>
          </span>
        </Slide>
        <Slide direction='left'>
          <span>
            <Project title={"Simple Calculator"} desc={"This is a Simple Calculator website I created using HTML,CSS and JavaScript.Various concepts of CSS such as flexbox, hover effects, keyframes have been implemented."} />
            <span>
              <a href="https://github.com/Sakshi050/calculator"><BsGithub /></a>
              <a href="https://sakshi050.github.io/calculator/"><CgWebsite /></a>
            </span>
          </span>
        </Slide>
        </Fade>
      </div>
    </Container>
  )
}

export default projects

const Container = styled.div`
  width:90%;
  margin: 3rem auto;
  padding:0.5rem;
  .proj{
      display: flex;
      align-items: center;
      gap: 2.5rem;
    }
    a{
        color:wheat;
        display: flex;
        align-items: center;
        justify-content:center;
        // display:grid;
        // grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        // position:absolute;
    }
    span{
        gap: 5.5rem;
        margin:15px 15px;
        border-radius:10px;
        padding:10px 10px;
        position:relative;
        span{
            margin:20px auto;
            background-color: rgb(89 67 67);
            display: flex;
            align-items: center;
            justify-content:center;

        }
}
`
