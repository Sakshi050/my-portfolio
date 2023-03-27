import React, { useState } from 'react'
import styled from 'styled-components';
import { FaDocker } from "react-icons/fa";

const Header = () => {
    const [bar, setBar] = useState(false);
  return (
    <Container bar={bar}>
        <Logo>
            <span><FaDocker/></span>
            <h2>Portfolio</h2>
        </Logo>
        <Nav bar={bar}>
            <span><a href="#home">Home</a></span>
            <span><a href="#home">About</a></span>
            <span><a href="#skills">Skills</a></span>
            <span><a href="#projects">Projects</a></span>
            <span><a href="#footer">Contact</a></span>
            <span><a href="https://drive.google.com/file/d/1LP7XMRUYggaiRfnQvlG1AY4oxItobB8c/view?usp=sharing">Resume</a></span>
        </Nav>
        <div
        onClick={() => setBar(!bar)}
        className="bars">
            <div className="bar"></div>
        </div>
    </Container>
  )
}

export default Header
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    margin: 0 auto;
    padding: 1rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    .bars{
        display: none;
    }
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span{
        font-size: 1.8rem;
    }
    h2{
        cursor:pointer;
    }
`
const Nav = styled.div`
span{
    margin-left: 1rem;
    a{
        // font-size:1rem;
        color: black;
        text-decoration: none;
        font-weight: 400;
        position: relative;
        :before{
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -5px;
            height: 2px;
            background-color: wheat;
            transform: scale(0);
            transform-origin: right;
            transition: transform 400ms ease-in-out;
        }
        :hover:before{
            transform: scale(1);
            transform-origin: left;
        }
        :hover{
            opacity: 0.7;
        }
    }
}
`