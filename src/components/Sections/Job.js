import React, {Component} from 'react';
import styled from "styled-components"

import pic1 from '../../assets/2theweb.png'

//icons
import iconHtml from '../../assets/icons/html5-dark.png'
import iconCss from '../../assets/icons/css3-dark.png'
import iconJS from '../../assets/icons/javascript-dark.png'
import iconSass from '../../assets/icons/sass-dark.png'
import iconGulp from '../../assets/icons/gulp-dark.png'
import iconBootstrap from '../../assets/icons/bootstrap-dark.png'

const Wrapper = styled.div`
    position: relative;
    width: 100vw;
    max-width: 100%;  
    min-height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid yellow;
`

const IconWrapper = styled.div`
    height: 50px;
    width: 100%;
    transform: translateY(-330px);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    flex-flow: wrap;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    opacity: 0;

`

const Icon = styled.img`
    width: ${({width}) => width};
    margin: ${({margin}) => margin};
    margin-top: ${({marginT}) => marginT};
    margin-right: 12px;
    margin-left: 12px;
`

const Mask = styled.div`
    width: 160px;
    height: 320px;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    opacity: 0;
    background-color: ${({theme}) => theme.colors.white}; 
    transition: all 0.4s ease-in-out;
`

const Info = styled.a`
    cursor: pointer;
    margin: 5px;
    display: inline-block;
    text-decoration: none;
    padding: 4px 8px;
    font-size: .8rem;
    background: ${({theme}) => theme.colors.gray};
    color: #fff;
    text-transform: uppercase;
    opacity: 0;
	transition: all 0.2s ease-in-out;
`

const Picture = styled.img`
    width: 160px;
    height: 320px;
    display: block;
    position: relative;
    transition: all 0.2s linear;
    object-position: center;
    object-fit: cover;
` 

const View = styled.div`
    width: 160px;
    height: 320px;
    margin: 10px;
    float: left;
    border: 5px solid ${({theme}) => theme.colors.white};
    overflow: hidden;
    position: relative;
    text-align: center;
    box-shadow: 1px 1px 2px #e6e6e6;
    cursor: default;
    :hover ${Mask}{
        opacity: .85;
    }
   
   
    h2 {
        text-transform: uppercase;
        color: #fff;
        text-align: center;
        position: relative;
        font-size: 17px;
        padding: 10px;
        background: ${({theme}) => theme.colors.gray};
        margin: 20px 0 0 0;
        opacity: 0;
        transform: translateY(-400px);
        transition: all 0.2s ease-in-out;
    }
    p {
        font-family: Georgia, serif;
        font-weight: 500;
        font-size: 12px;
        position: relative;
        color: ${({theme}) => theme.colors.gray};
        padding: 10px 20px;
        text-align: center;
        opacity: 0;
	    transition: all 0.2s linear;
        
    }
    :hover ${Picture}{
        transform: scale(1.15); 
    }
    :hover h2 {
        opacity: 1;
        transform: translateY(-320px);
    }
    :hover p {
        opacity: 1;
        transform: translateY(-310px);
        transition-delay: .1s;
    }
    :hover ${Info} {
        
        opacity: 1;
        transform: translateY(-230px);
        transition-delay: .2s;
    }
    :hover ${IconWrapper} {
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
        transition-delay: .3s;
    }
`




class Job extends Component {

    constructor(props){
        super(props);
       
    }


  render(){
    return(
        <Wrapper>
                <StyledWrapper>
                    <View>
                        <Picture src={pic1} />
                        <Mask />
                        <h2>2theWeb</h2>
                        <p>Beautiful design and simplicity always get you back best results.</p>
                            <Info href="#">PAGE</Info><Info href="#">CODE</Info>
                            <IconWrapper>
                                <Icon width='14px' margin="3px" src={iconHtml}/>
                                <Icon width='15px' margin="3px" src={iconCss}/>
                                <Icon width='17px' margin="3px" src={iconJS}/>
                                <Icon width='9px' margin="3px" marginT="0px" src={iconGulp}/>
                                <Icon width='17px' margin="3px" src={iconSass}/>
                                <Icon width='17px' margin="3px" src={iconBootstrap}/>
                            </IconWrapper>
                            
                    </View>
                </StyledWrapper>
        </Wrapper>
    )
  }
        
}

export default Job;