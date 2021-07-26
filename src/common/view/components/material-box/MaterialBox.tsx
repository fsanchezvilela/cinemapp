import React from 'react';
import style from './MaterialBox.module.scss';

export interface IMaterialBox {
  children?: React.ReactNode;
}

const MaterialBox = ({ children }: IMaterialBox) => {
  return <div className={style['material-box']}>{children}</div>;
};

export default MaterialBox;
