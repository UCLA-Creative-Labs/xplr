import fs from 'fs';
import { resolve } from 'path';
import matter from 'gray-matter';
import { IPost, Post, PostProps} from '../post';
import { ITeamMember, TeamMember, TeamMemberProps } from '../team-member';

const POST_DIR = resolve(process.cwd(), '_posts');
const TEAM_DIR = resolve(process.cwd(), '_team');

const createPost = (s: string, c: string, p: PostProps) => new Post(s, c, p);
const createTeamMember = (s: string, c: string, p: TeamMemberProps) => new TeamMember(s, c, p);

/**
 * Return all the files in a given directory.
 *
 * @param dir The directory in question
 * @returns All files in directory
 */
function getDirSlugs(dir: string): string[] {
  return fs.readdirSync(dir);
}

/**
 * @returns All the files in the posts directory
 */
export function getPostSlugs(): string[] {
  return getDirSlugs(POST_DIR);
}

/**
 * @returns All the files in the team directory
 */
export function getTeamSlugs(): string[] {
  return getDirSlugs(TEAM_DIR);
}

/**
 * Generic function that takes in any slug and resolving directory and
 * creates an object that represents the item.
 *
 * @param slug The slug of the file
 * @param dir The directory to resolve slug lookup.
 * @param Object The Object class to create
 */
function getItemBySlug<T, TProps>(slug: string, dir: string, create: (s: string, c: string, p: TProps) => T): T {
  const realSlug = slug.replace(/\.md$/, '');
  const path = resolve(dir, `${realSlug}.md`);
  const contents = fs.readFileSync(path, 'utf-8');
  const { data, content } = matter(contents);
  const item = create(realSlug, content, (data as TProps));
  return item;
}

/**
 * @returns The Post associated with the given slug
 */
export function getPostBySlug(slug: string): Post {
  return getItemBySlug(slug, POST_DIR, (s: string, c: string, p: PostProps) => new Post(s, c, p));
}

/**
 * @returns The team member associated with the given slug
 */
export function getMemberBySlug(slug: string): TeamMember {
  return getItemBySlug(slug, TEAM_DIR, (s: string, c: string, p: TeamMemberProps) => new TeamMember(s, c, p));
}

/**
 * Generic function that returns all of some object, if given the right directory to resolve.
 *
 * @param dir The directory to resolve slug lookup.
 * @param create The Object class to create
 */
function getAllOf<T, TProps>(dir: string, create: (s: string, c: string, p: TProps) => T): T[] {
  const slugs = getDirSlugs(dir);
  return slugs.map(slug => getItemBySlug(slug, dir, create));
}

/**
 * @returns all posts
 */
export function getPosts(): Post[] {
  return getAllOf<Post, PostProps>(POST_DIR, createPost);
}

/**
 * @returns all team members
 */
export function getTeam(): TeamMember[] {
  return getAllOf<TeamMember, TeamMemberProps>(TEAM_DIR, createTeamMember);
}


