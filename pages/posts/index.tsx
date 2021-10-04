import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../../components/Layout';
import { IPost } from '../../util';
import { getPosts } from '../../util/node';

export interface PostsProps {
  posts: IPost[];
}

export default function Posts(props: PostsProps): JSX.Element {
  const {posts} = props;

  return (
    <Layout>
      <h2>Posts</h2>
      <pre>{posts.map(p => JSON.stringify(p, null, 2))}</pre>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const posts = getPosts();

  return {
    props: {
      posts: posts.map(post => post.toJson() as IPost),
    },
  };
};
