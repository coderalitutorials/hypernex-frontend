// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { CheckCircle2 } from 'lucide-react';
// import Footer from "./footer";

// const Portfolio = () => {

//   const [activeTab, setActiveTab] = useState('Social Media Marketing');

//   const categories = [
//     'Social Media Marketing',
//     'GMB Optimization',
//     'SEO',
//     'Graphic Designing',
//     'Website Development',
//     'ORM'
//   ];

//   // 🔥 Services + Cards Data
//   const servicesData = {
//     "Social Media Marketing": {
//       title: "Social Media Marketing",
//       desc: "Boost your brand presence with strategies designed to increase visibility, engagement, and conversions across key social platforms.",
//       points: [
//         "Platform management (Facebook, Instagram, LinkedIn)",
//         "Creative content design & scheduling",
//         "Paid campaigns with analytics",
//         "Community engagement & growth"
//       ],
//       cards: [
//         { title: "Content Strategy", text: "Engaging content plans tailored for your audience" },
//         { title: "Paid Campaigns", text: "High ROI ads with precise targeting" },
//         { title: "Brand Awareness", text: "Consistent growth & visibility" }
//       ]
//     },

//     "GMB Optimization": {
//       title: "Google My Business Optimization",
//       desc: "Stand out locally with a well-optimized Google Business profile that attracts real nearby customers and builds trust.",
//       points: [
//         "Complete profile setup & optimization",
//         "Local SEO: categories, citations, NAP consistency",
//         "Review generation & response strategy",
//         "Weekly performance insights"
//       ],
//       cards: [
//         { title: "Local Ranking", text: "Appear in top local Google results" },
//         { title: "Map Visibility", text: "Get discovered via Google Maps" },
//         { title: "Customer Trust", text: "Strong reviews & reputation" }
//       ]
//     },

//     "SEO": {
//       title: "Search Engine Optimization",
//       desc: "Improve organic visibility with a balanced approach across technical, content, and authority-building SEO practices.",
//       points: [
//         "Keyword research & content planning",
//         "On-page and technical SEO fixes",
//         "Backlink acquisition & audits",
//         "Rank tracking & reporting"
//       ],
//       cards: [
//         { title: "Keyword Research", text: "High-converting keywords strategy" },
//         { title: "On-Page SEO", text: "Optimized content & structure" },
//         { title: "Backlinks", text: "Authority & trust building" }
//       ]
//     },

//     "Graphic Designing": {
//       title: "Graphic Designing",
//       desc: "Clean, modern visuals that tell your brand story effectively across print and digital touchpoints.",
//       points: [
//         "Logos, branding, and identity systems",
//         "Social media posts, banners, and ads",
//         "Marketing collateral (flyers, brochures)",
//         "Fast delivery with revisions"
//       ],
//       cards: [
//         { title: "Brand Identity", text: "Logos & branding assets" },
//         { title: "Social Creatives", text: "High-quality post designs" },
//         { title: "Ad Banners", text: "Conversion-focused visuals" }
//       ]
//     },

//     "Website Development": {
//       title: "Website Development",
//       desc: "Build a fast, reliable website that represents your brand and supports measurable business goals.",
//       points: [
//         "Responsive UI with modern frameworks",
//         "CMS or custom builds as needed",
//         "Performance & SEO best practices",
//         "Ongoing maintenance & support"
//       ],
//       cards: [
//         { title: "Custom Design", text: "Tailored UI/UX solutions" },
//         { title: "Fast Performance", text: "Optimized speed & loading" },
//         { title: "Secure Code", text: "Clean & scalable architecture" }
//       ]
//     },

