import React, { useState } from 'react';

import {
  ClickFormTypes,
  ErrMsgTypes,
  LetterInputTypes,
  MemberTypes
} from '../../types/letters';
import {
  StForm,
  StFormTitle,
  StFormInput,
  StFormTextArea,
  StFormBtn,
  StErrMsg
} from './MainForm.style';

interface MainFormPropsTypes {
  member: MemberTypes;
  errMsg: ErrMsgTypes;
  onClickForm: ClickFormTypes;
}

const MainForm = ({ member, errMsg, onClickForm }: MainFormPropsTypes) => {
  const [input, setInput] = useState<LetterInputTypes>({
    name: '',
    content: ''
  });

  const onChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <StForm
      onSubmit={(e) => onClickForm(e, input.name, input.content, setInput)}>
      <StFormTitle>현재 {member}에게 보내고 있습니다</StFormTitle>
      <div>
        <label htmlFor='main-form-name'>닉네임</label>
        <StErrMsg>{errMsg.type === 'name' ? errMsg.msg : ''}</StErrMsg>
      </div>
      <StFormInput
        id='main-form-name'
        type='text'
        name='name'
        value={input.name}
        placeholder='이름을 입력하세요'
        autoComplete='off'
        onChange={onChangeForm}
      />
      <div>
        <label htmlFor='main-form-content'>내용</label>
        <StErrMsg>{errMsg.type === 'content' ? errMsg.msg : ''}</StErrMsg>
      </div>
      <StFormTextArea
        id='main-form-content'
        name='content'
        value={input.content}
        placeholder='내용을 입력하세요'
        onChange={onChangeForm}
      />
      <StFormBtn>제출</StFormBtn>
    </StForm>
  );
};

export default MainForm;
