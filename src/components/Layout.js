import React, { Fragment } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import classes from './Layout.module.scss'
import ThemeContext from '../context/ThemeContext'
import Head from '../components/Head'

const Layout = ({ children }) => {
  return (
    <ThemeContext.Consumer>
      { theme => {
        // const container = [classes.container]
        const bTheme = theme.isDark ? classes.dark : classes.light

        return (
          <Fragment>
            <Head
              bodyAttributes={ {
                class: `${bTheme}`
              } }
            />
            <div className={ classes.container }>
              <div className={ classes.content }>
                <Header />
                { children }
              </div>
              <Footer />
            </div>
          </Fragment>
        )
      } }
    </ThemeContext.Consumer>
  )
}

export default Layout