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
      }}
      {...rest}
    >
      {label}
    </Button>
  );
};
