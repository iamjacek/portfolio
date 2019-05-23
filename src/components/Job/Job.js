import styled from 'styled-components';
import React, {Component} from 'react';
import LastWrapper from '../Wrapper/LastWrapper'
import H1 from '../H1/H1'
import TitleLine from '../VerticalLine/TitleLine'
import JobWrapper from './JobWrapper'
import Jobs from './Jobs'
import JobPic from './JobPic'
import JobPicSmall from './JobPicSmall'
import JobDescription from './JobDescription'
import JobDescriptionSmall from './JobDescriptionSmall'
import jobPicture1 from '../../assets/2theweb.png'
import jobPicture2 from '../../assets/portfolio_dark.png'
import jobPicture3 from '../../assets/gymsite.png'
import jobPicture4 from '../../assets/todo.png'
import jobPicture5 from '../../assets/tictactoe.png'
import jobPicture6 from '../../assets/calc.png'
import jobPicture7 from '../../assets/tipcalc.png'



class Job extends Component{

    render() {
      return(
       <LastWrapper>
          <H1>JOB</H1>
          <TitleLine noMargin/>
          <Jobs>
            <JobWrapper>
              <JobPic src={jobPicture1}/>
              <JobDescription>
{`WEBSITE
DESIGN
DEVELOPMENT
LIVE
GITHUB`}
              </JobDescription>
            </JobWrapper>
            <JobWrapper>
              <JobPic src={jobPicture2}/>
              <JobDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque fringilla enim, ut accumsan sem faucibus vel. Aliquam ac velit odio. Donec luctus lacus id blandit rutrum. Etiam malesuada lectus a consectetur dapibus. 
              </JobDescription>
            </JobWrapper>
            <JobWrapper>
              <JobPic src={jobPicture3}/>
              <JobDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque fringilla enim, ut accumsan sem faucibus vel. Aliquam ac velit odio. Donec luctus lacus id blandit rutrum. Etiam malesuada lectus a consectetur dapibus. 
              </JobDescription>
            </JobWrapper>

            <JobWrapper>
              <JobPicSmall src={jobPicture4}/>
              <JobDescriptionSmall>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque fringilla enim, ut accumsan sem faucibus vel. Aliquam ac velit odio. Donec luctus lacus id blandit rutrum. Etiam malesuada lectus a consectetur dapibus. 
              </JobDescriptionSmall>
            </JobWrapper>
            <JobWrapper>
            <JobPicSmall src={jobPicture5}/>
              <JobDescriptionSmall>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque fringilla enim, ut accumsan sem faucibus vel. Aliquam ac velit odio. Donec luctus lacus id blandit rutrum. Etiam malesuada lectus a consectetur dapibus. 
              </JobDescriptionSmall>
            </JobWrapper>
            <JobWrapper>
            <JobPicSmall src={jobPicture6}/>
              <JobDescriptionSmall>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque fringilla enim, ut accumsan sem faucibus vel. Aliquam ac velit odio. Donec luctus lacus id blandit rutrum. Etiam malesuada lectus a consectetur dapibus. 
              </JobDescriptionSmall>
            </JobWrapper>
            <JobWrapper>
            <JobPicSmall src={jobPicture7}/>
              <JobDescriptionSmall>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque fringilla enim, ut accumsan sem faucibus vel. Aliquam ac velit odio. Donec luctus lacus id blandit rutrum. Etiam malesuada lectus a consectetur dapibus. 
              </JobDescriptionSmall>
            </JobWrapper>
          </Jobs>
          
       </LastWrapper>
      )
    }
  
  }
  
  
  export default Job;