import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../../assets/background_home.jpg';

import ButtonTech from '../Buttons/ButtonTech';

const Background = styled.div`
    height: 100%;
    width: 100%;
    background: url('${img}');
    background-position: left bottom;
    background-size: cover; 
    opacity: .07;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`;

const StyledWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.colors.gray};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 97;
	transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
	transition: transform .2s ease-out;

	p {
		padding: 10%;
	}
`;

const ButtonWrapper = styled.div`
	position: absolute;
	cursor: pointer;
	bottom: -23px;
	margin: 0 auto;
	width: 200px;
	height: 46px;
	padding: 20px;
`;

const Field = styled.div`
	height: 5vh;
	width: 75%;
	max-width: 270px;
	border: solid 1px ${({ theme }) => theme.colors.white};
	text-align: center;
	margin: 1px auto 0 auto;
	padding: 1.4vh;
	font-weight: 300;
	background: ${({ theme }) => theme.colors.gray};
	font-size: 1.8vh;

	${({ theme }) => theme.media.tablet} {
		min-width: 370px;
	}

	${({ theme }) => theme.media.tabletLandscape} {
		min-width: 170px;
	}
`;

const Frame = styled.div`
	position: relative;
	padding-bottom: 50px;
	position: relative;
	height: 80%;
	width: 80%;
	border: 3px solid ${({ theme }) => theme.colors.white};
	background: linear-gradient(${({ theme }) => theme.colors.white} -250%, ${({ theme }) => theme.colors.gray} 80%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	z-index: 0;

	${({ theme }) => theme.media.tabletLandscape} {
		height: 55%;
		width: 70%;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		flex-wrap: wrap;
	}
`;

const Group = styled.div`
	width: 100%;
	margin: auto;
	${({ theme }) => theme.media.tabletLandscape} {
		width: 50%;
		box-sizing: border-box;
	}
`;

class Technology extends Component {
	render() {
		return (
			<StyledWrapper isOpen={this.props.isOpen}>
				<Background />

				<Frame>
					<Group>
						<Field>HTML5</Field>
						<Field>CSS3</Field>
						<Field>SASS</Field>
						<Field>BOOTSTRAP</Field>
					</Group>

					<Group>
						<Field>JAVASCRIPT</Field>
						<Field>REACT</Field>
						<Field>GATSBY</Field>
						<Field>STYLED-COMPONENTS</Field>
					</Group>

					<Group>
						<Field>CLI & GIT</Field>
						<Field>GULP, WEBPACK, PARCEL</Field>
						<Field>BEM</Field>
					</Group>

					<Group>
						<Field>PS, GIMP, ADOBE XD, SKETCH</Field>
					</Group>

					<ButtonWrapper onClick={this.props.closeTech}>
						<ButtonTech />
					</ButtonWrapper>
				</Frame>
			</StyledWrapper>
		);
	}
}

export default Technology;
