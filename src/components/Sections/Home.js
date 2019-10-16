import React, {Component, useState} from 'react';
import Layout from "../../Layout/Layout";
import styled from 'styled-components';

import Logo from "../Logo/Logo"

import Icon from "../Icon/Icon"

import Header from '../Header/Header'


// ASSETS
import logoImg from "../../assets/Logo.png"
import img from "../../assets/background_home.jpg";
import imgArrow from "../../assets/arrow.png"
import icon1 from "../../assets/tw.png"
import icon2 from "../../assets/in.png"
import icon3 from "../../assets/insta.png"
import icon4 from "../../assets/git.png"

const Background = styled.div`
    height: 100%;
    width: 100%;
    background: url('${img}');
    background-position: right 70%;
    background-size: cover; 
    opacity: .4;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    ${({theme}) => theme.media.tabletLandscape}{
        height: 78%;
        width: 100%;
        top: 10%;
        left: 0;
        
    }
`

const Wrapper = styled.div`
    width: 100vw;
    max-width: 100%;    
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
`



const Gap = styled.div`
    margin: 0;
    width: 100%;
    height: 28%;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

const Scroll = styled.img`
    width: 70px;
    padding: 10px;
    cursor: pointer;
    animation: float 2s ease-in-out infinite;
    @keyframes float {
        0% {
        transform: translatey(0px);
        }
        50% {
        transform: translatey(-20px);
        }
        100% {
        transform: translatey(0px);
        }
    }
`

const SocialWrapper = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`



class Home extends React.Component {

    render() {
        return(
            <Wrapper>
                <Layout gradient>
                   <Background />
                    <Header />
                    <Logo src={logoImg} />
                    <Gap>
                        <Scroll src={imgArrow}/>
                    </Gap>
                    <SocialWrapper>
                        <Icon src={icon1}/>
                        <Icon src={icon2}/>
                        <Icon src={icon3}/>
                        <Icon src={icon4}/>
                    </SocialWrapper>
                </Layout>
            </Wrapper>
        )
    }
}

export default Home;