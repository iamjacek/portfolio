import styled from 'styled-components';
import React, {Component} from 'react';
import LastWrapper from '../Wrapper/LastWrapper'
import H1 from '../About/H1/H1'
import TitleLine from '../About/TitleLine/TitleLine'
import JobWrapper from './JobWrapper'
import JobDouble from './JobDouble'
import Jobs from './Jobs'
import JobPic from './JobPic' 
import JobPicSmall from './JobPicSmall'
import JobDescription from './JobDescription'
import JobDescriptionDark from './JobDescriptionDark'
import JobDescriptionSmall from './JobDescriptionSmall'
import JobDescriptionSmallDark from './JobDescriptionSmallDark'
import jobPicture1 from '../../assets/2theweb.png'
import jobPicture2 from '../../assets/portfolio_dark.png'
import jobPicture3 from '../../assets/gymsite.png'
import jobPicture4 from '../../assets/todo.png'
import jobPicture5 from '../../assets/tictactoe.png'
import jobPicture6 from '../../assets/calc.png'
import jobPicture7 from '../../assets/tipcalc.png'
import iconTick from '../../assets/icons/tick.png'
import iconTickDark from '../../assets/icons/tick-dark.png'
import iconLive from '../../assets/icons/live.png'
import iconLiveDark from '../../assets/icons/live-dark.png'
import iconGithub from '../../assets/icons/github.png'
import iconGithubDark from '../../assets/icons/github-dark.png'
import iconBootstrap from '../../assets/icons/bootstrap.png'
import iconBootstrapDark from '../../assets/icons/bootstrap-dark.png'
import iconHtml from '../../assets/icons/html5.png'
import iconHtmlDark from '../../assets/icons/html5-dark.png'
import iconCss from '../../assets/icons/css3.png'
import iconCssDark from '../../assets/icons/css3-dark.png'
import iconGimp from '../../assets/icons/gimp.png'
import iconGulp from '../../assets/icons/gulp.png'
import iconGulpDark from '../../assets/icons/gulp-dark.png'
import iconJS from '../../assets/icons/javascript.png'
import iconJSDark from '../../assets/icons/javascript-dark.png'
import iconParcel from '../../assets/icons/parcel.png'
import iconParcelDark from '../../assets/icons/parcel-dark.png'
import iconSass from '../../assets/icons/sass.png'
import iconSassDark from '../../assets/icons/sass-dark.png'
import iconStyled from '../../assets/icons/styled.png'
import iconStyledDark from '../../assets/icons/styled-dark.png'
import iconGatsby from '../../assets/icons/gatsby.png'
import iconGatsbyDark from '../../assets/icons/gatsby-dark.png'
import iconReact from '../../assets/icons/react.png'
import iconReactDark from '../../assets/icons/react-dark.png'
import iconXD from '../../assets/icons/xd.png'
import iconXDDark from '../../assets/icons/xd-dark.png'
import icon4kdark from '../../assets/icons/4k.png'
import icon4k from '../../assets/icons/4kw.png'
import iconFigma from '../../assets/icons/figma.png'
import iconFigmaDark from '../../assets/icons/figma-dark.png'
import iconBEM from '../../assets/icons/BEM.png'
import iconBEMDark from '../../assets/icons/BEM-dark.png'


const Icon = styled.img`
  width: ${({width}) => width};
  margin: ${({margin}) => margin};
  margin-top: ${({marginT}) => marginT};
  transform: translateY(1px);
`


class Job extends Component{

  toogleDesc = (e) => {
    if ( window.innerWidth > 1367 ) {
      e.target.style.opacity = "1";
      e.target.style.transition = "all 200ms ease-in";
    }
  }

  //making sure all descriptions are off after mouse is out and even the curent description so we use  toggle on current element because current element is not in the array
  removeToggleDescriptionClass = (e) => {  
    e.target.style.opacity = "0";
  }

