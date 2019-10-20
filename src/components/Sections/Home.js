import React, { Component, useState } from 'react';
import Layout from '../../Layout/Layout';
import styled from 'styled-components';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax } from 'gsap';

import Logo from '../Logo/Logo';

import Icon from '../Icon/Icon';

import Header from '../Header/Header';

// ASSETS
import logoImg from '../../assets/Logo.png';
import img from '../../assets/background_home.jpg';
import imgArrow from '../../assets/arrow.png';
import icon1 from '../../assets/tw.png';
import icon2 from '../../assets/in.png';
import icon3 from '../../assets/insta.png';
import icon4 from '../../assets/git.png';

const Background = styled.div`
    height: 100%;
    width: 100%;
    background: url('${img}');
    background-position: right 80%;
    background-size: cover; 
    opacity: .25;
    position: absolute;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;

    ${({ theme }) => theme.media.tabletLandscape}{
        height: 78%;
        width: 84%;
    }
`;

const Wrapper = styled.div`
	width: 100vw;
	max-width: 100%;
	height: 100vh;
	margin: 0;
	padding: 0;
	overflow: hidden;
`;

const Gap = styled.div`
	margin: 0;
	width: 100%;
	height: 30%;
	position: relative;
	z-index: 1;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

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
`;

const SocialWrapper = styled.div`
	position: relative;
	z-index: 2;
	width: 100%;
	height: 10%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const Gradient = styled.div`
    width: 100%;
    height: 100%;
    background: #F0EBE7;
    position: absolute;
    top: 0;
    left: 0;

`

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.myBackground = null;
	}

    //animate home page using gsap, all ids with prefix "my" has been created for gsap's purposes
	componentDidMount() {
		const tl = new TimelineMax();
		tl.fromTo(this.myBackground, 2, { height: '0%' }, { height: '80%', ease: Power2.easeInOut })
            .fromTo(this.myBackground, 2, { width: '74%' }, { width: '100%', ease: Power2.easeInOut })
            .fromTo(myGradient, 4, { opacity: 1 }, { opacity: 0, ease: Power2.easeInOut }, "-=4")
            .fromTo(myLogo, 2, { y:20, opacity: 0 }, { y:0, opacity: .8, ease: Power2.easeInOut }, '-=2')            
            .fromTo(mySocials, 2, { y:20, opacity: 0 }, { y:0, opacity: 1, ease: Power2.easeInOut }, '-=2') 
            .fromTo(myArrow, 2, {  opacity: 0 }, {  opacity: 1, ease: Power2.easeInOut }, '-=2') 
            .fromTo(myHeader, 2, { y: -20, opacity: 0 }, {  y: 0, opacity: 1, ease: Power2.easeInOut }, '-=2.5') 
	}

	render() {
		return (
			<Wrapper>
				<Layout gradient>
                
					<Background ref={(div) => (this.myBackground = div)} />
					<Header  />
					<Logo src={logoImg} id='myLogo' />
                   
					<Gap>
						<Scroll src={imgArrow} id="myArrow"/>
					</Gap>
					<SocialWrapper id="mySocials" >
						<Icon src={icon1} />
						<Icon src={icon2} />
						<Icon src={icon3} />
						<Icon src={icon4} />
					</SocialWrapper>
                    <Gradient id="myGradient"/>
				</Layout>
			</Wrapper>
		);
	}
}

export default Home;
