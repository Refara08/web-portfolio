import fs from "fs";
import path from "path";

import matter from "gray-matter";

const dirPath = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
  return fs.readdirSync(dirPath);
};

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, "");

  const filePath = path.join(dirPath, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

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
