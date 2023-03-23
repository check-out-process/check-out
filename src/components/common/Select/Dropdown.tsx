import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography } from '@mui/material';


export type DropdownKeyPair = {
    id: any,
    value: string
} 

export type DropdownProps = {
    title: string,
    data: DropdownKeyPair[],
    onChange: (event: SelectChangeEvent) => void
} 

const Dropdown: React.FC<DropdownProps> = ({title, data, onChange}) => {
  const [element, setElement] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setElement(event.target.value as string);
    onChange(event)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
        <Typography align="right" variant="h6" component="h2">{title}</Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={element}
          label={title}
          onChange={handleChange}
        >
            {data.map((rowData,index) => {
                return (
                    <MenuItem style={{justifyContent: 'flex-end'}} key={index} value={rowData.id}>{rowData.value}</MenuItem>          
                )
            })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Dropdown