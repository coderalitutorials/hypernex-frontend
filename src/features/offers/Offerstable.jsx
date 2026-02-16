// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   useGetOffersQuery,
//   useCreateOfferMutation,
//   useUpdateOfferMutation,
//   useDeleteOfferMutation,
// } from "./offersApi";

// const DashboardOffers = () => {
//   const { data: offers, isLoading } = useGetOffersQuery();
//   const [createOffer] = useCreateOfferMutation();
//   const [updateOffer] = useUpdateOfferMutation();
//   const [deleteOffer] = useDeleteOfferMutation();

//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     price: 0,
//     description: "",
//     features: [],
//     status: "active",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await createOffer(formData);
//     setFormData({
//       title: "",
//       price: 0,
//       description: "",
//       features: [],
//       status: "active",
//     });
//     setShowForm(false);
//   };

//   if (isLoading) return <p>Loading...</p>;

//   return (
//     <div className="p-6 bg-[#0a0a1a] rounded-2xl border border-white/10">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-white font-bold text-xl">Offers</h2>
//         <button
//           onClick={() => setShowForm(!showForm)}
//           className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-bold"
//         >
//           Add Offer
//         </button>
//       </div>

//       {showForm && (
//         <motion.form
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           onSubmit={handleSubmit}
//           className="mb-6 bg-[#11112b] p-4 rounded-lg border border-white/10 space-y-3"
//         >
//           <input
//             type="text"
//             placeholder="Title"
//             value={formData.title}
//             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           />
//           <input
//             type="number"
//             placeholder="Price"
//             value={formData.price}
//             onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           />
//           <textarea
//             placeholder="Description"
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({ ...formData, description: e.target.value })
//             }
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           />
//           <input
//             type="text"
//             placeholder="Features (comma separated)"
//             value={formData.features.join(", ")}
//             onChange={(e) =>
//               setFormData({ ...formData, features: e.target.value.split(",") })
//             }
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           />
//           <select
//             value={formData.status}
//             onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           >
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>
//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-bold"
//           >
//             Save
//           </button>
//         </motion.form>
//       )}

//       <table className="w-full text-white border border-white/10">
//         <thead>
//           <tr className="bg-[#11112b]">
//             <th className="p-2 border border-white/10">Title</th>
//             <th className="p-2 border border-white/10">Price</th>
//             <th className="p-2 border border-white/10">Status</th>
//             <th className="p-2 border border-white/10">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {offers?.data?.map((offer) => (
//             <tr key={offer._id} className="hover:bg-[#11112b]/50 transition-colors">
//               <td className="p-2 border border-white/10">{offer.title}</td>
//               <td className="p-2 border border-white/10">{offer.price}</td>
//               <td className="p-2 border border-white/10">{offer.status}</td>
//               <td className="p-2 border border-white/10 space-x-2">
//                 <button
//                   onClick={() => {
//                     setFormData({
//                       title: offer.title,
//                       price: offer.price,
//                       description: offer.description,
//                       features: offer.features,
//                       status: offer.status,
//                       id: offer._id,
//                     });
//                     setShowForm(true);
//                   }}
//                   className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => deleteOffer(offer._id)}
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

// export default DashboardOffers;












// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   useGetOffersQuery,
//   useCreateOfferMutation,
//   useUpdateOfferMutation,
//   useDeleteOfferMutation,
// } from "./offersApi";

// const DashboardOffers = () => {
//   const { data: offersResponse, isLoading } = useGetOffersQuery(undefined, {
//     refetchOnMountOrArgChange: false, // duplicate fetch avoid
//   });
//   const offers = offersResponse?.data || [];

//   const [createOffer] = useCreateOfferMutation();
//   const [updateOffer] = useUpdateOfferMutation();
//   const [deleteOffer] = useDeleteOfferMutation();