//     "ORM": {
//       title: "Online Reputation Management",
//       desc: "Protect and improve brand perception with proactive monitoring, response strategies, and transparent reporting.",
//       points: [
//         "Review monitoring & escalation",
//         "Response playbooks and timelines",
//         "Brand sentiment analysis",
//         "Monthly progress reporting"
//       ],
//       cards: [
//         { title: "Review Control", text: "Manage negative feedback" },
//         { title: "Brand Image", text: "Positive online presence" },
//         { title: "Monitoring", text: "24/7 reputation tracking" }
//       ]
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0a1a] text-white pt-32 overflow-x-hidden">

//       <div className="px-6 md:px-20 mb-20">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-black mb-4">Our Services Portfolio</h1>
//           <p className="text-blue-400 tracking-[0.2em] uppercase text-sm">Portfolio</p>
//         </div>

//         {/* TABS */}
//         <div className="flex flex-wrap justify-center gap-4 mb-16">
//           {categories.map(cat => (
//             <button
//               key={cat}
//               onClick={() => setActiveTab(cat)}
//               className={`px-6 py-3 rounded-full font-bold text-sm border transition-all ${
//                 activeTab === cat
//                   ? 'bg-gradient-to-r from-blue-500 to-purple-600'
//                   : 'border-gray-700 text-gray-400 hover:border-blue-500'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* CONTENT */}
//         <div className="bg-[#11112b] rounded-3xl p-8 md:p-12 border border-white/5">

//           {/* TITLE + POINTS */}
//           <div className="grid md:grid-cols-2 gap-8 mb-14">
//             <div>
//               <h2 className="text-3xl font-bold mb-4">
//                 {servicesData[activeTab].title}
//               </h2>
//               <p className="text-gray-400">
//                 {servicesData[activeTab].desc}
//               </p>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-4">
//               {servicesData[activeTab].points.map((p, i) => (
//                 <div key={i} className="flex gap-3 bg-white/5 p-4 rounded-xl">
//                   <CheckCircle2 className="text-green-500 w-5 h-5" />
//                   <span className="text-sm">{p}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* 🔥 DIFFERENT CARDS PER SERVICE */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 0.4 }}
//               className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//               {servicesData[activeTab].cards.map((card, i) => (
//                 <div
//                   key={i}
//                   className="bg-[#0a0a1a] border border-white/10 rounded-2xl p-6 hover:border-blue-500 transition"
//                 >
//                   <h4 className="font-bold text-lg mb-2">{card.title}</h4>
//                   <p className="text-gray-400 text-sm">{card.text}</p>
//                 </div>
//               ))}
//             </motion.div>
//           </AnimatePresence>

//         </div>
//       </div>


//  <section 
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
//       <Footer />
//     </div>
//   );
// };

// export default Portfolio;






















// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { CheckCircle2 } from 'lucide-react';
// import Footer from "./footer";

// const Portfolio = () => {

//   const [activeTab, setActiveTab] = useState('Social Media Marketing');

//   const categories = [
//     'Social Media Marketing',
//     'GMB Optimization',
//     'SEO',
//     'Graphic Designing',
//     'Website Development',
//     'ORM'
//   ];

//   // 🔥 Services Data (UNCHANGED)
//   const servicesData = {
//     "Social Media Marketing": {
//       title: "Social Media Marketing",
//       desc: "Boost your brand presence with strategies designed to increase visibility, engagement, and conversions across key social platforms.",
//       points: [
//         "Platform management (Facebook, Instagram, LinkedIn)",
//         "Creative content design & scheduling",
//         "Paid campaigns with analytics",
//         "Community engagement & growth"
//       ],
//       cards: [
//         { title: "Brand Boost Campaign", text: "Facebook + Instagram engagement growth by 60%" },
//         { title: "LinkedIn Awareness Ads", text: "Corporate B2B lead generation campaign" },
//         { title: "Content Strategy Revamp", text: "Increased post interactions by 45%" },
//         { title: "Influencer Collab Program", text: "Drove 25% more conversions via micro-influencers" },
//       ]
//     },

