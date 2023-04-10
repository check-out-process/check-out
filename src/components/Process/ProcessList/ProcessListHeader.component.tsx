import React, { useState } from "react";
import { Process } from "../../../services/models/Process";
import { Button, Typography} from "@material-ui/core";
import ProcessFilters from "./ProcessHeaderFilters.component";


export type ProcessListHeaderProps = {
  processes: Process[];
  setProcesses: (processes: Process[]) => void
}


const ProcessListHeader: React.FC<ProcessListHeaderProps> = ({ processes, setProcesses }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Typography style={{ marginBottom: '10px' }} align='center' variant="h5" component="h2">התהליכים שלי</Typography>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', width: '94%' }}>
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
