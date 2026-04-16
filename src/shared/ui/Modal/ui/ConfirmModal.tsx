import { type FC } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AppButton } from "../../Button";

type Props = {
  labelConfirm: string;
  open: boolean;
  handleConfirm: () => void;
  colorConfirm?: "primary" | "secondary" | "ghost" | "success" | "danger";
  colorCancel?: "primary" | "secondary" | "ghost" | "success" | "danger";
  handleClose: () => void;
  description?: string;
  title: string;
};

export const ConfirmModal: FC<Props> = ({
  labelConfirm,
  handleConfirm,
  colorConfirm,
  handleClose,
  colorCancel,
  open,
  description,
  title,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: {
          minWidth: 400,
          minHeight: 200,
          padding: 1,
          borderRadius: 10,
        },
      }}
      role="alertdialog"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      {description && (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <AppButton variant={colorCancel || "danger"} onClick={handleClose}>
          Отмена
        </AppButton>
        <AppButton onClick={handleConfirm} variant={colorConfirm || "primary"}>
          {labelConfirm}
        </AppButton>
      </DialogActions>
    </Dialog>
  );
};
