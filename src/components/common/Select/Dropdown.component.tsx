import React, { useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography/Typography';
import MenuItem from "@material-ui/core/MenuItem";
import { createStyles, LinearProgress, makeStyles, Theme } from '@material-ui/core';
import './Dropdown.component.css'

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
      marginRight: '18px',
      width: '100%'
    },
    select: {
      borderRadius:'6px',
      direction: "rtl",
      height: '45px',
      marginRight: '1%',
      display: 'flex',
      justifyContent: 'flex-start',
      '@media (min-width: 500px)': {
        width: '40%',
      },
      '@media (max-width: 500px)': {
        width: '80%',
      }
    },
    option: {
      height: '10%',
      justifyContent: 'flex-end'
    },
    optionDisplay: {
      justifyContent: 'flex-end',
      marginBottom: '20px',
      textAlign: 'right'
    },
    underline: {
      color: 'red' ,
      '&::after': {
        border: '2px solid red'
      }
    }

  }),
);

const Dropdown: React.FC<DropdownProps> = ({ title, data, disabled = true, defaultValue, onChange }) => {
  const [element, setElement] = React.useState();
  const classes = useStyles();

  const handleChange = (event: onChangeEvent) => {
    console.log(element)
    setElement(event.target.value as any);
    onChange(event)
  };

  return (
    <div style={{ minWidth: 120 }}>
      <Typography className={classes.title} align="right" variant="h6" component="h2">{title}</Typography>

      <FormControl fullWidth variant="filled">

        {<Select
          disabled={disabled}
          value= {defaultValue ? defaultValue: undefined}
          defaultValue={defaultValue ? defaultValue: undefined}
          className={classes.select}
          onChange={handleChange}
        >
          <MenuItem value={undefined}>
            <h1>None</h1>
          </MenuItem>
          {data.map((rowData, index) => {
            return (
              <MenuItem className={classes.option} key={index} value={rowData.value}>
                <div className={classes.optionDisplay}>{rowData.displayName}</div>
              </MenuItem>
            )
          })}
        </Select>}
      </FormControl>
    </div>
  );
}


export default Dropdown