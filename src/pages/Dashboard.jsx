// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "./footer";

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("blogs"); // default tab

//   return (
     
//     <div className="bg-[#0a0a1a] min-h-screen">
   
//   <Navbar />
//       <div className="pt-24 md:px-20 mt-3 px-6 flex flex-col md:flex-row gap-6">
//         {/* --- SIDEBAR --- */}
//         <motion.aside
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-[#11112b] w-full md:w-64 rounded-2xl p-6 border border-white/10 flex flex-col gap-6"
//         >
//           <h2 className="text-xl font-black text-white mb-4">Dashboard</h2>

//           <ul className="flex flex-col gap-3">
//             <li>
//               <button
//                 onClick={() => setActiveTab("blogs")}
//                 className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
//                   activeTab === "blogs"
//                     ? "bg-blue-500/20 text-blue-400"
//                     : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-400"
//                 }`}
//               >
//                 Blogs
//               </button>
//             </li>

//             <li>
//               <button
//                 onClick={() => setActiveTab("offers")}
//                 className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
//                   activeTab === "offers"
//                     ? "bg-blue-500/20 text-blue-400"
//                     : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-400"
//                 }`}
//               >
//                 Offers
//               </button>
//             </li>
//           </ul>
//         </motion.aside>

//         {/* --- MAIN CONTENT --- */}
//         <motion.main
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex-1 bg-[#11112b] rounded-2xl p-6 border border-white/10 min-h-[70vh]"
//         >
//           {activeTab === "blogs" && (
//             <div>
//               <h3 className="text-xl font-black text-white mb-4">Manage Blogs</h3>
//               <p className="text-gray-400">
//                 Yahan se tum blogs create, update aur delete kar sakte ho. 👨‍💻
//               </p>
//               {/* Future: Add blogs table/form here */}
//             </div>
//           )}

//           {activeTab === "offers" && (
//             <div>
//               <h3 className="text-xl font-black text-white mb-4">Manage Offers</h3>
//               <p className="text-gray-400">
//                 Yahan se tum offers create, update aur delete kar sakte ho. 🎯
//               </p>
//               {/* Future: Add offers table/form here */}
//             </div>
//           )}
//         </motion.main>
//       </div>

//       <div className="mt-16 px-6">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "./footer";
// import DashboardOffers from "../features/offers/Offerstable"; // 👈 import Offers table component
// import DashboardBlogs from "../features/blogs/DashboardBlogs";
// // Future: import DashboardBlogs if ready
// // import DashboardBlogs from "./dashboard/DashboardBlogs";

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("blogs"); // default tab

//   return (
//     <div className="bg-[#0a0a1a] min-h-screen">
//       <Navbar />

//       <div className="pt-24 md:px-20 mt-3 px-6 flex flex-col md:flex-row gap-6">
//         {/* --- SIDEBAR --- */}
//         <motion.aside
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-[#11112b] w-full md:w-64 rounded-2xl p-6 border border-white/10 flex flex-col gap-6"
//         >
//           <h2 className="text-xl font-black text-white mb-4">Dashboard</h2>

//           <ul className="flex flex-col gap-3">
//             <li>
//               <button
//                 onClick={() => setActiveTab("blogs")}
//                 className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
//                   activeTab === "blogs"
//                     ? "bg-blue-500/20 text-blue-400"
//                     : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-400"
//                 }`}
//               >
//                 Blogs
//               </button>
//             </li>

//             <li>
//               <button
//                 onClick={() => setActiveTab("offers")}
//                 className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
//                   activeTab === "offers"
//                     ? "bg-blue-500/20 text-blue-400"
//                     : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-400"
//                 }`}
//               >
//                 Offers
//               </button>
//             </li>
//           </ul>
//         </motion.aside>

//         {/* --- MAIN CONTENT --- */}
//         <motion.main
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex-1 bg-[#11112b] rounded-2xl p-6 border border-white/10 min-h-[70vh]"
//         >
//           {activeTab === "blogs" && (
//             <div>
//               <h3 className="text-xl font-black text-white mb-4">Manage Blogs</h3>
//               <p className="text-gray-400">
//                 Yahan se tum blogs create, update aur delete kar sakte ho. 👨‍💻
//               </p>
//               {/* Future: Add blogs table/form here */}
//               <DashboardBlogs/>
//             </div>
//           )}

//           {activeTab === "offers" && (
//             <div>
//               <h3 className="text-xl font-black text-white mb-4">Manage Offers</h3>
//               <p className="text-gray-400">
//                 Yahan se tum offers create, update aur delete kar sakte ho. 🎯
//               </p>
//               {/* 👇 Add DashboardOffers component */}
//               <DashboardOffers />
//             </div>
//           )}
//         </motion.main>
//       </div>

//       <div className="mt-16 px-6">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;








// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "./footer";
// import DashboardOffers from "../features/offers/Offerstable";
// import DashboardBlogs from "../features/blogs/DashboardBlogs";
// import DashboardCategories from "../features/categories/DashboardCategories"; // ✅ Categories component

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("blogs"); // default tab

//   return (
//     <div className="bg-[#0a0a1a] min-h-screen">
//       <Navbar />

//       <div className="pt-24 md:px-20 mt-3 px-6 flex flex-col md:flex-row gap-6">
//         {/* --- SIDEBAR --- */}
//         <motion.aside
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-[#11112b] w-full md:w-64 rounded-2xl p-6 border border-white/10 flex flex-col gap-6"
//         >
//           <h2 className="text-xl font-black text-white mb-4">Dashboard</h2>

//           <ul className="flex flex-col gap-3">
//             <li>
//               <button
//                 onClick={() => setActiveTab("blogs")}
//                 className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
//                   activeTab === "blogs"
//                     ? "bg-blue-500/20 text-blue-400"
//                     : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-400"
//                 }`}
//               >
//                 Blogs
//               </button>
//             </li>

//             <li>
//               <button
//                 onClick={() => setActiveTab("offers")}
//                 className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
//                   activeTab === "offers"
//                     ? "bg-blue-500/20 text-blue-400"
//                     : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-400"
//                 }`}
//               >
//                 Offers
//               </button>
//             </li>

//             <li>
//               <button
//                 onClick={() => setActiveTab("categories")}
//                 className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
//                   activeTab === "categories"
//                     ? "bg-blue-500/20 text-blue-400"
//                     : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-400"
//                 }`}
//               >
//                 Categories
//               </button>
//             </li>
//           </ul>
//         </motion.aside>

//         {/* --- MAIN CONTENT --- */}
//         <motion.main
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex-1 bg-[#11112b] rounded-2xl p-6 border border-white/10 min-h-[70vh]"
//         >
//           {activeTab === "blogs" && (
//             <div>
//               <h3 className="text-xl font-black text-white mb-4">Manage Blogs</h3>
//               <p className="text-gray-400 mb-4">
//                 Yahan se tum blogs create, update aur delete kar sakte ho. 👨‍💻
//               </p>
//               <DashboardBlogs />
//             </div>
//           )}

//           {activeTab === "offers" && (
//             <div>
//               <h3 className="text-xl font-black text-white mb-4">Manage Offers</h3>
//               <p className="text-gray-400 mb-4">
//                 Yahan se tum offers create, update aur delete kar sakte ho. 🎯
//               </p>
//               <DashboardOffers />
//             </div>
//           )}

//           {activeTab === "categories" && (
//             <div>
//               <h3 className="text-xl font-black text-white mb-4">Manage Categories</h3>
//               <p className="text-gray-400 mb-4">
//                 Yahan se tum categories create, update aur delete kar sakte ho. 📂
//               </p>
//               <DashboardCategories /> {/* ✅ Categories component */}
//             </div>
//           )}
//         </motion.main>
//       </div>

//       <div className="mt-16 px-6">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "./footer";
// import DashboardOffers from "../features/offers/Offerstable";
// import DashboardBlogs from "../features/blogs/DashboardBlogs";
// import DashboardCategories from "../features/categories/DashboardCategories";
// import DashboardContacts from "../features/contacts/DashboardContacts"; // ✅ NEW

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("blogs");

//   return (
//     <div className="bg-[#0a0a1a] min-h-screen">
//       <Navbar />

//       <div className="pt-24 md:px-20 mt-3 px-6 flex flex-col md:flex-row gap-6">
//         {/* --- SIDEBAR --- */}
//         <motion.aside
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-[#11112b] w-full md:w-64 rounded-2xl p-6 border border-white/10 flex flex-col gap-6"
//         >
//           <h2 className="text-xl font-black text-white mb-4">Dashboard</h2>

//           <ul className="flex flex-col gap-3">
//             <li>
//               <button
//                 onClick={() => setActiveTab("blogs")}
//                 className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
//                   activeTab === "blogs"
//                     ? "bg-blue-500/20 text-blue-400"
//                     : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-400"
//                 }`}
//               >
//                 Blogs
//               </button>
//             </li>

//             <li>
//               <button
//                 onClick={() => setActiveTab("offers")}
//                 className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
//                   activeTab === "offers"
//                     ? "bg-blue-500/20 text-blue-400"
//                     : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-400"
//                 }`}
//               >
//                 Offers
//               </button>
//             </li>

//             <li>
//               <button
//                 onClick={() => setActiveTab("categories")}
//                 className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
//                   activeTab === "categories"
//                     ? "bg-blue-500/20 text-blue-400"
//                     : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-400"
//                 }`}
//               >
//                 Categories
//               </button>
//             </li>

//             {/* ✅ NEW CONTACTS TAB */}
//             <li>
//               <button
//                 onClick={() => setActiveTab("contacts")}
//                 className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
//                   activeTab === "contacts"
//                     ? "bg-blue-500/20 text-blue-400"
//                     : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-400"
//                 }`}
//               >
//                 Contacts
//               </button>
//             </li>
//           </ul>
//         </motion.aside>

//         {/* --- MAIN CONTENT --- */}
//         <motion.main
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex-1 bg-[#11112b] rounded-2xl p-6 border border-white/10 min-h-[70vh]"
//         >
//           {activeTab === "blogs" && (
//             <div>
//               <h3 className="text-xl font-black text-white mb-4">Manage Blogs</h3>
//               <p className="text-gray-400 mb-4">
//                 Yahan se tum blogs create, update aur delete kar sakte ho. 👨‍💻
//               </p>
//               <DashboardBlogs />
//             </div>
//           )}

//           {activeTab === "offers" && (
//             <div>
//               <h3 className="text-xl font-black text-white mb-4">Manage Offers</h3>
//               <p className="text-gray-400 mb-4">
//                 Yahan se tum offers create, update aur delete kar sakte ho. 🎯
//               </p>
//               <DashboardOffers />
//             </div>
//           )}

//           {activeTab === "categories" && (
//             <div>
//               <h3 className="text-xl font-black text-white mb-4">
//                 Manage Categories
//               </h3>
//               <p className="text-gray-400 mb-4">
//                 Yahan se tum categories create, update aur delete kar sakte ho. 📂
//               </p>
//               <DashboardCategories />
//             </div>
//           )}

//           {/* ✅ CONTACTS SECTION */}
//           {activeTab === "contacts" && (
//             <div>
//               <h3 className="text-xl font-black text-white mb-4">
//                 Contact Messages
//               </h3>
//               <p className="text-gray-400 mb-4">
//                 Yahan users ke Contact Us messages show hotay hain. ✉️
//               </p>
//               <DashboardContacts />
//             </div>
//           )}
//         </motion.main>
//       </div>

//       <div className="mt-16 px-6">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;









import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

import DashboardBlogs from "../features/blogs/DashboardBlogs";
import DashboardOffers from "../features/offers/Offerstable";
import DashboardCategories from "../features/categories/DashboardCategories";
import DashboardContacts from "../features/contacts/DashboardContacts";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("blogs");

  // 🔐 logged in user
  const user = useSelector((state) => state.auth.user);

  // 🔒 email-based restriction (PHASE-1)
  const isBlogManager = user?.email === "aliraza00@gmail.com";

  // ✅ allowed tabs for current user
  const allowedTabs = isBlogManager
    ? ["blogs", "categories"]
    : ["blogs", "offers", "categories", "contacts"];

  // ⚠️ Ensure activeTab is valid for this user
  React.useEffect(() => {
    if (!allowedTabs.includes(activeTab)) {
      setActiveTab("blogs");
    }
  }, [activeTab, allowedTabs]);

  return (
    <div className="bg-[#0a0a1a] min-h-screen">
      <Navbar />

      <div className="pt-24 md:px-20 mt-3 px-6 flex flex-col md:flex-row gap-6">
        {/* --- SIDEBAR --- */}
        <motion.aside
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#11112b] w-full md:w-64 rounded-2xl p-6 border border-white/10 flex flex-col gap-6"
        >
          <h2 className="text-xl font-black text-white mb-4">Dashboard</h2>

          <ul className="flex flex-col gap-3">
            {/* BLOGS */}
            <li>
              <button
                onClick={() => setActiveTab("blogs")}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${
                  activeTab === "blogs"
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-400"
                }`}
              >
                Blogs
              </button>
            </li>

            {/* OFFERS */}
            {!isBlogManager && (
              <li>
                <button
                  onClick={() => setActiveTab("offers")}
                  className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${
                    activeTab === "offers"
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-400"
                  }`}
                >
                  Offers
                </button>
              </li>
            )}

            {/* CATEGORIES */}
            <li>
              <button
                onClick={() => setActiveTab("categories")}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${
                  activeTab === "categories"
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-400"
                }`}
              >
                Categories
              </button>
            </li>

            {/* CONTACTS */}
            {!isBlogManager && (
              <li>
                <button
                  onClick={() => setActiveTab("contacts")}
                  className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${
                    activeTab === "contacts"
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-400"
                  }`}
                >
                  Contacts
                </button>
              </li>
            )}
          </ul>
        </motion.aside>

        {/* --- MAIN CONTENT --- */}
        <motion.main
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 bg-[#11112b] rounded-2xl p-6 border border-white/10 min-h-[70vh]"
        >
          {allowedTabs.includes(activeTab) && activeTab === "blogs" && <DashboardBlogs />}
          {allowedTabs.includes(activeTab) && activeTab === "offers" && <DashboardOffers />}
          {allowedTabs.includes(activeTab) && activeTab === "categories" && <DashboardCategories />}
          {allowedTabs.includes(activeTab) && activeTab === "contacts" && <DashboardContacts />}
        </motion.main>
      </div>

      <div className="mt-16 px-6">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;


