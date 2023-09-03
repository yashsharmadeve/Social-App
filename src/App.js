import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";
import Profile from "./pages/profile/Profile";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
// import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  const { user } = useContext(AuthContext);

  // useEffect(()=>{
  //   if(!user){
  //     <Navigate to='/login' />
  //   }
  // },[user])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/profile/:username"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;

{
  /* <Route element={<ProtectedRoutes />} >
<Route path="/" element={<Home />} />
<Route path="/profile/:username" element={<Profile />} />
</Route>
<Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} /> */
}
