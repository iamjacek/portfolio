import styled from 'styled-components';


const MenuFull = styled.div`
    transition: 200ms margin ease-in;
    display: flex;
    width: 250px;
    height: 100vh;
    background: ${({theme}) => theme.colors.gray};
    border-left: 5px solid ${({theme}) => theme.colors.white};
    position: fixed;
    top: 0;
    right: 0;
    margin: 0 -250px 0 0;
    padding: 0;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    ul{
        display: flex;
        flex-direction: column; 
        list-style: none;
        justify-content: center;
        margin: 0;
    }
    li{
        margin-left: 5px;
        font-family: 'Rubik';
        font-size: 2.2rem;
        line-height: 3.5rem;
        cursor: pointer;
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
           
        }
    }
    ${({theme}) => theme.media.hd} {
        margin: 0;
        border-left: none;
        transition: 0s;
        width: 400px;
        li{
            font-size: 1.2rem;
        }
      }
`

  export default MenuFull;