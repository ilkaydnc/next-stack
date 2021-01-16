import React from 'react'
import { createGlobalStyle } from 'styled-components'

interface Props {
  children: JSX.Element
}

export const GlobalStyle = createGlobalStyle`  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout
