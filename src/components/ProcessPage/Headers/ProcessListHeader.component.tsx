import React, { useState } from "react";
import { Process } from "../../../services/models/Process";
import { Button } from "@material-ui/core";
import ProcessFilters from "./ProcessFilters.component";
import { useStyles } from "./ProcessListHeader.component.styles";
import PageHeader from "../Header/header.component";


export type ProcessListHeaderProps = {
  processes: Process[];
  setProcesses: (processes: Process[]) => void
}


const ProcessListHeader: React.FC<ProcessListHeaderProps> = ({ processes, setProcesses }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();


  return (
    <div>
      <PageHeader name='התהליכים שלי' isFirstPage={true} />
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
