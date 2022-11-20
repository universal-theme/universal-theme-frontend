import { FormControl, Input, FormLabel } from "@mui/material";

export const ColorInput = ({
    label,
    defaultValue,
}) => {
    return  <FormControl fullwidth>
        <FormLabel>{label}</FormLabel>
        <Input type="color" defaultValue={defaultValue} />
    </FormControl>;
}