import {
  UserInfoWrapper,
  UserInfoId,
  UserInfoName,
  UserInfoImg
} from './UserInfo.style';

import { UserInfoTypes } from '../../types/users';
import { userDefaultImg } from '../../constants';

interface UserInfoPropsType {
  userInfo: UserInfoTypes;
  handleChangeIsEdit: (e: React.FormEvent) => void;
}

const UserInfo = ({ userInfo, handleChangeIsEdit }: UserInfoPropsType) => {
  const { id, nickname, avatar } = userInfo;

  return (
    <UserInfoWrapper>
      <UserInfoImg src={avatar ? avatar : userDefaultImg} alt='유저이미지' />
      <UserInfoName>{nickname}</UserInfoName>
      <UserInfoId>{id}</UserInfoId>
      <div>
        <button onClick={handleChangeIsEdit}>수정하기</button>
      </div>
    </UserInfoWrapper>
  );
};

export default UserInfo;
