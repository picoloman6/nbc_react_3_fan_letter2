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
