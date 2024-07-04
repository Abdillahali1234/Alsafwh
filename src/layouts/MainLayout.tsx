import { Outlet } from "react-router-dom";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

export default function MainLayout() {
  return (
    <MantineProvider>
      <div>
        <Outlet />
      </div>
    </MantineProvider>
  );
}
