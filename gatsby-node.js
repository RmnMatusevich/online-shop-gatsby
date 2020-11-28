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
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "product"}}}) {
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
  const RepairBrandTemplate = path.resolve('src/templates/repairBrandTemplate.js')

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

  repairPage.allMarkdownRemark.edges.forEach(({ node }) => {
    node.frontmatter.brands.forEach(brand => {
      // console.log("nodeeeee ", brand.linkTo)
      const path = brand.linkTo + "/";
      console.log('PATH: ', path)
      createPage({
        path: path,
        component: RepairBrandTemplate,
        context: {},
      });
    })
  });

  const SellPageTemplate = path.resolve('src/templates/sellPageTemplate.js')

  const sellPage = await graphql(`
    {
  allMarkdownRemark(filter: {frontmatter: {path: {regex: "/sell/"}}}) {
    edges {
      node {
        frontmatter {
          path
          title
          subtitle
          backgroundImage
          sellTitle
          sellText
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

  sellPage.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: SellPageTemplate,
      context: {},
    });
  });

  const BuyPageTemplate = path.resolve('src/templates/buyPageTemplate.js')

  const buyPage = await graphql(`
    {
  allMarkdownRemark(filter: {frontmatter: {path: {regex: "/buy/"}}}) {
    edges {
      node {
        frontmatter {
          path
          title
          subtitle
          backgroundImage
          products {
            productBrand
            productDescription
            productImage
            productName
            productYear
            productCost
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

  buyPage.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: BuyPageTemplate,
      context: {},
    });
  });

  const AccessoriesPageTemplate = path.resolve('src/templates/accessoriesPageTemplate.js')

  const accessoryPage = await graphql(`
    {
  allMarkdownRemark(filter: {frontmatter: {path: {regex: "/accessories/"}}}) {
    edges {
      node {
        frontmatter {
          path
          title
          subtitle
          backgroundImage
          products {
            productBrand
            productImage
            productName
            productCost
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

  accessoryPage.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: AccessoriesPageTemplate,
      context: {},
    });
  });
};
