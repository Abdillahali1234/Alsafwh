import { Outlet } from "react-router-dom";
import "@mantine/core/styles.css";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
// import Header from "@routes/component/Header/Header";

export default function MainLayout() {
  return (
    
      <div>
        <Header/>
        <Outlet />
        <Footer/>
      </div>
  );
}
