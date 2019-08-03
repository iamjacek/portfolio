import React, {Component} from 'react';
import Layout from "../../Layout/Layout";
import styled from 'styled-components';
import img from "../../assets/background_home.jpg";

const Background = styled.div`
    height: 100%;
    width: 100%;
    background: url('${img}');
    background-position: right bottom;
    background-size: cover; 
    opacity: .07;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`

const Wrapper = styled.div`
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
`




class Home extends React.Component {

    render() {
        return(
            <Wrapper>
                <Layout>
                    <Background />
                   sdsdsd
                </Layout>
            </Wrapper>
        )
    }
}

export default Home;