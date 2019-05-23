
import React, { Component } from 'react'
import LayoutLast from '../layout/LayoutLast'
import Background3 from '../components/Background/Background3'
import Job from '../components/Job/Job'
import How from '../components/How/How'
import Contact from '../components/Contact/Contact'
import { Link } from "gatsby";




class About extends Component{

    render() {
        return(
          <LayoutLast>
        
           <Background3 />
           
           <Job />
         
           

           <How />
             
           

           <Contact />
            
           
      
        </LayoutLast>
        )
      }
}

export default About;