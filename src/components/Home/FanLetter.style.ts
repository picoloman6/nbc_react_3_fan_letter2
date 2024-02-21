import { styled } from '@stitches/react';

export const StFanLetterWrapper = styled('li', {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '30rem',
  height: '8rem',
  background: 'Gray',
  padding: '1rem',
  margin: '1rem',
  cursor: 'pointer'
});

export const StFanLetterName = styled('h3', {
  fontSize: '1.5rem'
});

export const StLetterContentsWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  width: '70%',
  height: '100%'
});
