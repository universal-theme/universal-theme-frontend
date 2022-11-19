import { Input, FormControl, FormLabel, Paper, TextField, InputAdornment, Button } from "@mui/material";

export const ThemeEditor = () => {
    return <Paper sx={{display: "flex", "flex-direction": "column"}}>
        <TextField required label="Name" />
        
        <FormControl fullwidth>
            <FormLabel>Primary color</FormLabel>
            <Input type="color" />
        </FormControl>

        <FormControl fullwidth>
            <FormLabel>Secondary color</FormLabel>
            <Input type="color" />
        </FormControl>

        <FormControl fullwidth>
            <FormLabel>Error color</FormLabel>
            <Input type="color" defaultValue="#ff0000" />
        </FormControl>

        <FormControl fullwidth>
            <FormLabel>Warning color</FormLabel>
            <Input type="color" defaultValue="#ff8800" />
        </FormControl>

        <TextField required label="Font size" InputProps={{ endAdornment: <InputAdornment position="end">px</InputAdornment>}} defaultValue="12" />

        <Button>Save</Button>
    </Paper>;
};
