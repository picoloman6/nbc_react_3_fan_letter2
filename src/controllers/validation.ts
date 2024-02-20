import { letterLenLimit } from '../constants';
import { ErrMsgTypes } from '../types/letters';
import { RegisterValueTypes } from '../types/users';

export const checkFormValue = (
  name: string,
  content: string,
  oldContent?: string
): ErrMsgTypes => {
  const { min, max } = letterLenLimit;
  if (name === '') {
    return { type: 'name', msg: '이름을 입력하세요.' };
  }

  if (oldContent && content === oldContent) {
    return { type: 'content', msg: '수정된 내용이 없습니다.' };
  }

  if (content === '') {
    return { type: 'content', msg: '내용을 입력하세요.' };
  }

  if (content.length < min || content.length > max) {
    return {
      type: 'content',
      msg: letterLenLimit.getErrMsg()
    };
  }

  return { type: '', msg: '' };
};

export const checkRegFormValue = (value: RegisterValueTypes): ErrMsgTypes => {
  const { id, password, confirmPassword, nickname } = value;

  if (id.length < 2) {
    return { type: 'id', msg: '아이디를 두글자 이상 입력하세요' };
  }

  if (nickname === '' && nickname.length < 2) {
    return {
      type: 'nickname',
      msg: '닉네임을 두글자 이상 입력하세요'
    };
  }

  if (password.length < 2) {
    return {
      type: 'password',
      msg: '비밀번호를 두글자 이상 입력하세요'
    };
  }

  if (confirmPassword === '' && confirmPassword.length < 2) {
    return {
      type: 'confirmPassword',
      msg: '비밀번호 확인을 두글자 이상 입력하세요'
    };
  }

  if (confirmPassword === '' && password !== confirmPassword) {
    return {
      type: 'confirmPassword',
      msg: '비밀번호가 일치하지 않습니다'
    };
  }

  return { type: '', msg: '' };
};
