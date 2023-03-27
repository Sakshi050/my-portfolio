import React from 'react'
import styled from 'styled-components';

const card = (props) => {
    const { Icon, title } = props;
  return (
    <Container>
        <span ><Icon/></span>
        <h1>{title}</h1>
    </Container>
  )
}

export default card;

const Container = styled.div`
    width: 100%;
    background-color: rgb(89 67 67);
    padding: 1rem;
    border-radius:8px;
    text-align: center;
    span{
        font-size: 3rem;
        
    }
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }
    // :hover{
    //     filter: drop-shadow(8px 8px 8px black);
    // }
`