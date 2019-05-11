
import React, { Component } from 'react'
import LayoutAbout from '../layout/LayoutAbout'
import Background2 from '../components/Background/Background2'
import Frame from '../components/Frame/Frame'
import H1 from '../components/H1/H1'
import TitleLine from '../components/VerticalLine/TitleLine'
import SmallPic from '../components/Pictures/SmallPic'
import Button from '../components/Button/Button'
import Par from '../components/Par/Par'
import smallpic from '../assets/smallpic.png'
import laptop from '../assets/laptop.png'
import AboutWrapper from '../components/Wrapper/AboutWrapper'
import { Link } from "gatsby";




class About extends Component{



aboutPicture = () => {
  if ( window.innerWidth < 768) {
    console.log('mniej niz 768')
    const a = document.querySelector('#sPic')
    a.src = smallpic
    
  } else {
    console.log('wiecej niz 768')
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
        
           <Background2>
           </Background2>
           <Frame>
             <AboutWrapper>
             <H1>ABOUT ME</H1>
            <TitleLine></TitleLine>
             <Par>
             {`
             I am the full of passion front-end web developer interested in programming and web design for many years.\n

                I love to code and I love to make webpages alive.\n

                I am also a big technology fanboy.
                I spend free time playing video games and celebrating every moment with my family.
                `}
            </Par>
            <Button>Skills</Button>
             </AboutWrapper>
             <SmallPic id="sPic" alt="Avatar" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut }></SmallPic>
           
           </Frame>
           
      
        </LayoutAbout>
        )
      }
}

export default About;