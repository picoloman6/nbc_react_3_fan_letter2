export interface UserInputType {
  id: string;
  password: string;
  nickname: string;
}

export interface RegisterValueTypes {
  id: string;
  password: string;
  confirmPassword?: string;
  nickname?: string;
}

export interface UserInfoTypes {
  id: string;
  nickname: string;
  avatar: null | string;
  success: boolean;
}
