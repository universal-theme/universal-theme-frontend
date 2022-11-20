import { FormControl, Input, FormLabel } from "@mui/material";

export const ColorInput = ({
    name,
    label,
    defaultValue,
}) => {
    return  <FormControl>
        <FormLabel for={name}>{label}</FormLabel>
        <Input id={name} name={name} type="color" defaultValue={defaultValue} />
    </FormControl>;
};
