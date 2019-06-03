
import React, { Component } from 'react'
import LayoutAbout from '../layout/LayoutAbout'
import Background2 from '../components/Background/Background2'
import Background from '../components/Background/Background'
import Frame from '../components/About/Frame/Frame'
import H1 from '../components/About/H1/H1'
import TitleLine from '../components/About/TitleLine/TitleLine' 
import SmallPic from '../components/About/Pictures/SmallPic'
import Button from '../components/Button/Button'
import Par from '../components/About/Par/Par'
import smallpic from '../assets/smallpic.png'
import laptop from '../assets/laptop.png'
import AboutWrapper from '../components/About/Wrapper/AboutWrapper'
import Skills from '../components/About/Skills/Skills'
import SkillsWrapper from '../components/About/Skills/SkillsWrapper';
import pic1 from '../assets/skill2.png'
import pic2 from '../assets/skill1.png'
import pic3 from '../assets/skill3.png'
import pic4 from '../assets/skill4.png'
import ArrowSkills from '../components/About/Skills/ArrowSkills';
import arrowskills from '../assets/arrow_skills.png'
import TextContainer from '../components/About/Skills/TextContainer';
import SkillPic1 from '../components/About/Skills/SkillPic1';
import SkillPic2 from '../components/About/Skills/SkillPic2';
import SkillPic3 from '../components/About/Skills/SkillPic3';
import SkillPic4 from '../components/About/Skills/SkillPic4';
import ParSkills1 from '../components/About/Skills/ParSkills1';
import ParSkills2 from '../components/About/Skills/ParSkills2';
import LineSkills from '../components/About/Skills/LineSkills';
import H1Skills from '../components/About/Skills/H1Skills';
import FlexPic from '../components/About/Skills/FlexPic';





class About extends Component{

checkWidth = () => {
  const x = document.innerWidth;
  return x;
}

checkWidthWindow = () => {
  const x = window.innerWidth;
  return x;
}

checkRadius = () => {
  const skills = document.querySelector("#Skills")
  const a = skills.offsetWidth;
  const b = skills.offsetHeight;
  const c = Math.round(Math.sqrt(a*a+b*b));
  const angle = Math.acos((b*b+c*c-a*a)/(2*b*c)); 
  const notrad = (Math.round(angle * (180 / Math.PI))) + 90 
  return notrad;
}

rotateHeaders = () => {
  if ( this.checkWidthWindow() > 1023 && this.checkWidthWindow() < 1368 ){
    const angle = this.checkRadius();
    document.querySelector("#H1Skills1").style.transform = `rotate(${angle + 180}deg)`;
    document.querySelector("#H1Skills2").style.transform = `rotate(${angle +180}deg)`;
  } else if (this.checkWidthWindow() < 1024 ) {
    document.querySelector("#H1Skills1").style.transform = "rotate(11deg)";
    document.querySelector("#H1Skills2").style.transform = "rotate(-12deg)";
  } else if (this.checkWidthWindow() > 1367 ) {
    document.querySelector("#H1Skills1").style.transform = "rotate(270deg)";
    document.querySelector("#H1Skills2").style.transform = "rotate(-90deg)";
  }
  
}

diagonalLineSet = () => {
  //set the diagonal line because view is responsive and rectangle is changing
    //using law of cosinus
   
    const skills = document.querySelector("#Skills")
    const a = skills.offsetWidth;
    const b = skills.offsetHeight;
    const c = Math.round(Math.sqrt(a*a+b*b));
    const angle = Math.acos((b*b+c*c-a*a)/(2*b*c)); 
    const notrad = (Math.round(angle * (180 / Math.PI))) + 90 
    document.querySelector("#Lineskill").style.transform = `rotate(${notrad}deg)`;
    document.querySelector("#Lineskill").style.opacity = 1;
}

diagonalLineUnset = () => {
  document.querySelector("#Lineskill").style.transform = `rotate(2deg)`;
  document.querySelector("#Lineskill").style.opacity = 0;
}

openSkills = () => {
  
  const skills = document.querySelector("#Skills")
  
  if (skills.style.left === "100vw" || skills.style.left ==="") {
    skills.style.left = "0px";

   
      skills.style.opacity = "1";
    
    
    const bd = document.querySelector("#StyleWrapper")
    const bd2 = document.querySelector("#StyleWrapper2")
    const bd3 = document.querySelector("#StyleWrapper3")
      bd.style.right = "85vw"
      bd2.style.right = "85vw"
      bd3.style.right = "85vw"
    if ( this.checkWidth() > 1023 ) {
    } else {       
      //rotate H1 with the line angle
      this.rotateHeaders();
    }
   
    this.diagonalLineSet();
  }
}

closeSkills = () => {
  const a = document.querySelector("#Skills")

  if ( a.style.left === "0px" ) {
    const bd = document.querySelector("#StyleWrapper")
    const bd2 = document.querySelector("#StyleWrapper2")
    const bd3 = document.querySelector("#StyleWrapper3")
    a.style.left = "100vw";
    bd.style.right = "0px"
    bd2.style.right = "0px"
    bd3.style.right = "0px"
    this.diagonalLineUnset();
    setTimeout(() => {
      a.removeAttribute('style');
    }, 600);
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
  this.rotateHeaders();
  window.addEventListener('load', this.aboutPicture.bind(this));
  window.addEventListener('resize', this.aboutPicture);
  window.addEventListener('resize', this.diagonalLineSet);
  window.addEventListener('resize', this.rotateHeaders);
}

componentWillUnmount() {
  this.aboutPicture();
  window.removeEventListener('load', this.aboutPicture.bind(this));
  window.removeEventListener('resize', this.aboutPicture);
  window.removeEventListener('resize', this.diagonalLineSet);
  window.removeEventListener('resize', this.rotateHeaders);
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
            <TitleLine />
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
                <H1Skills id="H1Skills1">DEVELOPER</H1Skills>
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
                <SkillPic3 src={pic3}/>
                <SkillPic4 src={pic4}/>
              </FlexPic>
              <TextContainer>                         
                <H1Skills left id="H1Skills2">DESIGNER</H1Skills>
                <ParSkills2>
{`On the top of that I create my 
own design which you may find 
handy so I can take care of everything!
I work on: 
ADOBE PS, GIMP, ADOBE XD, SKETCH `}
                </ParSkills2>
              </TextContainer>
             </SkillsWrapper>
             <LineSkills id="Lineskill"/>
           </Skills>
           
      
        </LayoutAbout>
        )
      }
}

export default About;