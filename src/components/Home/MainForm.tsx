import React, { useState } from 'react';

import {
  StForm,
  StFormTitle,
  StFormTextArea,
  StFormBtn,
  StErrMsg
} from './MainForm.style';

import { letterLenLimit } from '../../constants';
import { ClickFormTypes, ErrMsgTypes, MemberTypes } from '../../types/letters';

interface MainFormPropsTypes {
  member: MemberTypes;
  errMsg: ErrMsgTypes;
  onClickForm: ClickFormTypes;
}

const MainForm = ({ member, errMsg, onClickForm }: MainFormPropsTypes) => {
  const [content, setContent] = useState<string>('');

  const onChangeForm = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <StForm onSubmit={(e) => onClickForm(e, content, setContent)}>
      <StFormTitle>현재 {member}에게 보내고 있습니다</StFormTitle>
      <div>
        <label htmlFor='main-form-content'>내용</label>
        <StErrMsg>{errMsg.type === 'content' ? errMsg.msg : ''}</StErrMsg>
      </div>
      <StFormTextArea
        id='main-form-content'
        name='content'
        value={content}
        placeholder={`${letterLenLimit.getErrMsg()}`}
        onChange={onChangeForm}
      />
      <StFormBtn>제출</StFormBtn>
    </StForm>
  );
};

export default MainForm;