//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     price: 0,
//     description: "",
//     features: [],
//     status: "active",
//     id: null, // for update
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.id) {
//         await updateOffer(formData).unwrap();
//       } else {
//         await createOffer(formData).unwrap();
//       }
//       // reset form
//       setFormData({
//         title: "",
//         price: 0,
//         description: "",
//         features: [],
//         status: "active",
//         id: null,
//       });
//       setShowForm(false);
//     } catch (err) {
//       console.error("Offer operation failed:", err);
//     }
//   };

//   if (isLoading) return <p className="text-white pt-24 text-center">Loading...</p>;

//   return (
//     <div className="p-6 bg-[#0a0a1a] rounded-2xl border border-white/10">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-white font-bold text-xl">Offers</h2>
//         <button
//           onClick={() => setShowForm(!showForm)}
//           className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-bold"
//         >
//           {showForm ? "Close" : "Add Offer"}
//         </button>
//       </div>

//       {showForm && (
//         <motion.form
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           onSubmit={handleSubmit}
//           className="mb-6 bg-[#11112b] p-4 rounded-lg border border-white/10 space-y-3"
//         >
//           <input
//             type="text"
//             placeholder="Title"
//             value={formData.title}
//             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           />
//           <input
//             type="number"
//             placeholder="Price"
//             value={formData.price}
//             onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           />
//           <textarea
//             placeholder="Description"
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({ ...formData, description: e.target.value })
//             }
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           />
//           <input
//             type="text"
//             placeholder="Features (comma separated)"
//             value={formData.features.join(",")}
//             onChange={(e) =>
//               setFormData({ ...formData, features: e.target.value.split(",") })
//             }
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           />
//           <select
//             value={formData.status}
//             onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           >
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>
//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-bold"
//           >
//             {formData.id ? "Update" : "Save"}
//           </button>
//         </motion.form>
//       )}

//       <table className="w-full text-white border border-white/10">
//         <thead>
//           <tr className="bg-[#11112b]">
//             <th className="p-2 border border-white/10">Title</th>
//             <th className="p-2 border border-white/10">Price</th>
//             <th className="p-2 border border-white/10">Status</th>
//             <th className="p-2 border border-white/10">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {offers.map((offer) => (
//             <tr key={offer._id} className="hover:bg-[#11112b]/50 transition-colors">
//               <td className="p-2 border border-white/10">{offer.title}</td>
//               <td className="p-2 border border-white/10">{offer.price}</td>
//               <td className="p-2 border border-white/10">{offer.status}</td>
//               <td className="p-2 border border-white/10 space-x-2">
//                 <button
//                   onClick={() => {
//                     setFormData({
//                       title: offer.title,
//                       price: offer.price,
//                       description: offer.description,
//                       features: offer.features,
//                       status: offer.status,
//                       id: offer._id, // edit mode
//                     });
//                     setShowForm(true);
//                   }}
//                   className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => deleteOffer(offer._id)}
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

// export default DashboardOffers;













// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   useGetOffersQuery,
//   useCreateOfferMutation,
//   useUpdateOfferMutation,
//   useDeleteOfferMutation,
// } from "./offersApi";

// const DashboardOffers = () => {
//   const { data: offersResponse, isLoading } = useGetOffersQuery(undefined, {
//     refetchOnMountOrArgChange: false, // duplicate fetch avoid
//   });
//   const offers = offersResponse?.data || [];

//   const [createOffer] = useCreateOfferMutation();
//   const [updateOffer] = useUpdateOfferMutation();
//   const [deleteOffer] = useDeleteOfferMutation();

//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     price: 0,
//     description: "",
//     features: [],
//     status: "active",
//     id: null, // for update
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.id) {
//         await updateOffer(formData).unwrap();
//       } else {
//         await createOffer(formData).unwrap();
//       }
//       // reset form
//       setFormData({
//         title: "",
//         price: 0,
//         description: "",
//         features: [],
//         status: "active",
//         id: null,
//       });
//       setShowForm(false);
//     } catch (err) {
//       console.error("Offer operation failed:", err);
//     }
//   };

//   if (isLoading)
//     return <p className="text-white pt-24 text-center">Loading...</p>;

//   return (
//     <div className="p-4 sm:p-6 md:p-6 bg-[#0a0a1a] rounded-2xl border border-white/10">

//       {/* HEADER */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 sm:gap-0">
//         <h2 className="text-white font-bold text-xl">Offers</h2>
//         <button
//           onClick={() => setShowForm(!showForm)}
//           className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-bold w-full sm:w-auto"
//         >
//           {showForm ? "Close" : "Add Offer"}
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
//             placeholder="Title"
//             value={formData.title}
//             onChange={(e) =>
//               setFormData({ ...formData, title: e.target.value })
//             }
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           />
//           <input
//             type="number"
//             placeholder="Price"
//             value={formData.price}
//             onChange={(e) =>
//               setFormData({ ...formData, price: e.target.value })
//             }
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           />
//           <textarea
//             placeholder="Description"
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({ ...formData, description: e.target.value })
//             }
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           />
//           <input
//             type="text"
//             placeholder="Features (comma separated)"
//             value={formData.features.join(",")}
//             onChange={(e) =>
//               setFormData({ ...formData, features: e.target.value.split(",") })
//             }
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           />
//           <select
//             value={formData.status}
//             onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//             className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
//           >
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>
//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-bold w-full sm:w-auto"
//           >
//             {formData.id ? "Update" : "Save"}
//           </button>
//         </motion.form>
//       )}

//       {/* TABLE */}
//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[600px] text-white border border-white/10">
//           <thead>
//             <tr className="bg-[#11112b]">
//               <th className="p-2 border border-white/10">Title</th>
//               <th className="p-2 border border-white/10">Price</th>
//               <th className="p-2 border border-white/10">Status</th>
//               <th className="p-2 border border-white/10">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {offers.map((offer) => (
//               <tr
//                 key={offer._id}
//                 className="hover:bg-[#11112b]/50 transition-colors"
//               >
//                 <td className="p-2 border border-white/10">{offer.title}</td>
//                 <td className="p-2 border border-white/10">{offer.price}</td>
//                 <td className="p-2 border border-white/10">{offer.status}</td>
//                 <td className="p-2 border border-white/10 flex flex-wrap gap-2">
//                   <button
//                     onClick={() => {
//                       setFormData({
//                         title: offer.title,
//                         price: offer.price,
//                         description: offer.description,
//                         features: offer.features,
//                         status: offer.status,
//                         id: offer._id,
//                       });
//                       setShowForm(true);
//                     }}
//                     className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded w-full sm:w-auto text-sm"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => deleteOffer(offer._id)}
//                     className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded w-full sm:w-auto text-sm"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {offers.length === 0 && (
//               <tr>
//                 <td
//                   colSpan={4}
//                   className="text-center text-gray-400 p-4 border border-white/10"
//                 >
//                   No offers found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DashboardOffers;




import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useGetOffersQuery,
  useCreateOfferMutation,
  useUpdateOfferMutation,
  useDeleteOfferMutation,
} from "./offersApi";

