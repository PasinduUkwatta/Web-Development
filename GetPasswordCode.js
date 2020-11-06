import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import {useHistory} from "react-router-dom";
import axios from "axios";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/#">
                Recce Labs (PVT) Ltd
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function GetPasswordCode() {
    const classes = useStyles();
    const history = useHistory();

    const [firstName,setFirstName]=useState("")
    useEffect(()=>{},[firstName])

    const [lastName,setLastName]=useState("")
    useEffect(()=>{},[lastName])

    const [email,setEmail]=useState("")
    useEffect(()=>{},[email])

    const [password,setPassword]=useState("")
    useEffect(()=>{},[password])

    const [confirmCode,setConfirmCode]=useState("")
    useEffect(()=>{},[confirmCode])




    const handleClick = (e) => {
        e.preventDefault()
        console.log(confirmCode)
        console.log(typeof (confirmCode))
        console.log(typeof (window.localStorage.getItem('code')))
        console.log( (window.localStorage.getItem('code')))

        if(confirmCode===window.localStorage.getItem('code')){
            console.log("Valid Code")
            history.push("/reset-password")
        }
        else{
            window.location =("/get-password-code")

        }


    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <VpnKeyIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Confirm Code to Reset The Password

                </Typography>
                <br/>
                <br/>
                <Grid item xs={12} >
                    <h5 style={{justifyContent: 'center'}}>Enter The Confirmation Code that We send to Your Previous Email Address </h5>
                    <h5 style={{justifyContent: 'center'}}>Please Check Your Email &  Enter The Code Confirmation Code Here !</h5>

                </Grid>


                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="confirmCode"
                                label="Enter Your Confirmation Code"
                                name="confirmCode"
                                autoComplete="confirmCode"
                                value={confirmCode}
                                onChange={e => setConfirmCode(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            {/*<FormControlLabel*/}
                            {/*    control={<Checkbox value="allowExtraEmails" color="primary" />}*/}
                            {/*    label="I want to receive inspiration, marketing promotions and updates via email."*/}
                            {/*/>*/}
                        </Grid>
                    </Grid>
                    <div style={{justifyContent: 'center'}}>
                        <Button
                            style={{maxWidth:"200px",marginRight:"20px",marginLeft:"140px",justifyContent: 'center'}}
                            type="submit"

                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleClick}
                        >
                            Confirm Code
                        </Button>


                    </div>

                    <Grid container justify="flex-end">
                        {/*<Grid item xs>*/}
                        {/*    <Link href="/sign-in" variant="body2">*/}
                        {/*        Already have an account? Sign in*/}
                        {/*    </Link>*/}
                        {/*</Grid>*/}
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}