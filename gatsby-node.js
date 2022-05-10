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
            date(formatString: "DD/MM/YYYY")
            description {
              raw
            }
            slug
            title
            location
            seo {
              contentful_id
              description {
                description
              }
              title
            }
            content {
              contentful_id
              text {
                raw
              }
              title
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
