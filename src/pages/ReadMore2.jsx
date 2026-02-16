// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   ChevronRight, 
//   ChevronDown, 
//   Facebook, 
//   Instagram, 
//   Linkedin, 
//   Twitter, 
//   ArrowRight
// } from 'lucide-react';
// import Footer from './footer'; 

// const ReadMore2 = () => {
//   const [activeFAQ, setActiveFAQ] = useState(null);
//   const [activeService, setActiveService] = useState('Shopify/E-Commerce');

//   // Page load par top par scroll karne ke liye
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const servicesList = [
//     "Web Development",
//     "Digital Marketing",
//     "Shopify/E-Commerce",
//     "Apps Development",
//     "SEO Services",
//     "Graphic Designing"
//   ];

//   const faqs = [
//     {
//       q: "Do you handle Shopify migrations?",
//       a: "Yes, we can migrate your existing store to Shopify with minimal downtime, preserving your data and SEO rankings."
//     },
//     {
//       q: "Can you customize the Shopify theme?",
//       a: "Absolutely! We customize themes extensively or build custom themes from scratch using Liquid to match your exact requirements."
//     },
//     {
//       q: "What payment gateways do you support?",
//       a: "We integrate with all major payment gateways including Stripe, PayPal, Square, and others based on your preferences and target market."
//     },
//     {
//       q: "Do you provide marketing support?",
//       a: "Yes, we help with email marketing automation, SMS campaigns, and integration with marketing tools to drive sales and customer retention."
//     }
//   ];

//   const whyChooseUs = [
//     { id: "01", title: "Shopify Experts", desc: "Our certified Shopify developers create custom stores tailored to your brand and business model." },
//     { id: "02", title: "High-Converting Design", desc: "We design stores that guide customers through the buying journey and maximize conversion rates." },
//     { id: "03", title: "App Integration", desc: "We integrate all necessary apps for inventory, marketing, customer service, and analytics." },
//     { id: "04", title: "Growth Optimization", desc: "We continuously optimize your store for better performance, higher sales, and improved customer experience." }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white pt-24">
//       {/* HERO SECTION */}
//       <section className="relative py-20 bg-[#0a0a0a] border-b border-white/5 text-center">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <h1 className="text-5xl md:text-6xl font-black mb-4">Shopify/E-Commerce</h1>
//           <nav className="text-blue-500 font-medium">
//             Home / Services / <span className="text-white">Shopify/E-Commerce</span>
//           </nav>
//         </motion.div>
//       </section>

//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid lg:grid-cols-3 gap-12">
          
//           {/* LEFT SIDE CONTENT */}
//           <div className="lg:col-span-2">
//             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
//               {/* Main Large Image */}
//               <img 
//                 src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200" 
//                 alt="Shopify E-commerce" 
//                 className="w-full h-[450px] object-cover rounded-3xl mb-10 shadow-2xl"
//               />

//               <h2 className="text-4xl font-bold mb-6">Shopify/E-Commerce Services We Offer</h2>
//               <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
//                 <p>Create a stunning Shopify store that boosts sales and provides an excellent shopping experience. From intuitive design to seamless functionality, we transform your e-commerce vision into reality.</p>
//                 <p>We specialize in creating high-converting Shopify stores that provide exceptional user experiences and drive sales. Our e-commerce solutions are built to showcase your products and streamline the purchasing process.</p>
//                 <p>From Shopify store setup and design to app integration and optimization, we handle every aspect of your online store. We focus on creating beautiful, fast-loading stores that convert visitors into customers.</p>
//                 <p>Our e-commerce expertise includes payment gateway integration, inventory management, shipping solutions, and marketing automation. We ensure your store is not just visually appealing but also optimized for search engines and mobile devices.</p>
//                 <p>We also provide ongoing support and optimization to help your store grow, increase average order value, and build customer loyalty.</p>
//               </div>

//               {/* TWO CARDS WITH IMAGES */}
//               <div className="grid md:grid-cols-2 gap-6 mt-12 mb-20">
//                 <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5 bg-[#111]">
//                   <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="E-commerce Store" />
//                 </div>
//                 <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5 bg-[#111]">
//                   <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Online Shopping" />
//                 </div>
//               </div>

//               {/* WHY CHOOSE US */}
//               <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>
//               <div className="grid md:grid-cols-2 gap-6 mb-20">
//                 {whyChooseUs.map((item, idx) => (
//                   <motion.div 
//                     key={idx}
//                     whileHover={{ y: -5 }}
//                     className="p-8 bg-[#0a0a1a] border border-blue-900/30 rounded-2xl"
//                   >
//                     <span className="text-3xl font-black text-blue-600 mb-4 block">{item.id}</span>
//                     <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//                     <p className="text-gray-400 text-sm">{item.desc}</p>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* FAQ SECTION */}
//               <h2 className="text-4xl font-bold mb-10">Most Asked Questions</h2>
//               <div className="space-y-4">
//                 {faqs.map((faq, index) => (
//                   <div key={index} className="border border-white/5 rounded-xl bg-[#0a0a1a]">
//                     <button 
//                       onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
//                       className="w-full p-6 flex justify-between items-center text-left cursor-pointer"
//                     >
//                       <span className="font-bold">{faq.q}</span>
//                       {activeFAQ === index ? <ChevronDown className="text-blue-500" /> : <ChevronRight />}
//                     </button>
//                     <AnimatePresence>
//                       {activeFAQ === index && (
//                         <motion.div 
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: 'auto', opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           className="px-6 pb-6 text-gray-400"
//                         >
//                           {faq.a}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT SIDEBAR */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-28 space-y-8">
              
//               {/* SERVICES LIST BOX */}
//               <div className="bg-[#0a0a1a] p-8 rounded-3xl border border-blue-900/20">
//                 <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">List of Services</h3>
//                 <div className="space-y-3">
//                   {servicesList.map((service) => (
//                     <button
//                       key={service}
//                       onClick={() => setActiveService(service)}
//                       className={`w-full flex justify-between items-center p-4 rounded-xl font-bold transition-all cursor-pointer ${
//                         activeService === service 
//                         ? 'bg-blue-600 text-white' 
//                         : 'bg-white/5 text-gray-400 hover:bg-blue-600/20'
//                       }`}
//                     >
//                       {service}
//                       <ChevronRight size={18} />
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* FOLLOW US BOX */}
//               <div className="bg-[#0a0a1a] p-8 rounded-3xl border border-blue-900/20">
//                 <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
//                 <div className="flex gap-4 mb-8">
//                   {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
//                     <a key={i} href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-600 transition-colors cursor-pointer">
//                       <Icon size={20} />
//                     </a>
//                   ))}
//                 </div>
                
