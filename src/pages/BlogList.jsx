// import React from "react";
// import { motion } from "framer-motion";
// import { Calendar, Clock } from "lucide-react";
// import { Link } from "react-router-dom";
// import Footer from "./footer";
// import { useGetBlogsQuery } from "../features/blogs/blogsApi"; // RTK Query

// const categories = [
//   "All Categories",
//   "Digital Marketing",
//   "Web Development",
//   "E-Commerce",
//   "SEO Optimization",
//   "Social Media",
//   "Content Marketing",
//   "AI & Machine Learning",
// ];

// const BlogList = () => {
//   // ===== GET BLOGS FROM DASHBOARD =====
//   const { data: blogsRes, isLoading } = useGetBlogsQuery();
//   const blogs = blogsRes?.data || blogsRes || [];

//   if (isLoading)
//     return (
//       <p className="text-white text-center mt-24">Loading blogs...</p>
//     );

//   return (
//     <div className="min-h-screen bg-[#0a0a1a] text-white pt-24">
//       {/* HEADER */}
//       <div className="text-center mt-14 px-6 mb-16">
//         <h1 className="text-4xl md:text-5xl font-black mb-4">Blog & Insights</h1>
//         <p className="text-gray-400 max-w-2xl mx-auto text-sm">
//           Explore our latest articles, insights, and guides on digital marketing, web development, and business growth.
//         </p>
//       </div>

//       {/* CONTENT */}
//       <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-5 gap-10">
//         {/* BLOG LIST */}
//         <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
//           {blogs.map((blog, index) => (
//             <motion.div
//               key={blog._id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               viewport={{ once: true }}
//               whileHover={{
//                 y: -8,
//                 boxShadow: "0px 0px 25px 2px rgba(59,130,246,0.4)",
//               }}
//               className="bg-[#11112b] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 will-change-transform"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={blog.blogImage}
//                   alt={blog.title}
//                   loading="lazy"
//                   decoding="async"
//                   className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>

//               <div className="p-5">
//                 {/* FIXED: show category name */}
//                 <span className="text-blue-400 text-[11px] font-bold uppercase tracking-widest">
//                   {blog.categories?.[0]?.name || "Uncategorized"}
//                 </span>

//                 <h2 className="text-lg font-bold mt-2 mb-2 leading-snug">{blog.title}</h2>
//                 <p className="text-gray-400 text-xs mb-4 line-clamp-3">{blog.excerpt}</p>

//                 <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-4">
//                   <span>{blog.author}</span>
//                   <span className="flex items-center gap-1">
//                     <Calendar size={12} /> {new Date(blog.createdAt).toLocaleDateString()}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Clock size={12} /> {blog.readTime || "5 min read"}
//                   </span>
//                 </div>

//                 <Link
//                   to={`/blog/${blog.slug}`}
//                   className="text-blue-500 font-bold text-xs hover:underline"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* SIDEBAR */}
//         <aside className="lg:col-span-2 space-y-8">
//           {/* CATEGORIES */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             whileHover={{
//               y: -8,
//               boxShadow: "0px 0px 25px 2px rgba(59,130,246,0.4)",
//             }}
//             className="bg-[#11112b] p-8 rounded-2xl border border-white/10 transition-all duration-300"
//           >
//             <h3 className="font-black mb-6 text-xl">Categories</h3>
//             <ul className="space-y-3 list-disc list-inside marker:text-blue-500">
//               {categories.map((cat, i) => (
//                 <li
//                   key={i}
//                   className="text-gray-400 text-sm cursor-pointer hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
//                 >
//                   {cat}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* SUBSCRIBE */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             whileHover={{
//               y: -8,
//               boxShadow: "0px 0px 25px 2px rgba(59,130,246,0.4)",
//             }}
//             className="bg-[#11112b] p-8 rounded-2xl border border-white/10 transition-all duration-300"
//           >
//             <h3 className="font-black mb-4 text-xl">Subscribe</h3>
//             <p className="text-gray-400 text-sm mb-5">
//               Get the latest insights delivered to your inbox.
//             </p>
//             <input
//               type="email"
//               placeholder="Your email"
//               className="w-full px-4 py-3 rounded-lg bg-[#0a0a1a] border border-white/10 focus:outline-none focus:border-blue-500 text-sm mb-4"
//             />
//             <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-bold text-sm">
//               Subscribe
//             </button>
//           </motion.div>
//         </aside>
//       </div>

