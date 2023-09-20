import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./All.css";
const Layout = () => {
  const navigation = useNavigation();
  return (
    <div className="max-w-7xl px-5 lg:px-0 mx-auto">
      <Header />
      {navigation.state === "loading" ? (
        <div className="w-full lg:h-[520px] justify-center flex items-center">
          <span className="loading loading-spinner w-[100px] text-[#531313]"></span>
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
    </div>
  );
};

export default Layout;
