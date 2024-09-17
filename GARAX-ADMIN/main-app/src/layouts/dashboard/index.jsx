import Canvas from "./components/canvas";
import Sidebar from "./components/sidebar"

function dashboardLayout() {
  return (
    <div className="bg-[#F5F6F7] w-full h-[100vh] flex">
      <Sidebar />
      <Canvas />
    </div>
  );
}

export default dashboardLayout;