//       {/* CTA SECTION */}
//       <div className="mt-16 mb-12 px-6">
//         <div className="max-w-5xl mx-auto bg-[#11112b] border border-white/10 rounded-3xl p-10 text-center relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10"></div>
//           <h2 className="relative text-3xl md:text-4xl font-black mb-4">
//             Ready to Transform Your Business?
//           </h2>
//           <p className="relative text-gray-400 mb-8 max-w-2xl mx-auto">
//             Our expert team is ready to help you implement these strategies and achieve real growth.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="relative px-10 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold shadow-lg shadow-blue-500/30"
//           >
//             Get Started Today 🚀
//           </motion.button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default BlogList;









// import React from "react";
// import { motion } from "framer-motion";
// import { Calendar, Clock } from "lucide-react";
// import { Link } from "react-router-dom";
// import Footer from "./footer";
// import { useGetBlogsQuery } from "../features/blogs/blogsApi";

// const categories = [
//   "All Categories",
//   "Digital Marketing",
//   "Web Development",
//   "E-Commerce",
//   "SEO Optimization",
//   "Social Media",
//   "Content Marketing",
//   "AI & Machine Learning",
// ];

// const BlogList = () => {
//   // ===== GET BLOGS FROM DASHBOARD =====
//   const { data: blogsRes, isLoading } = useGetBlogsQuery();
//   const blogs = blogsRes?.data || blogsRes || [];

//   if (isLoading)
//     return <p className="text-white text-center mt-24">Loading blogs...</p>;

//   return (
//     <div className="min-h-screen bg-[#0a0a1a] text-white pt-24">
//       {/* HEADER */}
//       <div className="text-center mt-14 px-6 mb-16">
//         <h1 className="text-4xl md:text-5xl font-black mb-4">Blog & Insights</h1>
//         <p className="text-gray-400 max-w-2xl mx-auto text-sm">
//           Explore our latest articles, insights, and guides on digital marketing,
//           web development, and business growth.
//         </p>
//       </div>

//       {/* CONTENT */}
//       <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-5 gap-10">
//         {/* BLOG LIST */}
//         <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
//           {blogs.map((blog, index) => (
//             <motion.div
//               key={blog._id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               viewport={{ once: true }}
//               whileHover={{
//                 y: -8,
//                 boxShadow: "0px 0px 25px 2px rgba(59,130,246,0.4)",
//               }}
//               className="bg-[#11112b] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 flex flex-col"
//             >
//               {/* IMAGE */}
//               <div className="overflow-hidden">
//                 <img
//                   src={blog.blogImage}
//                   alt={blog.title}
//                   loading="lazy"
//                   decoding="async"
//                   className="w-full object-cover hover:scale-105 transition-transform duration-500"
//                   style={{ maxHeight: "200px", width: "100%" }}
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="p-5 flex flex-col flex-1">
//                 <span className="text-blue-400 text-[11px] font-bold uppercase tracking-widest">
//                   {blog.categories?.[0]?.name || "Uncategorized"}
//                 </span>

//                 <h2 className="text-lg font-bold mt-2 mb-2 leading-snug">
//                   {blog.title}
//                 </h2>

//                 <p className="text-gray-400 text-xs mb-4 line-clamp-3">
//                   {blog.excerpt}
//                 </p>

//                 <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-4">
//                   <span>{blog.author}</span>
//                   <span className="flex items-center gap-1">
//                     <Calendar size={12} />{" "}
//                     {new Date(blog.createdAt).toLocaleDateString()}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Clock size={12} /> {blog.readTime || "5 min read"}
//                   </span>
//                 </div>

