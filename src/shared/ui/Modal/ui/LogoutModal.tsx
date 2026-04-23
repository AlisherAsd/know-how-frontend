import { useLogout } from "@/entities/auth/composables/useAuth";
import { ConfirmModal } from "@/shared/ui/Modal";
import { type FC } from "react";

type Props = {
  open: boolean;
  handleClose: () => void;
};

export const LogoutModal: FC<Props> = ({ open, handleClose }) => {
  const { mutate } = useLogout();

  const handleLogout = () => mutate();
  return (
    <ConfirmModal
      title="Выйти"
      description="Вы уверены что хотите выйти?"
      colorCancel="primary"
      colorConfirm="danger"
      handleConfirm={handleLogout}
      handleClose={() => handleClose()}
      open={open}
      labelConfirm="Выйти"
    />
  );
};
