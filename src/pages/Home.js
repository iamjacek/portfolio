import React, { Component } from "react";
import styled from 'styled-components';
import scroll from '../assets/arrow.png';
import social4 from '../assets/git.png';
import social2 from '../assets/in.png';
import social3 from '../assets/insta.png';

import logo from '../assets/Logo.png';
import social1 from '../assets/tw.png';
import Background from '../components/Background/Background';
import Logo from '../components/Home/Logo/Logo';
import Line from '../components/Home/Menu/Line';
import Menu from '../components/Home/Menu/Menu';
import MenuFull from '../components/Home/Menu/MenuFull';
import Polish from '../components/Home/Polish/Polish';
import Scroll from '../components/Home/Scroll/Scroll';
import Social from '../components/Home/Social/Social';

import VerticalLine from '../components/VerticalLine/VerticalLine';
import VerticalLine2 from '../components/VerticalLine/VerticalLine2';
import Layout from '../layout/Layout';


const ExtraWrapper = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
transition: transform 250ms ease-out;
`

class Home extends Component{ 

  //to control nav and hamburger menu and hide them on resize event
  handleResize = () => {
        const bd2 = document.querySelector("#sectionAbout")
        const bd3 = document.querySelector("#StyleWrapper3")
    if ( window.innerWidth > 1367 ) {
      if (this.ExtraWrapper.style.transform === "translateX(-250px)") {
        this.hamburger.click();
        this.ExtraWrapper.style.transform = "translateX(0px)"
        bd2.style.transform = "translateX(0px)"
        bd3.style.transform = "translateX(0px)"
       
      }
      this.myMenu.style.transform = "translateX(0px)"
    } else if ( window.innerWidth < 1367 ) {
      this.ExtraWrapper.style.transform = "translateX(0px)"
      bd2.style.transform = "translateX(0px)"
      bd3.style.transform = "translateX(0px)"
      this.myMenu.style.transform = "translateX(250px)"
        //on resize menu is closed and X mark turns back to hamburger
        const l1 = document.querySelector("#l1")
        const l2 = document.querySelector("#l2")
        const l3 = document.querySelector("#l3")
        l2.style.opacity = "1"
        l1.style.transform = "rotate(0deg) translate(0px, 0px)"
        l3.style.transform = "rotate(0deg) translate(0px, 0px)"
     
      // this.myMenu.style.transform = "translateX(250px)"
      // this.ExtraWrapper.style.transform = "translateX(0px)"
    }
  }

 

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize.bind(this));

  }

  componentWillUnmount() {
    this.handleResize();
    window.removeEventListener('resize', this.handleResize.bind(this));

  }

  //toggle menu on tablets and phones and animate ham-menu icon
  toggleMenu = () => {
    console.log("toogle is on")
      if ( window.innerWidth < 1367 ) {
        
        
        const bd2 = document.querySelector("#sectionAbout")
        const bd3 = document.querySelector("#StyleWrapper3")
        const menu = document.querySelector("#Menu")
        const l1 = document.querySelector("#l1")
        const l2 = document.querySelector("#l2")
        const l3 = document.querySelector("#l3")
        if (this.myMenu.style.transform === "translateX(250px)" || this.myMenu.style.transform === "") {
          this.myMenu.style.transform = "translateX(0px)"
          this.ExtraWrapper.style.transform = "translateX(-250px)"
          bd2.style.transform = "translateX(-250px)"
          bd3.style.transform = "translateX(-250px)"
          l2.style.opacity = "0"
          l1.style.transform = "rotate(45deg) translate(1px, 15px)"
          l3.style.transform = "rotate(-45deg) translate(0px, -15px)"
          
          // this.sectionHome.style.opacity = "1";
          // this.sectionAbout.style.opacity = "1";
          // this.sectionJob.style.opacity = "1";
          // this.sectionHow.style.opacity = "1";
          // this.sectionContact.style.opacity = "1";
          
        } else if (this.myMenu.style.transform === "translateX(0px)"){
          this.myMenu.style.transform = "translateX(250px)"
          this.ExtraWrapper.style.transform = "translateX(0px)"
          bd2.style.transform = "translateX(0px)"
          bd3.style.transform = "translateX(0px)"
          l2.style.opacity = "1"
          l1.style.transform = "rotate(0deg) translate(0px, 0px)"
          l3.style.transform = "rotate(0deg) translate(0px, 0px)"
          console.log("toogle is going off")
          setTimeout(() => {
            menu.removeAttribute("style");
            // this.sectionHome.style.opacity = "0";
            // this.sectionAbout.style.opacity = "0";
            // this.sectionJob.style.opacity = "0";
            // this.sectionHow.style.opacity = "0";
            // this.sectionContact.style.opacity = "0";
          }, 250);
          
        }
    }
  }

  enlargeIcon = (e) => {
    e.target.style.transform = 'scale(1.3)'
  }

  resizeIcon = (e) => {
    e.target.style.transform = 'scale(1)'
  }

  wooble = (e) => {
      e.target.style.animation = "woobleSocial .25s ease-in-out"
  }
  woobleOut = (e) => {
      e.target.removeAttribute("style")
  }
  collapseMenu = () => {
   
      this.toggleMenu();
   
  }
  //swich language on "POLISH BUTTON"
  switchToPL = () => {
    this.myMenu.firstChild.children[0].firstChild.innerText = "Główna"
    this.myMenu.firstChild.children[1].firstChild.innerText = "O mnie"
    this.myMenu.firstChild.children[2].firstChild.innerText = "Portfolio"
    this.myMenu.firstChild.children[3].firstChild.innerText = "Jak"
    this.myMenu.firstChild.children[4].firstChild.innerText = "Kontakt"
    document.querySelector("#h1about").innerText = "O mnie"
    document.querySelector("#h1job").innerText = "Moja Praca"
    document.querySelector("#h1how").innerText = "Proces w skrócie"
    document.querySelector("#h2how").innerText = "Wszystko proste, bez komplikacji"
    document.querySelector("#t1how").innerText = "Wywiad"
    document.querySelector("#t2how").innerText = "Projekt"
    document.querySelector("#t3how").innerText = "Kodowanie"
    document.querySelector("#txt1how").innerText = "Sprecyzować potrzeby klienta. Zebrać wszelkie informacje. Określić technologie. Sprawdzić konkurencje."
    document.querySelector("#txt2how").innerText = "Stworzyć projekt graficzny bazując na poprzednim etapie. Szkice, plany i koncepcje strony będą użyte do wykonania prototypu."
    document.querySelector("#txt3how").innerText = "Gdy mamy gotowy projekt pozostaję nam zaprogramować i opublikować stronę w internecie."
    document.querySelector("#buttonContact").innerText = "Formularz kontaktowy"
    document.querySelector("#h1contact").innerText = "Formularz kontaktowy"
    document.querySelector("#nameLabel").innerText = "Imię"
    document.querySelector("#emailLabel").innerText = "Email"
    document.querySelector("#messageLabel").innerText = "Treść"
    document.querySelector("#submit").innerText = "Wyślij"
    document.querySelector("#formDescription").innerText = "Chcesz do mnie napisać? Współpraca lub prywatny projekt? Proszę napisz w formularzu lub wiadomości email na info@jacekwitucki.com a odpiszę najszybciej jak będę mógł!"
    document.querySelector("#parabout").innerHTML = `Jestem frontendowcem,
