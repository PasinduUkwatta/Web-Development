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

export default function ChangePassword() {
    const classes = useStyles();
    const history = useHistory();

    const [password,setPassword]=useState("")
    useEffect(()=>{},[password])




    const handleClick = (e) => {
        // history.push("/sign-in")
        e.preventDefault()

        axios.post("/password-validate",{
            password:password

        })
            .then(response => {
                console.log(response)
                if(response.data.password_responce==="401"){
                    console.log("Invalid Password")
                    window.location="/reset-password"

                }
                else {
                    console.log("valid Password")
                    localStorage.setItem('password',password)
                    console.log(window.localStorage.getItem('id'))
                    console.log(window.localStorage.getItem('password'))
                    axios.post("/change-password",{
                        id:window.localStorage.getItem('id'),
                        password:window.localStorage.getItem('password')

                    })
                        .then(response=>{
                            console.log(response)
                            console.log(response.data.result[0].msg)
                            if(response.data.result[0].msg==="success"){
                                window.localStorage.clear();

                                console.log("Sign-In Page")

                                history.push("/sign-in")
                            }
                        })

                }



            })




    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <VpnKeyIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Reset The Password

                </Typography>
                <br/>
                <br/>
                <Grid item xs={12} >
                    <h5 style={{justifyContent: 'center'}}>Enter The New Password For Your Account</h5>
                    <h5 style={{justifyContent: 'center'}}>Please Login In with Your New Password after Reset The Password !</h5>

                </Grid>


                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                type="password"
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                label="Enter Your New Password"
                                name="password"
                                autoComplete="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
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
                            style={{maxWidth:"300px",marginRight:"20px",marginLeft:"120px",justifyContent: 'center'}}
                            type="submit"

                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleClick}
                        >
                            Reset The Password
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