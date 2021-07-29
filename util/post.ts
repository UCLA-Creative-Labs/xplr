import { TeamMember } from './team-member';

export interface IPost extends PostProps {
  readonly author: TeamMember;
  readonly slug: string;
  readonly content: string;
}

export interface PostProps {
  readonly title: string;
  readonly description: string;
  readonly authorName: string;
  readonly tags: string[];
}

export class Post implements IPost {
  public readonly title: string;
  public readonly description: string;
  public readonly authorName: string;
  public readonly tags: string[];
  public readonly slug: string;

  public readonly content: string;
  private _author?: TeamMember;

  constructor(id: string, content: string, props: PostProps) {
    this.title = props.title;
    this.description = props.description;
    this.authorName = props.authorName;
    this.tags = props.tags;
    this.slug = id;
    this.content = content;
  }

  get author(): TeamMember {
    return this._author;
  }
}