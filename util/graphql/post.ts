export const allPost = `{
  allPosts {
    slug
    content
    title
    description
    author {
      slug
      name
    }
    tags
  }
}`;