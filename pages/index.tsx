import { useQuery } from '@apollo/client';
import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../components/Layout';
import { LinkedPost } from '../server/resolvers/types';
import { ITeamMember } from '../util';
import { allPost, allTeam } from '../util/graphql';

import { gqlFetch } from '../util/node';

export interface HomeProps {
  team: ITeamMember[];
  posts: LinkedPost[];
}

export default function Home(props: HomeProps): React.ReactNode {
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
  const {data: team} = await gqlFetch(allTeam);
  const {data: posts} = await gqlFetch(allPost);

  return {
    props: {
      team: team?.allTeamMembers ?? [],
      posts: posts?.allPosts ?? [],
    },
  };
};
