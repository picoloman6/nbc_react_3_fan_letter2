import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  StDetailHeader,
  StGoBackBtn,
  StDetailHeaderName
} from './DetailHeader.style';

const DetailHeader = React.memo(({ name }: { name: string }) => {
  const navigate = useNavigate();

  const onClickGoBack = () => {
    navigate(-1);
  };

  return (
    <StDetailHeader>
      <StGoBackBtn onClick={onClickGoBack}>돌아가기</StGoBackBtn>
      <StDetailHeaderName>From.{name}</StDetailHeaderName>
    </StDetailHeader>
  );
});

export default DetailHeader;
