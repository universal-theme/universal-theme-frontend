import { Card, TextField, FormControl, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom";

export const SignUp = () => {
    return <Card variant="outlined">
        <Typography variant="h1">Sign up</Typography>
        <FormControl fullWidth>
            <TextField id="standard-basic" label="username" variant="standard" />
        </FormControl>
        <FormControl fullWidth>
            <TextField id="standard-basic" type="password" label="password" variant="standard" />
        </FormControl>
        <FormControl fullWidth>
            <TextField id="standard-basic" type="password" label="confirm password" variant="standard" />
        </FormControl>
        <Link to="/login">Login</Link>
        <Button>Login</Button>
    </Card>;
};
