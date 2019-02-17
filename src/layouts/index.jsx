import React, { Fragment } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { css, Global } from '@emotion/core'
import NavBar from './NavBar'
import theme from '../../config/theme'
import headroom from '../styles/headroom'

import { graphql, StaticQuery, Link } from 'gatsby'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Global
        styles={css`
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          html {
            text-rendering: optimizeLegibility;
            overflow-x: hidden;
            box-sizing: border-box;
            -ms-overflow-style: scrollbar;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html,
          body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }

          body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          a {
            color: ${theme.colors.link};
            transition: color 0.5s;
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
            color: ${theme.colors.linkHover};
          }
          h1 {
            font-family: ${theme.fontFamily.heading};
          }

          ${headroom}
        `}
      />
      <NavBar />
      {children}
    </Fragment>
  </ThemeProvider>
)

export default Layout

/**
 export default ({ children }) => (
   // StaticQuery component accepts two props, query and render.
   // The query prop takes a a tagged template literal, which allow embedded expressions.
   <StaticQuery
     query={graphql`
       query {
         site {
           siteMetadata {
             title
           }
         }
       }
     `}
     // The render prop takes a function with data as a single argument.
     // The data is the query results.
     render={data => (
       <div>
         <Link to={'/'}>
           <h3>{data.site.siteMetadata.title}</h3>
         </Link>
         <Link to={'/about'}>About</Link>
         {children}
       </div>
     )}
   />
 )
 
 */
