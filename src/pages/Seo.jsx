

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { CheckCircle2 } from 'lucide-react';

// // 1. Footer ko yahan import kiya gaya hai
// import Footer from "./footer";

// const Portfolio = () => {
//   const [activeTab, setActiveTab] = useState('Social Media Marketing');

//   // Categories Data
//   const categories = [
//     'Social Media Marketing',
//     'GMB Optimization',
//     'SEO',
//     'Graphic Designing',
//     'Website Development',
//     'ORM'
//   ];

//   // Projects Data
//   const projects = [
//     {
//       id: 1,
//       title: 'Brand Boost Campaign',
//       desc: 'Facebook + Instagram engagement growth by 60%',
//       img: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=2070&auto=format&fit=crop',
//       category: 'Social Media Marketing'
//     },
//     {
//       id: 2,
//       title: 'LinkedIn Awareness Ads',
//       desc: 'Corporate B2B lead generation campaign',
//       img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop',
//       category: 'Social Media Marketing'
//     },
//     {
//       id: 3,
//       title: 'Content Strategy Revamp',
//       desc: 'Increased post interactions by 45%',
//       img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
//       category: 'Social Media Marketing'
//     },
//     {
//       id: 4,
//       title: 'Influencer Collab Program',
//       desc: 'Drove 25% more conversions via micro-influencers',
//       img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
//       category: 'Social Media Marketing'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#0a0a1a] text-white pt-32 pb-0 overflow-x-hidden">
      
//       {/* --- SECTION 1: PORTFOLIO MAIN --- */}
//       <div className="px-6 md:px-20 mb-20">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-black mb-4">Our Services Portfolio</h1>
//           <p className="text-[#3b82f6] font-bold tracking-[0.2em] uppercase text-sm">Portfolio</p>
//           <div className="w-24 h-1 bg-linear-to-r from-[#00c2ff] to-[#9333ea] mx-auto mt-4"></div>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-16">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveTab(cat)}
//               className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-500 border ${
//                 activeTab === cat 
//                 ? 'bg-linear-to-r from-[#00c2ff] to-[#9333ea] border-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)]' 
//                 : 'bg-transparent border-gray-700 text-gray-400 hover:border-blue-500'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Content Box */}
//         <div className="bg-[#11112b] rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Search Engine Optimization</h2>
//               <p className="text-gray-400 leading-relaxed">
//                 Improve organic visibility with a balanced approach across technical, content, and authority-building SEO practices.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
//                 <CheckCircle2 className="text-green-500 w-5 h-5" />
//                 <span className="text-sm">Keyword research & content planning</span>
//               </div>
//               <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
//                 <CheckCircle2 className="text-green-500 w-5 h-5" />
//                 <span className="text-sm">On-page and technical SEO fixes</span>
//               </div>
//               <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
//                 <CheckCircle2 className="text-green-500 w-5 h-5" />
//                 <span className="text-sm">Backlink acquisition & audits</span>
//               </div>
//               <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
//                 <CheckCircle2 className="text-green-500 w-5 h-5" />
//                 <span className="text-sm">Rank tracking & reporting</span>
//               </div>
//             </div>
//           </div>

//           <h3 className="text-xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Projects</h3>

//           {/* Projects Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             <AnimatePresence mode='wait'>
//               {projects.map((project) => (
//                 <motion.div
//                   key={project.id}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.5 }}
//                   className="group bg-[#0a0a1a] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all"
//                 >
//                   <div className="relative h-48 overflow-hidden">
//                     <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                   </div>
//                   <div className="p-5">
//                     <h4 className="font-bold text-lg mb-2">{project.title}</h4>
//                     <p className="text-gray-500 text-xs leading-relaxed">{project.desc}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>

//       {/* --- SECTION 2: CONTACT US WITH FIXED BACKGROUND --- */}
//       <section 
//         className="py-32 text-center relative overflow-hidden bg-fixed bg-cover bg-center"
//         style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')` }}
//       >
//         <div className="absolute inset-0 bg-black/75 z-0"></div>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           viewport={{ once: true }}
//           className="relative z-10 px-6"
//         >
//           <p className="text-blue-400 font-bold tracking-[0.3em] uppercase mb-4 text-sm">Contact Us</p>
//           <h2 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">Get In Touch With Us</h2>
//           <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">Have questions or want to discuss a project? Reach out and we’ll get back to you soon.</p>
//           <motion.button
//             whileHover={{ scale: 1.1, boxShadow: "0px 0px 30px 5px rgba(59, 130, 246, 0.6)" }}
//             whileTap={{ scale: 0.9 }}
//             className="group relative px-12 py-5 rounded-full font-bold text-xl border-2 border-blue-500 overflow-hidden transition-all duration-500"
//           >
//             <span className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
//             <span className="relative z-10 text-white uppercase tracking-wider">Contact Now</span>
//           </motion.button>
//         </motion.div>
//       </section>

//       {/* 2. Footer ko yahan place kiya gaya hai */}
//       <Footer />

//     </div>
//   );
// };

// export default Portfolio;