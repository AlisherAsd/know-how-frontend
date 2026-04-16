import { ROUTES } from "@/app/providers/router/config";
import { AppButton } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col mt-[30vh] items-center justify-center">
        <h2 className="text-[40px] font-bold">Страница не найлена :(</h2>
        <h3 className="text-[100px]">404</h3>
        <AppButton onClick={() => navigate(ROUTES.MAIN)}>На главную</AppButton>
      </div>
    </div>
  );
};
