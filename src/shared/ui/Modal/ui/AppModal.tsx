// components/AppModal/AppModal.jsx
import { Modal, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { type FC, type ReactNode } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  maxWidth?: number | string;
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 500,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

export const AppModal: FC<Props> = ({ open, onClose, title, children, maxWidth = 500 }) => {
  const handleStopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby={title ? "modal-title" : undefined}
      onClick={handleStopPropagation}
    >
      <Box sx={{ ...modalStyle, maxWidth }}>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>

        {title && (
          <Typography id="modal-title" variant="h6" component="h2" mb={2}>
            {title}
          </Typography>
        )}

        {children}
      </Box>
    </Modal>
  );
};
