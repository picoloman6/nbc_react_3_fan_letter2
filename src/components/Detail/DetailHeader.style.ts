import { styled } from '@stitches/react';

export const StDetailHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '8rem',
  background: 'Pink'
});

export const StGoBackBtn = styled('button', {
  position: 'absolute',
  width: '5rem',
  height: '3rem',
  marginLeft: '2rem',
  background: 'none',
  cursor: 'pointer'
});

export const StDetailHeaderName = styled('h1', {
  margin: '0 auto',
  fontSize: '3rem'
});
