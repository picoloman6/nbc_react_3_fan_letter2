import { letterLenLimit } from '../constants';
import { ErrMsgTypes } from '../types/letters';

export const convertDate = (dateTime: number) => {
  const dateObj = new Date(dateTime);
  const year = dateObj.getFullYear();
  const mon = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const hour = dateObj.getHours();
  const min = dateObj.getMinutes();

  return `${year}년 ${mon}월 ${date}일 ${hour}시 ${min}분`;
};

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
