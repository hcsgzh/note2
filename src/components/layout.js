/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import "../styles/layout-overide.css"
import Media from "react-media"

const Sidebar = props => (
  <div
    style={{
      border: "2px solid #e6e6e6",
      maxWidth: 960,
      padding: "0.5rem",
      marginBottom: "25px",
    }}
  >
    <strong>{props.title}.</strong> {props.description}
  </div>
)
const TemplateWrapper = ({ children }) => {
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
  <div>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px",
              }}
            >
              
              <div style={{ flex: 1 }}>{children}</div>
            </div>
          ) : (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px",
              }}
            >
              
              <div style={{ flex: 2.5, paddingRight: "30px" }}>
                
                {children}
              </div>
              <div style={{ flex: 1 }}>
                
                <Sidebar
                  title="Hugh Shangguan"
                  description="Articles on React and Node.js. All articles are written by Me. Fullstack Web Development."
                />
                <Sidebar
                  title="About author"
                  description="I am a Full-stack Web Developer specializing in React and Node.js based in NZ."
                />
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
)}

// const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0px 1.0875rem 1.45rem`,
//           paddingTop: 0,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default TemplateWrapper