import fs from "fs";
import path from "path";

import matter from "gray-matter";

const dirPath = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
  return fs.readdirSync(dirPath);
};

export const getPostData = (postIdentifier) => {
  const filePath = path.join(dirPath, postIdentifier);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = postIdentifier.replace(/\.md$/, "");

  const postData = {
    slug: postSlug,
    content,
    ...data,
  };

  return postData;
};

export const getAllPost = () => {
  const PostsFiles = getPostsFiles();

  const allPosts = PostsFiles.map((post) => {
    return getPostData(post);
  });

  return allPosts;
};