//                 {/* LINK BOTTOM ALIGNED */}
//                 <Link
//                   to={`/blog/${blog.slug}`}
//                   className="text-blue-500 font-bold text-xs hover:underline mt-auto"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* SIDEBAR */}
//         <aside className="lg:col-span-2 space-y-8">
//           {/* CATEGORIES */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             whileHover={{
//               y: -8,
//               boxShadow: "0px 0px 25px 2px rgba(59,130,246,0.4)",
//             }}
//             className="bg-[#11112b] p-8 rounded-2xl border border-white/10 transition-all duration-300"
//           >
//             <h3 className="font-black mb-6 text-xl">Categories</h3>

//             <ul className="space-y-3 list-disc list-inside marker:text-blue-500">
//               {categories.map((cat, i) => (
//                 <li
//                   key={i}
//                   className="text-gray-400 text-sm cursor-pointer hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
//                 >
//                   {cat}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* SUBSCRIBE */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             whileHover={{
//               y: -8,
//               boxShadow: "0px 0px 25px 2px rgba(59,130,246,0.4)",
//             }}
//             className="bg-[#11112b] p-8 rounded-2xl border border-white/10 transition-all duration-300"
//           >
//             <h3 className="font-black mb-4 text-xl">Subscribe</h3>
//             <p className="text-gray-400 text-sm mb-5">
//               Get the latest insights delivered to your inbox.
//             </p>

//             <input
//               type="email"
//               placeholder="Your email"
//               className="w-full px-4 py-3 rounded-lg bg-[#0a0a1a] border border-white/10 focus:outline-none focus:border-blue-500 text-sm mb-4"
//             />

//             <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-bold text-sm">
//               Subscribe
//             </button>
//           </motion.div>
//         </aside>
//       </div>

//       {/* CTA */}
//       <div className="mt-16 mb-12 px-6">
//         <div className="max-w-5xl mx-auto bg-[#11112b] border border-white/10 rounded-3xl p-10 text-center relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10"></div>
//           <h2 className="relative text-3xl md:text-4xl font-black mb-4">
//             Ready to Transform Your Business?
//           </h2>
//           <p className="relative text-gray-400 mb-8 max-w-2xl mx-auto">
//             Our expert team is ready to help you implement these strategies and
//             achieve real growth.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="relative px-10 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold shadow-lg shadow-blue-500/30"
//           >
//             Get Started Today 🚀
//           </motion.button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default BlogList;














// import React from "react";
// import { motion } from "framer-motion";
// import { Calendar, Clock } from "lucide-react";
// import { Link } from "react-router-dom";
// import Footer from "./footer";
// import { useGetBlogsQuery } from "../features/blogs/blogsApi";

// const categories = [
//   "All Categories",
//   "Digital Marketing",
//   "Web Development",
//   "E-Commerce",
//   "SEO Optimization",
//   "Social Media",
//   "Content Marketing",
//   "AI & Machine Learning",
// ];

// const BlogList = () => {
//   const { data: blogsRes, isLoading } = useGetBlogsQuery();
//   const blogs = blogsRes?.data || blogsRes || [];

//   if (isLoading) {
//     return (
//       <p className="text-white text-center mt-24">
//         Loading blogs...
//       </p>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#0a0a1a] text-white pt-24">
//       {/* HEADER */}
//       <div className="text-center mt-14 px-6 mb-16">
//         <h1 className="text-4xl md:text-5xl font-black mb-4">
//           Blog & Insights
//         </h1>
//         <p className="text-gray-400 max-w-2xl mx-auto text-sm">
//           Explore our latest articles, insights, and guides on
//           digital marketing, web development, and business growth.
//         </p>
//       </div>

