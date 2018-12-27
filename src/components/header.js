import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header style={{ margin: `1% auto`, maxWidth: 650, padding: `0 1rem` }}>
   <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
     <h3 style={{ display: `inline`, color: `hsla(0,0%,0%,0.8)`, textTransform: `uppercase` }}>{siteTitle}</h3>
   </Link>
   <ul style={{ listStyle: `none`, float: `right` }}>
     <ListLink to="/">Home</ListLink>
     <ListLink to="/blog/">Blog</ListLink>
     <ListLink to="/starter/">Starter</ListLink>
   </ul>
  </header>
)

export default Header
