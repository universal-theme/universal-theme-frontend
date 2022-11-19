import { Form } from "react-router-dom"
import { Input, FormControl, FormLabel, Paper, TextField, InputAdornment, Button } from "@mui/material";
import styles from "./theme-editor.module.css";

export const ThemeEditor = () => {
    return <Paper sx={{display: "flex", "flex-direction": "column", padding: "1rem"}}>
        <Form>
            <FormSection header="Theme data">
                <TextField required label="Name" />
            </FormSection>

            <FormSection header="Colors">
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
            </FormSection>

            <FormSection header="Font">
                <TextField required label="Font" defaultValue="Calibri" />
                <TextField required label="Font size" InputProps={{ endAdornment: <InputAdornment position="end">px</InputAdornment>}} defaultValue="12" />
            </FormSection>

            <div className={styles.formButtons}>
                <Button color="warning">Cancel</Button>
                <Button type="submit">Save</Button>
            </div>
        </Form>
    </Paper>;
};

const FormSection = ({ header, children }) => {
    return <div>
        <h2>{header}</h2>
        {children}
    </div>
}
