
import React from 'react'
import H1 from '../components/H1/H1';
import Layout from '../layout/Layout'
import Button from '../components/Button/Button';
import { Link } from "gatsby";


const AboutPage = () => (
    <Layout>
    <H1 isBig>Hello People it's me!</H1>
    <Button width="110px" as={Link} to="/">go back</Button>
    </Layout>
)
  


export default AboutPage;