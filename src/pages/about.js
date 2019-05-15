
import React, { Component } from 'react'
import LayoutAbout from '../layout/LayoutAbout'
import Background2 from '../components/Background/Background2'
import Background from '../components/Background/Background'
import Frame from '../components/Frame/Frame'
import H1 from '../components/H1/H1'
import TitleLine from '../components/VerticalLine/TitleLine'
import SmallPic from '../components/Pictures/SmallPic'
import Button from '../components/Button/Button'
import Par from '../components/Par/Par'
import smallpic from '../assets/smallpic.png'
import laptop from '../assets/laptop.png'
import AboutWrapper from '../components/Wrapper/AboutWrapper'
import Skills from '../components/Skills/Skills'
import SkillsWrapper from '../components/Skills/SkillsWrapper';
import pic1 from '../assets/skill1.png'
import pic2 from '../assets/skill2.png'
import ArrowSkills from '../components/Skills/ArrowSkills';
import arrowskills from '../assets/arrow_skills.png'
import TextContainer from '../components/Skills/TextContainer';
import SkillPic1 from '../components/Skills/SkillPic1';
import SkillPic2 from '../components/Skills/SkillPic2';
import ParSkills1 from '../components/Skills/ParSkills1';
import ParSkills2 from '../components/Skills/ParSkills2';
import H1Skills from '../components/Skills/H1Skills';
import FlexPic from '../components/Skills/FlexPic';
import { Link } from "gatsby";




class About extends Component{

openSkills = () => {
  const a = document.querySelector("#Skills")
  const bd = document.querySelector("#StyleWrapper")
  const bd2 = document.querySelector("#StyleWrapper2")
  if (a.style.left === "100vw" || a.style.left ==="") {
    a.style.left = "0px";
    bd.style.right = "100vw"
    bd2.style.right = "100vw"
  }
}

closeSkills = () => {
  const a = document.querySelector("#Skills")
  const bd = document.querySelector("#StyleWrapper")
  const bd2 = document.querySelector("#StyleWrapper2")
  console.log(a.style.left)
  if ( a.style.left === "0px" ) {
    a.removeAttribute("style");
    bd.style.right = "0px"
    bd2.style.right = "0px"
  }
}

aboutPicture = () => {
  if ( window.innerWidth < 768) {
    const a = document.querySelector('#sPic')
    a.src = smallpic
    
  } else {
    const a = document.querySelector('#sPic')
    a.src = laptop
  }
}

componentDidMount() {
  this.aboutPicture();
  window.addEventListener('load', this.aboutPicture.bind(this));
  window.addEventListener('resize', this.aboutPicture);
}

componentWillUnmount() {
  this.aboutPicture();
  window.removeEventListener('load', this.aboutPicture.bind(this));
  window.addEventListener('resize', this.aboutPicture);
}

wooble = () => {
  document.querySelector("#sPic").style.animation = "wooble .25s ease-in-out";
}
woobleOut = () => {
  document.querySelector("#sPic").removeAttribute("style");
}

    render() {
        return(
          <LayoutAbout>
        
           <Background2 />
           
           <Frame>
             <AboutWrapper>
             <H1>ABOUT ME</H1>
            <TitleLine></TitleLine>
             <Par>
{`I am the full of passion 
front-end web developer 
interested in programming 
and web design for years.

I love to code and I love 
to make webpages alive.

Video Games Fan!`}
            </Par>
            <Button onClick={ this.openSkills } >Skills</Button>
             </AboutWrapper>
             <SmallPic id="sPic" alt="Avatar" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut }></SmallPic>
           
           </Frame>
           <Skills id="Skills"> 
           <Background isLeft/>
             <SkillsWrapper>
              
              <ArrowSkills src={arrowskills} onClick={ this.closeSkills }/>
              <TextContainer>                         
                <H1Skills>DEVELOPER</H1Skills>
                <ParSkills1>
{`Please find the technologies I work with:
HTML5 CSS3 SASS
JAVASCRIPT ES6/7
REACT BOOTSTRAP jQUERY
GIT NPM NODEJS
MACOS/LINUX CLI GULP WEBPACK PARCEL
BEM`}
                </ParSkills1>
              </TextContainer>
              <FlexPic>
                <SkillPic1 src={pic1}/>
                <SkillPic2 src={pic2}/>
              </FlexPic>
              <TextContainer>                         
                <H1Skills left>DESIGNER</H1Skills>
                <ParSkills2>
{`On the top of that I create my 
own design which you may find 
handy so I can take care of everything!
I work on: 
ADOBE PS, GIMP, ADOBE XD, SKETCH `}
                </ParSkills2>
              </TextContainer>
             </SkillsWrapper>
           </Skills>
           
      
        </LayoutAbout>
        )
      }
}

export default About;