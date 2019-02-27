import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Header } from "../components"
import { Layout, Container } from "../layouts"

const ErrorPage = center => (
  <Layout>
    <Header title="404" />
    <Container center={center}>
      <h1>Woops, something went wrong.</h1>
      <h3>Derp... there's nothing here. This page does not exist or is no longer reachable.</h3>
      <h3>
        You can return to the <Link to="/">Homepage</Link>.
      </h3>
    </Container>
  </Layout>
)

export default ErrorPage

Container.propTypes = {
  center: PropTypes.object
}
