import React, { useEffect } from 'react'
import styled from 'styled-components'

import ButtonTech from '../Buttons/ButtonTech'

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 25px;
  min-height: 800px;
  background: linear-gradient(
    to left,
    black -220%,
    ${({ theme }) => theme.colors.gray} 150%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 97;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.2s ease-out;

  p {
    padding: 10%;
  }
`

const ButtonWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: -23px;
  margin: 0 auto;
  width: 200px;
  height: 46px;
  padding: 20px;
`

const Frame = styled.div`
  position: relative;
  padding-bottom: 50px;
  position: relative;
  height: 80%;
  width: 80%;
  border: 3px solid ${({ theme }) => theme.colors.white};
  background: linear-gradient(
    to left,
    black -280%,
    ${({ theme }) => theme.colors.gray} 150%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 0;
`

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
`

const NameForm = styled.input`
  transition: border 0.2s ease-out;
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
  font-family: 'Roboto';
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
`

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
`

const EmailForm = styled.input`
  transition: border 0.2s ease-out;
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
  font-family: 'Roboto';
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
`

const MsgForm = styled.textarea`
  transition: border 0.2s ease-out;
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
  font-family: 'Roboto';
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
`

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
`

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
  font-size: 0.9rem;
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
`

function Form(props) {
  var counter = 0
  useEffect(() => {
    let name = document.querySelector('input[name = "firstName"]')
    let email = document.querySelector('input[name = "email"]')
    let msg = document.querySelector('textarea[name = "message"]')
    name.addEventListener('onblur', onBlurVerification)
    email.addEventListener('onblur', onBlurVerification)
    msg.addEventListener('onblur', onBlurVerification)

    return () => {
      name.removeEventListener('onblur', onBlurVerification)
      email.removeEventListener('onblur', onBlurVerification)
      msg.removeEventListener('onblur', onBlurVerification)
    }
  }, [onBlurVerification])

  const validateName = () => {
    let name = document.querySelector('input[name = "firstName"]').value
    if (name.length > 1) ++counter
  }

  const validateEmail = () => {
    let email = document.querySelector('input[name = "email"]').value
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(email)) ++counter
  }

  const validateMsg = () => {
    let msg = document.querySelector('textarea[name = "message"]').value
    if (msg.length > 5 && msg.length < 200) ++counter
  }

  const onBlurVerification = () => {
    validateName()
    validateEmail()
    validateMsg()
    if (counter === 3) {
      counter = 0
      return true
    } else {
      counter = 0
      return false
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    return onBlurVerification()
  }

  return (
    <StyledWrapper isOpen={props.isOpen}>
      <Frame>
        <FormWrapper>
          <h2>CONTACT FORM</h2>
          <p>
            If you want to talk about project, collaboration or just say hello
            fill this form below or send an e-mail to info@jacekwitucki.com
          </p>
          <form
            name="contact-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <NameForm type="text" name="name" />
            <NameForm
              type="text"
              name="firstName"
              required
              minlength="2"
              maxlength="12"
            />
            <Label htmlFor="name" id="nameLabel">
              Name
            </Label>
            <EmailForm type="text" name="email" required maxlength="22" />
            <Label htmlFor="email" id="emailLabel">
              Email
            </Label>
            <MsgForm name="message" required minlength="5" maxlength="200" />
            <Label htmlFor="message" id="messageLabel">
              Message
            </Label>

            <ButtonWrap>
              <ButtonForm>Send</ButtonForm>
            </ButtonWrap>
          </form>
        </FormWrapper>

        <ButtonWrapper onClick={props.closeForm}>
          <ButtonTech />
        </ButtonWrapper>
      </Frame>
    </StyledWrapper>
  )
}

export default Form