//     "GMB Optimization": {
//       title: "Google My Business Optimization",
//       desc: "Stand out locally with a well-optimized Google Business profile that attracts real nearby customers and builds trust.",
//       points: [
//         "Complete profile setup & optimization",
//         "Local SEO: categories, citations, NAP consistency",
//         "Review generation & response strategy",
//         "Weekly performance insights"
//       ],
//       cards: [
//         { title: "Local Bakery Ranking", text: "Moved from rank #12 to top 3 in 30 days" },
//         { title: "Spa Center Visibility Boost", text: "4.8★ rating management campaign" },
//         { title: "Retail Chain Local SEO", text: "Multi-location citations & local schema" },
//         { title: "Service Center Map Optimization", text: "Improved map pack visibility for service-based clients" }
//       ]
//     },

//     "SEO": {
//       title: "Search Engine Optimization",
//       desc: "Improve organic visibility with a balanced approach across technical, content, and authority-building SEO practices.",
//       points: [
//         "Keyword research & content planning",
//         "On-page and technical SEO fixes",
//         "Backlink acquisition & audits",
//         "Rank tracking & reporting"
//       ],
//       cards: [
//         { title: "E-commerce SEO Sprint", text: "200% organic traffic growth" },
//         { title: "Tech Blog Optimization", text: "From 10 to 100 daily visitors" },
//         { title: "Local Services Ranking", text: "Increased search impressions 3×" },
//         { title: "Content Hub Build", text: "Structured content clustersfor authority" },
//       ]
//     },

//     "Graphic Designing": {
//       title: "Graphic Designing",
//       desc: "Clean, modern visuals that tell your brand story effectively across print and digital touchpoints.",
//       points: [
//         "Logos, branding, and identity systems",
//         "Social media posts, banners, and ads",
//         "Marketing collateral (flyers, brochures)",
//         "Fast delivery with revisions"
//       ],
//       cards: [
//         { title: "Logo Design for HyperNexic", text: "Modern minimal identity" },
//         { title: "Social Media Kit", text: "Consistent branding pack" },
//         { title: "Corporate Flyers", text: "Clean layouts for B2B outreach" },
//         { title: "Brand guidelines", text: "Comprehensive identity system" },
//       ]
//     },

//     "Website Development": {
//       title: "Website Development",
//       desc: "Build a fast, reliable website that represents your brand and supports measurable business goals.",
//       points: [
//         "Responsive UI with modern frameworks",
//         "CMS or custom builds as needed",
//         "Performance & SEO best practices",
//         "Ongoing maintenance & support"
//       ],
//       cards: [
//         { title: "AlphaLearn LMS", text: "Custom e-learning platform with course management" },
//         { title: "HyperNexic Tech Site", text: "Corporate landing design" },
//         { title: "Freelance Portfolio", text: "Personal responsive website" },
//         { title: "SaaS Product Landing", text: "High-converting landing for a B2B SaaS" },
//       ]
//     },

//     "ORM": {
//       title: "Online Reputation Management",
//       desc: "Protect and improve brand perception with proactive monitoring, response strategies, and transparent reporting.",
//       points: [
//         "Review monitoring & escalation",
//         "Response playbooks and timelines",
//         "Brand sentiment analysis",
//         "Monthly progress reporting"
//       ],
//       cards: [
//         { title: "Brand Reputation Audit", text: "Handled 50+ negative reviews effectively" },
//         { title: "Google Reviews Campaign", text: "Improved trust score from 3.9★ to 4.7★" },
        
//       ]
//     }
//   };

//   // 🖼️ Card Images Mapping
//   const cardImages = {
//     "Content Strategy": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
//     "Paid Campaigns": "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=800&auto=format&fit=crop",
//     "Brand Awareness": "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",

//     "Local Ranking": "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=800&auto=format&fit=crop",
//     "Map Visibility": "https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=800&auto=format&fit=crop",
//     "Customer Trust": "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800&auto=format&fit=crop",

