import { currentuser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { adminPaths } from "@/routes/admin.routes";
import { facultyPaths } from "@/routes/faculty.routes";
import { studentPaths } from "@/routes/student.routes";
import { siderBarItemgenerator } from "@/utils/sidebartemsGenerator";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  const user = useAppSelector(currentuser);
  let sideBaritems;
  switch (user!.role) {
    case userRole.ADMIN:
      sideBaritems = siderBarItemgenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sideBaritems = siderBarItemgenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sideBaritems = siderBarItemgenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Ph uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBaritems}
      />
    </Sider>
  );
};

export default Sidebar;
