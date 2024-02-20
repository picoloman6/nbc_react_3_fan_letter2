import { styled } from '@stitches/react';

const flex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const StSelectWrapper = styled('div', {
  ...flex,
  width: '50%',
  maxWidth: '43rem',
  height: '20%',
  border: '1px solid black',
  marginTop: '5rem',
  gap: '1rem'
});

export const StSelectBtnWrapper = styled('div', {
  ...flex,
  width: '20%',
  height: '75%',
  border: '1px solid black',
  cursor: 'pointer',
  variants: {
    selected: {
      true: {
        background: 'Blue',
        color: 'White'
      }
    }
  }
});
