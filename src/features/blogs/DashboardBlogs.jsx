// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   useGetBlogsQuery,
//   useCreateBlogMutation,
//   useUpdateBlogMutation,
//   useDeleteBlogMutation,
// } from "../../features/blogs/blogsApi";
// import { useGetCategoriesQuery } from "../../features/categories/categoriesApi";
// import { useUploadBlogImageMutation } from "../../features/upload/uploadApi";

// const DashboardBlogs = () => {
//   // ===== BLOGS =====
//   const { data: blogsRes, isLoading } = useGetBlogsQuery();
//   const blogs = blogsRes?.data || blogsRes || [];

//   // ===== CATEGORIES =====
//   const { data: catRes } = useGetCategoriesQuery();
//   const categories = Array.isArray(catRes) ? catRes : catRes?.data || [];

//   // ===== MUTATIONS =====
//   const [createBlog] = useCreateBlogMutation();
//   const [updateBlog] = useUpdateBlogMutation();
//   const [deleteBlog] = useDeleteBlogMutation();
//   const [uploadBlogImage] = useUploadBlogImageMutation();

//   // ===== LOCAL STATE =====
//   const [showForm, setShowForm] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   const [formData, setFormData] = useState({
//     title: "",
//     excerpt: "",
//     content: "",
//     categories: [],
//     author: "",
//     blogImage: "",
//     status: "draft",
//   });

//   // ===== IMAGE UPLOAD =====
//   const handleImageUpload = async (file) => {
//     if (!file) return;

//     setUploading(true);
//     try {
//       const data = new FormData();
//       data.append("image", file); // 🔹 MUST match multer field name

//       const res = await uploadBlogImage(data).unwrap();
//       const imageUrl = res?.data?.url;

//       if (!imageUrl) throw new Error("Image URL missing from response");

//       setFormData((prev) => ({ ...prev, blogImage: imageUrl }));
//     } catch (err) {
//       console.error("Image upload failed", err);
//       alert("Image upload failed. Check console.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   // ===== SUBMIT BLOG =====
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.blogImage) return alert("Blog image is required!");

//     try {
//       if (editingId) {
//         await updateBlog({ id: editingId, ...formData }).unwrap();
//       } else {
//         await createBlog(formData).unwrap();
//       }
//       resetForm();
//     } catch (err) {
//       console.error("Blog save error:", err);
//       alert("Failed to save blog. Check console.");
//     }
//   };

//   const resetForm = () => {
//     setShowForm(false);
//     setEditingId(null);
//     setFormData({
//       title: "",
//       excerpt: "",
//       content: "",
//       categories: [],
//       author: "",
//       blogImage: "",
//       status: "draft",
//     });
//   };

//   if (isLoading) return <p className="text-white">Loading blogs...</p>;

//   return (
//     <div className="p-6 bg-[#0a0a1a] rounded-2xl border border-white/10">

//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-white font-black text-xl">Blogs</h2>
//         <button
//           onClick={() => setShowForm(true)}
//           className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-bold"
//         >
//           Add Blog
//         </button>
//       </div>

//       {/* FORM */}
//       {showForm && (
//         <motion.form
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           onSubmit={handleSubmit}
//           className="mb-8 bg-[#11112b] p-5 rounded-xl border border-white/10 space-y-4"
//         >
//           <input
//             type="text"
//             placeholder="Blog Title"
//             value={formData.title}
//             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />

//           <input
//             type="text"
//             placeholder="Short Excerpt"
//             value={formData.excerpt}
//             onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />

//           <textarea
//             placeholder="Full Blog Content"
//             rows="6"
//             value={formData.content}
//             onChange={(e) => setFormData({ ...formData, content: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />

//           {/* CATEGORIES */}
//           <select
//             multiple
//             value={formData.categories}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 categories: Array.from(e.target.selectedOptions, (opt) => opt.value),
//               })
//             }
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           >
//             {categories.length === 0 && <option disabled>No categories found</option>}
//             {categories.map((cat) => (
//               <option key={cat._id} value={cat._id}>{cat.name}</option>
//             ))}
//           </select>

