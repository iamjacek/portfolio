import React, { Component }  from "react";



import Home from './Home';
import About from './about';
import Last from './Last';



class IndexPage extends Component {
  componentDidMount () {
    const script = document.createElement("script");
  
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
  
    document.body.appendChild(script);
  }
    render() {
      return(
      <>
          <Home />
          <About />
          <Last />
      </>
    );
  }
};

export default IndexPage;