//       {/* CONTENT */}
//       <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-5 gap-10">
//         {/* BLOG LIST */}
//         <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
//           {blogs.map((blog, index) => (
//             <motion.div
//               key={blog._id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               viewport={{ once: true }}
//               whileHover={{
//                 y: -8,
//                 boxShadow:
//                   "0px 0px 25px 2px rgba(59,130,246,0.4)",
//               }}
//               className="bg-[#11112b] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300"
//             >
//               {/* IMAGE */}
//               <div className="h-[180px] overflow-hidden">
//                 <img
//                   src={blog.blogImage}
//                   alt={blog.title}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="p-5">
//                 <span className="text-blue-400 text-[11px] font-bold uppercase tracking-widest">
//                   {blog.categories?.[0]?.name || "Uncategorized"}
//                 </span>

//                 <h2 className="text-lg font-bold mt-2 mb-2 leading-snug">
//                   {blog.title}
//                 </h2>

//                 <p className="text-gray-400 text-xs mb-3 line-clamp-3">
//                   {blog.excerpt}
//                 </p>

//                 <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-3">
//                   <span>{blog.author}</span>
//                   <span className="flex items-center gap-1">
//                     <Calendar size={12} />
//                     {new Date(blog.createdAt).toLocaleDateString()}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Clock size={12} />
//                     {blog.readTime || "5 min read"}
//                   </span>
//                 </div>

//                 <Link
//                   to={`/blog/${blog.slug}`}
//                   className="inline-block text-blue-500 font-bold text-xs hover:underline"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* SIDEBAR */}
//         <aside className="lg:col-span-2 space-y-8">
//           <div className="bg-[#11112b] p-8 rounded-2xl border border-white/10">
//             <h3 className="font-black mb-6 text-xl">
//               Categories
//             </h3>
//             <ul className="space-y-3 list-disc list-inside marker:text-blue-500">
//               {categories.map((cat, i) => (
//                 <li
//                   key={i}
//                   className="text-gray-400 text-sm cursor-pointer hover:text-blue-400 transition hover:translate-x-2"
//                 >
//                   {cat}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="bg-[#11112b] p-8 rounded-2xl border border-white/10">
//             <h3 className="font-black mb-4 text-xl">
//               Subscribe
//             </h3>
//             <p className="text-gray-400 text-sm mb-5">
//               Get the latest insights delivered to your inbox.
//             </p>

//             <input
//               type="email"
//               placeholder="Your email"
//               className="w-full px-4 py-3 rounded-lg bg-[#0a0a1a] border border-white/10 focus:outline-none focus:border-blue-500 text-sm mb-4"
//             />

//             <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-bold text-sm">
//               Subscribe
//             </button>
//           </div>
//         </aside>
//       </div>





//       <div className="mt-16 mb-12 px-6">
//        <div className="max-w-5xl mx-auto bg-[#11112b] border border-white/10 rounded-3xl p-10 text-center relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10"></div>
//           <h2 className="relative text-3xl md:text-4xl font-black mb-4">
//             Ready to Transform Your Business?
//           </h2>
//          <p className="relative text-gray-400 mb-8 max-w-2xl mx-auto">
//            Our expert team is ready to help you implement these strategies and
//            achieve real growth.
//          </p>
//          <motion.button
//            whileHover={{ scale: 1.05 }}
//              whileTap={{ scale: 0.95 }}
//              className="relative px-10 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold shadow-lg shadow-blue-500/30"
//            >
//              Get Started Today 🚀
//           </motion.button>
//         </div>
//      </div> 





//       <Footer />
//     </div>
//   );
// };

// export default BlogList;












// import React from "react";
// import { motion } from "framer-motion";
// import { Calendar, Clock } from "lucide-react";
// import { Link } from "react-router-dom";
// import Footer from "./footer";
// import { useGetBlogsQuery } from "../features/blogs/blogsApi";
// import { useGetCategoriesQuery } from "../features/categories/categoriesApi";

// const BlogList = () => {
//   // ===== BLOGS =====
//   const { data: blogsRes, isLoading } = useGetBlogsQuery();
//   const blogs = blogsRes?.data || blogsRes || [];

