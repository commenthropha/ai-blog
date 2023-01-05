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