import React, { Component } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import logo from '../img/logo.svg'
import ThemeContext from '../context/ThemeContext'
import moon from '../img/moon.svg'
import sun from '../img/sun.svg'
import classes from './Navigation.module.scss'

export default class Navigation extends Component {
  static contextType = ThemeContext

  state = {
    scrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  render() {
    const { scrolled } = this.state
    const { menuLinks } = this.props
    const theme = this.context

    let attachedClasses = scrolled ? `${classes.nav} ${classes.scroll}` : classes.nav
    attachedClasses += theme.isDark ? ` ${classes.navDark}` : ` ${classes.navWhite}`

    return (
      <nav className={ attachedClasses }>
        <div className={ classes.navContainer }>
          <div className="brand">
            <Link className={ classes.logoLink } to="/">
              <img src={ logo } className={ classes.logo } alt="logo Diskette" />
              <span className="text">Kazi Foyez Ahmed</span>
            </Link>
          </div>
          <div className={ classes.links }>
            { menuLinks.map(link => (
              <Link key={ link.name } to={ link.link }
                className={ classes.link }
                activeClassName="active">
                { link.name }
              </Link>
            )) }
            <div className="cta">
              <button className={ classes.darkSwitcher } onClick={ theme.toggleDark } aria-label="Toggle Dark Mode." title="Toggle Dark Mode">
                { theme.isDark ? (
                  <img src={ sun } className={ classes.themeIcon } alt="Light Mode" />
                ) : (
                    <img src={ moon } className={ classes.themeIcon } alt="Dark Mode" />
                  ) }
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
