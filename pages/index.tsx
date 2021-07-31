import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../components/Layout';
import { IPost, ITeamMember } from '../util';
import { getPosts, getTeam } from '../util/node';

export interface HomeProps {
  team: ITeamMember[];
  posts: IPost[];
}

export default function Home(props: HomeProps): JSX.Element {
  const {team, posts} = props;

  return (
    <Layout>
      <h2>Team</h2>
      <pre>{team.map(m => JSON.stringify(m, null, 2))}</pre>
      <br />

      <h2>Posts</h2>
      <pre>{posts.map(p => JSON.stringify(p, null, 2))}</pre>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const team = getTeam();
  const posts = getPosts();

  return {
    props: {
      team: team.map(member => member.toJson() as ITeamMember),
      posts: posts.map(post => post.toJson() as IPost),
    },
  };
};