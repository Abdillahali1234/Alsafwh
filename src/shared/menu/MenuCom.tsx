import { Menu, rem } from "@mantine/core";
import {
  IconSettings,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
} from "@tabler/icons-react";
import Styles from "./MenuCom.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@store/Store";
import { RiLogoutCircleLine } from "react-icons/ri";

export default function MenuCom({ img }: { img: string }) {
  const { AuthModel } = useSelector((state: RootState) => state.Auth);
  const { student } = useSelector((state: RootState) => state.Student);

  return (
    <Menu
      shadow="md"
      width={200}
      transitionProps={{ transition: "rotate-right", duration: 150 }}>
      <Menu.Target>
        <div className={Styles.conImg}>
          <img
            src={student?.user.fileUploads ? student.user.fileUploads.url : img}
            alt=""
          />
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }>
          <Link
            to={`/student-page/${AuthModel?.userId}`}
            className={Styles.LinkStyle}>
            الاعدادت
          </Link>
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />
          }>
          الرسائل
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconPhoto style={{ width: rem(14), height: rem(14) }} />
          }>
          Gallery
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>

        <Menu.Item
          color="red"
          leftSection={
            <IconTrash style={{ width: rem(14), height: rem(14) }} />
          }>
          حذف الاكونت
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={
            <RiLogoutCircleLine style={{ width: rem(14), height: rem(14) }} />
          }>
          تسجيل الخروج
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
