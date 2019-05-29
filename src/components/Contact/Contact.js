import styled from 'styled-components';
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

class Contact extends Component{

    
  
    render() {
      return( 
       <LastWrapper>
         <Wrap>
            <LogoContact src={logopic}/>
            <LogoContactDouble>
              <IMG src={logoh1}></IMG>
              <IMG src={logoh2} right></IMG>
            </LogoContactDouble>
            <Name>
              Jacek Witucki
            </Name>
            <Ocupation>
              Design & Development
            </Ocupation>
            <Avatar src={avatarpic}/>
            <FormButton>
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
       </LastWrapper>
      )
    }
  
  }
  
  
  export default Contact;