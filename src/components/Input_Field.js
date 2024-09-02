import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function InputField(props) {
    const { name, label, required, pattern, validationMessage, ...rest } = props;
    const { methods } = useFormContext();
    const { errors } = methods.formState;

    const validationRules = {
        required: required ? `${label} is required` : false,
        pattern: pattern
            ? {
                value: pattern,
                message: validationMessage || `Please enter a valid ${label}`,
            }
            : undefined,
    };

    return (
        <TextField
            {...methods.register(name, validationRules)}
            id={`-${name}`}
            variant="outlined"
            error={!!errors[name]}
            helperText={errors[name] ? errors[name].message : ""}
            sx={{ width: "100%" }}
            label={label}
            {...rest}
        />
    );
}
