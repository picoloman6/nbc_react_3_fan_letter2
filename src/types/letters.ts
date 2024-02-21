export type MemberTypes = '카리나' | '윈터' | '닝닝' | '지젤';

export interface MemberStateTypes {
  member: MemberTypes;
  changeMember: (member: MemberTypes) => void;
}

export interface LetterInputTypes {
  content: string;
  member?: string;
}

export interface LettersType extends LetterInputTypes {
  id: string;
  userId: string;
  userName: string;
  createdAt: number;
  userAvatar: string | null;
}

export interface ErrMsgTypes {
  type: '' | 'content' | 'id' | 'nickname' | 'password' | 'confirmPassword';
  msg: string;
}

export type ClickFormTypes = (
  e: React.FormEvent,
  content: string,
  setContent: React.Dispatch<React.SetStateAction<string>>
) => void;
