import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Cześć gamonie</h1>
    <p>To jest moja strona.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <div>
      <table>
        <tr>
          <td>1</td> <td>2</td> <td>3</td>
        </tr>
        <tr>
          <td>4</td> <td>5</td> <td>6</td>
        </tr>
        <tr>
          <td>7</td> <td>8</td> <td>9</td>
        </tr>

      </table>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)


export default IndexPage
