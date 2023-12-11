import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="text-2xl  capitalize">
      <Outlet />
    </div>
  );
};
