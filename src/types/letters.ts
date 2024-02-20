export type MemberTypes = '카리나' | '윈터' | '닝닝' | '지젤';

export interface MemberStateTypes {
  member: MemberTypes;
  changeMember: (member: MemberTypes) => void;
}

export interface LetterInputTypes {
  name: string;
  content: string;
  member?: string;
}

export interface LettersType extends LetterInputTypes {
  id: string;
  createdAt: number;
}

export interface ErrMsgTypes {
  type: '' | 'name' | 'content';
  msg: string;
}

export type ClickFormTypes = (
  e: React.FormEvent,
  name: string,
  content: string,
  setInput: React.Dispatch<React.SetStateAction<LetterInputTypes>>
) => void;