//                 <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-black text-lg flex items-center justify-center gap-3 cursor-pointer group shadow-lg">
//                   GET STARTED
//                   <ArrowRight className="group-hover:translate-x-2 transition-transform" />
//                 </button>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ReadMore2;




import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // 👈 Navigation ke liye
import { 
  ChevronRight, 
  ChevronDown, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  ArrowRight
} from 'lucide-react';
import Footer from './Footer'; 

const ReadMore2 = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const navigate = useNavigate(); // 👈 Hook initialize

  // Is page ki identity sidebar ke liye
  const activeServiceName = 'Shopify/E-Commerce';

  // Page load par top par scroll karne ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Services List with paths
  const services = [
    { name: "Web Development", path: "/read-more" },
    { name: "Digital Marketing", path: "/read-more1" },
    { name: "Shopify/E-Commerce", path: "/read-more2" },
    { name: "Apps Development", path: "/read-more3" },
    { name: "SEO Services", path: "/read-more4" },
    { name: "Graphic Designing", path: "/read-more5" }
  ];

  const faqs = [
    {
      q: "Do you handle Shopify migrations?",
      a: "Yes, we can migrate your existing store to Shopify with minimal downtime, preserving your data and SEO rankings."
    },
    {
      q: "Can you customize the Shopify theme?",
      a: "Absolutely! We customize themes extensively or build custom themes from scratch using Liquid to match your exact requirements."
    },
    {
      q: "What payment gateways do you support?",
      a: "We integrate with all major payment gateways including Stripe, PayPal, Square, and others based on your preferences and target market."
    },
    {
      q: "Do you provide marketing support?",
      a: "Yes, we help with email marketing automation, SMS campaigns, and integration with marketing tools to drive sales and customer retention."
    }
  ];

  const whyChooseUs = [
    { id: "01", title: "Shopify Experts", desc: "Our certified Shopify developers create custom stores tailored to your brand and business model." },
    { id: "02", title: "High-Converting Design", desc: "We design stores that guide customers through the buying journey and maximize conversion rates." },
    { id: "03", title: "App Integration", desc: "We integrate all necessary apps for inventory, marketing, customer service, and analytics." },
    { id: "04", title: "Growth Optimization", desc: "We continuously optimize your store for better performance, higher sales, and improved customer experience." }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* HERO SECTION */}
      <section className="relative py-20 bg-[#0a0a0a] border-b border-white/5 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase">{activeServiceName}</h1>
          <nav className="text-blue-500 font-medium">
            Home / Services / <span className="text-white">{activeServiceName}</span>
          </nav>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200" 
                alt="Shopify E-commerce" 
                className="w-full h-[450px] object-cover rounded-3xl mb-10 shadow-2xl"
              />

              <h2 className="text-4xl font-bold mb-6">Shopify/E-Commerce Services We Offer</h2>
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>Create a stunning Shopify store that boosts sales and provides an excellent shopping experience. From intuitive design to seamless functionality, we transform your e-commerce vision into reality.</p>
                <p>We specialize in creating high-converting Shopify stores that provide exceptional user experiences and drive sales. Our e-commerce solutions are built to showcase your products and streamline the purchasing process.</p>
                <p>From Shopify store setup and design to app integration and optimization, we handle every aspect of your online store. We focus on creating beautiful, fast-loading stores that convert visitors into customers.</p>
                <p>Our e-commerce expertise includes payment gateway integration, inventory management, shipping solutions, and marketing automation. We ensure your store is not just visually appealing but also optimized for search engines and mobile devices.</p>
                <p>We also provide ongoing support and optimization to help your store grow, increase average order value, and build customer loyalty.</p>
              </div>

              {/* TWO CARDS WITH IMAGES */}
              <div className="grid md:grid-cols-2 gap-6 mt-12 mb-20">
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5 bg-[#111]">
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="E-commerce Store" />
                </div>
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5 bg-[#111]">
                  <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Online Shopping" />
                </div>
              </div>

              {/* WHY CHOOSE US */}
              <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-20">
                {whyChooseUs.map((item, idx) => (
                  <motion.div key={idx} whileHover={{ y: -5 }} className="p-8 bg-[#0a0a1a] border border-blue-900/30 rounded-2xl">
                    <span className="text-3xl font-black text-blue-600 mb-4 block">{item.id}</span>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* FAQ SECTION */}
              <h2 className="text-4xl font-bold mb-10">Most Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-white/5 rounded-xl bg-[#0a0a1a]">
                    <button onClick={() => setActiveFAQ(activeFAQ === index ? null : index)} className="w-full p-6 flex justify-between items-center text-left cursor-pointer">
                      <span className="font-bold">{faq.q}</span>
                      {activeFAQ === index ? <ChevronDown className="text-blue-500" /> : <ChevronRight />}
                    </button>
                    <AnimatePresence>
                      {activeFAQ === index && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 text-gray-400">
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              
              {/* SERVICES LIST BOX */}
              <div className="bg-[#0a0a1a] p-8 rounded-3xl border border-blue-900/20 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">List of Services</h3>
                <div className="space-y-3">
                  {services.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => navigate(service.path)} // 👈 Logic added
                      className={`w-full flex justify-between items-center p-4 rounded-xl font-bold transition-all cursor-pointer group ${
                        activeServiceName === service.name 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white/5 text-gray-400 hover:bg-blue-600/20'
                      }`}
                    >
                      {service.name}
                      <ChevronRight className={`w-5 h-5 transition-transform ${activeServiceName === service.name ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* FOLLOW US BOX */}
              <div className="bg-[#0a0a1a] p-8 rounded-3xl border border-blue-900/20 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex gap-4 mb-8">
                  {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                    <motion.a 
                      key={i} 
                      href="#" 
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-600 transition-colors cursor-pointer"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
                
                <button 
                  onClick={() => navigate('/contact')} // 👈 Contact Page link
                  className="w-full py-5 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl font-black text-lg flex items-center justify-center gap-3 cursor-pointer group shadow-lg"
                >
                  GET STARTED
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReadMore2;
