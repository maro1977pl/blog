import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NIE ZNALEZIONO STRONY</h1>
    <h2>Prawdopodobnie masz zły adres, przejdz na stronę <Link to="/">HOME</Link>.</h2>




  </Layout>
)

export default NotFoundPage
