export interface GroupInterface {
  groupId: number;
  name: string;
  isPremium: boolean;
  users: UserInterface[];
}

export interface UserInterface {
  userId: number;
  username: string;
  password: string;
  nickname: string;
  activated: string;
  groups: GroupInterface[];
  authorities: AuthorityInterface[];
}

export interface AuthorityInterface {
  authorityName: string;
}
