import { styled } from '@stitches/react';

import { modalColors } from '../../constants/colors';

const flex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const StModalWrapper = styled('div', {
  position: 'fixed',
  ...flex,
  flexDirection: 'column',
  top: '0',
  width: '100%',
  height: '100%',
  backgroundColor: modalColors.wrapper,
  overflow: 'none'
});

export const StGoHomeBtn = styled('button', {
  width: '30rem',
  height: '5rem',
  background: 'Pink',
  cursor: 'pointer'
});

export const StLoginModal = styled('form', {
  ...flex,
  flexDirection: 'column',
  width: '50vw',
  maxWidth: '37rem',
  background: 'Violet',
  gap: '2.5rem',
  variants: {
    isLogin: {
      true: {
        height: '75vh',
        maxHeight: '24rem'
      },
      false: {
        height: '95vh',
        maxHeight: '40rem'
      }
    }
  }
});

export const StModalTitle = styled('h1', {
  fontSize: '2rem',
  fontWeight: 'bold'
});

export const StInputErrWrapper = styled('div', {
  width: '60%'
});

export const StInputWapper = styled('div', {
  ...flex,
  justifyContent: 'space-between',
  width: '100%'
});

export const StBtnWrapper = styled('div', {
  ...flex,
  flexDirection: 'column'
});

export const StFormInput = styled('input', {
  height: '2rem'
});
