// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { Typography } from '@mui/material';

// export type DropdownProps = {
//     title : string;
// }

// const Dropdown: React.FC<DropdownProps> = ({title, data, onChange}) => {
//     const [element, setElement] = React.useState('');
  
//     const handleChange = (event: SelectChangeEvent) => {
//       setElement(event.target.value as string);
//       onChange(event)
//     };
  
//     return (
//       <Box sx={{ minWidth: 120 }}>
//           <Typography variant="h6" component="h2">{title}</Typography>

//       </Box>
//     );
//   }
  
//   export default Dropdown