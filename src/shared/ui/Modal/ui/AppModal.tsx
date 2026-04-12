import type { ReactNode } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export const AppModal = ({ open, onClose, title, children }: Props) => {
  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-[32px] border border-white/60 bg-white p-6 shadow-[0_30px_120px_-40px_rgba(15,23,42,0.45)] sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-xl text-slate-600 transition hover:bg-slate-200"
          aria-label="Закрыть модальное окно"
        >
          ×
        </button>
        {title ? <h3 className="mb-5 pr-10 text-2xl font-semibold text-slate-950">{title}</h3> : null}
        {children}
      </div>
    </div>
  );
};
