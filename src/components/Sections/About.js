import React, {Component, useState} from 'react';
import Layout from "../../Layout/Layout";
import styled from 'styled-components';
import img from "../../assets/background_about.jpg";
import AboutPicture from "../AboutPicture/AboutPicture";
import Technology from "../Technology/Technology"
import ButtonAbout from "../Buttons/ButtonAbout"

const Background = styled.div`
    height: 100%;
    width: 100%;
    background: url('${img}');
    background-position: right bottom;
    background-size: cover; 
    opacity: .07;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`

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

const Frame = styled.div`
    position: relative;
    height: 80%;
    width: 80%;
    border: 3px solid ${({theme}) => theme.colors.white};
    background: linear-gradient(${({theme}) => theme.colors.white} -250%, ${({theme}) => theme.colors.gray} 80%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    z-index: 2;
    ${({theme}) => theme.media.tablet} {
        flex-direction: row;
    }
    

    h2{
        position: relative;
        top: 20px;
        text-align: center;
        color: ${({theme}) => theme.colors.white};
        font-family: Roboto, sans-serif;
        font-weight: 500;
        margin: 30px;
        ${({theme}) => theme.media.tablet} {
            position: absolute;
            top: 0;
        }
        ${({theme}) => theme.media.desktop} {
            font-size: 1.8rem;
        }
        ${({theme}) => theme.media.bigDesktop} {
            font-size: 2.5rem;
        }
    }
    p{
        position: relative;
        font-family: Roboto, sans-serif;
        text-align: center;
        padding: 10% 10%;
        ${({theme}) => theme.media.tablet} {
            font-size: .9rem;
        }
        ${({theme}) => theme.media.tabletLandscape} {
            font-size: 1.2rem;
        }
        ${({theme}) => theme.media.desktop} {
            font-size: 1rem;
        }
        ${({theme}) => theme.media.bigDesktop} {
            font-size: 1.2rem;
        }
    }
`

const ButtonWrapper = styled.div`
    z-index: 100;
    position: absolute;
    cursor: pointer;
    bottom: -23px;
    margin: 0 auto;
    width: 200px;
    height: 46px;
    padding: 20px;
`

class About extends Component {

    constructor(props){
        super(props);
        this.state = {isTechOpen: false}
    }

    // //using react hooks for open state menu
    // const [isTechOpen , setTechState] = useState(false);

    // const toggleTech = () => {
    //     setTechState(!isTechOpen);
    // }   
    toggleTech = () => {
       this.setState({
            isTechOpen: !this.state.isTechOpen
       })
    }     

  render(){
    return(
        <Wrapper>
            <Layout>
                <Background />
                <StyledWrapper>
                    <Frame>
                        <h2>ABOUT ME</h2>
                        <AboutPicture />
                        <p>
                        I am the full of passion 
                        front-end web developer 
                        interested in programming 
                        and web design for years.

                        I love to code and make webpages alive.

                        Video Games Fan!
                        </p>
                        <ButtonWrapper onClick={this.toggleTech}>
                            <ButtonAbout />
                        </ButtonWrapper>
                    </Frame>
                </StyledWrapper>
                <Technology isOpen={this.state.isTechOpen} closeTech={this.toggleTech}/>
            </Layout>
        </Wrapper>
    )
  }
        
}

export default About;