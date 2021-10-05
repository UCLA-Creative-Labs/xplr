import { IPost, ITeamMember, kebabify } from "../../util";
import { getMemberBySlug, getPosts, getTeam } from "../../util/node";
import { _Post } from "./types";

export const Query = {
  hi: (): string => {
    return 'Hello World!';
  },
  allTeamMembers: (): ITeamMember[] => {
    return getTeam();
  },
  allPosts: (): _Post[] => {
    const posts = getPosts();

    return posts.map(post => {
      const {author} = post;
      return {...post, author: getMemberBySlug(kebabify(author))};
    });
  },
};
