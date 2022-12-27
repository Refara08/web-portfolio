import React from "react";
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Posts {
      posts(first: 10) {
        slug
        title
        role
        coverImage {
          url
          width
          height
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        id
        excerpt
        slug
        title
        role
        skills(orderBy: title_ASC, first: 20) {
          id
          title
          slug
          icon {
            url
          }
        }
        imageContent(first: 10) {
          url
          width
          height
        }
        description {
          html
        }
        webLink
        codeLink
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getPostsSlug = async () => {
  const query = gql`
    query Posts {
      posts(first: 10) {
        slug
        title
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getSkills = async () => {
  const query = gql`
    query Skills {
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

export const getExperiences = async () => {
  const query = gql`
    query Experiences {
      experiences(first: 20) {
        id
        period
        jobPosition
        experienceDesc {
          raw
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.experiences;
};

export const getAbout = async () => {
  const query = gql`
    query Abouts {
      abouts(last: 1) {
        aboutMe {
          raw
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.abouts;
};

// extracting content fragment from raw data ============================================
export const getContentFragment = (index, text, obj, type) => {
  let modifiedText = text;

  if (obj) {
    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>;
    }

    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>;
    }

    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>;
    }
  }

  switch (type) {
    case "heading-three":
      return (
        <h3 key={index} className="text-xl font-semibold mb-4">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h3>
      );
    case "paragraph":
      return (
        <p key={index} className="mb-8">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </p>
      );
    case "heading-four":
      return (
        <h4 key={index} className="text-md font-semibold mb-4">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h4>
      );
    case "image":
      return (
        <img
          key={index}
          alt={obj.title}
          height={obj.height}
          width={obj.width}
          src={obj.src}
        />
      );
    case "bulleted-list":
      return <li></li>;
    default:
      return modifiedText;
  }
};