const DashboardOffers = () => {
  const { data: offersResponse, isLoading } = useGetOffersQuery(undefined, {
    refetchOnMountOrArgChange: false,
  });
  const offers = offersResponse?.data || [];

  const [createOffer] = useCreateOfferMutation();
  const [updateOffer] = useUpdateOfferMutation();
  const [deleteOffer] = useDeleteOfferMutation();

  const [showForm, setShowForm] = useState(false);

  // ===== DELETE MODAL STATE =====
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
    features: [],
    status: "active",
    id: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await updateOffer(formData).unwrap();
      } else {
        await createOffer(formData).unwrap();
      }
      setFormData({
        title: "",
        price: 0,
        description: "",
        features: [],
        status: "active",
        id: null,
      });
      setShowForm(false);
    } catch (err) {
      console.error("Offer operation failed:", err);
    }
  };

  // ===== DELETE CONFIRM =====
  const handleDeleteConfirm = async () => {
    try {
      await deleteOffer(deleteId).unwrap();
      setShowDeleteModal(false);
      setDeleteId(null);
    } catch (err) {
      console.error("Delete offer failed:", err);
    }
  };

  if (isLoading)
    return <p className="text-white pt-24 text-center">Loading...</p>;

  return (
    <div className="p-4 sm:p-6 bg-[#0a0a1a] rounded-2xl border border-white/10">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <h2 className="text-white font-bold text-xl">Offers</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-bold w-full sm:w-auto"
        >
          {showForm ? "Close" : "Add Offer"}
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
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
          />

          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
          />

          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
          />

          <input
            type="text"
            placeholder="Features (comma separated)"
            value={formData.features.join(",")}
            onChange={(e) =>
              setFormData({
                ...formData,
                features: e.target.value.split(","),
              })
            }
            className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
          />

          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="w-full p-2 rounded bg-[#0a0a1a] text-white border border-white/20"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-bold text-white"
          >
            {formData.id ? "Update" : "Save"}
          </button>
        </motion.form>
      )}

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-white border border-white/10">
          <thead>
            <tr className="bg-[#11112b]">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer) => (
              <tr key={offer._id} className="hover:bg-[#11112b]/50">
                <td className="p-2 border">{offer.title}</td>
                <td className="p-2 border">{offer.price}</td>
                <td className="p-2 border">{offer.status}</td>
                <td className="p-2 border flex gap-2">
                  <button
                    onClick={() => {
                      setFormData({
                        title: offer.title,
                        price: offer.price,
                        description: offer.description,
                        features: offer.features,
                        status: offer.status,
                        id: offer._id,
                      });
                      setShowForm(true);
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      setDeleteId(offer._id);
                      setShowDeleteModal(true);
                    }}
                    className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {offers.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center text-gray-400 p-4 border">
                  No offers found
                </td>
              </tr>
            )}
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
                Are you sure you want to delete this offer?
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

export default DashboardOffers;
