import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, meta, image: metaImage, title }) {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              author
              title
              description
              siteUrl
              keywords
            }
          }
        }
      `}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description

        return (
          <Helmet
            htmlAttributes={{
              lang: 'en',
            }}
            title={title}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                name: 'keywords',
                content: data.site.siteMetadata.keywords,
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
            ].concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
}

export default SEO
