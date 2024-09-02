import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    IconButton,
    InputAdornment,
    TextField,

} from "@mui/material";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

function PasswordField(props) {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const { name, label } = props;
    const { methods } = useFormContext();
    const { errors } = methods.formState

    return (
        <TextField
            {...methods.register(name, {
                required: `${label} is required`,
                pattern: {
                    value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character",
                },
            })} id={`id-${name}`}
            error={!!errors[name]}
            helperText={errors[name] ? errors[name].message : ""}

            variant="outlined"
            placeholder="8+ charatcers"
            type={showPassword ? "text" : "password"}
            sx={{ width: "100%" }}
            autoComplete="current-password"

            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
            {...props}
        // InputProps={{
        //     endAdornment: (
        //         <InputAdornment position="end">
        //             <IconButton
        //                 aria-label="toggle password visibility"
        //                 onClick={handleClickShowPassword}
        //                 onMouseDown={handleMouseDownPassword}
        //                 edge="end"
        //             >
        //                 {showPassword ? <VisibilityOff /> : <Visibility />}
        //             </IconButton>
        //         </InputAdornment>
        //     ),
        // }}
        />
    )
}

export default PasswordField