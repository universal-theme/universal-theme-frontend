import { Card, TextField, FormControl, Button } from "@mui/material"

export const Login = () => {
    return <Card variant="outlined">
        <h1>Login</h1>
        <FormControl fullWidth>
            <TextField id="standard-basic" label="username" variant="standard" />
        </FormControl>
        <FormControl fullWidth>
            <TextField id="standard-basic" label="password" variant="standard" />
        </FormControl>
        <button>Create account</button>
        <Button>Login</Button>
    </Card>;
};
