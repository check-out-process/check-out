import TextareaAutosize from '@material-ui/core/TextareaAutosize/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { ProcssPropertiesSchema } from '../../services/models/Process';
import { getProcessPropertiesSchema } from '../../services/Process.service';
import DynamicPropertiesFactory from '../Common/DynamicProperties/PropertiesFactory';


const ProcessBasicDetailsForm = () => {
    const [processProperties, setProcessProperties] = useState<ProcssPropertiesSchema[]>([])

    useEffect(() => {
        fetchProcessProperties()
    }, [])

    const fetchProcessProperties = () => {
        getProcessPropertiesSchema().then((processProperties: ProcssPropertiesSchema[]) => {
            setProcessProperties(processProperties)
        })
    }

    return (
        <div>
            <Typography style={{marginRight:'2%'}} align="right" variant="h6" component="h2">הוספת פרטים נוספים על התהליך:</Typography>

            <div style={{marginTop:"2%"}}>
                <Typography style={{marginTop:'1%',marginRight:'2%'}} align="right" variant="h6" component="h2">תיאור חופשי:</Typography>
                <TextareaAutosize minRows={6} placeholder="תיאור" style={{ direction: "rtl", width: '79%', marginRight: '1%', display: 'flex', justifyContent: 'flex-start' }} />

                <div style={{ marginTop: '1%' }}>
                    {processProperties.map(processProperty => {
                        return (
                            <DynamicPropertiesFactory {...processProperty} />
                        )
                    })}
                </div>
            </div>
        </div>
    )

}

export default ProcessBasicDetailsForm