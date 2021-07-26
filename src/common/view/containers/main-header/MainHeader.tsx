import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './MainHeader.module.scss';

function MainHeader() {
  return (
    <div className={styles['main-header']}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={styles['main-header__title']}>
            CINE-M-APP
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainHeader;