//   // ===== CATEGORIES (FROM DASHBOARD) =====
//   const { data: catRes } = useGetCategoriesQuery();
//   const categories = catRes?.data || catRes || [];

//   if (isLoading) {
//     return (
//       <p className="text-white text-center mt-24">
//         Loading blogs...
//       </p>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#0a0a1a] text-white pt-24">
//       {/* HEADER */}
//       <div className="text-center mt-14 px-6 mb-16">
//         <h1 className="text-4xl md:text-5xl font-black mb-4">
//           Blog & Insights
//         </h1>
//         <p className="text-gray-400 max-w-2xl mx-auto text-sm">
//           Explore our latest articles, insights, and guides on digital
//           marketing, web development, and business growth.
//         </p>
//       </div>

//       {/* CONTENT */}
//       <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-5 gap-10">
//         {/* BLOG LIST */}
//         <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
//           {blogs.map((blog, index) => (
//             <motion.div
//               key={blog._id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               viewport={{ once: true }}
//               whileHover={{
//                 y: -8,
//                 boxShadow:
//                   "0px 0px 25px 2px rgba(59,130,246,0.4)",
//               }}
//               className="bg-[#11112b] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 flex flex-col"
//             >
//               {/* IMAGE */}
//               <div className="h-[180px] overflow-hidden">
//                 <img
//                   src={blog.blogImage}
//                   alt={blog.title}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>

//               {/* CARD CONTENT */}
//               <div className="p-5 flex flex-col flex-1">
//                 <span className="text-blue-400 text-[11px] font-bold uppercase tracking-widest">
//                   {blog.categories?.[0]?.name || "Uncategorized"}
//                 </span>

//                 <h2 className="text-lg font-bold mt-2 mb-2 leading-snug">
//                   {blog.title}
//                 </h2>

//                 <p className="text-gray-400 text-xs line-clamp-3 mb-3">
//                   {blog.excerpt}
//                 </p>

//                 <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-4">
//                   <span>{blog.author}</span>
//                   <span className="flex items-center gap-1">
//                     <Calendar size={12} />
//                     {new Date(blog.createdAt).toLocaleDateString()}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Clock size={12} />
//                     {blog.readTime || "5 min read"}
//                   </span>
//                 </div>

//                 {/* PUSH READ MORE TO BOTTOM */}
//                 <div className="mt-auto">
//                   <Link
//                     to={`/blog/${blog.slug}`}
//                     className="inline-block text-blue-500 font-bold text-xs hover:underline"
//                   >
//                     Read More →
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* SIDEBAR */}
//         <aside className="lg:col-span-2 space-y-8">
//           {/* CATEGORIES */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             whileHover={{
//               y: -8,
//               boxShadow:
//                 "0px 0px 25px 2px rgba(59,130,246,0.4)",
//             }}
//             className="bg-[#11112b] p-8 rounded-2xl border border-white/10 transition-all duration-300"
//           >
//             <h3 className="font-black mb-6 text-xl">
//               Categories
//             </h3>

//             <ul className="space-y-3 list-disc list-inside marker:text-blue-500">
//               <li className="text-gray-300 text-sm font-semibold cursor-pointer">
//                 All Categories
//               </li>

//               {categories.map((cat) => (
//                 <li
//                   key={cat._id}
//                   className="text-gray-400 text-sm cursor-pointer hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
//                 >
//                   {cat.name}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* SUBSCRIBE */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             whileHover={{
//               y: -8,
//               boxShadow:
//                 "0px 0px 25px 2px rgba(59,130,246,0.4)",
//             }}
//             className="bg-[#11112b] p-8 rounded-2xl border border-white/10 transition-all duration-300"
//           >
//             <h3 className="font-black mb-4 text-xl">
//               Subscribe
//             </h3>
//             <p className="text-gray-400 text-sm mb-5">
//               Get the latest insights delivered to your inbox.
//             </p>

//             <input
//               type="email"
//               placeholder="Your email"
//               className="w-full px-4 py-3 rounded-lg bg-[#0a0a1a] border border-white/10 focus:outline-none focus:border-blue-500 text-sm mb-4"
//             />

