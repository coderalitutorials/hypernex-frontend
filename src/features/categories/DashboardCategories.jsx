// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   useGetCategoriesQuery,
//   useCreateCategoryMutation,
//   useUpdateCategoryMutation,
//   useDeleteCategoryMutation,
// } from "../../features/categories/categoriesApi";

// const DashboardCategories = () => {
//   // ===== RTK QUERY =====
//   const { data: categoriesRes, isLoading } = useGetCategoriesQuery();
//   const categories = categoriesRes?.data || categoriesRes || [];

//   const [createCategory] = useCreateCategoryMutation();
//   const [updateCategory] = useUpdateCategoryMutation();
//   const [deleteCategory] = useDeleteCategoryMutation();

//   // ===== LOCAL STATE =====
//   const [showForm, setShowForm] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [formData, setFormData] = useState({ name: "", slug: "" });

//   // ===== SUBMIT =====
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (editingId) {
//         await updateCategory({ id: editingId, ...formData }).unwrap();
//       } else {
//         await createCategory(formData).unwrap();
//       }
//       resetForm();
//     } catch (err) {
//       console.error("Category error:", err);
//     }
//   };

//   const resetForm = () => {
//     setShowForm(false);
//     setEditingId(null);
//     setFormData({ name: "", slug: "" });
//   };

//   if (isLoading) return <p className="text-white">Loading categories...</p>;

//   return (
//     <div className="p-6 bg-[#0a0a1a] rounded-2xl border border-white/10">
//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-white font-bold text-xl">Categories</h2>
//         <button
//           onClick={() => setShowForm(true)}
//           className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-bold"
//         >
//           Add Category
//         </button>
//       </div>

//       {/* FORM */}
//       {showForm && (
//         <motion.form
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           onSubmit={handleSubmit}
//           className="mb-6 bg-[#11112b] p-4 rounded-lg border border-white/10 space-y-3"
//         >
//           <input
//             type="text"
//             placeholder="Category Name"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({ ...formData, name: e.target.value })
//             }
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Slug (ex: digital-marketing)"
//             value={formData.slug}
//             onChange={(e) =>
//               setFormData({ ...formData, slug: e.target.value })
//             }
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />
//           <div className="flex gap-3">
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-bold text-white"
//             >
//               {editingId ? "Update Category" : "Save Category"}
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
//             <th className="p-2 border border-white/10">Name</th>
//             <th className="p-2 border border-white/10">Slug</th>
//             <th className="p-2 border border-white/10">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map((cat) => (
//             <tr key={cat._id} className="hover:bg-[#11112b]/50 transition-colors">
//               <td className="p-2 border border-white/10">{cat.name}</td>
//               <td className="p-2 border border-white/10">{cat.slug}</td>
//               <td className="p-2 border border-white/10 space-x-2">
//                 <button
//                   onClick={() => {
//                     setEditingId(cat._id);
//                     setFormData({ name: cat.name, slug: cat.slug });
//                     setShowForm(true);
//                   }}
//                   className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => deleteCategory(cat._id)}
//                   className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//           {categories.length === 0 && (
//             <tr>
//               <td
//                 colSpan={3}
//                 className="text-center text-gray-400 p-4 border border-white/10"
//               >
//                 No categories found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DashboardCategories;












// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   useGetCategoriesQuery,
//   useCreateCategoryMutation,
//   useUpdateCategoryMutation,
//   useDeleteCategoryMutation,
// } from "../../features/categories/categoriesApi";

// const DashboardCategories = () => {
//   // ===== RTK QUERY =====
//   const { data: categoriesRes, isLoading } = useGetCategoriesQuery();
//   const categories = categoriesRes?.data || categoriesRes || [];

//   const [createCategory] = useCreateCategoryMutation();
//   const [updateCategory] = useUpdateCategoryMutation();
//   const [deleteCategory] = useDeleteCategoryMutation();

//   // ===== LOCAL STATE =====
//   const [showForm, setShowForm] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [formData, setFormData] = useState({ name: "", slug: "" });

//   // ===== SUBMIT =====
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (editingId) {
//         await updateCategory({ id: editingId, ...formData }).unwrap();
//       } else {
//         await createCategory(formData).unwrap();
//       }
//       resetForm();
//     } catch (err) {
//       console.error("Category error:", err);
//     }
//   };

//   const resetForm = () => {
//     setShowForm(false);
//     setEditingId(null);
//     setFormData({ name: "", slug: "" });
//   };

//   if (isLoading) return <p className="text-white">Loading categories...</p>;

//   return (
//     <div className="p-4 sm:p-6 md:p-6 bg-[#0a0a1a] rounded-2xl border border-white/10">

//       {/* HEADER */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3 sm:gap-0">
//         <h2 className="text-white font-bold text-xl">Categories</h2>
//         <button
//           onClick={() => setShowForm(true)}
//           className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-bold w-full sm:w-auto"
//         >
//           Add Category
//         </button>
//       </div>

//       {/* FORM */}
//       {showForm && (
//         <motion.form
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           onSubmit={handleSubmit}
//           className="mb-6 bg-[#11112b] p-4 sm:p-5 rounded-xl border border-white/10 space-y-3"
//         >
//           <input
//             type="text"
//             placeholder="Category Name"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({ ...formData, name: e.target.value })
//             }
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Slug (ex: digital-marketing)"
//             value={formData.slug}
//             onChange={(e) =>
//               setFormData({ ...formData, slug: e.target.value })
//             }
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//             required
//           />
//           <div className="flex flex-col sm:flex-row gap-3">
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-bold text-white w-full sm:w-auto"
//             >
//               {editingId ? "Update Category" : "Save Category"}
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
//         <table className="w-full min-w-[500px] text-white border border-white/10">
//           <thead>
//             <tr className="bg-[#11112b]">
//               <th className="p-2 border border-white/10">Name</th>
//               <th className="p-2 border border-white/10">Slug</th>
//               <th className="p-2 border border-white/10">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((cat) => (
//               <tr key={cat._id} className="hover:bg-[#11112b]/50 transition-colors">
//                 <td className="p-2 border border-white/10">{cat.name}</td>
//                 <td className="p-2 border border-white/10">{cat.slug}</td>
//                 <td className="p-2 border border-white/10 space-x-2 flex flex-wrap gap-2">
//                   <button
//                     onClick={() => {
//                       setEditingId(cat._id);
//                       setFormData({ name: cat.name, slug: cat.slug });
//                       setShowForm(true);
//                     }}
//                     className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded w-full sm:w-auto text-sm"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => deleteCategory(cat._id)}
//                     className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded w-full sm:w-auto text-sm"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {categories.length === 0 && (
//               <tr>
//                 <td
//                   colSpan={3}
//                   className="text-center text-gray-400 p-4 border border-white/10"
//                 >
//                   No categories found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DashboardCategories;










import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} from "../../features/categories/categoriesApi";

const DashboardCategories = () => {
  // ===== RTK QUERY =====
  const { data: categoriesRes, isLoading } = useGetCategoriesQuery();
  const categories = categoriesRes?.data || categoriesRes || [];

  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  // ===== LOCAL STATE =====
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: "", slug: "" });

  // ===== DELETE MODAL STATE =====
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // ===== SUBMIT =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateCategory({ id: editingId, ...formData }).unwrap();
      } else {
        await createCategory(formData).unwrap();
      }
      resetForm();
    } catch (err) {
      console.error("Category error:", err);
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ name: "", slug: "" });
  };

  // ===== DELETE CONFIRM =====
  const handleDeleteConfirm = async () => {
    try {
      await deleteCategory(deleteId).unwrap();
      setShowDeleteModal(false);
      setDeleteId(null);
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  if (isLoading) return <p className="text-white">Loading categories...</p>;

  return (
    <div className="p-4 sm:p-6 bg-[#0a0a1a] rounded-2xl border border-white/10">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <h2 className="text-white font-bold text-xl">Categories</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-bold w-full sm:w-auto"
        >
          Add Category
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <motion.form
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="mb-6 bg-[#11112b] p-4 rounded-xl border border-white/10 space-y-3"
        >
          <input
            type="text"
            placeholder="Category Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
            required
          />
          <input
            type="text"
            placeholder="Slug (ex: digital-marketing)"
            value={formData.slug}
            onChange={(e) =>
              setFormData({ ...formData, slug: e.target.value })
            }
            className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
            required
          />
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-bold text-white"
            >
              {editingId ? "Update Category" : "Save Category"}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg font-bold text-white"
            >
              Cancel
            </button>
          </div>
        </motion.form>
      )}

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px] text-white border border-white/10">
          <thead>
            <tr className="bg-[#11112b]">
              <th className="p-2 border border-white/10">Name</th>
              <th className="p-2 border border-white/10">Slug</th>
              <th className="p-2 border border-white/10">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat._id} className="hover:bg-[#11112b]/50">
                <td className="p-2 border border-white/10">{cat.name}</td>
                <td className="p-2 border border-white/10">{cat.slug}</td>
                <td className="p-2 border border-white/10 flex gap-2">
                  <button
                    onClick={() => {
                      setEditingId(cat._id);
                      setFormData({ name: cat.name, slug: cat.slug });
                      setShowForm(true);
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      setDeleteId(cat._id);
                      setShowDeleteModal(true);
                    }}
                    className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#11112b] p-6 rounded-xl border border-white/10 w-[90%] max-w-md"
            >
              <h3 className="text-white text-lg font-bold mb-2">
                Confirm Delete
              </h3>
              <p className="text-gray-300 mb-5">
                Are you sure you want to delete this category?
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-bold"
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

export default DashboardCategories;
