import React, { Component }  from "react";
import LayoutAbout from '../layout/LayoutAbout'
import Background2 from '../components/Background/Background2'
import Button from "../components/404/Button404";
import FourOFour from "../components/404/FourOFour";

class NotFoundPage extends Component {

  goBack = () => {
    window.history.back();
  }


  render() {

    
    return(
      <div>
      <LayoutAbout>
       <Background2 />
   
           <FourOFour>
             <h1>Page is not found!</h1>
             <p>You just hit a route that doesn&#39;t exist... go back or try later.</p>
   
             <Button onClick={ this.goBack }>
               Go back
             </Button>
           </FourOFour>
   
       </LayoutAbout>
       
     </div>
      )
    }
}


export default NotFoundPage