//             <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-bold text-sm">
//               Subscribe
//             </button>
//           </motion.div>
//         </aside>
//       </div>

//       {/* CTA */}
//       <div className="mt-16 mb-12 px-6">
//         <div className="max-w-5xl mx-auto bg-[#11112b] border border-white/10 rounded-3xl p-10 text-center relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10"></div>
//           <h2 className="relative text-3xl md:text-4xl font-black mb-4">
//             Ready to Transform Your Business?
//           </h2>
//           <p className="relative text-gray-400 mb-8 max-w-2xl mx-auto">
//             Our expert team is ready to help you implement these strategies and
//             achieve real growth.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="relative px-10 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold shadow-lg shadow-blue-500/30"
//           >
//             Get Started Today 🚀
//           </motion.button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default BlogList;










// import React, { useState, useMemo } from "react";
// import { motion } from "framer-motion";
// import { Calendar, Clock } from "lucide-react";
// import { Link } from "react-router-dom";
// import Footer from "./footer";
// import { useGetBlogsQuery } from "../features/blogs/blogsApi";
// import { useGetCategoriesQuery } from "../features/categories/categoriesApi";

// const BlogList = () => {
//   // ===== CATEGORY STATE =====
//   const [activeCategory, setActiveCategory] = useState("all");

//   // ===== BLOGS =====
//   const { data: blogsRes, isLoading } = useGetBlogsQuery();
//   const blogs = blogsRes?.data || blogsRes || [];

//   // ===== CATEGORIES =====
//   const { data: catRes } = useGetCategoriesQuery();
//   const categories = catRes?.data || catRes || [];

//   // ===== FILTER LOGIC =====
//   const filteredBlogs = useMemo(() => {
//     if (activeCategory === "all") return blogs;

//     return blogs.filter((blog) =>
//       blog.categories?.some(
//         (cat) => cat._id === activeCategory
//       )
//     );
//   }, [blogs, activeCategory]);

//   if (isLoading) {
//     return (
//       <p className="text-white text-center mt-24">
//         Loading blogs...
//       </p>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#0a0a1a] text-white pt-24">
//       {/* HEADER */}
//       <div className="text-center mt-14 px-6 mb-16">
//         <h1 className="text-4xl md:text-5xl font-black mb-4">
//           Blog & Insights
//         </h1>
//         <p className="text-gray-400 max-w-2xl mx-auto text-sm">
//           Explore our latest articles, insights, and guides on digital
//           marketing, web development, and business growth.
//         </p>
//       </div>

//       {/* CONTENT */}
//       <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-5 gap-10">
//         {/* BLOG LIST */}
//         <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
//           {filteredBlogs.length === 0 && (
//             <p className="text-gray-400 col-span-full">
//               No blogs found for this category.
//             </p>
//           )}

//           {filteredBlogs.map((blog, index) => (
//             <motion.div
//               key={blog._id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               viewport={{ once: true }}
//               whileHover={{
//                 y: -8,
//                 boxShadow:
//                   "0px 0px 25px 2px rgba(59,130,246,0.4)",
//               }}
//               className="bg-[#11112b] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 flex flex-col"
//             >
//               {/* IMAGE */}
//               <div className="h-[180px] overflow-hidden">
//                 <img
//                   src={blog.blogImage}
//                   alt={blog.title}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>

//               {/* CARD CONTENT */}
//               <div className="p-5 flex flex-col flex-1">
//                 <span className="text-blue-400 text-[11px] font-bold uppercase tracking-widest">
//                   {blog.categories?.[0]?.name || "Uncategorized"}
//                 </span>

//                 <h2 className="text-lg font-bold mt-2 mb-2 leading-snug">
//                   {blog.title}
//                 </h2>

//                 <p className="text-gray-400 text-xs line-clamp-3 mb-3">
//                   {blog.excerpt}
//                 </p>

