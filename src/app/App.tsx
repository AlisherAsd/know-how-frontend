import { AppRouter } from "@/app/providers";
import { MainFooter } from "@/widgets/MainFooter";
import { MainHeader } from "@/widgets/MainHeader";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
        <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-4 pb-6 sm:px-6 lg:px-8">
          <MainHeader />
          <main className="flex-1">
            <AppRouter />
          </main>
          <MainFooter />
        </div>
      </div>
    </BrowserRouter>
  );
}
