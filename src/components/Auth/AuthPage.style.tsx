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
  top: '0',
  width: '100%',
  height: '100%',
  backgroundColor: modalColors.wrapper,
  overflow: 'none'
});

export const StLoginModal = styled('form', {
  ...flex,
  flexDirection: 'column',
  width: '50vw',
  maxWidth: '37rem',
  background: 'white',
  gap: '3rem',
  variants: {
    isLogin: {
      true: {
        height: '70vh',
        maxHeight: '22rem'
      },
      false: {
        height: '85vh',
        maxHeight: '30rem'
      }
    }
  }
});

export const StModalTitle = styled('h1', {
  fontSize: '2rem',
  fontWeight: 'bold'
});

export const StInputWapper = styled('div', {
  ...flex,
  justifyContent: 'space-between',
  width: '60%'
});