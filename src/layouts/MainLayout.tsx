import { Outlet } from "react-router-dom";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Header from "@components/Header/Header";
// import Header from "@routes/component/Header/Header";

export default function MainLayout() {
  return (
    
      <div>
        <Header/>
        <Outlet />
      </div>
  );
}