//           <input
//             type="text"
//             placeholder="Author"
//             value={formData.author}
//             onChange={(e) => setFormData({ ...formData, author: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />

//           {/* IMAGE */}
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => handleImageUpload(e.target.files[0])}
//             className="text-white"
//             required
//           />

//           {uploading && <p className="text-gray-400">Uploading image...</p>}

//           {formData.blogImage && (
//             <img
//               src={formData.blogImage}
//               alt="preview"
//               className="h-32 rounded border border-white/20"
//             />
//           )}

//           <select
//             value={formData.status}
//             onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           >
//             <option value="draft">Draft</option>
//             <option value="published">Published</option>
//           </select>

//           <div className="flex gap-3">
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-bold text-white"
//             >
//               {editingId ? "Update Blog" : "Save Blog"}
//             </button>

//             <button
//               type="button"
//               onClick={resetForm}
//               className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg font-bold text-white"
//             >
//               Cancel
//             </button>
//           </div>
//         </motion.form>
//       )}

//       {/* TABLE */}
//       <table className="w-full text-white border border-white/10">
//         <thead>
//           <tr className="bg-[#11112b]">
//             <th className="p-2 border border-white/10">Title</th>
//             <th className="p-2 border border-white/10">Status</th>
//             <th className="p-2 border border-white/10">Author</th>
//             <th className="p-2 border border-white/10">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {blogs.map((blog) => (
//             <tr key={blog._id} className="hover:bg-[#11112b]/60">
//               <td className="p-2 border border-white/10">{blog.title}</td>
//               <td className="p-2 border border-white/10">{blog.status}</td>
//               <td className="p-2 border border-white/10">{blog.author}</td>
//               <td className="p-2 border border-white/10 space-x-2">
//                 <button
//                   onClick={() => {
//                     setEditingId(blog._id);
//                     setFormData({
//                       title: blog.title,
//                       excerpt: blog.excerpt,
//                       content: blog.content,
//                       categories: blog.categories?.map((c) => c._id) || [],
//                       author: blog.author,
//                       blogImage: blog.blogImage,
//                       status: blog.status,
//                     });
//                     setShowForm(true);
//                   }}
//                   className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded"
//                 >
//                   Edit
//                 </button>

//                 <button
//                   onClick={() => deleteBlog(blog._id)}
//                   className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DashboardBlogs;


















// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   useGetBlogsQuery,
//   useCreateBlogMutation,
//   useUpdateBlogMutation,
//   useDeleteBlogMutation,
// } from "../../features/blogs/blogsApi";
// import { useGetCategoriesQuery } from "../../features/categories/categoriesApi";
// import { useUploadBlogImageMutation } from "../../features/upload/uploadApi";

// const DashboardBlogs = () => {
//   // ===== BLOGS =====
//   const { data: blogsRes, isLoading } = useGetBlogsQuery();
//   const blogs = blogsRes?.data || blogsRes || [];

//   // ===== CATEGORIES =====
//   const { data: catRes } = useGetCategoriesQuery();
//   const categories = Array.isArray(catRes) ? catRes : catRes?.data || [];

//   // ===== MUTATIONS =====
//   const [createBlog] = useCreateBlogMutation();
//   const [updateBlog] = useUpdateBlogMutation();
//   const [deleteBlog] = useDeleteBlogMutation();
//   const [uploadBlogImage] = useUploadBlogImageMutation();

//   // ===== LOCAL STATE =====
//   const [showForm, setShowForm] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   const [formData, setFormData] = useState({
//     title: "",
//     excerpt: "",
//     content: "",
//     categories: [],
//     author: "",
//     blogImage: "",
//     status: "draft",
//   });

//   // Optional: store selected file
//   const [selectedFile, setSelectedFile] = useState(null);

//   // ===== IMAGE UPLOAD =====
//   const handleImageUpload = async (file) => {
//     if (!file) return;

//     setUploading(true);
//     try {
//       const data = new FormData();
//       data.append("image", file);

//       const res = await uploadBlogImage(data).unwrap();
//       const imageUrl = res?.data?.url;

//       if (!imageUrl) throw new Error("Image URL missing from response");

