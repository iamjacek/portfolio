import React, {Component} from 'react';
import styled from "styled-components"


const Wrapper = styled.div`
    position: relative;
    width: 100vw;
    max-width: 100%;  
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
class How extends Component {

    constructor(props){
        super(props);
       
    }


  render(){
    return(
        <Wrapper>
            
                <StyledWrapper>
How section soon!
                </StyledWrapper>
        </Wrapper>
    )
  }
        
}

export default How;