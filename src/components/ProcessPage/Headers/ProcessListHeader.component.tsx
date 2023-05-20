import React, { useState } from "react";
import { ProcessInstance } from "@checkout/types";
import { Button } from "@material-ui/core";
import ProcessFilters from "./ProcessFilters.component";
import { useStyles } from "./ProcessListHeader.component.styles";
import PageHeader from "../Header/header.component";
import { useNavigate } from 'react-router-dom';

export type ProcessListHeaderProps = {
  processes: ProcessInstance[];
  setProcesses: (processes: ProcessInstance[]) => void
}


const ProcessListHeader: React.FC<ProcessListHeaderProps> = ({ processes, setProcesses }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();

  const isClickScanBed = () => {
    navigate('/scanBed')
  }

  return (
    <div>
      <PageHeader name='התהליכים שלי' isFirstPage={true} />
      <div className={classes.optionRow}>
        <div className={classes.buttonDiv}>
          <Button variant="contained" color="primary" onClick={() => { setOpen(true) }} className={classes.button}>חיפוש מתקדם</Button>
          <Button variant="contained" color="primary" onClick={() => { isClickScanBed() }} className={classes.button}>סריקת מיטה</Button>
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