//       setFormData((prev) => ({ ...prev, blogImage: imageUrl }));
//     } catch (err) {
//       console.error("Image upload failed", err);
//       alert("Image upload failed. Check console.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   // ===== SUBMIT BLOG =====
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.blogImage) return alert("Blog image is required!");

//     try {
//       if (editingId) {
//         await updateBlog({ id: editingId, ...formData }).unwrap();
//       } else {
//         await createBlog(formData).unwrap();
//       }
//       resetForm();
//     } catch (err) {
//       console.error("Blog save error:", err);
//       alert("Failed to save blog. Check console.");
//     }
//   };

//   const resetForm = () => {
//     setShowForm(false);
//     setEditingId(null);
//     setFormData({
//       title: "",
//       excerpt: "",
//       content: "",
//       categories: [],
//       author: "",
//       blogImage: "",
//       status: "draft",
//     });
//     setSelectedFile(null);
//   };

//   if (isLoading) return <p className="text-white">Loading blogs...</p>;

//   return (
//     <div className="p-6 bg-[#0a0a1a] rounded-2xl border border-white/10">

//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-white font-black text-xl">Blogs</h2>
//         <button
//           onClick={() => setShowForm(true)}
//           className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-bold"
//         >
//           Add Blog
//         </button>
//       </div>

//       {/* FORM */}
//       {showForm && (
//         <motion.form
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           onSubmit={handleSubmit}
//           className="mb-8 bg-[#11112b] p-5 rounded-xl border border-white/10 space-y-4"
//         >
//           <input
//             type="text"
//             placeholder="Blog Title"
//             value={formData.title}
//             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />

//           <input
//             type="text"
//             placeholder="Short Excerpt"
//             value={formData.excerpt}
//             onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />

//           <textarea
//             placeholder="Full Blog Content"
//             rows="6"
//             value={formData.content}
//             onChange={(e) => setFormData({ ...formData, content: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />

//           {/* CATEGORIES */}
//           <select
//             multiple
//             value={formData.categories}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 categories: Array.from(e.target.selectedOptions, (opt) => opt.value),
//               })
//             }
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           >
//             {categories.length === 0 && <option disabled>No categories found</option>}
//             {categories.map((cat) => (
//               <option key={cat._id} value={cat._id}>{cat.name}</option>
//             ))}
//           </select>

//           <input
//             type="text"
//             placeholder="Author"
//             value={formData.author}
//             onChange={(e) => setFormData({ ...formData, author: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />

//           {/* IMAGE PREVIEW */}
//           {formData.blogImage && (
//             <div className="flex flex-col items-start gap-2">
//               <img
//                 src={formData.blogImage}
//                 alt="preview"
//                 className="h-32 rounded border border-white/20"
//               />
//               <p className="text-gray-400 text-sm">Current image. Choose a new file to replace.</p>
//             </div>
//           )}

