import React from "react"
import { graphql } from "gatsby"
import BlogLayout from "../layouts/BlogLayout"
import PostList from "../components/PostList"
import Pagination from "../components/Pagination"
import Seo from "../components/seo"
import imageBlog from "../images/web-programacion.jpg"

export default function Blog(props) {
  const { data, pageContext } = props
  const posts = data.allStrapiPost.nodes

  return (
    <BlogLayout>
      <Seo
        title="Blog sobre programación"
        description="Blog sobre programación javaScript Full Stack, de React, React Native, Next, Gatsby, Node, Mongo, Express, Angular etc.."
        image={imageBlog}
      />
      <PostList posts={posts} />
      <Pagination pageContext={pageContext} />
    </BlogLayout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allStrapiPost(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        id
        title
        url
        content
        createdAt
        miniature {
          publicURL
        }
      }
    }
  }
`
