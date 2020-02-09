import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Cześć Wam testuje różności w Gatsby</h1>
    <p>To jest moja strona.</p>

    <Link to="/page-2/">Link do drugiej strony</Link>
  </Layout>
)


export default IndexPage
