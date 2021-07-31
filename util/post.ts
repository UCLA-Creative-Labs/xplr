import { JsonSerializable } from './private/json-serializable';

export interface IPost extends PostProps {
  readonly slug: string;
  readonly content: string;
}

export interface PostProps {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly tags: string[];
}

export class Post extends JsonSerializable implements IPost {

  public static fromInterface(data: IPost): Post {
    return new Post(data.slug, data.content, data);
  }

  public readonly title: string;
  public readonly description: string;
  public readonly author: string;
  public readonly tags: string[];
  public readonly slug: string;
  public readonly content: string;

  constructor(id: string, content: string, props: PostProps) {
    super();
    this.title = props.title;
    this.description = props.description;
    this.author = props.author;
    this.tags = props.tags;
    this.slug = id;
    this.content = content;
  }
}