    render() {
      return(
       <LastWrapper id="sectionJob">
          <H1 relative>JOB</H1>
          <TitleLine noMargin relative/>
          <Jobs>
            <JobWrapper>
              <a href="http://www.2theweb.co.uk/" target="_blank" rel="noopener noreferrer">
                <JobPic src={jobPicture1}  />
              </a>
              <JobDescription>
                <Icon width='13px' marginT="10px" src={iconTick}/>
                {`   WEBSITE \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DEVELOPED \n`}
                <a
                  href="http://www.2theweb.co.uk/" target="_blank" rel="noopener noreferrer"
                >
                  <Icon width='14px' src={iconLive}/>
                  {`   LIVE \n`}
                </a>
                <a
                  href="https://github.com/iamjacek/2thewebsite" target="_blank" rel="noopener noreferrer"
                >
                <Icon width='13px' src={iconGithub}/>
                {`   GITHUB \n`}
                </a>
                <Icon width='33px' margin="3px" marginT="20px" src={iconHtml}/>
                <Icon width='33px' margin="3px" src={iconCss}/>
                <Icon width='38px' margin="3px" src={iconJS}/>
                <Icon width='25px' margin="3px" src={iconGulp}/>
                <Icon width='40px' margin="3px" src={iconSass}/>
                <Icon width='40px' margin="3px" src={iconBootstrap}/>
              </JobDescription>
              
              <JobDescriptionDark onMouseOver={this.toogleDesc} onMouseLeave={this.removeToggleDescriptionClass}>
                <Icon width='13px' marginT="0px" src={iconTickDark}/>
                {`   WEBSITE \n`}
                <Icon width='13px' src={iconTickDark}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTickDark}/>
                {`   DEVELOPED \n`}
                <a
                  href="http://www.2theweb.co.uk/" target="_blank" rel="noopener noreferrer"
                >
                <Icon width='14px' src={iconLiveDark}/>
                {`   LIVE \n`}
                </a>
                <a
                  href="https://github.com/iamjacek/2thewebsite" target="_blank" rel="noopener noreferrer"
                >
                <Icon width='13px' src={iconGithubDark}/>
                {`   GITHUB \n`}
                </a>
                <Icon width='33px' margin="3px" marginT="70px" src={iconHtmlDark}/>
                <Icon width='33px' margin="3px" src={iconCssDark}/>
                <Icon width='38px' margin="3px" src={iconJSDark}/>
                <Icon width='25px' margin="3px" src={iconGulpDark}/>
                <Icon width='40px' margin="3px" src={iconSassDark}/>
                <Icon width='40px' margin="3px" src={iconBootstrapDark}/>
              </JobDescriptionDark>
            </JobWrapper>
            <JobWrapper>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <JobPic src={jobPicture2} />
              </a>
              <JobDescription>
                <Icon width='13px' marginT="0px" src={iconTick}/>
                {`   WEBSITE \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DEVELOPED \n`}
                <a
                  href="#" target="_blank" rel="noopener noreferrer"
                >
                <Icon width='14px' src={iconLive}/>
                {`   LIVE \n`}
                </a>
                <a
                  href="https://github.com/iamjacek/Portfolio" target="_blank" rel="noopener noreferrer"
                >
                <Icon width='13px' src={iconGithub}/>
                {`   GITHUB \n`}
                </a>
                <Icon width='30px' margin="3px" marginT="15px" src={iconHtml}/>
                <Icon width='30px' margin="3px" src={iconCss}/>
                <Icon width='34px' margin="3px" src={iconJS}/>
                <Icon width='30px' margin="3px" src={iconGatsby}/>
                <Icon width='33px' margin="3px" src={iconReact}/>
                <Icon width='29px' margin="3px" src={iconStyled}/> 
                <Icon width='30px' margin="3px" src={iconGimp}/> 
                <Icon width='30px' margin="3px" src={iconXD}/> 
                <Icon width='38px' margin="3px" src={icon4k}/>
              </JobDescription>
              <JobDescriptionDark onMouseOver={this.toogleDesc} onMouseLeave={this.removeToggleDescriptionClass}>
                <Icon width='13px' marginT="0px" src={iconTickDark}/>
                {`   WEBSITE \n`}
                <Icon width='13px' src={iconTickDark}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTickDark}/>
                {`   DEVELOPED \n`}
                <a
                  href="#" target="_blank" rel="noopener noreferrer"
                >
                <Icon width='14px' src={iconLiveDark}/>
                {`   LIVE \n`}
                </a>
                <a
                  href="https://github.com/iamjacek/Portfolio" target="_blank" rel="noopener noreferrer"
                >
                <Icon width='13px' src={iconGithubDark}/>
                {`   GITHUB \n`}
                </a>
                <Icon width='30px' margin="3px" marginT="55px" src={iconHtmlDark}/>
                <Icon width='30px' margin="3px" src={iconCssDark}/>
                <Icon width='34px' margin="3px" src={iconJSDark}/>
                <Icon width='30px' margin="3px" src={iconGatsbyDark}/>
                <Icon width='33px' margin="3px" src={iconReactDark}/>
                <Icon width='29px' margin="3px" src={iconStyledDark}/> 
                <Icon width='30px' margin="3px" src={iconGimp}/> 
                <Icon width='30px' margin="3px" src={iconXDDark}/> 
                <Icon width='38px' margin="3px" src={icon4kdark}/>
              </JobDescriptionDark>
            </JobWrapper>
            <JobWrapper>
              <a href="http://gymsite.2theweb.co.uk/" target="_blank" rel="noopener noreferrer">
                <JobPic src={jobPicture3} />
              </a>
              <JobDescription>
                <Icon width='13px' marginT="10px" src={iconTick}/>
                {`   WEBSITE \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DEVELOPED \n`}
                <a href="http://gymsite.2theweb.co.uk/" target="_blank" rel="noopener noreferrer">
                <Icon width='14px' src={iconLive}/>
                {`   LIVE \n`}
                </a>
                <a href="https://github.com/iamjacek/gymsite" target="_blank" rel="noopener noreferrer">
                <Icon width='13px' src={iconGithub}/>
                {`   GITHUB \n`}
                </a>
                <Icon width='33px' margin="3px" marginT="20px" src={iconHtml}/>
                <Icon width='33px' margin="3px" src={iconCss}/>
                <Icon width='38px' margin="3px" src={iconJS}/>
                <Icon width='43px' margin="3px" src={iconParcel}/>
                <Icon width='35px' margin="3px" src={iconSass}/>
                <Icon width='24px' margin="3px" src={iconFigma}/>
                <Icon width='45px' margin="3px" src={iconBEM}/>
              </JobDescription>
              <JobDescriptionDark onMouseOver={this.toogleDesc} onMouseLeave={this.removeToggleDescriptionClass}>
                <Icon width='13px' marginT="10px" src={iconTickDark}/>
                {`   WEBSITE \n`}
                <Icon width='13px' src={iconTickDark}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTickDark}/>
                {`   DEVELOPED \n`}
                <a href="http://gymsite.2theweb.co.uk/" target="_blank" rel="noopener noreferrer">
                <Icon width='14px' src={iconLiveDark}/>
                {`   LIVE \n`}
                </a>
                <a href="https://github.com/iamjacek/gymsite" target="_blank" rel="noopener noreferrer">
                <Icon width='13px' src={iconGithubDark}/>
                {`   GITHUB \n`}
                </a>
                <Icon width='33px' margin="3px" marginT="50px" src={iconHtmlDark}/>
                <Icon width='33px' margin="3px" src={iconCssDark}/>
                <Icon width='38px' margin="3px" src={iconJSDark}/>
                <Icon width='43px' margin="3px" src={iconParcelDark}/>
                <Icon width='35px' margin="3px" src={iconSassDark}/>
                <Icon width='24px' margin="3px" src={iconFigmaDark}/>
                <Icon width='45px' margin="3px" src={iconBEMDark}/>
              </JobDescriptionDark>
            </JobWrapper>

            <JobDouble>
            <JobWrapper>
              <a href="http://todo.2theweb.co.uk/" target="_blank" rel="noopener noreferrer">
                <JobPicSmall src={jobPicture4} />
              </a>
              <JobDescriptionSmall>
                <Icon width='13px' marginT="15px" src={iconTick}/>
                {`   TODO LIST \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DEVELOPED \n`}
                <a href="http://todo.2theweb.co.uk/" target="_blank" rel="noopener noreferrer">
                <Icon width='14px' src={iconLive}/>
                {`   LIVE \n`}
                </a>
                <a href="https://github.com/iamjacek/todo-list" target="_blank" rel="noopener noreferrer">
                
                <Icon width='13px' src={iconGithub}/>
                {`   GITHUB \n`}
                </a>
                <Icon width='20px' margin="3px" marginT="20px" src={iconHtml}/>
                <Icon width='20px' margin="3px" src={iconCss}/>
                <Icon width='23px' margin="3px" src={iconJS}/>
                <Icon width='25px' margin="3px" src={iconReact}/>
              </JobDescriptionSmall>
              <JobDescriptionSmallDark onMouseOver={this.toogleDesc} onMouseLeave={this.removeToggleDescriptionClass}>
                <Icon width='13px' marginT="15px" src={iconTickDark}/>
                {`   TODO LIST \n`}
                <Icon width='13px' src={iconTickDark}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTickDark}/>
                {`   DEVELOPED \n`}
                <a href="http://todo.2theweb.co.uk/" target="_blank" rel="noopener noreferrer">
                <Icon width='14px' src={iconLiveDark}/>
                {`   LIVE \n`}
                </a>
                <a href="https://github.com/iamjacek/todo-list" target="_blank" rel="noopener noreferrer">
                <Icon width='13px' src={iconGithubDark}/>
                {`   GITHUB \n`}
                </a>
                <Icon width='20px' margin="3px" marginT="20px" src={iconHtmlDark}/>
                <Icon width='20px' margin="3px" src={iconCssDark}/>
                <Icon width='23px' margin="3px" src={iconJSDark}/>
                <Icon width='25px' margin="3px" src={iconReactDark}/>
              </JobDescriptionSmallDark>
            </JobWrapper>
            <JobWrapper>
            <a href="http://tic-tac-toe.2theweb.co.uk/" target="_blank" rel="noopener noreferrer">
              <JobPicSmall src={jobPicture5} />
            </a>
              <JobDescriptionSmall>
                <Icon width='13px' marginT="15px" src={iconTick}/>
                {`   TIC TAC TOE \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DEVELOPED \n`}
                <a href="http://tic-tac-toe.2theweb.co.uk/" target="_blank" rel="noopener noreferrer">
                  <Icon width='14px' src={iconLive}/>
                  {`   LIVE \n`}
                </a>
                <a href="https://github.com/iamjacek/tic-tac-toe" target="_blank" rel="noopener noreferrer">
                  <Icon width='13px' src={iconGithub}/>
                  {`   GITHUB \n`}
                </a>
                <Icon width='20px' margin="3px" marginT="20px" src={iconHtml}/>
                <Icon width='20px' margin="3px" src={iconCss}/>
                <Icon width='23px' margin="3px" src={iconJS}/>
              </JobDescriptionSmall>
              <JobDescriptionSmallDark onMouseOver={this.toogleDesc}  onMouseLeave={this.removeToggleDescriptionClass}>
                <Icon width='13px' marginT="15px" src={iconTickDark}/>
                {`   TIC TAC TOE \n`}
                <Icon width='13px' src={iconTickDark}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTickDark}/>
                {`   DEVELOPED \n`}
                <a href="http://tic-tac-toe.2theweb.co.uk/" target="_blank" rel="noopener noreferrer">
                <Icon width='14px' src={iconLiveDark}/>
                {`   LIVE \n`}
                </a>
                <a href="https://github.com/iamjacek/tic-tac-toe" target="_blank" rel="noopener noreferrer">
                <Icon width='13px' src={iconGithubDark}/>
                {`   GITHUB \n`}
                </a>
                <Icon width='20px' margin="3px" marginT="20px" src={iconHtmlDark}/>
                <Icon width='20px' margin="3px" src={iconCssDark}/>
                <Icon width='23px' margin="3px" src={iconJSDark}/>
              </JobDescriptionSmallDark>
            </JobWrapper>
            </JobDouble>

            <JobDouble>
            <JobWrapper> 
            <a href="http://calculator.2theweb.co.uk" target="_blank" rel="noopener noreferrer">
              <JobPicSmall src={jobPicture6} />
            </a>
              <JobDescriptionSmall>
                <Icon width='13px' marginT="15px" src={iconTick}/>
                {`   CALCULATOR \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DEVELOPED \n`}
                <a href="http://calculator.2theweb.co.uk" target="_blank" rel="noopener noreferrer">
                <Icon width='14px' src={iconLive}/>
                {`   LIVE \n`}
                </a>
                <a href="https://github.com/iamjacek/simple-calc-react" target="_blank" rel="noopener noreferrer">
                
                <Icon width='13px' src={iconGithub}/>
                {`   GITHUB \n`}
                </a>
                <Icon width='20px' margin="3px" marginT="20px" src={iconHtml}/>
                <Icon width='20px' margin="3px" src={iconCss}/>
                <Icon width='23px' margin="3px" src={iconJS}/>
                <Icon width='25px' margin="3px" src={iconReact}/>
              </JobDescriptionSmall>
              <JobDescriptionSmallDark onMouseOver={this.toogleDesc} onMouseLeave={this.removeToggleDescriptionClass}>
                <Icon width='13px' marginT="15px" src={iconTickDark}/>
                {`   CALC APP \n`}
                <Icon width='13px' src={iconTickDark}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTickDark}/>
                {`   DEVELOPED \n`}
                <a href="http://calculator.2theweb.co.uk" target="_blank" rel="noopener noreferrer">
                <Icon width='14px' src={iconLiveDark}/>
                {`   LIVE \n`}
                </a>
                <a href="https://github.com/iamjacek/simple-calc-react" target="_blank" rel="noopener noreferrer">
                <Icon width='13px' src={iconGithubDark}/>
                {`   GITHUB \n`}
                </a>
                <Icon width='20px' margin="3px" marginT="20px" src={iconHtmlDark}/>
                <Icon width='20px' margin="3px" src={iconCssDark}/>
                <Icon width='23px' margin="3px" src={iconJSDark}/>
                <Icon width='25px' margin="3px" src={iconReactDark}/>
              </JobDescriptionSmallDark>
            </JobWrapper>
            <JobWrapper>
            <a href="http://tip-calculator.2theweb.co.uk/" target="_blank" rel="noopener noreferrer">
              <JobPicSmall src={jobPicture7} />
            </a>
            <JobDescriptionSmall>
                <Icon width='13px' marginT="15px" src={iconTick}/>
                {`   TIP CALC \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTick}/>
                {`   DEVELOPED \n`}
                <a href="http://tip-calculator.2theweb.co.uk/" target="_blank" rel="noopener noreferrer">
                <Icon width='14px' src={iconLive}/>
                {`   LIVE \n`}
                </a>
                <a href="https://github.com/iamjacek/tip-calculator" target="_blank" rel="noopener noreferrer">
                <Icon width='13px' src={iconGithub}/>
                {`   GITHUB \n`}
                </a>
                <Icon width='20px' margin="3px" marginT="20px" src={iconHtml}/>
                <Icon width='20px' margin="3px" src={iconCss}/>
                <Icon width='23px' margin="3px" src={iconJS}/>
              </JobDescriptionSmall>
              <JobDescriptionSmallDark onMouseOver={this.toogleDesc} onMouseLeave={this.removeToggleDescriptionClass}>
                <Icon width='13px' marginT="15px" src={iconTickDark}/>
                {`   TIP CALC \n`}
                <Icon width='13px' src={iconTickDark}/>
                {`   DESIGNED \n`}
                <Icon width='13px' src={iconTickDark}/>
                {`   DEVELOPED \n`}
                <a href="http://tip-calculator.2theweb.co.uk/" target="_blank" rel="noopener noreferrer">
                <Icon width='14px' src={iconLiveDark}/>
                {`   LIVE \n`}
                </a>
                <a href="https://github.com/iamjacek/tip-calculator" target="_blank" rel="noopener noreferrer">
                <Icon width='13px' src={iconGithubDark}/>
                {`   GITHUB \n`}
                </a>
                <Icon width='20px' margin="3px" marginT="20px" src={iconHtmlDark}/>
                <Icon width='20px' margin="3px" src={iconCssDark}/>
                <Icon width='23px' margin="3px" src={iconJSDark}/>
              </JobDescriptionSmallDark>
            </JobWrapper>
            </JobDouble>
          </Jobs>
          
       </LastWrapper>
      )
    }
  
  }
  
  
  export default Job;