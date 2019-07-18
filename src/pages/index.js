import React, { Component }  from "react";
import  {ThemeProvider} from 'styled-components';
import {theme} from '../assets/theme';

import Home from './Home';
import About from './about';
import Last from './Last';

import JumpToTopic from '../assets/JumpToTop.png';
import JumpToTop from '../components/JumpToTop/JumpToTop';



class IndexPage extends Component {

  toggleJumpToTop = () => {
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){ 
      document.querySelector("#JumpToTop").style.opacity = "1"; 
  
    } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100){
      document.querySelector("#JumpToTop").style.opacity = "0";
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.toggleJumpToTop);


    const script = document.createElement("script");
  
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
  
    document.body.appendChild(script);
  }


  componentWillUnmount() {
    
    window.removeEventListener('scroll', this.toggleJumpToTop);
  }
    render() {
      return(
        <ThemeProvider theme={theme}>
          <>
              <a href="#sectionHome">
                <JumpToTop id="JumpToTop" src={JumpToTopic}/>
              </a>
              <Home />
              <About />
              <Last />
          </>
        </ThemeProvider>
    );
  }
};

export default IndexPage;


