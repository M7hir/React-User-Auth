import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function InputField(props) {
  const { name, label, ...rest } = props;
  const { methods } = useFormContext();
  const { errors } = methods.formState;
  //   const { setValue } = methods;

  return (
    <TextField
      {...methods.register(name)}
      id={`-${name}`}
      variant="outlined"
      error={!!errors[name]}
      helperText={errors[name] ? errors[name].message : ""}
      sx={{ width: "100%" }}
      label={label}
      //   type={type || "text"}
      //   onChange={(e) => {
      //     if (type === "number") {
      //       setValue(
      //         `${name}`,
      //         !!e.target.value ? Number(e.target.value) : null,
      //         { shouldValidate: true }
      //       );
      //     } else {
      //       setValue(`${name}`, e.target.value);
      //     }
      //   }}
      {...rest}
    />
  );
}