//                 <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-4">
//                   <span>{blog.author}</span>
//                   <span className="flex items-center gap-1">
//                     <Calendar size={12} />
//                     {new Date(blog.createdAt).toLocaleDateString()}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Clock size={12} />
//                     {blog.readTime || "5 min read"}
//                   </span>
//                 </div>

//                 <div className="mt-auto">
//                   <Link
//                     to={`/blog/${blog.slug}`}
//                     className="inline-block text-blue-500 font-bold text-xs hover:underline"
//                   >
//                     Read More →
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* SIDEBAR */}
//         <aside className="lg:col-span-2 space-y-8">
//           {/* CATEGORIES */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             whileHover={{
//               y: -8,
//               boxShadow:
//                 "0px 0px 25px 2px rgba(59,130,246,0.4)",
//             }}
//             className="bg-[#11112b] p-8 rounded-2xl border border-white/10 transition-all duration-300"
//           >
//             <h3 className="font-black mb-6 text-xl">
//               Categories
//             </h3>

//             <ul className="space-y-3 list-disc list-inside marker:text-blue-500">
//               <li
//                 onClick={() => setActiveCategory("all")}
//                 className={`text-sm cursor-pointer transition-all hover:translate-x-2 ${
//                   activeCategory === "all"
//                     ? "text-blue-400 font-bold"
//                     : "text-gray-300"
//                 }`}
//               >
//                 All Categories
//               </li>

//               {categories.map((cat) => (
//                 <li
//                   key={cat._id}
//                   onClick={() => setActiveCategory(cat._id)}
//                   className={`text-sm cursor-pointer transition-all hover:translate-x-2 ${
//                     activeCategory === cat._id
//                       ? "text-blue-400 font-bold"
//                       : "text-gray-400 hover:text-blue-400"
//                   }`}
//                 >
//                   {cat.name}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* SUBSCRIBE */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             whileHover={{
//               y: -8,
//               boxShadow:
//                 "0px 0px 25px 2px rgba(59,130,246,0.4)",
//             }}
//             className="bg-[#11112b] p-8 rounded-2xl border border-white/10 transition-all duration-300"
//           >
//             <h3 className="font-black mb-4 text-xl">
//               Subscribe
//             </h3>
//             <p className="text-gray-400 text-sm mb-5">
//               Get the latest insights delivered to your inbox.
//             </p>

//             <input
//               type="email"
//               placeholder="Your email"
//               className="w-full px-4 py-3 rounded-lg bg-[#0a0a1a] border border-white/10 focus:outline-none focus:border-blue-500 text-sm mb-4"
//             />

//             <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-bold text-sm">
//               Subscribe
//             </button>
//           </motion.div>
//         </aside>
//       </div>

//       {/* CTA */}
//       <div className="mt-16 mb-12 px-6">
//         <div className="max-w-5xl mx-auto bg-[#11112b] border border-white/10 rounded-3xl p-10 text-center relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10"></div>
//           <h2 className="relative text-3xl md:text-4xl font-black mb-4">
//             Ready to Transform Your Business?
//           </h2>
//           <p className="relative text-gray-400 mb-8 max-w-2xl mx-auto">
//             Our expert team is ready to help you implement these strategies and
//             achieve real growth.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="relative px-10 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold shadow-lg shadow-blue-500/30"
//           >
//             Get Started Today 🚀
//           </motion.button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default BlogList;
















import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { useGetBlogsQuery } from "../features/blogs/blogsApi";
import { useGetCategoriesQuery } from "../features/categories/categoriesApi";
import { useSubscribeMutation } from "../features/subscriber/subscriberApi";

