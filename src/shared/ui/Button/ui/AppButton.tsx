import { Button, type ButtonProps } from "@mui/material";

type Props = {
  label?: string;
} & ButtonProps;

export const AppButton = ({ label, ...rest }: Props) => {
  return (
    <Button
      sx={{
        backgroundColor: "#0173e6",
        textTransform: "none",
        borderRadius: "10px",
        padding: "10px 20px",
      }}
      {...rest}
    >
      {label}
    </Button>
  );
};
