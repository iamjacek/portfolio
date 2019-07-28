import React, { Component }  from "react";
import Layout from "../Layout/Layout";
import styled from 'styled-components';
import img from "../assets/background_home.jpg";
import Button from "../components/Buttons/Button";

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

class PageNotFound extends Component {

  goBack = () => {
    window.history.back();
  }


  render() {

    
    return(
      <Wrapper>
        <Layout>
          <Background />
          <ContentWrapper>
            <Content>
              <h1>Page is not found!</h1>
              <p>You just hit a route that doesn&#39;t exist... go back or try later.</p>
    
              <Button onClick={ this.goBack }>
                Go back
              </Button>
            </Content>
          </ContentWrapper>
        </Layout>
      </Wrapper>
      )
    }
}


export default PageNotFound;
