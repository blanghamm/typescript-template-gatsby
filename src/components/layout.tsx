/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from "@emotion/styled"

interface LayoutTypes {
  children: ReactNode
}

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0 1.0875rem 1.45rem;
  h1,
  h2,
  h3 {
    font-family: "Barlow Semi Condensed";
  }
`

const Layout = ({ children }: LayoutTypes): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
    </>
  )
}

export default Layout
