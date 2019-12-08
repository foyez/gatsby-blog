import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import classes from './Layout.module.scss'

const Layout = props => (
  <div className={ classes.container }>
    <div className={ classes.content }>
      <Header />
      { props.children }
    </div>
    <Footer />
  </div>
)

export default Layout