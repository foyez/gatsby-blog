import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import classes from './Header.module.scss'
import ThemeContext from '../context/ThemeContext'
import moon from '../img/moon.svg'
import sun from '../img/sun.svg'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeContext.Consumer>
      { theme => (
        <header className={ classes.header }>
          <h1>
            <Link className={ classes.title } to='/'>
              { data.site.siteMetadata.title }
            </Link>
          </h1>
          <nav>
            <ul className={ classes.navList }>
              <li>
                <Link className={ classes.navItem } activeClassName={ classes.activeNavItem } to='/'>Home</Link>
              </li>
              <li>
                <Link className={ classes.navItem } activeClassName={ classes.activeNavItem } to='/blog'>Blog</Link>
              </li>
              <li>
                <Link className={ classes.navItem } activeClassName={ classes.activeNavItem } to='/about'>About</Link>
              </li>
              <li>
                <Link className={ classes.navItem } activeClassName={ classes.activeNavItem } to='/contact'>Contact</Link>
              </li>
              <button className={ classes.darkSwitcher } onClick={ theme.toggleDark }>
                { theme.isDark ? (
                  <img src={ sun } className={ classes.themeIcon } alt="Light Mode" />
                ) : (
                    <img src={ moon } className={ classes.themeIcon } alt="Dark Mode" />
                  ) }
              </button>
            </ul>
          </nav>
        </header>
      ) }
    </ThemeContext.Consumer>
  )
}

export default Header