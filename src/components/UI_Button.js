import { Button } from "@mui/material";

export default function UIButton({ children }) {
  return (
    <Button
      type="submit"
      variant="contained"
      fullWidth
      sx={{
        background: "black",
        borderRadius: 2,
        padding: 1.5,
        fontWeight: 900,
        textTransform: "none",
        fontSize: 17,
      }}
    >
      {children}
    </Button>
  );
}
