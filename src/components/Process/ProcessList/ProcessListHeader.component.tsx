import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Process } from "../../../services/models/Process";
import { Button, Divider, Drawer, IconButton, OutlinedInput, TextField, Theme, Typography, createStyles, makeStyles } from "@material-ui/core";
import ProcessHeadersFilters from "./ProcessHeaderFilters.component";
import TuneIcon from '@mui/icons-material/Tune';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ProcessFilters from "./ProcessHeaderFilters.component";


export type ProcessListHeaderProps = {
  processes: Process[];
  setProcesses: (processes: Process[]) => void
}


const ProcessListHeader: React.FC<ProcessListHeaderProps> = ({ processes, setProcesses }) => {
  const [open, setOpen] = useState(false);


  const onFinishedOptionClick = () => {
    const finsihedProcesses: Process[] = processes.filter((process: Process) => process.status === "סיום")
    setProcesses(finsihedProcesses)
  }

  const onInProgressOptionClick = () => {
    const inProgressProcesses: Process[] = processes.filter((process: Process) => process.status === "בתהליך")
    setProcesses(inProgressProcesses)
  }



  return (
    <div>
      <Typography style={{ marginBottom: '10px' }} align='center' variant="h5" component="h2">התהליכים שלי</Typography>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', width: '94%' }}>
          <IconButton onClick={() => { setOpen(true) }}>
            <TuneIcon sx={{ fontSize: "50px" }} />
          </IconButton>
        </div>
      </div>

      <ProcessFilters
        open={open}
        setOpen={setOpen}
        processes={processes}
        setProcesses={setProcesses} />
    </div>

  );

}

export default ProcessListHeader