//     "Keyword Research": "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800&auto=format&fit=crop",
//     "On-Page SEO": "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop",
//     "Backlinks": "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=800&auto=format&fit=crop",

//     "Brand Identity": "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop",
//     "Social Creatives": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
//     "Ad Banners": "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=800&auto=format&fit=crop",

//     "Custom Design": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
//     "Fast Performance": "https://images.unsplash.com/photo-1581091215367-59ab6c1c8bdb?q=80&w=800&auto=format&fit=crop",
//     "Secure Code": "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",

//     "Review Control": "https://images.unsplash.com/photo-1556741533-f6acd647d2fb?q=80&w=800&auto=format&fit=crop",
//     "Brand Image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
//     "Monitoring": "https://images.unsplash.com/photo-1581092334497-3c06b7c2e1c5?q=80&w=800&auto=format&fit=crop"
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0a1a] text-white pt-32 overflow-x-hidden">

//       <div className="px-6 md:px-20 mb-20">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-black mb-4">Our Services Portfolio</h1>
//           <p className="text-blue-400 tracking-[0.2em] uppercase text-sm">Portfolio</p>
//         </div>

//         {/* TABS */}
//         <div className="flex flex-wrap justify-center gap-4 mb-16">
//           {categories.map(cat => (
//             <button
//               key={cat}
//               onClick={() => setActiveTab(cat)}
//               className={`px-6 py-3 rounded-full font-bold text-sm border transition-all ${
//                 activeTab === cat
//                   ? 'bg-gradient-to-r from-blue-500 to-purple-600'
//                   : 'border-gray-700 text-gray-400 hover:border-blue-500'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* CONTENT */}
//         <div className="bg-[#11112b] rounded-3xl p-8 md:p-12 border border-white/5">

//           <div className="grid md:grid-cols-2 gap-8 mb-14">
//             <div>
//               <h2 className="text-3xl font-bold mb-4">{servicesData[activeTab].title}</h2>
//               <p className="text-gray-400">{servicesData[activeTab].desc}</p>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-4">
//               {servicesData[activeTab].points.map((p, i) => (
//                 <div key={i} className="flex gap-3 bg-white/5 p-4 rounded-xl">
//                   <CheckCircle2 className="text-green-500 w-5 h-5" />
//                   <span className="text-sm">{p}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* CARDS WITH IMAGES */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 0.4 }}
//               className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//               {servicesData[activeTab].cards.map((card, i) => (
//                 <div
//                   key={i}
//                   className="bg-[#0a0a1a] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500 transition"
//                 >
//                   <div className="h-40 overflow-hidden">
//                     <img
//                       src={cardImages[card.title]}
//                       alt={card.title}
//                       className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
//                     />
//                   </div>

//                   <div className="p-6">
//                     <h4 className="font-bold text-lg mb-2">{card.title}</h4>
//                     <p className="text-gray-400 text-sm">{card.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </AnimatePresence>

//         </div>
//       </div>




//      <section 
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











//       <Footer />
//     </div>
//   );
// };

// export default Portfolio;







// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { CheckCircle2 } from 'lucide-react';
// import Footer from "./footer";

// const Portfolio = () => {

//   const [activeTab, setActiveTab] = useState('Social Media Marketing');

//   const categories = [
//     'Social Media Marketing',
//     'GMB Optimization',
//     'SEO',
//     'Graphic Designing',
//     'Website Development',
//     'ORM'
//   ];

//   /* ===================== DATA (UNCHANGED) ===================== */
//   const servicesData = {
//     "Social Media Marketing": {
//       title: "Social Media Marketing",
//       desc: "Boost your brand presence with strategies designed to increase visibility, engagement, and conversions across key social platforms.",
//       points: [
//         "Platform management (Facebook, Instagram, LinkedIn)",
//         "Creative content design & scheduling",
//         "Paid campaigns with analytics",
//         "Community engagement & growth"
//       ],
//       cards: [
//         { title: "Brand Boost Campaign", text: "Facebook + Instagram engagement growth by 60%" },
//         { title: "LinkedIn Awareness Ads", text: "Corporate B2B lead generation campaign" },
//         { title: "Content Strategy Revamp", text: "Increased post interactions by 45%" },
//         { title: "Influencer Collab Program", text: "Drove 25% more conversions via micro-influencers" }
//       ]
//     },

