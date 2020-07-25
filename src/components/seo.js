import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO() {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              description
              keywords
              siteUrl
            }
          }
        }
      `}
      render={data => null}
    />
  )
}

export default SEO
