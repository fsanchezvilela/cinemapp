import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export interface IMaterialContainer {
  children: React.ReactNode;
}

const MaterialContainer = ({ children }: IMaterialContainer) => (
  <>
    <CssBaseline />
    <Container maxWidth="lg">{children}</Container>
  </>
);

export default MaterialContainer;
