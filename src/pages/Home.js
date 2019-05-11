import React, { Component } from "react";
import Menu from '../components/Menu/Menu';
import MenuFull from '../components/Menu/MenuFull'
import Line from '../components/Menu/Line';
import Polish from '../components/Polish/Polish';
import Layout from '../layout/Layout';
import Logo from '../components/Logo/Logo'
import logo from '../assets/Logo.png';
import VerticalLine from '../components/VerticalLine/VerticalLine'
import VerticalLine2 from '../components/VerticalLine/VerticalLine2'
import Background from '../components/Background/Background'
import Scroll from '../components/Scroll/Scroll'
import scroll from '../assets/arrow.png'
import Social from '../components/Social/Social'
import social1 from '../assets/tw.png'
import social2 from '../assets/in.png'
import social3 from '../assets/insta.png'
import social4 from '../assets/git.png'


class Home extends Component{

  //to control nav and hamburger menu and hide theme on resize event
  handleResize = () => {
    if ( window.innerWidth > 1367 ) {
      const a = document.querySelector("#MenuFull")
      const bd = document.querySelector("#StyleWrapper")
      a.style.margin = "0px"
      bd.style.right = "0px"
    } else if ( window.innerWidth < 1367 ) {
      const a = document.querySelector("#MenuFull")
      const bd = document.querySelector("#StyleWrapper")
      a.style.margin = "0px -250px 0px 0px"
      bd.style.right = "0px"
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
    const a = document.querySelector("#MenuFull")
    const bd = document.querySelector("#StyleWrapper")
    const menu = document.querySelector("#Menu")
    const l1 = document.querySelector("#l1")
    const l2 = document.querySelector("#l2")
    const l3 = document.querySelector("#l3")
    if (a.style.margin === "0px -250px 0px 0px" || a.style.margin === "") {
      a.style.margin = "0px"
      bd.style.right = "250px"
      l2.style.opacity = "0"
      l1.style.transform = "rotate(45deg) translate(1px, 15px)"
      l3.style.transform = "rotate(-45deg) translate(0px, -15px)"
    } else if (a.style.margin = "0px"){
      a.style.margin = "0px -250px 0px 0px"
      bd.style.right = "0px"
      l2.style.opacity = "1"
      l1.style.transform = "rotate(0deg) translate(0px, 0px)"
      l3.style.transform = "rotate(0deg) translate(0px, 0px)"
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

  render() {
    return(
      <Layout>

      <Background>
      </Background>
        <Polish  onMouseOver={ this.wooble } onMouseOut={ this.woobleOut }>PL</Polish>
        <Menu onClick={ this.toggleMenu } id="Menu" >
          <Line id="l1"/>
          <Line id="l2"/>
          <Line id="l3"/>
        </Menu>
        <MenuFull id="MenuFull">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Job</li>
            <li>How</li>
            <li>Contact</li>
          </ul>
        </MenuFull>
        <Logo src={logo} alt="Logo" />
        <VerticalLine />
        <VerticalLine2 />
        <Scroll src={scroll} alt="arrow to scroll down"/>
        <Social>
          <div>
            <img src={social1} className="socialWooble" alt="twitter" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut } />
            <img src={social2} className="socialWooble" alt="LinkedIn" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut } />
            <img src={social3} className="socialWooble" alt="Instagram" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut } />
            <img src={social4} className="socialWooble" alt="Github" onMouseOver={ this.wooble } onMouseOut={ this.woobleOut } />
          </div>
        </Social>
  
    </Layout>
    )
  }

}


export default Home;
