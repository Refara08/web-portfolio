import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getSkills = async () => {
  const query = gql`
    query MyQuery {
      skills(orderBy: title_ASC, first: 20) {
        id
        title
        slug
        icon {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.skills;
};