z uporem maniaka tworzę
strony internetowe!

Kocham to robić,
szczególnie je ożywiać 
i nadawać im duszę!

Fan gier. PC i PS4!`;
    document.querySelector("#buttonAbout").innerText = "Technologie";
    document.querySelector("#skills1").innerHTML = `Technologie z którymi pracuję:
HTML5 CSS3 SASS
JAVASCRIPT ES6/7 jQUERY
REACT BOOTSTRAP GATSBY
GIT NPM NODEJS
MACOS/LINUX CLI GULP WEBPACK PARCEL
BEM`
        document.querySelector("#skills2").innerHTML = `Dodatkowo projektuje strony i 
aplikacje, dzięki temu możesz
u mnie otrzymać kompletny projekt!

Najczęściej uywam: 
ADOBE PS, GIMP, ADOBE XD, SKETCH `
  }
  switchToENG = () => {
    this.myMenu.firstChild.children[0].firstChild.innerText = "Home"
    this.myMenu.firstChild.children[1].firstChild.innerText = "About"
    this.myMenu.firstChild.children[2].firstChild.innerText = "Job"
    this.myMenu.firstChild.children[3].firstChild.innerText = "How"
    this.myMenu.firstChild.children[4].firstChild.innerText = "Contact"
    document.querySelector("#h1about").innerText = "About"
    document.querySelector("#h1job").innerText = "Job"
    document.querySelector("#h1how").innerText = "How"
    document.querySelector("#h2how").innerText = "Keep it simple"
    document.querySelector("#t1how").innerText = "Research"
    document.querySelector("#t2how").innerText = "Design"
    document.querySelector("#t3how").innerText = "Development" 
    document.querySelector("#buttonContact").innerText = "Contact Form"
    document.querySelector("#h1contact").innerText = "Contact Form"
    document.querySelector("#nameLabel").innerText = "Name"
    document.querySelector("#emailLabel").innerText = "Email"
    document.querySelector("#messageLabel").innerText = "Message"
    document.querySelector("#submit").innerText = "Send"
    document.querySelector("#formDescription").innerText = "If you want to talk about project, collaboration or just say hello fill this form below or mail to info@jacekwitucki.com"
    document.querySelector("#txt1how").innerText = "Understand the client’s needs. Collect all information. Determine methods and techniques to fit all requirements. Do research."
    document.querySelector("#txt2how").innerText = "Create a web design. Use examples, concepts and all details provided to prepare some sketches, wireframes and style guide so we can  finally start to prototype the finish product."
    document.querySelector("#txt3how").innerText = "If we have the design and it is accepted we may proceed to the next final phase which is web development and deployment. We are going to make web page alive in the browser using all utilities provided in designing phase."
    document.querySelector("#parabout").innerHTML = `I am the full of passion 
