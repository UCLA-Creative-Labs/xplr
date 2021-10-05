import { ITeamMember } from "../../util";
import { IPost } from "../../util/post";

export interface _Post extends Omit<IPost, 'author'> {
  author: ITeamMember;
}
