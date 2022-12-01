import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../Components/LoginForm";
import SignupForm1 from "../Components/SignupForm1";
import Main from "../Layout/Main";
// import Homepage from "../Pages/Homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/step-1",
        element: <SignupForm1></SignupForm1>,
      },
    ],
  },
]);

export default router;
