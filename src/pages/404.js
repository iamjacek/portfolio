import React, { Component }  from "react";
import Layout from "../Layout/Layout";
import styled from 'styled-components';
import img from "../assets/background_home.jpg";
import Button404 from "../components/Buttons/Button404"
import { Helmet } from 'react-helmet'
  
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
`

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

const ContentWrapper= styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  height: 30%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${({theme}) => theme.media.bigDesktop} {
    h1{
      font-size: 2.6rem;
    }
    p{
      font-size: 1.4rem;
    }
  }
`

const ButtonWrapper = styled.div`
    position: absolute;
    cursor: pointer;
    bottom: 10%;
    margin: 0 auto;
    width: 200px;
    height: 46px;
    padding: 20px;
`

class PageNotFound extends Component {

    goBack = () => {
        window.history.back();
    }


  render() {

    
    return(
      <Wrapper>
        <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>JW Web Development</title>
          <meta name="description" content="Front end development, web development and web design. Create your website to become visible!" />
        </Helmet>
          <Background />
          <ContentWrapper>
            <Content>
              <h1>Page is not found!</h1>
              <p>You just hit a route that doesn&#39;t exist... go back or try later.</p>

              <ButtonWrapper onClick ={ this.goBack }>
              <Button404 />
              </ButtonWrapper>
              
          
            </Content>
          </ContentWrapper>
        </Layout>
      </Wrapper>
      )
    }
}


export default PageNotFound;
