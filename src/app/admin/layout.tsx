import Image from "next/image";
import Sidebar from "../../components/adminComponents/sidebar";
import { assets } from "../../Assets/assets";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
       <div className="flex">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
          <h3 className="font-medium">Admin Panel</h3>
            <Image src={assets.profile_icon} width={40} alt="myimage" />
          </div>
          {children}
        </div>
       </div>
    </>
  );
};

export default Layout;
