import { Outlet } from "react-router-dom";
import "@mantine/core/styles.css";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import styles from "./MainLayout.module.css"

const { MainLayoutStyle } = styles;
export default function MainLayout() {
  return (
    <div className={MainLayoutStyle}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
