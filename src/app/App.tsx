import { AppRouter } from "@/app/providers";
import { MainFooter } from "@/widgets/MainFooter";
import { MainHeader } from "@/widgets/MainHeader";
import { BrowserRouter } from "react-router-dom";
import "./styles/styles.css";

export function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <div className="app">
        <AppRouter />
      </div>
      <MainFooter />
    </BrowserRouter>
  );
}
