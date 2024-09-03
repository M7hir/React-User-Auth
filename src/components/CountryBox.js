import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
// import top100Films from "./top100Films";
import country from "../store/country";
import InputField from "./Input_Field";

export default function CountryBox({ name }) {
  return (
    <Autocomplete
      disablePortal
      options={country}
      sx={{ width: "100%" }}
      renderInput={(params) => (
        <InputField {...params} name={name} label="Country" />
      )}
    />
  );
}
