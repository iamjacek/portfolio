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



  //toggle menu on tablets and phones
  toggleMenu = () => {
    const a = document.querySelector("#MenuFull")
    const bd = document.querySelector("#StyleWrapper")
    const menu = document.querySelector("#Menu")
    if (a.style.margin === "0px -250px 0px 0px" || a.style.margin === "") {
      a.style.margin = "0px"
      bd.style.right = "250px"
      // menu.style.right = "0px"
    } else if (a.style.margin = "0px"){
      a.style.margin = "0px -250px 0px 0px"
      bd.style.right = "0px"
    }
  }

  handleScroll = () => {
    if ( document.innerWidth > 1367 ) {
      const a = document.querySelector("#MenuFull")
      const bd = document.querySelector("#StyleWrapper")
      a.style.margin = "0px"
      bd.style.right = "0px"
    }
  }

 

  render() {
    return(
      <Layout>
    
      <Background>
      </Background>
        <Polish>PL</Polish>
        <Menu onClick={ this.toggleMenu } id="Menu">
          <Line/>
          <Line/>
          <Line/>
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
            <img src={social1} alt="twitter" />
            <img src={social2} alt="LinkedIn" />
            <img src={social3} alt="Instagram" />
            <img src={social4} alt="Github" />
          </div>
        </Social>
  
    </Layout>
    )
  }

}


export default Home;
