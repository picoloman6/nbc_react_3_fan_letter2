import { useState } from 'react';

import { UserInfoImg, UserInfoWrapper } from './UserInfo.style';
import { StFormInput, StInputWapper } from '../../pages/AuthPage.style';

import { UserInfoTypes } from '../../types/users';
import { userDefaultImg } from '../../constants';
import { getCookie } from '../../controllers/cookies';
import { __patchUserInfo } from '../../redux/users';
import { useAppDispatch } from '../../redux/config';

interface EditInfoPropsType {
  userInfo: UserInfoTypes;
  handleChangeIsEdit: (e: React.FormEvent) => void;
}

const EditInfo = ({ userInfo, handleChangeIsEdit }: EditInfoPropsType) => {
  const [newPhoto, setNewPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>(userDefaultImg);
  const [newName, setNewName] = useState<string>('');

  const dispatch = useAppDispatch();
  const { nickname } = userInfo;
  const token = getCookie('access_token');

  const handleChangeNewPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files === null || files?.length === 0) {
      setNewPhoto(null);
      setPreview(userDefaultImg);
      return;
    }

    const file = files[0];
    const reader = new FileReader();

    setNewPhoto(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setPreview(reader.result);
      }
    };
  };

  const handleClickEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const formData = new FormData();

    if (newPhoto !== null) {
      formData.append('avatar', newPhoto);
    }

    if (newName !== '' && newName !== nickname) {
      formData.append('nickname', newName);
    }

    if (formData.get('avatar') || formData.get('nickname')) {
      dispatch(__patchUserInfo({ token, formData }));
      handleChangeIsEdit(e);
    }
  };

  return (
    <UserInfoWrapper>
      <UserInfoImg src={preview} />
      <StInputWapper>
        <label>프로필 사진</label>
        <input type='file' accept='image/*' onChange={handleChangeNewPhoto} />
      </StInputWapper>
      <StInputWapper>
        <label>유저닉네임</label>
        <StFormInput
          placeholder={nickname}
          onChange={(e) => setNewName(e.target.value)}
        />
      </StInputWapper>
      <div>
        <button onClick={handleChangeIsEdit}>돌아가기</button>
        <button onClick={handleClickEdit}>수정하기</button>
      </div>
    </UserInfoWrapper>
  );
};

export default EditInfo;
