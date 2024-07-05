import React, { useState } from 'react'
import styled from 'styled-components';
import { FaDocker } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';

const Header = () => {
    const [bar, setBar] = useState(false);
    return (
        <Container bar={bar}>
            <Logo>
                <span><FaDocker /></span>
                <h2>Portfolio</h2>
            </Logo>
            <Fade cascade>
                <Nav bar={bar}>
                    <span><a href="#home">Home</a></span>
                    <span><a href="#home">About</a></span>
                    <span><a href="#skills">Skills</a></span>
                    <span><a href="#projects">Projects</a></span>
                    <span><a href="#footer">Contact</a></span>
                    <span><a href="https://drive.google.com/file/d/1j56SrSJGKdoiI5j1YqN8nrTp5zcGebbb/view?usp=sharing">Resume</a></span>
                </Nav>
            </Fade>
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
position:sticky;
    top:0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    padding: 1rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    .bars{
        display: none;
    }
    @media(max-width: 840px){
        width: 95%;
    }
    @media(max-width:640px){
        .bars{
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
        }
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
        font-size: 1.8rem;
        cursor:pointer;
    }
`
const Nav = styled.div`
span{
    margin-left: 1rem;
    a{
        font-size:20px;
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
