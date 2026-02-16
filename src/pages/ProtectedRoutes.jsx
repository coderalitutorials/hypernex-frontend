// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

// const ProtectedRoutes = () => {
//   // Redux se token fetch karna
//   const token = useSelector((state) => state.auth?.token);

//   // Agar token na ho, redirect to login
//   if (!token) {
//     return <Navigate to="/" replace />;
//   }

//   // Agar token ho, child routes render karo
//   return <Outlet />;
// };

// export default ProtectedRoutes;




import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const { token, isAuthenticated } = useSelector((state) => state.auth);

  if (!token || !isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
