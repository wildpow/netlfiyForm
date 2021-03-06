import React from 'react'
import Link from 'gatsby-link'
import MakeOffer from '../components/makeOffer';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <MakeOffer/>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
