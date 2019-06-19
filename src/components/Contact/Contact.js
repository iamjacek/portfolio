import React, {Component} from 'react';
import LastWrapper from '../Wrapper/LastWrapper'
import LogoContact from './LogoContact'
import LogoContactDouble from './LogoContactDouble'
import Wrap from './Wrap'
import Name from './Name'
import Ocupation from './Ocupation'
import Avatar from './Avatar'
import IMG from "./IMG"
import FormButton from './FormButton'
import ContactInfo from './ContactInfo'
import Footer from './Footer'
import logopic from '../../assets/Logo.png'
import logoh1 from '../../assets/logoh1.png'
import logoh2 from '../../assets/logoh2.png'
import avatarpic from '../../assets/avatar.png'
import SocialContact from './SocialContact'
import social1 from '../../assets/tw.png'
import social2 from '../../assets/in.png'
import social3 from '../../assets/insta.png'
import social4 from '../../assets/git.png'
//contact form section imports
import H1Form from "./Form/H1Form"
import Form from "./Form/Form" 
import FormWrapper from "./Form/FormWrapper"
import FormP from "./Form/FormP"
import NameForm from "./Form/NameForm"
import BackgroundText from "./Form/BackgroundText"
import EmailForm from "./Form/EmailForm"
import MsgForm from "./Form/MsgForm"
import ButtonForm from "./Form/ButtonForm"
import ButtonWrap from "./Form/ButtonWrap"
import Line from "./Form/Line"
import Label from "./Form/Label"
import ArrowContact from './Form/ArrowContact';
import Captcha from './Form/Captcha'
import Arrowpic from "../../assets/arrow_skills.png"
import VerticalLine from "../VerticalLine/VerticalLine"
import VerticalLine2 from "../VerticalLine/VerticalLine2"

class Contact extends Component{

  openSkills = () => {
  
    const Contacts = document.querySelector("#Contacts")
    
    if (Contacts.style.left === "100vw" || Contacts.style.left ==="") {
      Contacts.style.left = "0px";
  
      Contacts.style.opacity = "1";
      
      const bd = document.querySelector("#sectionHome")
      const bd2 = document.querySelector("#sectionAbout")
      const bd3 = document.querySelector("#StyleWrapper3")
        bd.style.right = "85vw"
        bd2.style.right = "85vw"
        bd3.style.right = "85vw"   
    }
  }

  closeSkills = () => {
    const Contacts = document.querySelector("#Contacts")
  
    if ( Contacts.style.left === "0px" ) {
      const bd = document.querySelector("#sectionHome")
      const bd2 = document.querySelector("#sectionAbout")
      const bd3 = document.querySelector("#StyleWrapper3")
      Contacts.style.left = "100vw";
      bd.style.right = "0px"
      bd2.style.right = "0px"
      bd3.style.right = "0px"
      setTimeout(() => {
        Contacts.removeAttribute('style');
      }, 600);
    }
  }

  wooble = (e) => {
    e.target.style.animation = "woobleSocial .25s ease-in-out"
  }
  woobleOut = (e) => {
    e.target.removeAttribute("style")
  }

    
  
    render() {
      return( 
        
          <LastWrapper id="sectionContact">
            <Wrap>
                <LogoContact src={logopic}/>
                <LogoContactDouble>
                  <IMG src={logoh1}></IMG>
                  <IMG src={logoh2} right></IMG>
                </LogoContactDouble>
                <VerticalLine />
                <VerticalLine2 />
                <Name>
                  Jacek Witucki
                </Name>
                <Ocupation>
                  Design & Development
                </Ocupation>
                <Avatar src={avatarpic}/>
                
                  <FormButton onClick={ this.openSkills }>
                    Contact Form
                  </FormButton>
                
                
                <ContactInfo>
                  {`info@jacekwitucki.test
    07777777777`}
                </ContactInfo>
                <SocialContact>
                  <div>
                    <img src={social1} className="socialWooble" alt="twitter" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut } />
                    <img src={social2} className="socialWooble" alt="LinkedIn" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut } />
                    <img src={social3} className="socialWooble" alt="Instagram" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut } />
                    <img src={social4} className="socialWooble" alt="Github" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut } />
                  </div>
                </SocialContact>
                <Footer>
                Copyright © 2019 Jacek Witucki
                </Footer>
            </Wrap>

            <Form id="Contacts">
            <ArrowContact src={Arrowpic} onClick={ this.closeSkills }/>
              <FormWrapper>
                
                
                <H1Form>CONTACT FORM</H1Form>
                <Line></Line>
                <FormP>If you want to talk about project collaboration or just say hello fill this form below or mail to jacek@jacek.com</FormP>
                
                <form name="contact" 
                      method="POST" 
                      data-netlify="true"
                      data-netlify-honeypot="bot-field" 
                >
                  <NameForm type="text" id="name" name="name"></NameForm>
                  <Label htmlFor="name">Name</Label>
                  <EmailForm type="text" id="email" name="email"></EmailForm>
                  <Label htmlFor="email">Email</Label>
                  <MsgForm name="message"></MsgForm>
                  <Label>Message</Label>
                  <ButtonWrap>
                  <Captcha className="g-recaptcha" data-sitekey="6LfVc6cUAAAAAEgE-m0EjWAIEMWiZaxI5P0A9nB7"></Captcha>
                  <ButtonForm type="submit">Send</ButtonForm>
                  </ButtonWrap>
                </form>
                <SocialContact margin>
                  <div>
                    <img src={social1} className="socialWooble" alt="twitter" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut } />
                    <img src={social2} className="socialWooble" alt="LinkedIn" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut } />
                    <img src={social3} className="socialWooble" alt="Instagram" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut } />
                    <img src={social4} className="socialWooble" alt="Github" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut } />
                  </div>
                </SocialContact>
                <BackgroundText dev>DEVELOPER</BackgroundText>
              <BackgroundText>DESIGNER</BackgroundText>
              </FormWrapper>
              
            </Form>

          </LastWrapper>
       
       
      )
    }
  
  }
 

 

  
  export default Contact;