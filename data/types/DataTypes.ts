export interface GroupInterface {
  groupId: number;
  name: string;
  isPremium: boolean;
  users: UserInterface[];
}

export interface UserInterface {
  userId: number;
  username: string;
  password: string | null;
  nickname: string;
  activated: boolean;
  groups: GroupInterface[];
  authorities: AuthorityInterface[];
}

export interface AuthorityInterface {
  authorityName: string;
}
