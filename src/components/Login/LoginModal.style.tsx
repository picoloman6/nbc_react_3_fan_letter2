import { styled } from '@stitches/react';

import { modalColors } from '../../constants/colors';

export const StModalWrapper = styled('div', {
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: '0',
  width: '100%',
  height: '100%',
  backgroundColor: modalColors.wrapper,
  overflow: 'none'
});

export const StLoginModal = styled('div', {
  width: '50vw',
  maxWidth: '37rem',
  height: '70vh',
  maxHeight: '22rem',
  background: 'white'
});
