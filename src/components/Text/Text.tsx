import { memo } from 'react';
import { useStyles } from './styles';

interface TextProps {
  children: string | React.ReactChild | React.ReactChild[];
}

export const Text: React.FC<TextProps> = ({ children }) => {
  const classes = useStyles();
  return <span className={classes.text}>{children}</span>;
};

export default memo(Text);
