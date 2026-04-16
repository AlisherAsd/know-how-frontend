import { type FC } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import WalletIcon from "@mui/icons-material/Wallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import { useBalanceHistory } from "@/entities/balance/composables/useBalance";

type Props = {
  handleClose: (val: boolean) => void;
  open: boolean;
};

export const BalanceModal: FC<Props> = ({ open, handleClose }) => {
  const { data, isPending } = useBalanceHistory();
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
      <DialogTitle id="alert-dialog-title">
        <div className="flex items-center gap-3">
          История кошелька
          <WalletIcon />
        </div>
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {data &&
            !isPending &&
            data.histories?.map((item) => {
              return item[0] === "+" ? (
                <div className="flex items-center gap-3 text-green-600">
                  <AttachMoneyIcon />
                  <p className="text-lg">Пополнение: {item}</p>
                </div>
              ) : (
                <div className="flex items-center gap-3 text-red-500">
                  <MoneyOffIcon />
                  <p className="text-lg">{item}</p>
                </div>
              );
            })}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
