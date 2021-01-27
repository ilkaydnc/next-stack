import React, { ReactNode } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const palette = {
  primary: {
    light: '#35bdf2',
    main: '#0442bf',
    dark: '#056cf2',
    contrastText: '#f2f2f2',
  },
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
}

const theme = {
  palette,
  border: {
    light: palette.gray[50],
    main: palette.gray[50],
    dark: palette.gray[50],
  },
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

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Layout
