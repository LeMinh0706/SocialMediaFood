import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import HeaderAdmin from "./components/HeaderAdmin";

export const Admin = () => {
  const role = useSelector((state) => state.user.account.roleId);

  if (role !== 2) return <Navigate to="/access-denied" />;
  return (
    <div className="flex flex-col h-screen">
      <HeaderAdmin />
      <div className="flex flex-1">
        <div className="flex-1 bg-gray-100 p-4 flex items-center justify-center col-auto">
          <h1 className="text-3xl font-bold">Đang tải ... </h1>
        </div>
      </div>
    </div>
  );
};
