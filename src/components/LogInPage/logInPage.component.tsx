import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CheckOutLogo from '../../style/images/checkOutLogo.png';
import { UserContext } from "../../context/UserContext";
import { Role } from "../../services/models/User";

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

export default function LogInPage() {
    const { setUser } = useContext(UserContext);
    const classes = useStyles();


    const logIn = () => {
        const user = {
            id: 1,
            fullname: "string",
            username: "string",
            role: Role.Process_Executer
        }

        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('logIn', 'true');
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
                        id="email"
                        placeholder="*איימל"
                        name="email"
                        autoComplete="email"
                        autoFocus
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
                    />
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            שכחת את הסיסמה?
                        </Link>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={logIn}
                    >
                        כניסה
                    </Button>
                </form>
            </div>
        </Container>
    );
}