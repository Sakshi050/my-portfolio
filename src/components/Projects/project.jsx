import React from 'react'
import styled from 'styled-components';

const project = (props) => {
    const {title,desc}=props;
  return (
    <Container className="project">
        <h2>{title}</h2>
        {/* <h2>Description</h2> */}
        {/* <div className="desc"> */}
            <p>{desc}
            </p>
            
        {/* </div> */}
    </Container>
  )
}

export default project;

const Container=styled.div`
  background-color: rgb(89 67 67);
//   margin: 3rem 0;
  padding:2.5rem;
  cursor:pointer;
  border-radius:5px;
  p{
    color:wheat;
  }
    
    

`