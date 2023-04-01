import React, { useContext, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProcessCreationBasicDetailsForm from './ProcessCreationBasicDetailsForm.component';
import ProcessSectorForm from './ProcessSectorForm.component';
import { useNavigate } from 'react-router-dom';
import BaseModal from '../Common/Modal/BaseModal.component';
import { ProcessCreationDetailsContext } from '../../context/ProcessCreationContext';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            '@media (max-width: 500px)': {
                width: '100%',

            }
        },
        buttonRoot: {
            marginRight: '1%',
            display: 'flex',
            marginTop: '3%',
            alignItems: 'flex-end'
        },
        cancelButton: {
            textAlign: 'center',
            justifyContent: 'flex-start',
            '@media (min-width: 500px)': {
                width: '20%',
            },
            '@media (max-width: 500px)': {
                width: '40%',
            }
        },
        continueButton: {
            marginRight: '1%',
            textAlign: 'center',
            justifyContent: 'flex-start',
            '@media (min-width: 500px)': {
                width: '20%',
            },
            '@media (max-width: 500px)': {
                width: '40%',
            }
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        stepper: {
            backgroundColor: "transparent",
            width: "40%",
            '@media (max-width: 500px)': {
                width: '90%',
            }
        }
    }),
);

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
    const isLastStep = (): boolean => activeStep === steps.length - 1;
    const { isCurrentStepValid } = useContext(ProcessCreationDetailsContext);

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
            navigate('/home', { replace: true });
        } else {
            setOpen(false)
        }
    }

    return (
        <div className={classes.root}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Stepper activeStep={activeStep} className={classes.stepper}>
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

                <div className={classes.buttonRoot} style={{ display: "flex", justifyContent: "center" }}>
                    <Button disabled={activeStep === 0} variant="contained" color="primary" onClick={handleBack} className={classes.cancelButton}>
                        הקודם
                    </Button>
                    <Button variant="contained" color="primary" disabled={!isCurrentStepValid()} onClick={handleNext} className={classes.continueButton}
                    >
                        {isLastStep() ? 'סיום' : 'המשך'}
                    </Button>
                    {open ? <BaseModal open={open} setOpen={onSave} /> : null}
                </div>
            </div>
        </div>
    );
}
