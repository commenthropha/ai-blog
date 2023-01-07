import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

export const getRecentPosts = async () => {
  const query = gql`
    query getRecentPosts {
      posts(orderBy: publishedAt_ASC, last: 4) {
        title
        id
        featuredImage {
            url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
}

export const getPostDetails = async (slug) => {
  const query = gql`
    query getPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        author
        subheading
        id
        content {
          raw
        }
        featuredImage {
            url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, {slug});

  return result.post;
}

export const getPosts = async () => {
  const query = gql`
    query getPosts {
      posts {
        title
        id
        featuredImage {
            url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
}