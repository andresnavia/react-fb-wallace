import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </>
  );
};

export default App;
