import { Menu, rem } from "@mantine/core";
import {
  IconSettings,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
} from "@tabler/icons-react";
import Styles from "./MenuCom.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/Store";
import { RiLogoutCircleLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { LogOut } from "@store/api/AuthApi";
import { PiStudentFill } from "react-icons/pi";

export default function MenuCom({ img }: { img: string }) {
  const { AuthModel } = useSelector((state: RootState) => state.Auth);
  const { student } = useSelector((state: RootState) => state.Student);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("enter");

    Swal.fire({
      title: "تسجيل الخروج",
      text: "هل تريد تسحيل الخروج!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "تسجيل الخروج",
      cancelButtonText: "إلغاء",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(LogOut());
        navigate("/login");
      }
    });
  };

  return (
    <Menu
      shadow="md"
      width={200}
      transitionProps={{ transition: "rotate-right", duration: 150 }}>
      <Menu.Target>
        <div className={Styles.conImg}>
          <img
            src={
              student && student?.user.fileUploads != undefined
                ? student?.user.fileUploads.url
                : img
            }
            alt=""
          />
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>الصفوه</Menu.Label>
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
          الصور
        </Menu.Item>
        <Menu.Item
          leftSection={
            <PiStudentFill style={{ width: rem(14), height: rem(14) }} />
          }>
          <Link
            to={`/courses-student/${AuthModel?.userId}`}
            className={Styles.LinkStyle}>
            الكورسات
          </Link>
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
          onClick={() => {
            handleLogout();
          }}
          leftSection={
            <RiLogoutCircleLine style={{ width: rem(14), height: rem(14) }} />
          }>
          تسجيل الخروج
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
