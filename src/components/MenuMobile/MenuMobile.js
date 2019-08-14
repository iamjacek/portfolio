import React from "react"
import styled from "styled-components"
import Icon from '../Icon/Icon'

import icon1 from "../../assets/tw.png"
import icon2 from "../../assets/in.png"
import icon3 from "../../assets/insta.png"
import icon4 from "../../assets/git.png"


const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-bottom: 12%;
    background: ${({theme}) => theme.colors.gray};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 98;
    transform: translateX(${({isOpen}) => isOpen ? '0' : '-100%'});
    transition: transform .2s ease-out;
`

const LinkMenu = styled.a`
    color: ${({theme}) => theme.colors.white};
    font-family: 'Rubik', sans-serif;
    font-size: 3.5vh;
    line-height: 2vh;
    padding: 20px;
    opacity: ${({isOpen}) => isOpen ? '1' : '0'};
    transition: opacity .2s .2s ease-out;
`

const SocialWrapper = styled.div`
    height: 12%;
    width: 100%;
    background: #5c5b5b;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transform: translateY(${({isOpen}) => isOpen ? '0' : '100%'});
    transition: transform .2s .25s ease-out;
`

const menuItems = [
    'Home',
    'About',
    'Job',
    'How',
    'Contact'
]

const MenuMobile = ({isOpen}) => (
    <MenuWrapper isOpen={isOpen} >
       {menuItems.map( item => (
           <LinkMenu isOpen={isOpen} key={item}>{item}</LinkMenu>
       ))}
       <SocialWrapper isOpen={isOpen} >
            <Icon src={icon1}/>
            <Icon src={icon2}/>
            <Icon src={icon3}/>
            <Icon src={icon4}/>
       </SocialWrapper>
    </MenuWrapper>
)

export default MenuMobile;