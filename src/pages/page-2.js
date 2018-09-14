import React from 'react'
import Link from 'gatsby-link'
import Contact from '../components/contact';

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Contact/>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
