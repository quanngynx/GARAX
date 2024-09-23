import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Canvas from "./components/canvas";
import Sidebar from "./components/sidebar"
import Footer from "./components/footer"

function dashboardLayout() {
  return (
    <div className='bg-[#F5F6F7] w-full'>
      <div className="flex mb-4">
      <Sidebar />
      <Canvas />
      </div>
      <Footer />
      </div>
  );
}

export default dashboardLayout;
