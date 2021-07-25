import React from 'react';
import { styled } from '@material-ui/core/styles';
import {
  compose,
  spacing,
  palette,
  flexbox,
  display,
  borderRadius,
} from '@material-ui/system';

const Box = styled('div')(
  compose(spacing, palette, flexbox, display, borderRadius)
);

export interface IMaterialBox {
  children: React.ReactNode;
}

const MaterialBox = ({ children }: IMaterialBox) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    color="white"
    bgcolor="#3f51b5"
    p={1}
    borderRadius="1rem"
  >
    {children}
  </Box>
);

export default MaterialBox;
