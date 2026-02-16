// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useLoginMutation } from "./authApi";
// import { useDispatch } from "react-redux";
// import { setCredentials } from "./authSlice";
// import { useNavigate, Link } from "react-router-dom";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [login] = useLoginMutation();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await login(form).unwrap();


//     // 🔍 Debug: check karo backend response kya aa raha hai
//     console.log("Login response from backend:", res);


//       dispatch(setCredentials(res));
//       navigate("/dashboard");
//     } catch (err) {
//       console.error(err);
//       alert(err?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a] text-white">
//       <motion.form
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         onSubmit={handleSubmit}
//         className="bg-[#11112b] p-10 rounded-3xl shadow-lg border border-white/10 w-full max-w-md"
//       >
//         <h2 className="text-3xl font-black mb-6 text-center text-blue-400">Login</h2>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           className="w-full mb-4 px-4 py-3 rounded-lg bg-[#0a0a1a] border border-white/10 focus:outline-none focus:border-blue-500"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           required
//           className="w-full mb-6 px-4 py-3 rounded-lg bg-[#0a0a1a] border border-white/10 focus:outline-none focus:border-blue-500"
//         />

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           type="submit"
//           className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold shadow-lg shadow-blue-500/30"
//         >
//           Login
//         </motion.button>

//         <p className="mt-4 text-gray-400 text-sm text-center">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-blue-400 hover:underline">
//             Register
//           </Link>
//         </p>
//       </motion.form>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLoginMutation } from "./authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form).unwrap();
      console.log("Login response from backend:", res);

      // ✅ Fix: backend returns 'admin' object, not 'user'
      dispatch(
        setCredentials({
          user: res.admin,
          token: res.token,
        })
      );

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert(err?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a] text-white">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="bg-[#11112b] p-10 rounded-3xl shadow-lg border border-white/10 w-full max-w-md"
      >
        <h2 className="text-3xl font-black mb-6 text-center text-blue-400">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-3 rounded-lg bg-[#0a0a1a] border border-white/10 focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full mb-6 px-4 py-3 rounded-lg bg-[#0a0a1a] border border-white/10 focus:outline-none focus:border-blue-500"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold shadow-lg shadow-blue-500/30"
        >
          Login
        </motion.button>

        <p className="mt-4 text-gray-400 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Register
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
