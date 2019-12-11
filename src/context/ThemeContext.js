import React, { useState, useEffect } from 'react'

const defaultState = {
  dark: false,
  toggleDark: () => { }
}

const ThemeContext = React.createContext(defaultState)

const supportsDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches === true

const ThemeProvider = props => {
  const [isDark, setIsDark] = useState(false)

  const toggleDark = () => {
    let dark = !isDark
    localStorage.setItem('dark', JSON.stringify(dark))
    setIsDark(dark)
  }

  useEffect(() => {
    const lsDark = JSON.parse(localStorage.getItem('dark'))

    if (lsDark) {
      setIsDark(lsDark)
    } else if (supportsDarkMode()) {
      setIsDark(true)
    }
  }, [])

  const { children } = props

  return (
    <ThemeContext.Provider
      value={ {
        isDark,
        toggleDark
      } }
    >
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeContext
export { ThemeProvider }