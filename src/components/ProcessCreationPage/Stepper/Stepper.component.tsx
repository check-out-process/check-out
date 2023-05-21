import React, { useContext, useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProcessSectorForm from '../ProcessCreationForms/ProcessSectorForm.component';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useStyles, ColorlibConnector } from './Stepper.component.styles';
import './Stepper.component.css';
import { ProcessCreationDetailsContext } from '../../../context/ProcessCreationContext';
import BaseModal from '../../Common/Modal/BaseModal.component';
import ProcessCreationBasicDetailsForm from '../ProcessCreationForms/ProcessCreationBasicDetailsForm.component';
import { createProcessInstance } from '../../../services/ProcessInstance.service';
import { ProcessSectorsContext } from '../../../context/ProcessSectorsContext';
import { buildProcessInstanceBody } from '../../Common/helpers/processInstance.helper';
import { HttpStatusCode } from 'axios';

export type StepperType = {
    title: string,
    element: JSX.Element
}

const steps: StepperType[] = [
    {
        title: 'בחירת מיטה',
        element: <ProcessCreationBasicDetailsForm />
    },
    {
        title: 'בחירת סקטור',
        element: <ProcessSectorForm />
    }
]


export default function HorizontalLinearStepper() {
    const navigate = useNavigate();
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [open, setOpen] = useState<boolean>(false);
    const [cancelModalOpen, setCancelModalOpen] = useState<boolean>(false);
    const { enqueueSnackbar } = useSnackbar();
    const { isCurrentStepValid, department, room, bed, properties } = useContext(ProcessCreationDetailsContext);
    const { isCreateProcessValid, processSectors } = useContext(ProcessSectorsContext);

    const isLastStep = (): boolean => activeStep === steps.length - 1;
    const handleNext = () => {
        if (isLastStep()) {
            setOpen(true)
        }
        else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const onSave = (confirm: boolean) => {
        if (confirm) {
            createProcessInstance(buildProcessInstanceBody(bed, room, department, properties, processSectors)).then(() => {
                enqueueSnackbar('התהליך נוצר בהצלחה', { variant: 'success' })
                navigate('/', { replace: true });
            }).catch((err) => {
                if (err.response?.status === HttpStatusCode.Conflict && err.response?.data?.message?.includes("bed")) {
                    enqueueSnackbar('קיים תהליך פתוח למיטה שנבחרה', { variant: 'error' })
                } else {
                    enqueueSnackbar('כישלון בנסיון יצירת התהליך', { variant: 'error' })
                }
                navigate('/', { replace: true });
            })
        } else {
            setOpen(false)
        }
    }

    const onCancel = (confirm: boolean) => {
        if (confirm) {
            navigate('/', { replace: true });
        } else {
            setCancelModalOpen(false)
        }
    }

    return (
        <div className={classes.root}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Stepper activeStep={activeStep} className={classes.stepper} connector={<ColorlibConnector />} >
                    {steps.map((step: StepperType, index) => {
                        return (
                            <Step key={step.title}>
                                <StepLabel>{step.title}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </div>
            <div>
                <Typography className={classes.instructions}>{steps[activeStep].element}</Typography>

                <div className={classes.buttonRoot}>
                    {activeStep > 0 ?
                        <Button variant="contained" color="primary" onClick={handleBack} className={classes.cancelButton}>
                            הקודם
                        </Button> :
                        null}

                    {activeStep === 0 ?
                        <Button variant="contained" color="primary" onClick={() => { setCancelModalOpen(true) }} className={classes.continueButton}
                        >ביטול</Button> :
                        null}

                    <Button variant="contained" color="primary" disabled={!isCurrentStepValid() || !isCreateProcessValid()} onClick={handleNext} className={classes.continueButton}
                    >
                        {isLastStep() ? 'סיום' : 'המשך'}
                    </Button>
                    {open ? <BaseModal open={open} setOpen={onSave} title="? האם ברצונך לשמור את התהליך" /> : null}
                    {cancelModalOpen ? <BaseModal open={cancelModalOpen} setOpen={onCancel} title="? האם ברצונך לבטל את יצירת התהליך" /> : null}
                </div>
            </div>
        </div>
    );
}
