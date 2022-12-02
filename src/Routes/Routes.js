import { createBrowserRouter } from "react-router-dom";
import AttendancePage from "../Components/AttendancePage";
import Main from "../Layout/Main";
import Homepage from "../Pages/Homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Homepage component={"login"}></Homepage>,
      },
      {
        path: "/step-1",
        element: <Homepage component={"signupform1"}></Homepage>,
      },
      {
        path: "/step-2",
        element: <Homepage component={"signupform2"}></Homepage>,
      },
      {
        path: "/step-3",
        element: <Homepage component={"signupform3"}></Homepage>,
      },
    ],
  },
  {
    path: "/attendancePage",
    element: <AttendancePage></AttendancePage>,
  },
]);

export default router;
