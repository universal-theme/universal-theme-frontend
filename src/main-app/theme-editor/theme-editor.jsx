import { Form, useLoaderData } from "react-router-dom"
import { Paper, TextField, InputAdornment, Button } from "@mui/material";
import styles from "./theme-editor.module.css";
import { ColorInput } from "../../common";

export const ThemeEditor = () => {
    const {
        primaryColor,
        secondaryColor,
        errorColor,
        warningColor,
    } = useLoaderData();
    return <Paper sx={{display: "flex", "flex-direction": "column", padding: "1rem"}}>
        <Form>
            <FormSection header="Theme data">
                <TextField required label="Name" />
            </FormSection>

            <FormSection header="Colors">
                <ColorInput label="Primary color" name="primaryColor" defaultValue={primaryColor} />

                <ColorInput label="Secondary color" name="secondaryColor" defaultValue={secondaryColor} />

                <ColorInput label="Error color" name="errorColor" defaultValue={errorColor} />

                <ColorInput label="Warning color" name="warningColor" defaultValue={warningColor} />
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
