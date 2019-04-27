import styled from 'styled-components';


const Button = styled.button`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  width: ${ ({width}) => width };
  height: 45px;
  background: none;
  border-radius: 0;
  border: 1px solid ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.white};
  font-family: 'Rubik', sans-serif;
  font-size: 1.3em;
  font-weight: 400;
  transition: box-shadow .3s ease;

  :hover{
    box-shadow: 0 10px 20px -15px red;
    background: ${({theme}) => theme.colors.red};
    color: ${({theme}) => theme.colors.white};
    border: none;
  }
`

export default Button;