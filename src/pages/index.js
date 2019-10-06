import React, { Component }  from "react";


import Home from "../components/Sections/Home"
import About from "../components/Sections/About"
import Long from "../components/Sections/Long"





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
            <Long />
          </>
    );
  }
};

export default IndexPage;