//     "GMB Optimization": {
//       title: "Google My Business Optimization",
//       desc: "Stand out locally with a well-optimized Google Business profile that attracts real nearby customers and builds trust.",
//       points: [
//         "Complete profile setup & optimization",
//         "Local SEO: categories, citations, NAP consistency",
//         "Review generation & response strategy",
//         "Weekly performance insights"
//       ],
//       cards: [
//         { title: "Local Bakery Ranking", text: "Moved from rank #12 to top 3 in 30 days" },
//         { title: "Spa Center Visibility Boost", text: "4.8★ rating management campaign" },
//         { title: "Retail Chain Local SEO", text: "Multi-location citations & local schema" },
//         { title: "Service Center Map Optimization", text: "Improved map pack visibility" }
//       ]
//     },

//     "SEO": {
//       title: "Search Engine Optimization",
//       desc: "Improve organic visibility with a balanced approach across technical, content, and authority-building SEO practices.",
//       points: [
//         "Keyword research & content planning",
//         "On-page and technical SEO fixes",
//         "Backlink acquisition & audits",
//         "Rank tracking & reporting"
//       ],
//       cards: [
//         { title: "E-commerce SEO Sprint", text: "200% organic traffic growth" },
//         { title: "Tech Blog Optimization", text: "From 10 to 100 daily visitors" },
//         { title: "Local Services Ranking", text: "Search impressions increased 3×" },
//         { title: "Content Hub Build", text: "Structured authority content clusters" }
//       ]
//     },

//     "Graphic Designing": {
//       title: "Graphic Designing",
//       desc: "Clean, modern visuals that tell your brand story effectively across print and digital touchpoints.",
//       points: [
//         "Logos, branding, and identity systems",
//         "Social media posts, banners, and ads",
//         "Marketing collateral (flyers, brochures)",
//         "Fast delivery with revisions"
//       ],
//       cards: [
//         { title: "Logo Design", text: "Modern minimal identity" },
//         { title: "Social Media Kit", text: "Consistent branding pack" },
//         { title: "Corporate Flyers", text: "Clean layouts for B2B outreach" },
//         { title: "Brand Guidelines", text: "Complete identity system" }
//       ]
//     },

//     "Website Development": {
//       title: "Website Development",
//       desc: "Build a fast, reliable website that represents your brand and supports measurable business goals.",
//       points: [
//         "Responsive UI with modern frameworks",
//         "CMS or custom builds as needed",
//         "Performance & SEO best practices",
//         "Ongoing maintenance & support"
//       ],
//       cards: [
//         { title: "LMS Platform", text: "Custom e-learning system" },
//         { title: "Corporate Website", text: "Professional company presence" },
//         { title: "Portfolio Website", text: "Personal brand showcase" },
//         { title: "SaaS Landing Page", text: "High-converting product landing" }
//       ]
//     },

//     "ORM": {
//       title: "Online Reputation Management",
//       desc: "Protect and improve brand perception with proactive monitoring and response strategies.",
//       points: [
//         "Review monitoring & escalation",
//         "Response playbooks and timelines",
//         "Brand sentiment analysis",
//         "Monthly progress reporting"
//       ],
//       cards: [
//         { title: "Reputation Audit", text: "Handled 50+ negative reviews" },
//         { title: "Google Reviews Campaign", text: "Rating improved to 4.7★" }
//       ]
//     }
//   };

