const path = require('path');

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve('src/templates/blogTemplate.js');

  const blogPosts = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    return result.data
  })

    blogPosts.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {},
      });
    });

  const repairPhoneApple = path.resolve('src/templates/repairPhoneApple.js');

  const repairPhones = await graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {productBrand: {eq: "Apple"}}}) {
    edges {
      node {
        id
        frontmatter {
          path
          productImage
          productYear
          productDescription
          productName
        }
      }
    }
  }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    console.log("RESULT: ", result.data)
    return result.data
  })

  repairPhones.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: repairPhoneApple,
        context: {},
      });
    });


  const RepairPageTemplate = path.resolve('src/templates/repairPageTemplate.js');

  const repairPage = await graphql(`
    {
  allMarkdownRemark(filter: {frontmatter: {repair: {eq: "/repair"}}}) {
    edges {
      node {
        frontmatter {
          path
          title
          subtitle
          backgroundImage
          brands {
            brand
            image
            linkTo
          }
        }
      }
    }
  }
}
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    console.log("RESULT: ", result.data)
    return result.data
  })

  repairPage.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: RepairPageTemplate,
      context: {},
    });
  });

};
