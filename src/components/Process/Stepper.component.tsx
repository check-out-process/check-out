import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ProcessCreationProvider } from '../../context/ProcessCreationContext';
import ProcessCreationBasicDetailsForm from './ProcessCreationBasicDetailsForm.component';
import ProcessSectorForm from './ProcessSectorForm.component';
import { ProcessSectorsProvider } from '../../context/ProcessSectorsContext';

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
    }),
);

function getSteps() {
    return ['בחירת מיטה', 'בחירת סקטור'];
}

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return (
                <ProcessCreationProvider>
                    <ProcessCreationBasicDetailsForm />
                </ProcessCreationProvider>
            );
        case 1:
            return (

                <ProcessSectorsProvider>
                    <ProcessSectorForm />
                </ProcessSectorsProvider>


            )

        default:
            return 'Unknown step';
    }
}

export default function HorizontalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className={classes.root}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Stepper activeStep={activeStep} style={{ backgroundColor: "transparent", width: "40%" }}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: { optional?: React.ReactNode } = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </div>
            <div>

                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div className={classes.buttonRoot} style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        disabled={activeStep === 0}
                        variant="contained"
                        color="primary" onClick={handleBack} className={classes.cancelButton}>
                        הקודם
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.continueButton}
                    >
                        {activeStep === steps.length - 1 ? 'סיום' : 'המשך'}
                    </Button>
                </div>

            </div>
        </div>
    );
}
