import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../../components/Layout';
import { ITeamMember } from '../../util';
import { getTeam } from '../../util/node';

export interface TeamProps {
  members: ITeamMember[];
}

export default function Team(props: TeamProps): JSX.Element {
  const {members} = props;

  return (
    <Layout>
      <h2>Team</h2>
      <pre>{members.map(p => JSON.stringify(p, null, 2))}</pre>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<TeamProps> = async () => {
  const posts = getTeam();

  return {
    props: {
      posts: posts.map(post => post.toJson() as ITeamMember),
    },
  };
};
