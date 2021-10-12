import { ITeamMember, kebabify } from '../../util';
import { getMemberBySlug, getPosts, getTeam } from '../../util/node';
import { LinkedPost } from './types';

export const Query = {
  hi: (): string => {
    return 'Hello World!';
  },
  allTeamMembers: (): ITeamMember[] => {
    return getTeam();
  },
  allPosts: (): LinkedPost[] => {
    const posts = getPosts();

    return posts.map(post => {
      const {author} = post;
      return {...post, author: getMemberBySlug(kebabify(author))};
    });
  },
};
