import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography/Typography';
import MenuItem from "@material-ui/core/MenuItem";
import { createStyles, makeStyles, OutlinedInput, Theme } from '@material-ui/core';

export type DropdownKeyPair = {
  value: any,
  displayName: string
}

export type DropdownProps = {
  title: string,
  data: DropdownKeyPair[],
  disabled: boolean;
  defaultValue: any;
  onChange: (event: onChangeEvent) => void
}

export type onChangeEvent = React.ChangeEvent<{ name?: string; value: unknown }>

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      marginRight: '1%',
      display: 'flex',
      justifyContent: 'flex-start'
    },
    select: {
      borderRadius: '6px',
      direction: "rtl",
      height: '20%',
      marginRight: '1%',
      display: 'flex',
      justifyContent: 'center',
      '@media (min-width: 500px)': {
        width: '40%',
      },
      '@media (max-width: 500px)': {
        width: '97%',
      }
    },
    option: {
      height: '10%',
      justifyContent: 'flex-end'
    },
    optionDisplay: {
      direction: 'rtl',
      justifyContent: 'flex-end',
      textAlign: 'right'
    },
    input:{
      height: '10%'
    }
  }),
);

const Dropdown: React.FC<DropdownProps> = ({ title, data, disabled = true, defaultValue, onChange }) => {
  const classes = useStyles();

  const handleChange = (event: onChangeEvent) => {
    onChange(event)
  };

  return (
    <div style={{ minWidth: 120 }}>
      <Typography className={classes.title} align="right" variant="h6" component="span">{title}</Typography>

      <FormControl fullWidth variant="filled">
        <Select
          disabled={disabled}
          value={defaultValue ? defaultValue : undefined}
          defaultValue={defaultValue ? defaultValue : undefined}
          className={classes.select}
          onChange={handleChange}
          input={<OutlinedInput margin='dense' classes={{ input: classes.input }} />}
        >
          {data.map((rowData, index) => {
            return (
              <MenuItem className={classes.option} key={index} value={rowData.value}>
                <div className={classes.optionDisplay}>{rowData.displayName}</div>
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  );
}


export default Dropdown