import React from "react"
import styled from "styled-components"

const StyledHamburger = styled.button`
    padding: 18px 15px;
    border: none;
    background: none;
    position: relative;
    z-index: 2;
`

const InnerHamburger = styled.div`
    width: 30px;
    height: 3px;
    background: ${({theme}) => theme.colors.white};
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
    }

    ::after {
        top: 8px;
    }
`

const Hamburger = () => (
    <StyledHamburger>
        <InnerHamburger />
    </StyledHamburger>
)

export default Hamburger;