//   /* ===================== IMAGE MAPPING PER CARD ===================== */
//   const cardImages = {
//     /* Social Media Marketing */
//     "Brand Boost Campaign": "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
//     "LinkedIn Awareness Ads": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
//     "Content Strategy Revamp": "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=800&auto=format&fit=crop",
//     "Influencer Collab Program": "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop",

//     /* GMB Optimization */
//     "Local Bakery Ranking": "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=800&auto=format&fit=crop",
//     "Spa Center Visibility Boost": "https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=800&auto=format&fit=crop",
//     "Retail Chain Local SEO": "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800&auto=format&fit=crop",
//     "Service Center Map Optimization": "https://images.unsplash.com/photo-1581092334497-3c06b7c2e1c5?q=80&w=800&auto=format&fit=crop",

//     /* SEO */
//     "E-commerce SEO Sprint": "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800&auto=format&fit=crop",
//     "Tech Blog Optimization": "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=800&auto=format&fit=crop",
//     "Local Services Ranking": "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop",
//     "Content Hub Build": "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",

//     /* Graphic Designing */
//     "Logo Design": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
//     "Social Media Kit": "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=800&auto=format&fit=crop",
//     "Corporate Flyers": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
//     "Brand Guidelines": "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop",

//     /* Website Development */
//     "LMS Platform": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
//     "Corporate Website": "https://images.unsplash.com/photo-1581091215367-59ab6c1c8bdb?q=80&w=800&auto=format&fit=crop",
//     "Portfolio Website": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
//     "SaaS Landing Page": "https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=800&auto=format&fit=crop",

//     /* ORM */
//     "Reputation Audit": "https://images.unsplash.com/photo-1556741533-f6acd647d2fb?q=80&w=800&auto=format&fit=crop",
//     "Google Reviews Campaign": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0a1a] text-white pt-32">

//       <div className="px-6 md:px-20 mb-20">

//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-black mb-4">Our Services Portfolio</h1>
//           <p className="text-blue-400 tracking-[0.2em] uppercase text-sm">Portfolio</p>
//         </div>

//         {/* BUTTONS */}
//         <div className="flex flex-wrap justify-center gap-4 mb-16">
//           {categories.map(cat => (
//             <button
//               key={cat}
//               onClick={() => setActiveTab(cat)}
//               className={`px-6 py-3 rounded-full font-bold text-sm border transition-all ${
//                 activeTab === cat
//                   ? 'bg-gradient-to-r from-blue-500 to-purple-600'
//                   : 'border-gray-700 text-gray-400 hover:border-blue-500'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* CONTENT */}
//         <div className="bg-[#11112b] rounded-3xl p-8 md:p-12 border border-white/5">

//           {/* TITLE + POINTS */}
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-4">{servicesData[activeTab].title}</h2>
//               <p className="text-gray-400">{servicesData[activeTab].desc}</p>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-4">
//               {servicesData[activeTab].points.map((p, i) => (
//                 <div key={i} className="flex gap-3 bg-white/5 p-4 rounded-xl">
//                   <CheckCircle2 className="text-green-500 w-5 h-5" />
//                   <span className="text-sm">{p}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* CARDS */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
//             >
//               {servicesData[activeTab].cards.map((card, i) => (
//                 <div key={i} className="bg-[#0a0a1a] border border-white/10 rounded-xl overflow-hidden">
//                   <img
//                     src={cardImages[card.title]}
//                     alt={card.title}
//                     className="h-32 w-full object-cover"
//                   />
//                   <div className="p-4">
//                     <h4 className="font-semibold text-sm mb-1">{card.title}</h4>
//                     <p className="text-gray-400 text-xs">{card.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </AnimatePresence>

//         </div>
//       </div>














//        <section 
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







//       <Footer />
//     </div>
//   );
// };

// export default Portfolio;




import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Footer from "./Footer";

