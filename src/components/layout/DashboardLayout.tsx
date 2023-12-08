import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const DashboardLayout = () => {
  return (
    <div
      id="dashboard_wrapper"
      className="bg-[#F3F4F7] h-screen overflow-hidden px-[30px] relative"
    >
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
};
export default DashboardLayout;
