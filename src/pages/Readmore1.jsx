

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

// const ReadMore1 = () => {
//   const [activeFAQ, setActiveFAQ] = useState(null);
//   const [activeService, setActiveService] = useState('Digital Marketing');

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
//       q: "What marketing channels do you manage?",
//       a: "We manage social media (Facebook, Instagram, LinkedIn, TikTok), Google Ads, email marketing, content marketing, and influencer partnerships to create a comprehensive marketing strategy."
//     },
//     {
//       q: "How do you measure campaign success?",
//       a: "We track KPIs like engagement rate, click-through rate, conversion rate, and ROI. We provide monthly reports with detailed analytics and insights."
//     },
//     {
//       q: "What's the typical timeline to see results?",
//       a: "Some results are visible within weeks (paid ads), while organic results take 2-3 months to show. We focus on sustainable growth and long-term success."
//     },
//     {
//       q: "Do you create content?",
//       a: "Yes, our team creates high-quality content including blog posts, videos, graphics, and social media content tailored to your brand and audience."
//     }
//   ];

//   const whyChooseUs = [
//     { id: "01", title: "Data-Driven Strategy", desc: "We use analytics and market insights to create strategies that target the right audience at the right time." },
//     { id: "02", title: "Multi-Channel Approach", desc: "We leverage social media, email, content, SEO, and paid advertising to maximize your reach." },
//     { id: "03", title: "Creative Excellence", desc: "Our creative team produces compelling content and ads that capture attention and drive engagement." },
//     { id: "04", title: "Measurable Results", desc: "We track every metric that matters and provide detailed reports showing your marketing ROI." }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white pt-24">
//       {/* HERO SECTION */}
//       <section className="relative py-20 bg-[#0a0a0a] border-b border-white/5 text-center">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <h1 className="text-5xl md:text-6xl font-black mb-4">Digital Marketing</h1>
//           <nav className="text-blue-500 font-medium cursor-default">
//             Home / Services / <span className="text-white">Digital Marketing</span>
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
//                 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200" 
//                 alt="Digital Marketing Main" 
//                 className="w-full h-[450px] object-cover rounded-3xl mb-10 shadow-2xl"
//               />

//               <h2 className="text-4xl font-bold mb-6">Digital Marketing Services We Offer</h2>
//               <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
//                 <p>Transform your brand with our expert digital marketing strategies that drive measurable results and connect with your target audience effectively. We create campaigns that boost visibility and increase conversions.</p>
//                 <p>Our digital marketing team combines data-driven strategies with creative excellence to build your brand's online presence. We specialize in multi-channel campaigns that reach your audience where they are.</p>
//                 <p>From social media marketing to email campaigns, content strategy to paid advertising, we cover all aspects of digital marketing to ensure maximum ROI on your marketing investment.</p>
//                 <p>We utilize advanced analytics and tools to track performance, measure results, and continuously optimize your campaigns for better outcomes. Our approach is transparent, data-driven, and focused on achieving your business objectives.</p>
//                 <p>Whether you're looking to increase brand awareness, generate leads, or boost sales, our digital marketing strategies are customized to fit your unique business needs and budget.</p>
//               </div>

//               {/* TWO CARDS WITH IMAGES (Fixed Links) */}
//               <div className="grid md:grid-cols-2 gap-6 mt-12 mb-20">
//                 <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5 bg-[#111]">
//                   <img 
//                     src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800" 
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
//                     alt="Digital Strategy" 
//                   />
//                 </div>
//                 <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5 bg-[#111]">
//                   <img 
//                     src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" 
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
//                     alt="Market Analysis" 
//                   />
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

// export default ReadMore1;




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

const ReadMore1 = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const navigate = useNavigate(); // 👈 Hook initialize kiya

  // Is page ki identity sidebar ke liye
  const activeServiceName = 'Digital Marketing';

  // Page load par top par scroll karne ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Services List with Paths for Navigation
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
      q: "What marketing channels do you manage?",
      a: "We manage social media (Facebook, Instagram, LinkedIn, TikTok), Google Ads, email marketing, content marketing, and influencer partnerships to create a comprehensive marketing strategy."
    },
    {
      q: "How do you measure campaign success?",
      a: "We track KPIs like engagement rate, click-through rate, conversion rate, and ROI. We provide monthly reports with detailed analytics and insights."
    },
    {
      q: "What's the typical timeline to see results?",
      a: "Some results are visible within weeks (paid ads), while organic results take 2-3 months to show. We focus on sustainable growth and long-term success."
    },
    {
      q: "Do you create content?",
      a: "Yes, our team creates high-quality content including blog posts, videos, graphics, and social media content tailored to your brand and audience."
    }
  ];

  const whyChooseUs = [
    { id: "01", title: "Data-Driven Strategy", desc: "We use analytics and market insights to create strategies that target the right audience at the right time." },
    { id: "02", title: "Multi-Channel Approach", desc: "We leverage social media, email, content, SEO, and paid advertising to maximize your reach." },
    { id: "03", title: "Creative Excellence", desc: "Our creative team produces compelling content and ads that capture attention and drive engagement." },
    { id: "04", title: "Measurable Results", desc: "We track every metric that matters and provide detailed reports showing your marketing ROI." }
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
          <nav className="text-blue-500 font-medium cursor-default">
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200" 
                alt="Digital Marketing Main" 
                className="w-full h-[450px] object-cover rounded-3xl mb-10 shadow-2xl"
              />

              <h2 className="text-4xl font-bold mb-6">Digital Marketing Services We Offer</h2>
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>Transform your brand with our expert digital marketing strategies that drive measurable results and connect with your target audience effectively. We create campaigns that boost visibility and increase conversions.</p>
                <p>Our digital marketing team combines data-driven strategies with creative excellence to build your brand's online presence. We specialize in multi-channel campaigns that reach your audience where they are.</p>
                <p>From social media marketing to email campaigns, content strategy to paid advertising, we cover all aspects of digital marketing to ensure maximum ROI on your marketing investment.</p>
                <p>We utilize advanced analytics and tools to track performance, measure results, and continuously optimize your campaigns for better outcomes. Our approach is transparent, data-driven, and focused on achieving your business objectives.</p>
                <p>Whether you're looking to increase brand awareness, generate leads, or boost sales, our digital marketing strategies are customized to fit your unique business needs and budget.</p>
              </div>

              {/* TWO CARDS WITH IMAGES */}
              <div className="grid md:grid-cols-2 gap-6 mt-12 mb-20">
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5 bg-[#111]">
                  <img src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Digital Strategy" />
                </div>
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5 bg-[#111]">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Market Analysis" />
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
                      onClick={() => navigate(service.path)} // 👈 Navigation logic
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
                  onClick={() => navigate('/contact')} // 👈 Contact link
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

export default ReadMore1;
