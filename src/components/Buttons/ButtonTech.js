import styled from 'styled-components';
import React from "react"


const ButtonWrapper = styled.div`
    @-webkit-keyframes ani {
    from {
        -webkit-mask-position: 0 0;
        mask-position: 0 0;
    }
    to {
        -webkit-mask-position: 100% 0;
        mask-position: 100% 0;
    }
    }
    @keyframes ani {
    from {
        -webkit-mask-position: 0 0;
        mask-position: 0 0;
    }
    to {
        -webkit-mask-position: 100% 0;
        mask-position: 100% 0;
    }
    }
    @-webkit-keyframes ani2 {
    from {
        -webkit-mask-position: 100% 0;
        mask-position: 100% 0;
    }
    to {
        -webkit-mask-position: 0 0;
        mask-position: 0 0;
    }
    }
    @keyframes ani2 {
    from {
        -webkit-mask-position: 100% 0;
        mask-position: 100% 0;
    }
    to {
        -webkit-mask-position: 0 0;
        mask-position: 0 0;
    }
    }
    position: absolute;
    left: 0;
    cursor: pointer;
    bottom: 0;
    width: 200px;
    height: 46px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    overflow: hidden;
    border: 2px solid ${({theme}) => theme.colors.white};;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    transition: 0.5s;
    letter-spacing: 1px;
    button{
        width: 101%;
        height: 100%;
        font-family: 'Roboto', sans-serif;
        font-size: 1.3rem;
        font-weight: 300;
        letter-spacing: 1px;
        background: ${({theme}) => theme.colors.red};
        -webkit-mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png");
        mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png");
        -webkit-mask-size: 3000% 100%;
        mask-size: 3000% 100%;
        border: none;
        color: ${({theme}) => theme.colors.white};
        cursor: pointer;
        -webkit-animation: ani2 0.7s steps(29) forwards;
        animation: ani2 0.7s steps(29) forwards;
        :hover{
            -webkit-animation: ani 0.7s steps(29) forwards;
            animation: ani 0.7s steps(29) forwards;
        }
    }
`
const Mask = styled.span`
    position: absolute;
    color: ${({theme}) => theme.colors.gray};
    background: ${({theme}) => theme.colors.white};
    background-repeat: repeat;
    background-size: 100%;
    text-align: center;
    width: 101%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    position: absolute;
    font-size: 1.3rem;
    margin-top: 0;
    padding: 9px 0;
    overflow: hidden;
    letter-spacing: 1px;
`



const ButtonTech = () => {

    

    return (
       <ButtonWrapper>
           <Mask>Go Back</Mask>
           <button type="button" name="Hover">Go Back</button>
       </ButtonWrapper>
    )
}

export default ButtonTech;

