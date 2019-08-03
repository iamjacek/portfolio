import React from "react"
import styled from "styled-components"



const MenuWrapper = styled.div`
    display: none;
    position: relative;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
   
    z-index: 98;
    ${({theme}) => theme.media.desktop} {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`

const LinkMenu = styled.a`
    color: ${({theme}) => theme.colors.white};
    font-family: 'Rubik', sans-serif;
    font-size: 1.2rem;
    line-height: 2rem;
    padding: 20px;

    &:hover{
        animation: woobleSocial .25s ease-in-out;
        color: ${({theme}) => theme.colors.red};
    }
`



const menuItems = [
    'Home',
    'About',
    'Job',
    'How',
    'Contact'
]

const MenuDesktop = () => (
    <MenuWrapper>
       {menuItems.map( item => (
           <LinkMenu key={item}>{item}</LinkMenu>
       ))}
       
    </MenuWrapper>
)

export default MenuDesktop;