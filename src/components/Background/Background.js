import styled from 'styled-components';
import img from '../../assets/background_home.jpg'

const Background = styled.div`
    height: 100%;
    width: 100%;
    background: url('${img}');
    background-position: ${props => props.isLeft ? 'left bottom' : 'right bottom'};
    background-size: cover; 
    opacity: .07;
    position: absolute;
    top: 0;
    left: 0;


`

export default Background;