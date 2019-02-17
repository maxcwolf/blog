import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
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
          <h3>{data.site.siteMetaData.title}</h3>
        </Link>
        <Link to={'/about'}>About</Link>
        {children}
      </div>
    )}
  />
)
