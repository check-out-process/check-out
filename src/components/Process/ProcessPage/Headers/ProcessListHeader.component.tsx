import React, { useState } from "react";
import { Process } from "../../../../services/models/Process";
import { Button, Typography} from "@material-ui/core";
import ProcessFilters from "./ProcessFilters.component";
import { useStyles } from "./ProcessListHeader.component.style";


export type ProcessListHeaderProps = {
  processes: Process[];
  setProcesses: (processes: Process[]) => void
}


const ProcessListHeader: React.FC<ProcessListHeaderProps> = ({ processes, setProcesses }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();


  return (
    <div>
      <Typography className={classes.title} align='center' variant="h5" component="h2">התהליכים שלי</Typography>

      <div className={classes.optionRow}>
        <div className={classes.buttonDiv}>
        <Button variant="contained" color="primary" onClick={() => { setOpen(true) }}>חיפוש מתקדם</Button>
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
