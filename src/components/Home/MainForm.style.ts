import { styled } from '@stitches/react';

export const StForm = styled('form', {
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  width: '30rem',
  height: '17rem',
  background: 'Violet',
  padding: '1rem',
  margin: '0 auto',
  marginTop: '1rem'
});

export const StFormTitle = styled('h3', {
  fontSize: '1.5rem',
  margin: '0 auto'
});

export const StFormInput = styled('input', {
  height: '2rem'
});

export const StFormTextArea = styled('textarea', {
  height: '4rem',
  resize: 'none'
});

export const StFormBtn = styled('button', {
  width: '4rem',
  height: '2rem',
  margin: '0 auto'
});

export const StErrMsg = styled('span', {
  marginLeft: '0.5rem',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  color: 'Red'
});
