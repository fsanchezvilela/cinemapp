import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export interface IMaterialContainer {
  children?: React.ReactNode;
  maxWidth?: false | 'md' | 'lg' | 'xs' | 'sm' | 'xl';
}

const MaterialContainer = ({ children, maxWidth }: IMaterialContainer) => (
  <>
    <CssBaseline />
    <Container maxWidth={maxWidth ?? 'lg'}>{children}</Container>
  </>
);

export default MaterialContainer;
