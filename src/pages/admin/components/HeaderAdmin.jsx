import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../../action/useAction";


const HeaderAdmin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const Logout = () => {
    dispatch(userLogout())
    navigate('/')
  }

  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl">Admin Dashboard</h1>
      <div>
        <button onClick={() => navigate('/')} className="bg-red-600 hover:bg-red-700 text-white mr-5 py-2 px-4 rounded">Feed</button>
        <button onClick={Logout} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">Logout</button>
      </div>
    </div>
  );
};

export default HeaderAdmin;
