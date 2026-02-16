// import React from 'react';
// import { motion } from 'framer-motion';
// import { CheckCircle2 } from 'lucide-react';
// import { useNavigate } from 'react-router-dom'; // 1. useNavigate import karein
// import Footer from './footer';

// const Offers = () => {
//   const navigate = useNavigate(); // 2. Hook initialize karein

//   const offerData = [
//     {
//       title: "Social Media Marketing",
//       price: "150$",
//       features: ["Platform management", "Creative content design", "Ad campaigns", "Monthly reports"],
//       desc: "Boost your brand presence with tailored strategies that increase engagement."
//     },
//     {
//       title: "GMB Profile Optimization",
//       price: "220$",
//       features: ["Google Business setup", "Profile optimization", "Review management", "Weekly insights"],
//       desc: "Make your business stand out locally with optimized GMB profiles."
//     },
//     {
//       title: "Search Engine Optimization",
//       price: "130$",
//       features: ["Keyword research", "On-page & Off-page", "Backlink building", "Rank tracking"],
//       desc: "Improve visibility and rank higher with proven SEO techniques."
//     },
//     {
//       title: "Graphic Designing",
//       price: "150$",
//       features: ["Social media posts", "Branding materials", "Corporate identity", "Fast delivery"],
//       desc: "Creative visuals that tell your brand story. From logos to social posts."
//     },
//     {
//       title: "Website Development",
//       price: "200$",
//       features: ["Responsive design", "WordPress/Custom", "SEO-friendly", "Speed optimization"],
//       desc: "Build a professional website that represents your brand growth."
//     },
//     {
//       title: "ORM Management",
//       price: "200$",
//       features: ["Review monitoring", "Sentiment analysis", "Negative handling", "Progress report"],
//       desc: "Protect and improve your brand reputation through strategic monitoring."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#0a0a1a] text-white pt-24 overflow-x-hidden">
      
//       {/* --- HEADER --- */}
//       <div className="text-center px-6 mb-12">
//         <motion.h1 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-3xl md:text-5xl font-black mb-4"
//         >
//           Our Exclusive Offers
//         </motion.h1>
//         <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
//           Curated, flexible options to fit your goals. Clean, simple, and effective.
//         </p>
//         <div className="flex flex-col items-center">
//           <p className="text-[#3b82f6] font-bold tracking-[0.2em] uppercase text-xs mb-2">Offers</p>
//           <div className="w-16 h-0.5 bg-linear-to-r from-[#00c2ff] to-[#9333ea]"></div>
//         </div>
//       </div>

//       {/* --- CARDS GRID --- */}
//       <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-20">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//           {offerData.map((offer, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               viewport={{ once: true }}
//               whileHover={{ 
//                 y: -8,
//                 boxShadow: "0px 0px 25px 2px rgba(59, 130, 246, 0.4)", 
//               }}
//               className="bg-[#11112b] p-6 rounded-2xl border border-white/10 transition-all duration-300 flex flex-col justify-between w-full max-w-[340px] relative overflow-hidden"
//             >
//               <div>
//                 <h3 className="text-xl font-bold mb-3 text-blue-400">{offer.title}</h3>
                
//                 <div className="mb-4 bg-white/5 p-3 rounded-lg">
//                   <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">Starting From</p>
//                   <p className="text-2xl font-black text-white">{offer.price}</p>
//                 </div>

//                 <ul className="space-y-2 mb-5">
//                   {offer.features.map((feature, fIndex) => (
//                     <li key={fIndex} className="flex items-center gap-2">
//                       <CheckCircle2 className="text-blue-500 shrink-0 w-4 h-4" />
//                       <span className="text-gray-300 text-xs">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <p className="text-gray-400 text-[12px] leading-relaxed mb-6">
//                   {offer.desc}
//                 </p>
//               </div>

//               {/* 3. onClick par navigate call karein */}
//               <motion.button
//                 onClick={() => navigate('/contact')} 
//                 whileTap={{ scale: 0.95 }}
//                 className="w-full py-3 rounded-lg font-bold text-sm border-2 border-blue-500 text-white relative overflow-hidden group/btn"
//               >
//                 <span className="absolute inset-0 bg-blue-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
//                 <span className="relative z-10">Get Offer</span>
//               </motion.button>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Offers;




import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGetOffersQuery } from "../features/offers/offersApi";
import Footer from "./footer";

const Offers = () => {
  const navigate = useNavigate();
  const { data: offersResponse, isLoading } = useGetOffersQuery(undefined, {
    refetchOnMountOrArgChange: true, // ✅ always fetch latest
  });

  const offers = offersResponse?.data || [];

  if (isLoading) return <p className="text-white pt-24 text-center">Loading...</p>;

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white pt-24 overflow-x-hidden">
      <div className="text-center  mt-7 px-6 mb-7">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-6xl font-black mb-4"
        >
          Our Exclusive Offers
        </motion.h1>
        <p className="text-gray-400 text-md max-w-xl mx-auto mb-6">
          Curated, flexible options to fit your goals. Clean, simple, and effective.
        </p>
        <div className="flex flex-col items-center">
          <p className="text-[#3b82f6] font-bold tracking-[0.2em] uppercase text-xs mb-2">Offers</p>
          <div className="w-16 h-0.5 bg-linear-to-r from-[#00c2ff] to-[#9333ea]"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {offers.map((offer) => (
            <motion.div
              key={offer._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0px 0px 25px 2px rgba(59, 130, 246, 0.4)" }}
              className="bg-[#11112b] p-6 rounded-2xl border border-white/10 transition-all duration-300 flex flex-col justify-between w-full max-w-[340px] relative overflow-hidden"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">{offer.title}</h3>
                <div className="mb-4 bg-white/5 p-3 rounded-lg">
                  <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">Starting From</p>
                  <p className="text-2xl font-black text-white">${offer.price}</p>
                </div>
                <ul className="space-y-2 mb-5">
                  {offer.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="text-blue-500 shrink-0 w-4 h-4" />
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 text-[12px] leading-relaxed mb-6">{offer.description}</p>
              </div>
              <motion.button
                onClick={() => navigate("/contact")}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-lg font-bold text-sm border-2 border-blue-500 text-white relative overflow-hidden group/btn"
              >
                <span className="absolute inset-0 bg-blue-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
                <span className="relative z-10">Get Offer</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Offers;
