import React, { Component } from "react";
import Menu from '../components/Home/Menu/Menu';
import MenuFull from '../components/Home/Menu/MenuFull'
import Line from '../components/Home/Menu/Line';
import Polish from '../components/Home/Polish/Polish';
import Layout from '../layout/Layout';
import Logo from '../components/Home/Logo/Logo'
import logo from '../assets/Logo.png';
import VerticalLine from '../components/VerticalLine/VerticalLine'
import VerticalLine2 from '../components/VerticalLine/VerticalLine2'
import JumpToTop from '../components/JumpToTop/JumpToTop'
import JumpToToppic from '../assets/JumpToTop.png'
import Background from '../components/Background/Background'
import Scroll from '../components/Home/Scroll/Scroll'
import scroll from '../assets/arrow.png'
import Social from '../components/Home/Social/Social'
import social1 from '../assets/tw.png'
import social2 from '../assets/in.png'
import social3 from '../assets/insta.png'
import social4 from '../assets/git.png'



class Home extends Component{ 

  //to control nav and hamburger menu and hide theme on resize event
  handleResize = () => {
    if ( window.innerWidth > 1367 ) {
      const a = document.querySelector("#MenuFull")
      const bd = document.querySelector("#sectionHome")
      a.style.margin = "0px"
      bd.style.right = "0px"
    } else if ( window.innerWidth < 1367 ) {
      const a = document.querySelector("#MenuFull")
      const bd = document.querySelector("#sectionHome")
      a.style.margin = "0px -250px 0px 0px"
      bd.style.right = "0px"
    }
  }

  toggleJumpToTop = () => {
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){ 
      document.querySelector("#JumpToTop").style.opacity = "1";

    } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100){
      document.querySelector("#JumpToTop").style.opacity = "0";
    }
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize.bind(this));
    window.addEventListener('scroll', this.toggleJumpToTop);
  }

  componentWillUnmount() {
    this.handleResize();
    window.removeEventListener('resize', this.handleResize.bind(this));
    window.removeEventListener('scroll', this.toggleJumpToTop);
  }

  //toggle menu on tablets and phones and animate ham-menu icon
  toggleMenu = () => {
      if ( window.innerWidth < 1367 ) {
        const a = document.querySelector("#MenuFull")
        const bd = document.querySelector("#sectionHome")
        const bd2 = document.querySelector("#sectionAbout")
        const bd3 = document.querySelector("#StyleWrapper3")
        const menu = document.querySelector("#Menu")
        const l1 = document.querySelector("#l1")
        const l2 = document.querySelector("#l2")
        const l3 = document.querySelector("#l3")
        if (a.style.margin === "0px -250px 0px 0px" || a.style.margin === "") {
          a.style.margin = "0px"
          bd.style.right = "250px"
          bd2.style.right = "250px"
          bd3.style.right = "250px"
          l2.style.opacity = "0"
          l1.style.transform = "rotate(45deg) translate(1px, 15px)"
          l3.style.transform = "rotate(-45deg) translate(0px, -15px)"
          menu.style.position = "fixed";
        } else if (a.style.margin === "0px"){
          a.style.margin = "0px -250px 0px 0px"
          bd.style.right = "0px"
          bd2.style.right = "0px"
          bd3.style.right = "0px"
          l2.style.opacity = "1"
          l1.style.transform = "rotate(0deg) translate(0px, 0px)"
          l3.style.transform = "rotate(0deg) translate(0px, 0px)"
          setTimeout(() => {
            menu.removeAttribute("style");
          }, 600);
          
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
  

  render() {
    return(
      <Layout>

      <Background>
      </Background>
      <a href="#sectionHome">
        <JumpToTop id="JumpToTop" src={JumpToToppic}/>
      </a>
        <Polish  onMouseOver={ this.wooble } onMouseOut={ this.woobleOut }>PL</Polish>
        <Menu onClick={ this.toggleMenu } id="Menu" >
          <Line id="l1"/>
          <Line id="l2"/>
          <Line id="l3"/>
        </Menu>
        <MenuFull id="MenuFull">
          <ul>
            <a href="#sectionHome" onClick={ this.collapseMenu }><li>Home</li></a>
            <a href="#sectionAbout" onClick={ this.collapseMenu }><li>About</li></a>
            <a href="#sectionJob" onClick={ this.collapseMenu }><li>Job</li></a>
            <a href="#sectionHow" onClick={ this.collapseMenu }><li>How</li></a>
            <a href="#sectionContact" onClick={ this.collapseMenu }><li>Contact</li></a>
          </ul>
        </MenuFull>
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
  
    </Layout>
    )
  }             

}


export default Home;
