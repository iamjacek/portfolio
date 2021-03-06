import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout/Layout'
import SEO from '../components/seo'
import Logo from '../components/Logo/Logo'
import logoImg from '../assets/Logo.png'
import ButtonTech from '../components/Buttons/ButtonTech'
import { Link } from 'gatsby'

const ButtonWrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin: 10vh auto;
  width: 200px;
  height: 46px;
  padding: 20px;
`

const Wrapper = styled.div`
  overflow: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10%;
  h1 {
    font-size: calc(${({ theme }) => theme.font.header}*1);
    margin: 1em auto;
    text-align: center;
    background-color: transparent;
    ${({ theme }) => theme.media.tabletLandscape} {
      font-size: calc(${({ theme }) => theme.font.header}*1.1);
    }
    ${({ theme }) => theme.media.desktop} {
      font-size: calc(${({ theme }) => theme.font.header}*1.5);
    }
    ${({ theme }) => theme.media.bigDesktop} {
      font-size: calc(${({ theme }) => theme.font.header}*3.2);
    }
  }
  h2 {
    font-size: calc(${({ theme }) => theme.font.base}*1.6);
    margin: 1em 0;
    text-align: left;
    background-color: transparent;
    padding: 0;
  }
  ul {
    color: #004f69;
    text-align: left;
    padding: 0;
    margin-bottom: 3em;
    li {
      text-align: left;
      text-decoration: none;
      list-style-type: none;
    }
  }
  ${({ theme }) => theme.media.tabletLandscape} {
    min-height: unset;
    padding: 0 15%;
  }
  ${({ theme }) => theme.media.desktop} {
    padding: 0 20%;
  }
  ${({ theme }) => theme.media.bigDesktop} {
    padding: 0 25%;
  }
`

const LogoWrap = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  margin-top: 5%;
  ${({ theme }) => theme.media.bigDesktop} {
    height: 350px;
  }
  img {
    height: 100%;
  }
`

const Privacy = () => {
  return (
    <Layout>
      <Wrapper>
        <SEO title="Privacy Policy | Web Development - Jacek Witucki" />
        <LogoWrap>
          <Logo src={logoImg} id="myLogo" />
        </LogoWrap>

        <h1>Privacy Policy for Web Development - Jacek Witucki</h1>

        <p>
          At Web Development - Jacek Witucki, accessible from
          https://www.jacekwitucki.com/, one of our main priorities is the
          privacy of our visitors. This Privacy Policy document contains types
          of information that is collected and recorded by Web Development -
          Jacek Witucki and how we use it.
        </p>

        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>

        <h2>Log Files</h2>

        <p>
          Web Development - Jacek Witucki follows a standard procedure of using
          log files. These files log visitors when they visit websites. All
          hosting companies do this and a part of hosting services' analytics.
          The information collected by log files include internet protocol (IP)
          addresses, browser type, Internet Service Provider (ISP), date and
          time stamp, referring/exit pages, and possibly the number of clicks.
          These are not linked to any information that is personally
          identifiable. The purpose of the information is for analyzing trends,
          administering the site, tracking users' movement on the website, and
          gathering demographic information.
        </p>

        <h2>Cookies and Web Beacons</h2>

        <p>
          Like any other website, Web Development - Jacek Witucki uses
          'cookies'. These cookies are used to store information including
          visitors' preferences, and the pages on the website that the visitor
          accessed or visited. The information is used to optimize the users'
          experience by customizing our web page content based on visitors'
          browser type and/or other information.
        </p>

        <p>
          For more general information on cookies, please read{' '}
          <a href="https://www.cookieconsent.com/what-are-cookies/">
            "What Are Cookies"
          </a>
          .
        </p>

        <h2>Privacy Policies</h2>

        <p>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of Web Development - Jacek Witucki. Our Privacy
          Policy was created with the help of the{' '}
          <a href="https://www.privacypolicygenerator.org">
            Privacy Policy Generator
          </a>
          .
        </p>

        <p>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Web Development - Jacek
          Witucki, which are sent directly to users' browser. They automatically
          receive your IP address when this occurs. These technologies are used
          to measure the effectiveness of their advertising campaigns and/or to
          personalize the advertising content that you see on websites that you
          visit.
        </p>

        <p>
          Note that Web Development - Jacek Witucki has no access to or control
          over these cookies that are used by third-party advertisers.
        </p>

        <h2>Third Party Privacy Policies</h2>

        <p>
          Web Development - Jacek Witucki's Privacy Policy does not apply to
          other advertisers or websites. Thus, we are advising you to consult
          the respective Privacy Policies of these third-party ad servers for
          more detailed information. It may include their practices and
          instructions about how to opt-out of certain options.{' '}
        </p>

        <p>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites.
        </p>

        <h2>Children's Information</h2>

        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>

        <p>
          Web Development - Jacek Witucki does not knowingly collect any
          Personal Identifiable Information from children under the age of 13.
          If you think that your child provided this kind of information on our
          website, we strongly encourage you to contact us immediately and we
          will do our best efforts to promptly remove such information from our
          records.
        </p>

        <h2>Online Privacy Policy Only</h2>

        <p>
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in Web Development - Jacek Witucki. This policy
          is not applicable to any information collected offline or via channels
          other than this website.
        </p>

        <h2>Consent</h2>

        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its Terms and Conditions.
        </p>
        <Link to="/">
          <ButtonWrapper>
            <ButtonTech />
          </ButtonWrapper>
        </Link>
      </Wrapper>
    </Layout>
  )
}

export default Privacy
