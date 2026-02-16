// import React from "react";
// import { motion } from "framer-motion";
// import { useGetContactsQuery,useDeleteContactMutation } from "./contactApi";

// const DashboardContacts = () => {
//   // ===== FETCH CONTACTS =====
//   const { data: contactRes, isLoading } = useGetContactsQuery();
//   const contacts = contactRes?.data || contactRes || [];

//   // ===== DELETE MUTATION =====
//   const [deleteContact] = useDeleteContactMutation();

//   if (isLoading) {
//     return <p className="text-white">Loading contacts...</p>;
//   }

//   return (
//     <div className="p-4 sm:p-6 bg-[#0a0a1a] rounded-2xl border border-white/10">

//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-white font-black text-xl">Contact Messages</h2>
//         <span className="text-gray-400 text-sm">
//           Total: {contacts.length}
//         </span>
//       </div>

//       {/* TABLE */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-white border border-white/10 min-w-[800px]">
//           <thead>
//             <tr className="bg-[#11112b]">
//               <th className="p-2 border border-white/10">Name</th>
//               <th className="p-2 border border-white/10">Email</th>
//               <th className="p-2 border border-white/10">Address</th>
//               <th className="p-2 border border-white/10">Message</th>
//               <th className="p-2 border border-white/10">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {contacts.length === 0 && (
//               <tr>
//                 <td
//                   colSpan="5"
//                   className="p-4 text-center text-gray-400"
//                 >
//                   No contact messages found.
//                 </td>
//               </tr>
//             )}

//             {contacts.map((contact) => (
//               <motion.tr
//                 key={contact._id}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="hover:bg-[#11112b]/60"
//               >
//                 <td className="p-2 border border-white/10">
//                   {contact.name}
//                 </td>

//                 <td className="p-2 border border-white/10">
//                   {contact.email}
//                 </td>

//                 <td className="p-2 border border-white/10">
//                   {contact.address || "-"}
//                 </td>

//                 <td className="p-2 border border-white/10 max-w-[300px]">
//                   <p className="line-clamp-3 text-gray-300">
//                     {contact.message}
//                   </p>
//                 </td>

//                 <td className="p-2 border border-white/10">
//                   <button
//                     onClick={() => deleteContact(contact._id)}
//                     className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm font-bold w-full sm:w-auto"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DashboardContacts;










import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from "./contactApi";

const DashboardContacts = () => {
  // ===== FETCH CONTACTS =====
  const { data: contactRes, isLoading } = useGetContactsQuery();
  const contacts = contactRes?.data || contactRes || [];

  // ===== DELETE MUTATION =====
  const [deleteContact] = useDeleteContactMutation();

  // ===== DELETE MODAL STATE =====
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // ===== DELETE CONFIRM =====
  const handleDeleteConfirm = async () => {
    try {
      await deleteContact(deleteId).unwrap();
      setShowDeleteModal(false);
      setDeleteId(null);
    } catch (err) {
      console.error("Delete contact failed:", err);
    }
  };

  if (isLoading) {
    return <p className="text-white">Loading contacts...</p>;
  }

  return (
    <div className="p-4 sm:p-6 bg-[#0a0a1a] rounded-2xl border border-white/10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white font-black text-xl">Contact Messages</h2>
        <span className="text-gray-400 text-sm">
          Total: {contacts.length}
        </span>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-white border border-white/10 min-w-[800px]">
          <thead>
            <tr className="bg-[#11112b]">
              <th className="p-2 border border-white/10">Name</th>
              <th className="p-2 border border-white/10">Email</th>
              <th className="p-2 border border-white/10">Address</th>
              <th className="p-2 border border-white/10">Message</th>
              <th className="p-2 border border-white/10">Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-400">
                  No contact messages found.
                </td>
              </tr>
            )}

            {contacts.map((contact) => (
              <motion.tr
                key={contact._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hover:bg-[#11112b]/60"
              >
                <td className="p-2 border border-white/10">
                  {contact.name}
                </td>

                <td className="p-2 border border-white/10">
                  {contact.email}
                </td>

                <td className="p-2 border border-white/10">
                  {contact.address || "-"}
                </td>

                <td className="p-2 border border-white/10 max-w-[300px]">
                  <p className="line-clamp-3 text-gray-300">
                    {contact.message}
                  </p>
                </td>

                <td className="p-2 border border-white/10">
                  <button
                    onClick={() => {
                      setDeleteId(contact._id);
                      setShowDeleteModal(true);
                    }}
                    className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm font-bold"
                  >
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DELETE CONFIRM MODAL */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="bg-[#11112b] p-6 rounded-xl border border-white/10 w-[90%] max-w-md"
            >
              <h3 className="text-white text-lg font-bold mb-2">
                Confirm Delete
              </h3>

              <p className="text-gray-400 mb-5">
                Are you sure you want to delete this contact message?
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

export default DashboardContacts;
