import { styled } from '@stitches/react';

export const StHeaderWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '20rem',
  background: 'Pink'
});

export const StHeaderTitle = styled('h1', {
  fontSize: '3rem'
});

export const StLoginSpan = styled('span', {
  borderBottom: '1px solid black',
  cursor: 'pointer',
  variants: {
    marginTop: {
      true: {
        marginTop: '1rem'
      }
    }
  }
});
