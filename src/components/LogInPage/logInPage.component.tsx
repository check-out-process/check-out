import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CheckOutLogo from '../../style/images/checkOutLogo.png';
import { login } from "../../services/Auth.service";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/UserContext";
import { enqueueSnackbar } from "notistack";

const useStyles = makeStyles(theme => ({
    main: {
        display: "flex",
        alignItems: "center"
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    logo: {
        height: '120px'
    },
    logInText: {
        marginTop: '-20px'
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const LogInPage: React.FC = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const onChangePhoneNumber = (e: any) => {
        const username = e.target.value;
        setPhoneNumber(username);
    };

    const onChangePassword = (e: any) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onLogIn = () => {
        login(phoneNumber, password).then((user) => {
            setUser(user);
            navigate('/', { replace: true });
        }).catch(err => {
            if (err.response.status === 404 || 400) {
                enqueueSnackbar('פרטים לא נכונים', { variant: 'error' })
            } else {
                enqueueSnackbar('הייתה בעיה בכניסה למערכת', { variant: 'error' })
            }

        });
    }

    return (
        <Container component="main" maxWidth="xs" className={classes.main}>
            <CssBaseline />
            <div className={classes.paper}>
                <img src={CheckOutLogo} className={classes.logo} />
                <Typography component="h1" variant="h4" className={classes.logInText}>
                    התחברות
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="phoneNumber"
                        placeholder="*מספר טלפון"
                        name="phoneNumber"
                        autoComplete="phoneNumber"
                        autoFocus
                        onChange={onChangePhoneNumber}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        placeholder="*סיסמה"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={onChangePassword}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onLogIn}
                    >
                        כניסה
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default LogInPage