//           {/* FILE INPUT */}
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => {
//               const file = e.target.files[0];
//               setSelectedFile(file);
//               handleImageUpload(file);
//             }}
//             className="text-white"
//           />

//           {uploading && <p className="text-gray-400">Uploading image...</p>}

//           {/* STATUS */}
//           <select
//             value={formData.status}
//             onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           >
//             <option value="draft">Draft</option>
//             <option value="published">Published</option>
//           </select>

//           <div className="flex gap-3">
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-bold text-white"
//             >
//               {editingId ? "Update Blog" : "Save Blog"}
//             </button>

//             <button
//               type="button"
//               onClick={resetForm}
//               className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg font-bold text-white"
//             >
//               Cancel
//             </button>
//           </div>
//         </motion.form>
//       )}

//       {/* TABLE */}
//       <table className="w-full text-white border border-white/10">
//         <thead>
//           <tr className="bg-[#11112b]">
//             <th className="p-2 border border-white/10">Title</th>
//             <th className="p-2 border border-white/10">Status</th>
//             <th className="p-2 border border-white/10">Author</th>
//             <th className="p-2 border border-white/10">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {blogs.map((blog) => (
//             <tr key={blog._id} className="hover:bg-[#11112b]/60">
//               <td className="p-2 border border-white/10">{blog.title}</td>
//               <td className="p-2 border border-white/10">{blog.status}</td>
//               <td className="p-2 border border-white/10">{blog.author}</td>
//               <td className="p-2 border border-white/10 space-x-2">
//                 <button
//                   onClick={() => {
//                     setEditingId(blog._id);
//                     setFormData({
//                       title: blog.title,
//                       excerpt: blog.excerpt,
//                       content: blog.content,
//                       categories: blog.categories?.map((c) => c._id) || [],
//                       author: blog.author,
//                       blogImage: blog.blogImage,
//                       status: blog.status,
//                     });
//                     setSelectedFile(null);
//                     setShowForm(true);
//                   }}
//                   className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded"
//                 >
//                   Edit
//                 </button>

//                 <button
//                   onClick={() => deleteBlog(blog._id)}
//                   className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DashboardBlogs;















// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   useGetBlogsQuery,
//   useCreateBlogMutation,
//   useUpdateBlogMutation,
//   useDeleteBlogMutation,
// } from "../../features/blogs/blogsApi";
// import { useGetCategoriesQuery } from "../../features/categories/categoriesApi";
// import { useUploadBlogImageMutation } from "../../features/upload/uploadApi";

// // 📝 Import React Markdown Editor
// import MDEditor from "@uiw/react-md-editor";

// const DashboardBlogs = () => {
//   // ===== BLOGS =====
//   const { data: blogsRes, isLoading } = useGetBlogsQuery();
//   const blogs = blogsRes?.data || blogsRes || [];

//   // ===== CATEGORIES =====
//   const { data: catRes } = useGetCategoriesQuery();
//   const categories = Array.isArray(catRes) ? catRes : catRes?.data || [];

//   // ===== MUTATIONS =====
//   const [createBlog] = useCreateBlogMutation();
//   const [updateBlog] = useUpdateBlogMutation();
//   const [deleteBlog] = useDeleteBlogMutation();
//   const [uploadBlogImage] = useUploadBlogImageMutation();

//   // ===== LOCAL STATE =====
//   const [showForm, setShowForm] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   const [formData, setFormData] = useState({
//     title: "",
//     excerpt: "",
//     content: "",
//     categories: [],
//     author: "",
//     blogImage: "",
//     status: "draft",
//   });

//   // Optional: store selected file
//   const [selectedFile, setSelectedFile] = useState(null);

//   // ===== IMAGE UPLOAD =====
//   const handleImageUpload = async (file) => {
//     if (!file) return;

//     setUploading(true);
//     try {
//       const data = new FormData();
//       data.append("image", file);

//       const res = await uploadBlogImage(data).unwrap();
//       const imageUrl = res?.data?.url;

//       if (!imageUrl) throw new Error("Image URL missing from response");

//       setFormData((prev) => ({ ...prev, blogImage: imageUrl }));
//     } catch (err) {
//       console.error("Image upload failed", err);
//       alert("Image upload failed. Check console.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   // ===== SUBMIT BLOG =====
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.blogImage) return alert("Blog image is required!");

//     try {
//       if (editingId) {
//         await updateBlog({ id: editingId, ...formData }).unwrap();
//       } else {
//         await createBlog(formData).unwrap();
//       }
//       resetForm();
//     } catch (err) {
//       console.error("Blog save error:", err);
//       alert("Failed to save blog. Check console.");
//     }
//   };

//   const resetForm = () => {
//     setShowForm(false);
//     setEditingId(null);
//     setFormData({
//       title: "",
//       excerpt: "",
//       content: "",
//       categories: [],
//       author: "",
//       blogImage: "",
//       status: "draft",
//     });
//     setSelectedFile(null);
//   };

//   if (isLoading) return <p className="text-white">Loading blogs...</p>;

//   return (
//     <div className="p-6 bg-[#0a0a1a] rounded-2xl border border-white/10">

//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-white font-black text-xl">Blogs</h2>
//         <button
//           onClick={() => setShowForm(true)}
//           className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-bold"
//         >
//           Add Blog
//         </button>
//       </div>

