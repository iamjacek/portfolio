import React from "react"
import styled from "styled-components"

const StyledHamburger = styled.button`
    ${({theme}) => theme.media.desktop} {
            display: none;
    }
    padding: 18px 15px;
    border: none;
    background: none;
    position: relative;
    z-index: 99;
    cursor: pointer;
`

const InnerHamburger = styled.div`
    width: 30px;
    height: 3px;
    background-color: ${({ theme, isOpen }) => isOpen ? "transparent" : theme.colors.white};
    transition: background-color .2s ease-out;
    position: relative;

    ::after, ::before {
        content: "";
        left: 0;
        position: absolute;
        width: 30px;
        height: 3px;
        background: ${({theme}) => theme.colors.white};
    }

    ::before {
        top: -8px;
        transform: translateY(${({isOpen}) => isOpen ? '8px' : '0px'}) rotate(${({isOpen}) => isOpen ? '-45deg' : '0deg'});
        transition: ${({isOpen}) => isOpen ? 'transform .2s .2s ease-out' : 'transform .2s ease-out'};
    }

    ::after {
        top: 8px;
        transform: translateY(${({isOpen}) => isOpen ? '-8px' : '0px'}) rotate(${({isOpen}) => isOpen ? '45deg' : '0deg'});
        transition: transform .2s .2s ease-out;
    }
`

const Hamburger = ({isOpen, ... props}) => (
    <StyledHamburger { ... props}>
        <InnerHamburger isOpen={isOpen} />
    </StyledHamburger>
)

export default Hamburger;