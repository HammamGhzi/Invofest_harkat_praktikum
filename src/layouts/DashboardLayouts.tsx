import { Outlet, useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayouts() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    alert("Logout berhasil!");
  };

  return (
    <div className="flex  w-full">
      <div className="w-64 p-4 bg-yellow-300 min-h-screen flex flex-col justify-between border-r-4 border-black sticky top-0 self-start">
        <div className="border-b-4 border-black text-center p-2">
          <h2 className="text-black text-2xl font-black uppercase tracking-tight">InvoFest Dashboard</h2>
        </div>

        <div className="flex flex-col gap-3">
          <Link to="/dashboard" className="text-black font-bold uppercase border-2 border-black p-2 bg-white shadow-[3px_3px_0px_0px_#000] hover:bg-yellow-400 hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">Dashboard</Link>
          <Link to="/dashboard/category" className="text-black font-bold uppercase border-2 border-black p-2 bg-white shadow-[3px_3px_0px_0px_#000] hover:bg-yellow-400 hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">Category</Link>
          <Link to="/dashboard/event" className="text-black font-bold uppercase border-2 border-black p-2 bg-white shadow-[3px_3px_0px_0px_#000] hover:bg-yellow-400 hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">Event</Link>
          <Link to="/dashboard/seminar" className="text-black font-bold uppercase border-2 border-black p-2 bg-white shadow-[3px_3px_0px_0px_#000] hover:bg-yellow-400 hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">Pembicara</Link>
          <Link to="/dashboard/users" className="text-black font-bold uppercase border-2 border-black p-2 bg-white shadow-[3px_3px_0px_0px_#000] hover:bg-yellow-400 hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">Users</Link>
          <Link to="/dashboard/biodata" className="text-black font-bold uppercase border-2 border-black p-2 bg-white shadow-[3px_3px_0px_0px_#000] hover:bg-yellow-400 hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">Biodata</Link>
        </div>

        <div>
          <button
            onClick={handleLogout}
            className="bg-red-500 p-2 text-white w-full font-black uppercase border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-red-600 hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#000] transition-all"
            type="button"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="w-full p-4 bg-orange-50">
        <Outlet />
      </div>
    </div>
  );
}