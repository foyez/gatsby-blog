import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title, ...rest }) => {
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
    <Helmet title={ `${title} | ${data.site.siteMetadata.title}` } { ...rest } />
  )
}

export default Head