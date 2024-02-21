import { styled } from '@stitches/react';

export const UserInfoWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '70%',
  gap: '2rem'
});

export const UserInfoId = styled('span', {
  fontSize: '1.2rem',
  color: 'Gray'
});

export const UserInfoName = styled('span', {
  fontSize: '2rem',
  fontWeight: 'bold'
});

export const UserInfoImg = styled('img', {
  width: '5rem',
  height: '5rem',
  borderRadius: '3rem'
});
