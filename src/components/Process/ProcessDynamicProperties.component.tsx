import { Accordion, AccordionSummary, makeStyles, createStyles, Theme, AccordionDetails } from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import TextareaAutosize from '@material-ui/core/TextareaAutosize/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import React, { useContext, useEffect, useState } from 'react';
import { ProcessCreationDetailsContext } from '../../context/ProcessCreationContext';
import { ProcssPropertiesSchema } from '../../services/models/Process';
import { getProcessPropertiesSchema } from '../../services/Process.service';
import DynamicPropertiesFactory from '../Common/DynamicProperties/PropertiesFactory.component';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: 'transparent',
            marginRight: '1%',
            marginTop: '20px',
            width: '100%',

            '@media (min-width: 500px)': {
                width: '40%',
            },
            '@media (max-width: 500px)': {
                width: '80%',
            }
        },
        textArea: {
            justifyContent: 'flex-start',
            '@media (min-width: 500px)': {
                width: '40%',
            },
            '@media (max-width: 500px)': {
                width: '80%',
            },
            direction: "rtl",
            marginRight: '1%',
            display: 'flex',
            backgroundColor: "transparent"
        }
    }),
);

const ProcessBasicDetailsForm = () => {
    // const [processProperties, setProcessProperties] = useState<ProcssPropertiesSchema[]>([])
    // const { processDetails, setProcessDetails } = useContext(ProcessCreationDetailsContext);
    // const classes = useStyles();


    // useEffect(() => {
    //     fetchProcessProperties()
    // }, [])

    // const fetchProcessProperties = () => {
    //     getProcessPropertiesSchema().then((processProperties: ProcssPropertiesSchema[]) => {
    //         setProcessProperties(processProperties)
    //     })
    // }

    // const onChange = (key: any, value: any): void => {
    //     processDetails.properties[key] = value
    //     setProcessDetails({ ...processDetails })
    // }

    return (
        <div>
            {/* <Typography style={{ marginTop: '1%', marginRight: '2%' }} align="right" variant="h6" component="h2">תיאור חופשי:</Typography>
            <TextareaAutosize minRows={6} placeholder="תיאור" className={classes.textArea} /> */}

            {/* <Accordion className={classes.root}>
                <AccordionSummary style={{borderBottom: '1px solid rgba(0, 0, 0, .125)',boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}}
                    expandIcon={<ExpandMore />}
                >
                    <Typography style={{ marginRight: '2%' }} align="right" variant="h6" component="h2">הוספת פרטים נוספים על התהליך:</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <div style={{ marginTop: "2%",width:'100%' }}>
                        <Typography style={{ marginTop: '1%', marginRight: '2%' }} align="right" variant="h6" component="h2">תיאור חופשי:</Typography>
                        <TextareaAutosize minRows={6} placeholder="תיאור" style={{ direction: "rtl", width: '79%', marginRight: '1%', display: 'flex', justifyContent: 'flex-start' }} />

                        <div style={{ marginTop: '1%'}}>
                            {processProperties.map((property: ProcssPropertiesSchema) => {
                                return (
                                    <DynamicPropertiesFactory property={property} onChange={onChange} />
                                )
                            })}
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion> */}

        </div>
    )

}

export default ProcessBasicDetailsForm