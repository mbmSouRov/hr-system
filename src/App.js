import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="overflow-hidden flex justify-center items-center m-0 p-0 relative w-full h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
