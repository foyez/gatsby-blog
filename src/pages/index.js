import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/Head'

const IndexPage = () => (
  <Layout>
    <Head title='Home' />
    <h1>Hello</h1>
    <h2>I'm Foyez, a full-stack developer living in beautiful Bangladesh.</h2>
    <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
  </Layout>
)

export default IndexPage