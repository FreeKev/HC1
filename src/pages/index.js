import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import image from './img/whitetips.svg'


const IndexPage = () => (
  <Layout>
    <div style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%',
    }}>
      <img src={image} alt="Pheonix" />
    </div>
    <h1 style={{ margin: '0 auto', marginBottom: '1.45rem', textAlign: 'center', width: '20rem' }}>Welcome.</h1>
    <p>This site is dedicated to growing God's people in personal holiness, holiness which effects the church, and holiness which is salt and light to the world.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
