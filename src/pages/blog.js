import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/Layout'
import classes from './blog.module.scss'
import Head from '../components/Head'

const BlogPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           html
  //           excerpt
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={ classes.posts }>
        { data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={ classes.post }>
              <Link to={ `/blog/${edge.node.slug}` }>
                <h2>{ edge.node.title }</h2>
                <p>{ edge.node.publishedDate }</p>
              </Link>
            </li>
          )
        }) }
      </ol>
    </Layout>
  )
}

export default BlogPage