front-end web developer 
interested in programming 
and web design for years.
    
I love to code and I love 
to make webpages alive.
    
Video Games Fan!`;
    document.querySelector("#buttonAbout").innerText = "Tech";
    document.querySelector("#skills1").innerHTML = `Please find the technologies I work with:
HTML5 CSS3 SASS
JAVASCRIPT ES6/7 jQUERY
REACT BOOTSTRAP GATSBY
GIT NPM NODEJS
MACOS/LINUX CLI GULP WEBPACK PARCEL
BEM`
    document.querySelector("#skills2").innerHTML = `On the top of that I create my 
own design which you may find 
handy so I can take care of everything!

I work on: 
ADOBE PS, GIMP, ADOBE XD, SKETCH `
  }
  languageSwitch = () => {
    this.myH2.innerText === "PL" ? this.myH2.innerText = "ENG" : this.myH2.innerText = "PL";
    this.myH2.innerText === "PL" ? this.switchToENG() : this.switchToPL();
  }
 

  render() {
    return(
    <Layout>
       
      <ExtraWrapper  ref={ExtraWrapper => {
              this.ExtraWrapper = ExtraWrapper;
            }}>
        <Background>
        </Background>
       

          <Polish 
            ref={Polish => {
              this.myH2 = Polish;
            }}
            onMouseOver={ this.wooble } 
            onMouseOut={ this.woobleOut } 
            onClick={ this.languageSwitch }
          >
            PL
          </Polish>

          
          
          <Logo src={logo} alt="Logo" />
          <VerticalLine />
          <VerticalLine2 />
          <a href="#sectionAbout">
            <Scroll src={scroll} alt="arrow to scroll down"/>
          </a>
          <Social>
            <div>
            <a href="https://twitter.com/JacekWitucki" target="_blank" rel="noopener noreferrer">
              <img src={social1} className="socialWooble" alt="twitter" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut } />
            </a>
            <a href="https://www.linkedin.com/in/iamjacek/" target="_blank" rel="noopener noreferrer">
              <img src={social2} className="socialWooble" alt="LinkedIn" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut } />
            </a>
            <a href="https://www.instagram.com/i_am_jacek/" target="_blank" rel="noopener noreferrer">
              <img src={social3} className="socialWooble" alt="Instagram" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut } />
            </a>
            <a href="https://github.com/iamjacek" target="_blank" rel="noopener noreferrer">
              <img src={social4} className="socialWooble" alt="Github" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut } />
            </a>
            </div>                    
          </Social>

         
      </ExtraWrapper>
      
      <MenuFull 
            ref={Menu => {
              this.myMenu = Menu;
            }}
          >
            <ul>
              <a 
                ref={home => {
                  this.sectionHome = home;
                }}  
                href="#sectionHome" 
                onClick={ this.collapseMenu }
                >
                <li>Home</li>
              </a>
              <a  ref={about => {
                  this.sectionAbout = about;
                }}  
                href="#sectionAbout" onClick={ this.collapseMenu }><li>About</li></a>
              <a  ref={job => {
                  this.sectionJob = job;
                }}  
                href="#sectionJob" onClick={ this.collapseMenu }><li>Job</li></a>
              <a  ref={how => {
                  this.sectionHow = how;
                }}  
                href="#sectionHow" onClick={ this.collapseMenu }><li>How</li></a>
              <a  ref={contact => {
                  this.sectionContact = contact;
                }}  
                href="#sectionContact" onClick={ this.collapseMenu }><li>Contact</li></a>
            </ul>
          </MenuFull>
          <Menu 
            onClick={ this.toggleMenu } 
            id="Menu"
            ref={MenuIcon => {
              this.hamburger = MenuIcon;
            }} 
          >
            <Line id="l1"/>
            <Line id="l2"/>
            <Line id="l3"/>
          </Menu>
    </Layout>
    )
  }             

}


export default Home;
