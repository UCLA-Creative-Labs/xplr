import { ITeamMember } from '../../util';
import { IPost } from '../../util/post';

export interface LinkedPost extends Omit<IPost, 'author'> {
  author: ITeamMember;
}