//       {/* FORM */}
//       {showForm && (
//         <motion.form
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           onSubmit={handleSubmit}
//           className="mb-8 bg-[#11112b] p-5 rounded-xl border border-white/10 space-y-4"
//         >
//           <input
//             type="text"
//             placeholder="Blog Title"
//             value={formData.title}
//             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />

//           <input
//             type="text"
//             placeholder="Short Excerpt"
//             value={formData.excerpt}
//             onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />

//           {/* ✅ Markdown Editor */}
//           <div className="bg-[#0a0a1a] border border-white/20 rounded p-2">
//             <MDEditor
//               value={formData.content}
//               onChange={(val) => setFormData({ ...formData, content: val || "" })}
//               height={300}
//               textareaProps={{
//                 placeholder: "Write your blog here in Markdown...",
//                 className: "bg-[#0a0a1a] text-white",
//               }}
//             />
//           </div>

//           {/* CATEGORIES */}
//           <select
//             multiple
//             value={formData.categories}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 categories: Array.from(e.target.selectedOptions, (opt) => opt.value),
//               })
//             }
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           >
//             {categories.length === 0 && <option disabled>No categories found</option>}
//             {categories.map((cat) => (
//               <option key={cat._id} value={cat._id}>{cat.name}</option>
//             ))}
//           </select>

//           <input
//             type="text"
//             placeholder="Author"
//             value={formData.author}
//             onChange={(e) => setFormData({ ...formData, author: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />

//           {/* IMAGE PREVIEW */}
//           {formData.blogImage && (
//             <div className="flex flex-col items-start gap-2">
//               <img
//                 src={formData.blogImage}
//                 alt="preview"
//                 className="h-32 rounded border border-white/20"
//               />
//               <p className="text-gray-400 text-sm">Current image. Choose a new file to replace.</p>
//             </div>
//           )}

//           {/* FILE INPUT */}
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => {
//               const file = e.target.files[0];
//               setSelectedFile(file);
//               handleImageUpload(file);
//             }}
//             className="text-white"
//           />

//           {uploading && <p className="text-gray-400">Uploading image...</p>}

//           {/* STATUS */}
//           <select
//             value={formData.status}
//             onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           >
//             <option value="draft">Draft</option>
//             <option value="published">Published</option>
//           </select>

//           <div className="flex gap-3">
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-bold text-white"
//             >
//               {editingId ? "Update Blog" : "Save Blog"}
//             </button>

//             <button
//               type="button"
//               onClick={resetForm}
//               className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg font-bold text-white"
//             >
//               Cancel
//             </button>
//           </div>
//         </motion.form>
//       )}

//       {/* TABLE */}
//       <table className="w-full text-white border border-white/10">
//         <thead>
//           <tr className="bg-[#11112b]">
//             <th className="p-2 border border-white/10">Title</th>
//             <th className="p-2 border border-white/10">Status</th>
//             <th className="p-2 border border-white/10">Author</th>
//             <th className="p-2 border border-white/10">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {blogs.map((blog) => (
//             <tr key={blog._id} className="hover:bg-[#11112b]/60">
//               <td className="p-2 border border-white/10">{blog.title}</td>
//               <td className="p-2 border border-white/10">{blog.status}</td>
//               <td className="p-2 border border-white/10">{blog.author}</td>
//               <td className="p-2 border border-white/10 space-x-2">
//                 <button
//                   onClick={() => {
//                     setEditingId(blog._id);
//                     setFormData({
//                       title: blog.title,
//                       excerpt: blog.excerpt,
//                       content: blog.content,
//                       categories: blog.categories?.map((c) => c._id) || [],
//                       author: blog.author,
//                       blogImage: blog.blogImage,
//                       status: blog.status,
//                     });
//                     setSelectedFile(null);
//                     setShowForm(true);
//                   }}
//                   className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded"
//                 >
//                   Edit
//                 </button>

//                 <button
//                   onClick={() => deleteBlog(blog._id)}
//                   className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DashboardBlogs;











// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   useGetBlogsQuery,
//   useCreateBlogMutation,
//   useUpdateBlogMutation,
//   useDeleteBlogMutation,
// } from "../../features/blogs/blogsApi";
// import { useGetCategoriesQuery } from "../../features/categories/categoriesApi";
// import { useUploadBlogImageMutation } from "../../features/upload/uploadApi";

// // Markdown Editor
// import MDEditor from "@uiw/react-md-editor";

// const DashboardBlogs = () => {
//   // ===== BLOGS =====
//   const { data: blogsRes, isLoading } = useGetBlogsQuery();
//   const blogs = blogsRes?.data || blogsRes || [];

//   // ===== CATEGORIES =====
//   const { data: catRes } = useGetCategoriesQuery();
//   const categories = Array.isArray(catRes) ? catRes : catRes?.data || [];

//   // ===== MUTATIONS =====
//   const [createBlog] = useCreateBlogMutation();
//   const [updateBlog] = useUpdateBlogMutation();
//   const [deleteBlog] = useDeleteBlogMutation();
//   const [uploadBlogImage] = useUploadBlogImageMutation();

//   // ===== LOCAL STATE =====
//   const [showForm, setShowForm] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   const [formData, setFormData] = useState({
//     title: "",
//     excerpt: "",
//     content: "",
//     categories: [],
//     author: "",
//     blogImage: "",
//     status: "draft",
//   });

//   const [selectedFile, setSelectedFile] = useState(null);

//   // ===== IMAGE UPLOAD =====
//   const handleImageUpload = async (file) => {
//     if (!file) return;

//     setUploading(true);
//     try {
//       const data = new FormData();
//       data.append("image", file);

//       const res = await uploadBlogImage(data).unwrap();
//       const imageUrl = res?.data?.url;

//       if (!imageUrl) throw new Error("Image URL missing from response");

//       setFormData((prev) => ({ ...prev, blogImage: imageUrl }));
//     } catch (err) {
//       console.error("Image upload failed", err);
//       alert("Image upload failed. Check console.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   // ===== SUBMIT BLOG =====
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.blogImage) return alert("Blog image is required!");

