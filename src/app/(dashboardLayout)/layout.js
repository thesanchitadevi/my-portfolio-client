import Sidebar from "@/components/Shared/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex ">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
