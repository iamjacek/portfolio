import styled from 'styled-components';


const MenuFull = styled.div`
    transition: 600ms margin ease-in;
    display: flex;
    width: 250px;
    height: 100vh;
    background: ${({theme}) => theme.colors.gray};
    /* background: ${(props) => props.isOn ? 'red' : 'black'}; */
    border-left: 5px solid ${({theme}) => theme.colors.white};
    position: fixed;
    top: 0;
    right: 0;
    margin: 0 -250px 0 0;
    padding: 0;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    /* a styles */
    a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
    }
    ul{
        display: flex;
        flex-direction: column; 
        list-style: none;
        justify-content: center;
        margin: 0;
    }
    li{
        cursor: pointer;
        position: relative;
        text-align: center;
        white-space: nowrap;
        transition: 200ms;
        margin-left: 5px;
        font-family: 'Rubik';
        font-size: 2.2rem;
        line-height: 3.5rem;
        
        &:after{
            width: 0%;
            content: '';
            position: absolute;
            left: 0; bottom: 5px;
            height: 3px;
            background-color: ${({theme}) => theme.colors.white};
            transition: width .2s;
        }
    }
    li:hover{
        transition: 200ms;
            color:red;
            &:after{
                width: 100%;

            }
        }
       
    ${({theme}) => theme.media.laptop} {
        margin: 0;
        border-left: none;
        transition: 0s;
        background: none;
        position: absolute;
        top: 5vh;
        right: 12vw;
        width: 350px;
        height: 20px;
        ul{
            flex-direction: row; 
            justify-content: space-between;

        }
        li{
            margin-left: 20px;
            font-family: 'Rubik';
            font-size: 1rem;
            &:after{
                bottom: 15px;
                height: 2px;
            }
        }
    }
    ${({theme}) => theme.media.hd} {
        margin: 0;
        border-left: none;
        transition: 0s;
        width: 400px;
        right: calc(12vw + .5vw);
        li{
            font-size: calc(.8rem + .5vw);
        }
      }
`

  export default MenuFull;