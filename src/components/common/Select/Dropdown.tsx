import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography/Typography';
import MenuItem from "@material-ui/core/MenuItem";


export type DropdownKeyPair = {
  id: any,
  value: string
}

export type DropdownProps = {
  title: string,
  data: DropdownKeyPair[],
  onChange: (event: onChangeEvent) => void
}

export type onChangeEvent = React.ChangeEvent<{ name?: string; value: unknown }>

const Dropdown: React.FC<DropdownProps> = ({ title, data, onChange }) => {
  const [element, setElement] = React.useState('');
  const handleChange = (event: onChangeEvent) => {
    setElement(event.target.value as string);
    onChange(event)
  };

  return (
    <div style={{ minWidth: 120 }}>
      <Typography style={{ marginRight: '2%', width: '30%' }} align="right" variant="h6" component="h2">{title}</Typography>

      <FormControl fullWidth variant="filled" style={{ margin: '1%' }}>
        <Select
          value={element}
          style={{ direction: "rtl", width: '80%', marginRight: '1%', display: 'flex', justifyContent: 'flex-start' }}
          onChange={handleChange}
        >
          {data.map((rowData, index) => {
            return (
              <MenuItem style={{ justifyContent: 'flex-end', textAlign: 'right' }} key={index} value={rowData.id}>
                <Typography align="right" variant="h6" component="h1">{rowData.value}</Typography>
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  );
}


export default Dropdown