const BlogList = () => {
  // ===== CATEGORY STATE =====
  const [activeCategory, setActiveCategory] = useState("all");

  // ===== SUBSCRIBE STATE =====
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribe, { isLoading: isSubscribing }] = useSubscribeMutation();

  // ===== BLOGS =====
  const { data: blogsRes, isLoading } = useGetBlogsQuery();
  const blogs = blogsRes?.data || blogsRes || [];

  // ===== CATEGORIES =====
  const { data: catRes } = useGetCategoriesQuery();
  const categories = catRes?.data || catRes || [];

  // ===== FILTER LOGIC =====
  const filteredBlogs = useMemo(() => {
    if (activeCategory === "all") return blogs;

    return blogs.filter((blog) =>
      blog.categories?.some((cat) => cat._id === activeCategory)
    );
  }, [blogs, activeCategory]);

  // ===== HANDLE SUBSCRIBE =====
  const handleSubscribe = async () => {
    if (!email.trim()) {
      setError("Enter email first");
      return;
    }

    try {
      setError("");
      await subscribe(email).unwrap();
      setSubscribed(true);
      setEmail("");
    } catch (err) {
      setError("Subscription failed");
    }
  };

  if (isLoading) {
    return (
      <p className="text-white text-center mt-24">
        Loading blogs...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white pt-24">
      {/* HEADER */}
      <div className="text-center mt-14 px-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Blog & Insights
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm">
          Explore our latest articles, insights, and guides on digital
          marketing, web development, and business growth.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* BLOG LIST */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {filteredBlogs.length === 0 && (
            <p className="text-gray-400 col-span-full">
              No blogs found for this category.
            </p>
          )}

          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow:
                  "0px 0px 25px 2px rgba(59,130,246,0.4)",
              }}
              className="bg-[#11112b] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 flex flex-col"
            >
              <div className="h-[180px] overflow-hidden">
                <img
                  src={blog.blogImage}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <span className="text-blue-400 text-[11px] font-bold uppercase tracking-widest">
                  {blog.categories?.[0]?.name || "Uncategorized"}
                </span>

                <h2 className="text-lg font-bold mt-2 mb-2 leading-snug">
                  {blog.title}
                </h2>

                <p className="text-gray-400 text-xs line-clamp-3 mb-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-4">
                  <span>{blog.author}</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {blog.readTime || "5 min read"}
                  </span>
                </div>

                <div className="mt-auto">
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="inline-block text-blue-500 font-bold text-xs hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-2 space-y-8">
          {/* CATEGORIES */}
          <motion.div
            className="bg-[#11112b] p-8 rounded-2xl border border-white/10 transition-all duration-300"
          >
            <h3 className="font-black mb-6 text-xl">
              Categories
            </h3>

            <ul className="space-y-3 list-disc list-inside marker:text-blue-500">
              <li
                onClick={() => setActiveCategory("all")}
                className={`text-sm cursor-pointer ${
                  activeCategory === "all"
                    ? "text-blue-400 font-bold"
                    : "text-gray-300"
                }`}
              >
                All Categories
              </li>

              {categories.map((cat) => (
                <li
                  key={cat._id}
                  onClick={() => setActiveCategory(cat._id)}
                  className={`text-sm cursor-pointer ${
                    activeCategory === cat._id
                      ? "text-blue-400 font-bold"
                      : "text-gray-400 hover:text-blue-400"
                  }`}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SUBSCRIBE */}
          <motion.div className="bg-[#11112b] p-8 rounded-2xl border border-white/10">
            <h3 className="font-black mb-4 text-xl">
              Subscribe
            </h3>
            <p className="text-gray-400 text-sm mb-5">
              Get the latest insights delivered to your inbox.
            </p>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a1a] border border-white/10 focus:outline-none focus:border-blue-500 text-sm mb-2"
            />

            {error && (
              <p className="text-red-500 text-xs mb-3">
                {error}
              </p>
            )}

            <button
              onClick={handleSubscribe}
              disabled={isSubscribing || subscribed}
              className={`w-full transition py-3 rounded-lg font-bold text-sm ${
                subscribed
                  ? "bg-green-600"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {subscribed
                ? "Subscribed"
                : isSubscribing
                ? "Subscribing..."
                : "Subscribe"}
            </button>
          </motion.div>
        </aside>
      </div>
<div className="mt-20">
  <Footer />
</div>
    </div>
   
  );
};

export default BlogList;