//     try {
//       if (editingId) {
//         await updateBlog({ id: editingId, ...formData }).unwrap();
//       } else {
//         await createBlog(formData).unwrap();
//       }
//       resetForm();
//     } catch (err) {
//       console.error("Blog save error:", err);
//       alert("Failed to save blog. Check console.");
//     }
//   };

//   const resetForm = () => {
//     setShowForm(false);
//     setEditingId(null);
//     setFormData({
//       title: "",
//       excerpt: "",
//       content: "",
//       categories: [],
//       author: "",
//       blogImage: "",
//       status: "draft",
//     });
//     setSelectedFile(null);
//   };

//   if (isLoading) return <p className="text-white">Loading blogs...</p>;

//   return (
//     <div className="p-4 sm:p-6 md:p-6 bg-[#0a0a1a] rounded-2xl border border-white/10">

//       {/* HEADER */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3 sm:gap-0">
//         <h2 className="text-white font-black text-xl">Blogs</h2>
//         <button
//           onClick={() => setShowForm(true)}
//           className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-bold w-full sm:w-auto"
//         >
//           Add Blog
//         </button>
//       </div>

//       {/* FORM */}
//       {showForm && (
//         <motion.form
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           onSubmit={handleSubmit}
//           className="mb-8 bg-[#11112b] p-4 sm:p-5 rounded-xl border border-white/10 space-y-4"
//         >
//           <input
//             type="text"
//             placeholder="Blog Title"
//             value={formData.title}
//             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />

//           <input
//             type="text"
//             placeholder="Short Excerpt"
//             value={formData.excerpt}
//             onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />

//           {/* Markdown Editor */}
//           <div className="bg-[#0a0a1a] border border-white/20 rounded p-2">
//             <MDEditor
//               value={formData.content}
//               onChange={(val) => setFormData({ ...formData, content: val || "" })}
//               height={300}
//               textareaProps={{
//                 placeholder: "Write your blog here in Markdown...",
//                 className: "bg-[#0a0a1a] text-white",
//               }}
//             />
//           </div>

