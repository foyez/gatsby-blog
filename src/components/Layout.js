import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

// import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import classes from './Layout.module.scss'
import ThemeContext from '../context/ThemeContext'
// import Head from '../components/Head'
// import favicon from '../img/favicon.png'
import config from '../../data/SiteConfig'
import favicon from '../img/favicon.ico'

const Layout = ({ children }) => {
  return (
    <ThemeContext.Consumer>
      { theme => {
        // const container = [classes.container]
        const bTheme = theme.isDark ? classes.dark : classes.light

        return (
          <Fragment>
            {/* <Head
              bodyAttributes={ {
                class: `${bTheme}`
              } }
            /> */}
            <Helmet
              bodyAttributes={ {
                class: `${bTheme}`,
              } }
            >
              <meta name="description" content={ config.siteDescription } />
              <link rel="shortcut icon" type="image/ico" href={ favicon } />
            </Helmet>
            <div className={ classes.container }>
              <Navigation menuLinks={ config.menuLinks } />
              <div className={ classes.content }>
                {/* <Header /> */ }
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