import { createUseStyles } from 'styles';

export const useStyles = createUseStyles({
  myButton: {
    color: 'green',
    margin: {
      top: 5,
      right: 0,
      bottom: 0,
      left: '1rem',
    },
    '& span': {
      fontWeight: 'bold',
    },
  },
  myLabel: {
    fontStyle: 'italic',
    marginBottom: 5,
    justifyContent: 'center',
  },
});
