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
import iconTick from '../../assets/icons/tick.png'
import iconLive from '../../assets/icons/live.png'
import iconGithub from '../../assets/icons/github.png'
import iconBootstrap from '../../assets/icons/bootstrap.png'
import iconHtml from '../../assets/icons/html5.png'
import iconCss from '../../assets/icons/css3.png'
import iconGimp from '../../assets/icons/gimp.png'
import iconGulp from '../../assets/icons/gulp.png'
import iconJS from '../../assets/icons/javascript.png'
import iconParcel from '../../assets/icons/parcel.png'
import iconSass from '../../assets/icons/sass.png'
import iconStyled from '../../assets/icons/styled.png'
import iconGatsby from '../../assets/icons/gatsby.png'
import iconReact from '../../assets/icons/react.png'
import iconXD from '../../assets/icons/xd.png'
import iconFigma from '../../assets/icons/figma.png'
import iconBEM from '../../assets/icons/BEM.png'

const Icon = styled.img`
  width: ${({width}) => width};
  margin: ${({margin}) => margin};
  margin-top: ${({marginT}) => marginT};
  transform: translateY(1px);
`


class Job extends Component{

    render() {
      return(
       <LastWrapper>
          <H1 relative>JOB</H1>
          <TitleLine noMargin relative/>
          <Jobs>
            <JobWrapper>
              <JobPic src={jobPicture1}/>
              <JobDescription>
                <Icon width='13px' marginT="20px" src={iconTick}/>
                {`   WEBSITE \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DEVELOPED \n`}
                <Icon width='14px' src={iconLive}/>
                {`   LIVE \n`}
                <Icon width='13px' src={iconGithub}/>
                {`   GITHUB \n`}
                <Icon width='33px' margin="3px" marginT="20px" src={iconHtml}/>
                <Icon width='33px' margin="3px" src={iconCss}/>
                <Icon width='38px' margin="3px" src={iconJS}/>
                <Icon width='25px' margin="3px" src={iconGulp}/>
                <Icon width='40px' margin="3px" src={iconSass}/>
                <Icon width='40px' margin="3px" src={iconBootstrap}/>
              </JobDescription>
            </JobWrapper>
            <JobWrapper>
              <JobPic src={jobPicture2}/>
              <JobDescription>
                <Icon width='13px' marginT="0px" src={iconTick}/>
                {`   WEBSITE \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DEVELOPED \n`}
                <Icon width='14px' src={iconLive}/>
                {`   LIVE \n`}
                <Icon width='13px' src={iconGithub}/>
                {`   GITHUB \n`}
                <Icon width='30px' margin="3px" marginT="15px" src={iconHtml}/>
                <Icon width='30px' margin="3px" src={iconCss}/>
                <Icon width='34px' margin="3px" src={iconJS}/>
                <Icon width='30px' margin="3px" src={iconGatsby}/>
                <Icon width='33px' margin="3px" src={iconReact}/>
                <Icon width='29px' margin="3px" src={iconStyled}/> 
                <Icon width='30px' margin="3px" src={iconGimp}/> 
                <Icon width='30px' margin="3px" src={iconXD}/> 
              </JobDescription>
            </JobWrapper>
            <JobWrapper>
              <JobPic src={jobPicture3}/>
              <JobDescription>
                <Icon width='13px' marginT="10px" src={iconTick}/>
                {`   WEBSITE \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DEVELOPED \n`}
                <Icon width='14px' src={iconLive}/>
                {`   LIVE \n`}
                <Icon width='13px' src={iconGithub}/>
                {`   GITHUB \n`}
                <Icon width='33px' margin="3px" marginT="20px" src={iconHtml}/>
                <Icon width='33px' margin="3px" src={iconCss}/>
                <Icon width='38px' margin="3px" src={iconJS}/>
                <Icon width='43px' margin="3px" src={iconParcel}/>
                <Icon width='35px' margin="3px" src={iconSass}/>
                <Icon width='24px' margin="3px" src={iconFigma}/>
                <Icon width='45px' margin="3px" src={iconBEM}/>
              </JobDescription>
            </JobWrapper>

            <JobWrapper>
              <JobPicSmall src={jobPicture4}/>
              <JobDescriptionSmall>
                <Icon width='13px' marginT="15px" src={iconTick}/>
                {`   TODO LIST \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DEVELOPED \n`}
                <Icon width='14px' src={iconLive}/>
                {`   LIVE \n`}
                <Icon width='13px' src={iconGithub}/>
                {`   GITHUB \n`}
                <Icon width='20px' margin="3px" marginT="20px" src={iconHtml}/>
                <Icon width='20px' margin="3px" src={iconCss}/>
                <Icon width='23px' margin="3px" src={iconJS}/>
                <Icon width='25px' margin="3px" src={iconReact}/>
              </JobDescriptionSmall>
            </JobWrapper>
            <JobWrapper>
            <JobPicSmall src={jobPicture5}/>
              <JobDescriptionSmall>
                <Icon width='13px' marginT="15px" src={iconTick}/>
                {`   TIC TAC TOE \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DEVELOPED \n`}
                <Icon width='14px' src={iconLive}/>
                {`   LIVE \n`}
                <Icon width='13px' src={iconGithub}/>
                {`   GITHUB \n`}
                <Icon width='20px' margin="3px" marginT="20px" src={iconHtml}/>
                <Icon width='20px' margin="3px" src={iconCss}/>
                <Icon width='23px' margin="3px" src={iconJS}/>
              </JobDescriptionSmall>
            </JobWrapper>
            <JobWrapper>
            <JobPicSmall src={jobPicture6}/>
            <JobDescriptionSmall>
                <Icon width='13px' marginT="15px" src={iconTick}/>
                {`   CALCULATOR \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DEVELOPED \n`}
                <Icon width='14px' src={iconLive}/>
                {`   LIVE \n`}
                <Icon width='13px' src={iconGithub}/>
                {`   GITHUB \n`}
                <Icon width='20px' margin="3px" marginT="20px" src={iconHtml}/>
                <Icon width='20px' margin="3px" src={iconCss}/>
                <Icon width='23px' margin="3px" src={iconJS}/>
                <Icon width='25px' margin="3px" src={iconReact}/>
              </JobDescriptionSmall>
            </JobWrapper>
            <JobWrapper>
            <JobPicSmall src={jobPicture7}/>
            <JobDescriptionSmall>
                <Icon width='13px' marginT="15px" src={iconTick}/>
                {`   TIP CALC \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DEVELOPED \n`}
                <Icon width='14px' src={iconLive}/>
                {`   LIVE \n`}
                <Icon width='13px' src={iconGithub}/>
                {`   GITHUB \n`}
                <Icon width='20px' margin="3px" marginT="20px" src={iconHtml}/>
                <Icon width='20px' margin="3px" src={iconCss}/>
                <Icon width='23px' margin="3px" src={iconJS}/>
              </JobDescriptionSmall>
            </JobWrapper>
          </Jobs>
          
       </LastWrapper>
      )
    }
  
  }
  
  
  export default Job;