import { Card, TextField, FormControl, Button } from "@mui/material"
import { Link } from "react-router-dom";

export const Login = () => {
    return <Card variant="outlined">
        <h1>Login</h1>
        <FormControl fullWidth>
            <TextField id="standard-basic" label="username" variant="standard" />
        </FormControl>
        <FormControl fullWidth>
            <TextField id="standard-basic" type="password" label="password" variant="standard" />
        </FormControl>
        <Link to="/sign-up">Create account</Link>
        <Button>Login</Button>
    </Card>;
};
