// import { useForm } from "@mantine/form";
// import { NumberInput, TextInput, Button } from "@mantine/core";

import Courses from "./component/courses/Courses";
import FristSection from "./component/fristSection/FristSection";
import NewCourses from "./component/newCourses/NewCourses";
import SecondeSection from "./component/secondeSection/SecondeSection";
import Announcement from "./component/sectionAnnouncement/Announcement";
import Status from "./component/status/Status";


export default function Home() {
  

  return (
    <>
      <FristSection/>
      <SecondeSection/>
      <NewCourses/>
      <Announcement/>
      <Courses/>
      <Status/>
    </>
  );
}
