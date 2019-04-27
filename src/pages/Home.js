import React from "react";
import Menu from '../components/Menu/Menu.js';
import Line from '../components/Menu/Line.js';
import Polish from '../components/Polish/Polish.js';
import Layout from '../layout/Layout';
import Logo from '../components/Logo/Logo.js'
import logo from '../assets/Logo.png';
import darkButton from '../assets/dark-mode_button.png'
import lightButton from '../assets/light-mode_button.png'
import LightButton from '../components/Button/LightButton'
import DarkButton from '../components/Button/DarkButton'
import Background from '../components/Background/Background'
import file from '../assets/background_home.jpg'

const Home = () => (
  <Layout>
    <Background >
      <Polish>PL</Polish>
      <Menu>
        <Line/>
        <Line/>
        <Line/>
      </Menu>
      <Logo src={logo} alt="Logo" />
      <LightButton src={lightButton} alt="Logo" />
      <DarkButton src={darkButton} alt="Logo" />
    </Background>
    
  </Layout>
);

export default Home;
