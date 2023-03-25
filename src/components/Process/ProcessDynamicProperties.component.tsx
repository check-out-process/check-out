import TextareaAutosize from '@material-ui/core/TextareaAutosize/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import React, { useContext, useEffect, useState } from 'react';
import { ProcessCreationDetailsContext } from '../../context/ProcessCreationContext';
import { ProcssPropertiesSchema } from '../../services/models/Process';
import { getProcessPropertiesSchema } from '../../services/Process.service';
import DynamicPropertiesFactory from '../Common/DynamicProperties/PropertiesFactory.component';


const ProcessBasicDetailsForm = () => {
    const [processProperties, setProcessProperties] = useState<ProcssPropertiesSchema[]>([])
    const { processDetails, setProcessDetails } = useContext(ProcessCreationDetailsContext);


    useEffect(() => {
        fetchProcessProperties()
    }, [])

    const fetchProcessProperties = () => {
        getProcessPropertiesSchema().then((processProperties: ProcssPropertiesSchema[]) => {
            setProcessProperties(processProperties)
        })
    }

    const onChange = (key: any, value: any): void => {
        processDetails.properties[key] = value
        console.log(processDetails)
        setProcessDetails({ ...processDetails })
    }

    return (
        <div>
            <Typography style={{ marginRight: '2%' }} align="right" variant="h6" component="h2">הוספת פרטים נוספים על התהליך:</Typography>

            <div style={{ marginTop: "2%" }}>
                <Typography style={{ marginTop: '1%', marginRight: '2%' }} align="right" variant="h6" component="h2">תיאור חופשי:</Typography>
                <TextareaAutosize minRows={6} placeholder="תיאור" style={{ direction: "rtl", width: '79%', marginRight: '1%', display: 'flex', justifyContent: 'flex-start' }} />

                <div style={{ marginTop: '1%' }}>
                    {processProperties.map((property: ProcssPropertiesSchema) => {
                        return (
                            <DynamicPropertiesFactory property={property} onChange={onChange} />
                        )
                    })}
                </div>
            </div>
        </div>
    )

}

export default ProcessBasicDetailsForm