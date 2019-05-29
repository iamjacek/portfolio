import styled from 'styled-components';
import img from '../../assets/city.jpg'

const Background2 = styled.div`
    height: 100%;
    width: 100%;
    background: url('${img}') bottom right;
    background-size: cover; 
    opacity: .03;
    position: absolute;
    top: 0;
    left: 0; 


`

export default Background2;