import React from 'react';

export default function Template({ data, }) {
  const phonesData = data.allMarkdownRemark.edges;
  console.log("phonesData: ", phonesData)
  // const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        {phonesData.map((i, index) => {
          return (
            <div key={index}>
              <h1>{i.node.frontmatter.productDescription}</h1>
            </div>
          )
        })}
        {/*<h1>{frontmatter.productName}</h1>*/}
        {/*<h2>{frontmatter.date}</h2>*/}
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query Repair($path: String!) {
  allMarkdownRemark(filter: {frontmatter: {productBrand: {eq: "Apple"}, path: {eq: $path}}}) {
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
`;
