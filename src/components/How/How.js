import styled from 'styled-components';
import React, {Component} from 'react';
import LastWrapper from '../Wrapper/LastWrapper'
import H1 from '../H1/H1'
import TitleLine from '../VerticalLine/TitleLine'
import HowContainer from "./HowContainer"
import HowWrapper from "./HowWrapper"
import Number from "./Number"
import Title from "./Title"
import Text from "./Text"
import H2 from "./H2"
class How extends Component{

    
  
    render() {
      return(
       <LastWrapper FullHeight>
           <H1 relative>3 STEPS</H1>
          <TitleLine noMargin relative BigMargin/>
          <H2>Keep it simple</H2>
          <HowWrapper>
          <HowContainer>
            <Number>
              01
            </Number>
            <Title>Research</Title>
            <Text>
              Understand the client’s needs. 
              Collect all information. 
              Determine methods and techniques to fit all requirements. 
              Do research.
            </Text>
          </HowContainer>

          <HowContainer>
            <Number>
              02
            </Number>
            <Title>Design</Title>
            <Text>
            Create a web design. Use examples, concepts and all details provided to prepare some sketches, wireframes and style guide so we can  finally start to prototype the finish product.
            </Text>
          </HowContainer>

          <HowContainer ExtraMarginBot>
            <Number>
              03
            </Number>
            <Title>Develop</Title>
            <Text>
            If we have a design and it is accepted we may proceed to the next final phase which is web development. We are going to make web page alive in the browser using all utilities provided in designing phase.
            </Text>
          </HowContainer>
          </HowWrapper>
          
       </LastWrapper>
      )
    }
  
  }
  
  
  export default How;