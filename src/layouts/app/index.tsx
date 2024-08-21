import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";

export const AppLayout = () => {
  return (
    <div className="flex h-dvh flex-col">
      <Header />
      <div className="flex-1 px-4 pb-5 pt-20 xl:px-0">
        <Outlet />
      </div>
    </div>
  );
};