//           {/* CATEGORIES */}
//           <select
//             multiple
//             value={formData.categories}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 categories: Array.from(e.target.selectedOptions, (opt) => opt.value),
//               })
//             }
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           >
//             {categories.length === 0 && <option disabled>No categories found</option>}
//             {categories.map((cat) => (
//               <option key={cat._id} value={cat._id}>{cat.name}</option>
//             ))}
//           </select>

//           <input
//             type="text"
//             placeholder="Author"
//             value={formData.author}
//             onChange={(e) => setFormData({ ...formData, author: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />

//           {/* IMAGE PREVIEW */}
//           {formData.blogImage && (
//             <div className="flex flex-col items-start gap-2">
//               <img
//                 src={formData.blogImage}
//                 alt="preview"
//                 className="h-32 rounded border border-white/20"
//               />
//               <p className="text-gray-400 text-sm">Current image. Choose a new file to replace.</p>
//             </div>
//           )}

//           {/* FILE INPUT */}
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => {
//               const file = e.target.files[0];
//               setSelectedFile(file);
//               handleImageUpload(file);
//             }}
//             className="text-white"
//           />

//           {uploading && <p className="text-gray-400">Uploading image...</p>}

//           {/* STATUS */}
//           <select
//             value={formData.status}
//             onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           >
//             <option value="draft">Draft</option>
//             <option value="published">Published</option>
//           </select>

//           <div className="flex flex-col sm:flex-row gap-3">
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-bold text-white w-full sm:w-auto"
//             >
//               {editingId ? "Update Blog" : "Save Blog"}
//             </button>

//             <button
//               type="button"
//               onClick={resetForm}
//               className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg font-bold text-white w-full sm:w-auto"
//             >
//               Cancel
//             </button>
//           </div>
//         </motion.form>
//       )}

//       {/* TABLE */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-white border border-white/10 min-w-[600px]">
//           <thead>
//             <tr className="bg-[#11112b]">
//               <th className="p-2 border border-white/10">Title</th>
//               <th className="p-2 border border-white/10">Status</th>
//               <th className="p-2 border border-white/10">Author</th>
//               <th className="p-2 border border-white/10">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {blogs.map((blog) => (
//               <tr key={blog._id} className="hover:bg-[#11112b]/60">
//                 <td className="p-2 border border-white/10">{blog.title}</td>
//                 <td className="p-2 border border-white/10">{blog.status}</td>
//                 <td className="p-2 border border-white/10">{blog.author}</td>
//                 <td className="p-2 border border-white/10 space-x-2 flex flex-wrap gap-2">
//                   <button
//                     onClick={() => {
//                       setEditingId(blog._id);
//                       setFormData({
//                         title: blog.title,
//                         excerpt: blog.excerpt,
//                         content: blog.content,
//                         categories: blog.categories?.map((c) => c._id) || [],
//                         author: blog.author,
//                         blogImage: blog.blogImage,
//                         status: blog.status,
//                       });
//                       setSelectedFile(null);
//                       setShowForm(true);
//                     }}
//                     className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded w-full sm:w-auto text-sm"
//                   >
//                     Edit
//                   </button>

//                   <button
//                     onClick={() => deleteBlog(blog._id)}
//                     className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded w-full sm:w-auto text-sm"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//     </div>
//   );
// };

// export default DashboardBlogs;












import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useGetBlogsQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} from "../../features/blogs/blogsApi";
import { useGetCategoriesQuery } from "../../features/categories/categoriesApi";
import { useUploadBlogImageMutation } from "../../features/upload/uploadApi";
import MDEditor from "@uiw/react-md-editor";

