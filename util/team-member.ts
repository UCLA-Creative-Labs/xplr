export interface ITeamMember extends TeamMemberProps {
  readonly slug: string;
  readonly bio: string;
}

export interface TeamMemberProps {
  readonly name: string;
  readonly year: number;
  readonly major: string;
}

export class TeamMember implements ITeamMember {
  public readonly slug: string;
  public readonly name: string;
  public readonly year: number;
  public readonly major: string;

  public readonly bio: string;

  constructor(id: string, bio: string, props: TeamMemberProps) {
    this.slug = id;
    this.name = props.name;
    this.year = props.year;
    this.major = props.major;

    this.bio = bio;
  }
}