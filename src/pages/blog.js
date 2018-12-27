import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Layout from '../components/layout'

const BlogTop = ({data}) => {
  const longList = data.allMarkdownRemark.edges;
  const shortList = data.allMarkdownRemark.edges.slice(0,2);
  return (
    <div>
    <h1 className="uppercase center">Recent Articles</h1>
      {shortList.map(post => (
        <div key={ post.node.id }>
          <h3>{post.node.frontmatter.title}</h3>
          <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
          <br />
          <br />
          <Link to={post.node.frontmatter.path}>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
};

export const pageQuery = graphql`
  query BlogIndexQuery {
      allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            author
            date
            path
          }
        }
      }
    }
  }
`

export default BlogTop;