const DashboardBlogs = () => {
  // ===== BLOGS =====
  const { data: blogsRes, isLoading } = useGetBlogsQuery();
  const blogs = blogsRes?.data || blogsRes || [];

  // ===== CATEGORIES =====
  const { data: catRes } = useGetCategoriesQuery();
  const categories = Array.isArray(catRes) ? catRes : catRes?.data || [];

  // ===== MUTATIONS =====
  const [createBlog] = useCreateBlogMutation();
  const [updateBlog] = useUpdateBlogMutation();
  const [deleteBlog] = useDeleteBlogMutation();
  const [uploadBlogImage] = useUploadBlogImageMutation();

  // ===== LOCAL STATE =====
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [uploading, setUploading] = useState(false);

  // ===== DELETE MODAL =====
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    categories: [],
    author: "",
    blogImage: "",
    status: "draft",
  });

  // ===== IMAGE UPLOAD =====
  const handleImageUpload = async (file) => {
    if (!file) return;
    setUploading(true);

    try {
      const data = new FormData();
      data.append("image", file);
      const res = await uploadBlogImage(data).unwrap();
      setFormData((prev) => ({ ...prev, blogImage: res?.data?.url }));
    } catch (err) {
      console.error("Image upload failed", err);
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  // ===== SUBMIT =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.blogImage) return alert("Blog image is required!");

    try {
      if (editingId) {
        await updateBlog({ id: editingId, ...formData }).unwrap();
      } else {
        await createBlog(formData).unwrap();
      }
      resetForm();
    } catch (err) {
      console.error("Blog save error:", err);
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      categories: [],
      author: "",
      blogImage: "",
      status: "draft",
    });
  };

  // ===== DELETE CONFIRM =====
  const handleDeleteConfirm = async () => {
    try {
      await deleteBlog(deleteId).unwrap();
      setShowDeleteModal(false);
      setDeleteId(null);
    } catch (err) {
      console.error("Delete blog error:", err);
    }
  };

  if (isLoading) return <p className="text-white">Loading blogs...</p>;

  return (
    <div className="p-4 sm:p-6 bg-[#0a0a1a] rounded-2xl border border-white/10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white font-bold text-xl">Blogs</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-bold"
        >
          Add Blog
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <motion.form
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="mb-8 bg-[#11112b] p-4 rounded-xl border border-white/10 space-y-4"
        >
          <input
            type="text"
            placeholder="Blog Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
            required
          />

          <input
            type="text"
            placeholder="Short Excerpt"
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
            required
          />

          <MDEditor
            value={formData.content}
            onChange={(val) => setFormData({ ...formData, content: val || "" })}
            height={300}
          />

          <select
            multiple
            value={formData.categories}
            onChange={(e) =>
              setFormData({
                ...formData,
                categories: Array.from(e.target.selectedOptions, (o) => o.value),
              })
            }
            className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
          >
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Author"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
            required
          />

          {formData.blogImage && (
            <img src={formData.blogImage} className="h-32 rounded" />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e.target.files[0])}
            className="text-white"
          />

          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>

          <div className="flex gap-3">
            <button className="bg-blue-600 px-4 py-2 rounded text-white font-bold">
              {editingId ? "Update Blog" : "Save Blog"}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-600 px-4 py-2 rounded text-white"
            >
              Cancel
            </button>
          </div>
        </motion.form>
      )}

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-white border border-white/10">
          <thead>
            <tr className="bg-[#11112b]">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Author</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td className="p-2 border">{blog.title}</td>
                <td className="p-2 border">{blog.status}</td>
                <td className="p-2 border">{blog.author}</td>
                <td className="p-2 border flex gap-2">
                  <button
                    onClick={() => {
                      setEditingId(blog._id);
                      setFormData({
                        title: blog.title,
                        excerpt: blog.excerpt,
                        content: blog.content,
                        categories: blog.categories?.map((c) => c._id) || [],
                        author: blog.author,
                        blogImage: blog.blogImage,
                        status: blog.status,
                      });
                      setShowForm(true);
                    }}
                    className="bg-yellow-500 px-2 py-1 rounded text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      setDeleteId(blog._id);
                      setShowDeleteModal(true);
                    }}
                    className="bg-red-500 px-2 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DELETE MODAL */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#11112b] p-6 rounded-xl w-full max-w-md border border-white/10"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <h3 className="text-white font-bold text-lg mb-2">
                Confirm Delete
              </h3>
              <p className="text-gray-400 mb-4">
                Are you sure you want to delete this blog?
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="bg-gray-600 px-4 py-2 rounded text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="bg-red-600 px-4 py-2 rounded text-white font-bold"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardBlogs;
