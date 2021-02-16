import React, { memo } from 'react';
import { useStyles } from './styles';

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

export const Button: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  );
};

export default memo(Button);
