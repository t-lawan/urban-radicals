const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const project = path.resolve(`src/templates/project.js`)

  return graphql(`
    {
      allContentfulProject {
        edges {
          node {
            category {
              contentful_id
              colour
              title
            }
            contentful_id
            date(formatString: "MM/DD/YYYY")
            description {
              raw
            }
            slug
            title
            location
            footer {
              firstColumnText {
                contentful_id
                title
                text {
                  raw
                }
              }
              secondColumnText {
                contentful_id
                title
                text {
                  raw
                }
              }
              thirdColumnText {
                contentful_id
                title
                text {
                  raw
                }
              }
            }
            seo {
              contentful_id
              description {
                description
              }
              title
            }
            content {
              ... on ContentfulTextBlock {
                contentful_id
                title
                text {
                  raw
                }
              }
              ... on ContentfulImageBlock {
                contentful_id
                images {
                  gatsbyImageData
                }
                layout
                text {
                  raw
                }
                caption {
                  caption
                }
              }
              ... on ContentfulImageCollectionBlock {
                id
                imageList {
                  contentful_id
                  images {
                    gatsbyImageData
                  }
                  layout
                  text {
                    raw
                  }
                  caption {
                    caption
                  }
                }
              }
            }
          }
        }
      }
    }
  `, 
  {limit: 1000})
  .then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.allContentfulProject.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `project/${edge.node.slug}`,
        component: project,
        context: edge.node
      })
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `


    type ContentfulTextBlock {
      contentful_id: String!
    }
    type ContentfulImageBlock  {
      contentful_id: String! 
    }
    type ContentfulImageCollectionBlock  {
      contentful_id: String! 
    }

    union ContentBlock = ContentfulTextBlock | ContentfulImageBlock | ContentfulImageCollectionBlock

    type contentfulProject {
      content: [ ContentBlock!]
    }





  `
  createTypes(typeDefs)
}
