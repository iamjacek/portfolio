import React, { Component }  from "react";


import Home from "../components/Sections/Home"
import About from "../components/Sections/About"





class IndexPage extends Component {

  componentDidMount () {

  }

  componentWillUnmount() {
  
  }
    render() {
      return(
          <>
            <Home />
            <About />
          </>
    );
  }
};

export default IndexPage;