const Portfolio = () => {

  const [activeTab, setActiveTab] = useState('Social Media Marketing');

  const categories = [
    'Social Media Marketing',
    'GMB Optimization',
    'SEO',
    'Graphic Designing',
    'Website Development',
    'ORM'
  ];

  /* ===================== DATA (UNCHANGED) ===================== */
  const servicesData = {
    "Social Media Marketing": {
      title: "Social Media Marketing",
      desc: "Boost your brand presence with strategies designed to increase visibility, engagement, and conversions across key social platforms.",
      points: [
        "Platform management (Facebook, Instagram, LinkedIn)",
        "Creative content design & scheduling",
        "Paid campaigns with analytics",
        "Community engagement & growth"
      ],
      cards: [
        { title: "Brand Boost Campaign", text: "Facebook + Instagram engagement growth by 60%" },
        { title: "LinkedIn Awareness Ads", text: "Corporate B2B lead generation campaign" },
        { title: "Content Strategy Revamp", text: "Increased post interactions by 45%" },
        { title: "Influencer Collab Program", text: "Drove 25% more conversions via micro-influencers" }
      ]
    },

    "GMB Optimization": {
      title: "Google My Business Optimization",
      desc: "Stand out locally with a well-optimized Google Business profile that attracts real nearby customers and builds trust.",
      points: [
        "Complete profile setup & optimization",
        "Local SEO: categories, citations, NAP consistency",
        "Review generation & response strategy",
        "Weekly performance insights"
      ],
      cards: [
        { title: "Local Bakery Ranking", text: "Moved from rank #12 to top 3 in 30 days" },
        { title: "Spa Center Visibility Boost", text: "4.8★ rating management campaign" },
        { title: "Retail Chain Local SEO", text: "Multi-location citations & local schema" },
        { title: "Service Center Map Optimization", text: "Improved map pack visibility" }
      ]
    },

    "SEO": {
      title: "Search Engine Optimization",
      desc: "Improve organic visibility with a balanced approach across technical, content, and authority-building SEO practices.",
      points: [
        "Keyword research & content planning",
        "On-page and technical SEO fixes",
        "Backlink acquisition & audits",
        "Rank tracking & reporting"
      ],
      cards: [
        { title: "E-commerce SEO Sprint", text: "200% organic traffic growth" },
        { title: "Tech Blog Optimization", text: "From 10 to 100 daily visitors" },
        { title: "Local Services Ranking", text: "Search impressions increased 3×" },
        { title: "Content Hub Build", text: "Structured authority content clusters" }
      ]
    },

    "Graphic Designing": {
      title: "Graphic Designing",
      desc: "Clean, modern visuals that tell your brand story effectively across print and digital touchpoints.",
      points: [
        "Logos, branding, and identity systems",
        "Social media posts, banners, and ads",
        "Marketing collateral (flyers, brochures)",
        "Fast delivery with revisions"
      ],
      
      cards: [
        { title: "Logo Design for HyperNexic", text: "Modern minimal identity" },
        { title: "Social Media Kit", text: "Consistent branding pack" },
        { title: "Corporate Flyers", text: "Clean layouts for B2B outreach" },
        { title: "Brand Guidelines", text: "Complete identity system" }
      ]
    },

    "Website Development": {
      title: "Website Development",
      desc: "Build a fast, reliable website that represents your brand and supports measurable business goals.",
      points: [
        "Responsive UI with modern frameworks",
        "CMS or custom builds as needed",
        "Performance & SEO best practices",
        "Ongoing maintenance & support"
      ],
      cards: [
        { title: "AlphaLearn LMS", text: "Custom e-learning platform with course management" },
        { title: "HyperNexic Tech Site", text: "Corporate landing design" },
        { title: "Freelance Portfolio", text: "Personal responsive website" },
        { title: "SaaS Product Landing", text: "High-converting landing for a B2B SaaS" }
      ]
    },

    "ORM": {
      title: "Online Reputation Management",
      desc: "Protect and improve brand perception with proactive monitoring and response strategies.",
      points: [
        "Review monitoring & escalation",
        "Response playbooks and timelines",
        "Brand sentiment analysis",
        "Monthly progress reporting"
      ],
      cards: [
        { title: "Brand Reputation Audit", text: "Handled 50+ negative reviews effectively" },
        { title: "Google Reviews Campaign", text: "Improved trust score from 3.9★ to 4.7★" }
      ]
    }
  };

  /* ===================== IMAGE MAPPING PER CARD ===================== */
  const cardImages = {
    "Brand Boost Campaign": "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
    "LinkedIn Awareness Ads": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    "Content Strategy Revamp": "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=800&auto=format&fit=crop",
    "Influencer Collab Program": "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop",
    "Local Bakery Ranking": "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=800&auto=format&fit=crop",
    "Spa Center Visibility Boost": "https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=800&auto=format&fit=crop",
    "Retail Chain Local SEO": "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800&auto=format&fit=crop",
    "Service Center Map Optimization": "https://images.pexels.com/photos/106341/pexels-photo-106341.jpeg",
    "E-commerce SEO Sprint": "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800&auto=format&fit=crop",
    "Tech Blog Optimization": "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=800&auto=format&fit=crop",
    "Local Services Ranking": "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop",
    "Content Hub Build": "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    "Logo Design for HyperNexic": "https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg",
    "Social Media Kit": "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=800&auto=format&fit=crop",
    "Corporate Flyers": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    "Brand Guidelines": "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop",
    "AlphaLearn LMS": "https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg",
    "HyperNexic Tech Site": "https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg",
    "Freelance Portfolio": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    "SaaS Product Landing": "https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg",
    "Brand Reputation Audit": "https://images.pexels.com/photos/4200831/pexels-photo-4200831.jpeg",
    "Google Reviews Campaign": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white pt-32">
      <div className="px-6 md:px-20 mb-20">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Our Services Portfolio</h1>
          <p className="text-blue-400 tracking-[0.2em] uppercase text-sm">Portfolio</p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3 rounded-full font-bold text-sm border transition-all ${
                activeTab === cat
                  ? 'bg-linear-to-r from-blue-500 to-purple-600'
                  : 'border-gray-700 text-gray-400 hover:border-blue-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="bg-[#11112b] rounded-3xl p-8 md:p-12 border border-white/5">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">{servicesData[activeTab].title}</h2>
              <p className="text-gray-400">{servicesData[activeTab].desc}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {servicesData[activeTab].points.map((p, i) => (
                <div key={i} className="flex gap-3 bg-white/5 p-4 rounded-xl">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  <span className="text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CARDS WITH ANIMATIONS */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" // Gap thora increase kiya for better look
            >
              {servicesData[activeTab].cards.map((card, i) => (
                <motion.div 
                  key={i} 
                  /* 🔥 Added Animations Here */
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-[#0a0a1a] border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors shadow-lg"
                >
                  <img
                    src={cardImages[card.title]}
                    alt={card.title}
                    className="h-40 w-full object-cover" // Image height thori adjust ki clear dikhne ke liye
                  />
                  <div className="p-5">
                    <h4 className="font-semibold text-base mb-1">{card.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{card.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      <section 
        className="py-32 text-center relative overflow-hidden bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-black/75 z-0"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative z-10 px-6"
        >
          <p className="text-blue-400 font-bold tracking-[0.3em] uppercase mb-4 text-sm">Contact Us</p>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">Get In Touch With Us</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">Have questions or want to discuss a project? Reach out and we’ll get back to you soon.</p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 30px 5px rgba(59, 130, 246, 0.6)" }}
            whileTap={{ scale: 0.9 }}
            className="group relative px-12 py-5 rounded-full font-bold text-xl border-2 border-blue-500 overflow-hidden transition-all duration-500"
          >
            <span className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
            <span className="relative z-10 text-white uppercase tracking-wider">Contact Now</span>
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
