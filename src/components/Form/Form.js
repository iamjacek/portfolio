import React, { Component } from 'react';
import styled from 'styled-components';

import ButtonTech from '../Buttons/ButtonTech';

const StyledWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	min-height: 800px;
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
`;

const FormWrapper = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1001;
	padding: 10px;
	h2,
	p {
		text-align: center;
		${({ theme }) => theme.media.tabletLandscape} {
			padding: 2%;
		}
	}
`;

const NameForm = styled.input`
	transition: border .2s ease-out;
	position: relative;
	display: block;
	margin: 10px auto 0px auto;
	width: 90%;
	max-width: 500px;
	height: 5vh;
	background: transparent;
	border: none;
	border-bottom: solid 2px ${({ theme }) => theme.colors.white};
	text-align: center;
	z-index: 1;
	font-family: "Roboto";
	font-size: 1.3rem;
	color: ${({ theme }) => theme.colors.white};
	:focus {
		outline: none !important;
		border: solid 2px ${({ theme }) => theme.colors.white};
		box-shadow: 0 0 3px #719ece;
	}
	${({ theme }) => theme.media.tabletLandscape} {
		max-width: 600px;
	}
`;

const Label = styled.label`
	position: relative;
	width: 90%;
	margin: 0 auto 10px auto;
	display: block;
	max-width: 500px;
	z-index: 1;

	${({ theme }) => theme.media.tabletLandscape} {
		max-width: 600px;
	}
`;

const EmailForm = styled.input`
	transition: border .2s ease-out;
	position: relative;
	display: block;
	margin: 10px auto 0px auto;
	width: 90%;
	max-width: 500px;
	height: 5vh;
	background: transparent;
	border: none;
	border-bottom: solid 2px ${({ theme }) => theme.colors.white};
	text-align: center;
	z-index: 1;
	font-family: "Roboto";
	font-size: 1.3rem;
	color: ${({ theme }) => theme.colors.white};
	:focus {
		outline: none !important;
		border: solid 2px ${({ theme }) => theme.colors.white};
		box-shadow: 0 0 3px #719ece;
	}
	${({ theme }) => theme.media.tabletLandscape} {
		max-width: 600px;
	}
`;

const MsgForm = styled.textarea`
	transition: border .2s ease-out;
	position: relative;
	display: block;
	margin: 0 auto;
	width: 90%;
	max-width: 500px;
	height: 10vh;
	background: transparent;
	border: none;
	border-bottom: solid 2px ${({ theme }) => theme.colors.white};
	text-align: center;
	z-index: 1;
	font-family: "Roboto";
	font-size: 1.3rem;
	color: ${({ theme }) => theme.colors.white};
	:focus {
		outline: none !important;
		border: solid 2px ${({ theme }) => theme.colors.white};
		box-shadow: 0 0 3px #719ece;
	}
	${({ theme }) => theme.media.tablet} {
		height: 90px;
	}
	${({ theme }) => theme.media.tabletLandscape} {
		max-width: 600px;
	}
`;

const ButtonWrap = styled.div`
	position: relative;
	display: flex;
	left: 0;
	top: 0;
	width: 100%;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	margin: 0;
	z-index: 1;
	${({ theme }) => theme.media.tablet} {
	}
	${({ theme }) => theme.media.desktop} {
	}
	${({ theme }) => theme.media.bigDesktop} {
	}
`;

const ButtonForm = styled.button`
	cursor: pointer;
	position: relative;
	display: block;
	margin: 0 auto;
	background-color: transparent;
	border: 2px solid ${({ theme }) => theme.colors.white};
	width: 150px;
	height: 40px;
	margin-top: 20px;
	font-family: 'Rubik', sans-serif;
	font-size: .9rem;
	color: ${({ theme }) => theme.colors.white};
	letter-spacing: normal;
	transition: all 200ms ease-in;
	z-index: 1;

	:hover {
		background-color: ${({ theme }) => theme.colors.red};
		font-size: 1rem;
		transition: all 200ms ease-in;
		letter-spacing: 1px;
		color: ${({ theme }) => theme.colors.white};
		border: 2px solid ${({ theme }) => theme.colors.red};
	}
	${({ theme }) => theme.media.tablet} {
	}
	${({ theme }) => theme.media.desktop} {
	}
	${({ theme }) => theme.media.bigDesktop} {
	}
`;

class Form extends Component {
	render() {
		return (
			<StyledWrapper isOpen={this.props.isOpen}>
				<Frame>
					<FormWrapper>
						<h2>CONTACT FORM</h2>
						<p>
							If you want to talk about project, collaboration or just say hello fill this form below or
							mail to info@jacekwitucki.com
						</p>
						<form name='contact-form' method='post' data-netlify='true' data-netlify-honeypot='bot-field'>
							{/* <NameForm type='text' name='name' /> */}
							<NameForm type='text' name='firstName' />
							<Label htmlFor='name' id='nameLabel'>
								Name
							</Label>
							<EmailForm type='text' name='email' />
							<Label htmlFor='email' id='emailLabel'>
								Email
							</Label>
							<MsgForm name='message' />
							<Label id='messageLabel'>Message</Label>

							<ButtonWrap>
								<ButtonForm type='submit' id='submit'>
									Send
								</ButtonForm>
							</ButtonWrap>
						</form>
					</FormWrapper>

					<ButtonWrapper onClick={this.props.closeForm}>
						<ButtonTech />
					</ButtonWrapper>
				</Frame>
			</StyledWrapper>
		);
	}
}

export default Form;
