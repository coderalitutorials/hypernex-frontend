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

// const ReadMore4 = () => {
//   const [activeFAQ, setActiveFAQ] = useState(null);
//   const [activeService, setActiveService] = useState('SEO Services');

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
//       q: "How long does SEO take to show results?",
//       a: "SEO is a long-term strategy. You may see improvements within 3-6 months, but significant results typically take 6-12 months depending on competition."
//     },
//     {
//       q: "What's included in your SEO services?",
//       a: "We provide technical SEO, on-page optimization, content strategy, keyword research, link building, and regular monitoring with detailed reports."
//     },
//     {
//       q: "Do you guarantee top rankings?",
//       a: "No one can guarantee rankings. We focus on proven strategies and best practices that drive sustainable improvements. We report transparent metrics and progress."
//     },
//     {
//       q: "How do you measure SEO success?",
//       a: "We track rankings, organic traffic, click-through rates, conversions, and ROI. We provide monthly reports with detailed analytics."
//     }
//   ];

//   const whyChooseUs = [
//     { id: "01", title: "Comprehensive Audit", desc: "We analyze your website's technical health, content quality, and competitive landscape to identify improvement opportunities." },
//     { id: "02", title: "Keyword Strategy", desc: "We research and target high-intent keywords with search volume and commercial value for your business." },
//     { id: "03", title: "Content Optimization", desc: "We optimize existing content and create new content that ranks well and drives conversions." },
//     { id: "04", title: "Link Building", desc: "We build high-quality backlinks from authoritative websites to increase your domain authority." }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white pt-24">
//       {/* HERO SECTION */}
//       <section className="relative py-20 bg-[#0a0a0a] border-b border-white/5 text-center">
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <h1 className="text-5xl md:text-6xl font-black mb-4">SEO Services</h1>
//           <nav className="text-blue-500 font-medium">
//             Home / Services / <span className="text-white">SEO Services</span>
//           </nav>
//         </motion.div>
//       </section>

//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid lg:grid-cols-3 gap-12">
          
//           {/* LEFT SIDE CONTENT */}
//           <div className="lg:col-span-2">
//             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              
//               {/* Main Image */}
//               <img 
//                 src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1200" 
//                 alt="SEO Analysis" 
//                 className="w-full h-[450px] object-cover rounded-3xl mb-10 shadow-2xl"
//               />

//               {/* Services Content Section */}
//               <h2 className="text-4xl font-bold mb-6">SEO Services Services We Offer</h2>
//               <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
//                 <p>Elevate your website's ranking and attract targeted traffic with our proven SEO strategies. We optimize your online presence for sustainable growth and measurable results.</p>
//                 <p>Our SEO services are designed to improve your website's visibility in search results and drive qualified organic traffic. We use white-hat techniques and follow Google's best practices for sustainable ranking improvements.</p>
//                 <p>We start with a comprehensive SEO audit to identify opportunities and challenges, then develop a customized strategy addressing technical SEO, on-page optimization, content strategy, and link building.</p>
//                 <p>Our team stays updated with the latest algorithm changes and SEO best practices. We focus on creating quality content that ranks well and provides value to your audience.</p>
//                 <p>Whether you're starting from scratch or looking to improve existing rankings, we provide transparent reporting and regular updates on your progress and ROI.</p>
//               </div>

//               {/* TWO CARDS WITH IMAGES */}
//               <div className="grid md:grid-cols-2 gap-6 mt-12 mb-20">
//                 <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5 bg-[#111]">
//                   <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="SEO Strategy" />
//                 </div>
//                 <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5 bg-[#111]">
//                   <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Data Results" />
//                 </div>
//               </div>

//               {/* WHY CHOOSE US */}
//               <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>
//               <div className="grid md:grid-cols-2 gap-6 mb-20">
//                 {whyChooseUs.map((item, idx) => (
//                   <motion.div key={idx} whileHover={{ y: -5 }} className="p-8 bg-[#0a0a1a] border border-blue-900/30 rounded-2xl">
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
//                     <button onClick={() => setActiveFAQ(activeFAQ === index ? null : index)} className="w-full p-6 flex justify-between items-center text-left cursor-pointer">
//                       <span className="font-bold">{faq.q}</span>
//                       {activeFAQ === index ? <ChevronDown className="text-blue-500" /> : <ChevronRight />}
//                     </button>
//                     <AnimatePresence>
//                       {activeFAQ === index && (
//                         <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 text-gray-400">
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
//               <div className="bg-[#0a0a1a] p-8 rounded-3xl border border-blue-900/20">
//                 <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">List of Services</h3>
//                 <div className="space-y-3">
//                   {servicesList.map((service) => (
//                     <button
//                       key={service}
//                       onClick={() => setActiveService(service)}
//                       className={`w-full flex justify-between items-center p-4 rounded-xl font-bold transition-all cursor-pointer ${
//                         activeService === service ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-blue-600/20'
//                       }`}
//                     >
//                       {service}
//                       <ChevronRight size={18} />
//                     </button>
//                   ))}
//                 </div>
//               </div>

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
//                   BOOST RANKINGS
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

// export default ReadMore4;




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
import Footer from './footer'; 

const ReadMore4 = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const navigate = useNavigate(); // 👈 Hook initialize

  // Is page ki identity sidebar highlight ke liye
  const activeServiceName = 'SEO Services';

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
      q: "How long does SEO take to show results?",
      a: "SEO is a long-term strategy. You may see improvements within 3-6 months, but significant results typically take 6-12 months depending on competition."
    },
    {
      q: "What's included in your SEO services?",
      a: "We provide technical SEO, on-page optimization, content strategy, keyword research, link building, and regular monitoring with detailed reports."
    },
    {
      q: "Do you guarantee top rankings?",
      a: "No one can guarantee rankings. We focus on proven strategies and best practices that drive sustainable improvements. We report transparent metrics and progress."
    },
    {
      q: "How do you measure SEO success?",
      a: "We track rankings, organic traffic, click-through rates, conversions, and ROI. We provide monthly reports with detailed analytics."
    }
  ];

  const whyChooseUs = [
    { id: "01", title: "Comprehensive Audit", desc: "We analyze your website's technical health, content quality, and competitive landscape to identify improvement opportunities." },
    { id: "02", title: "Keyword Strategy", desc: "We research and target high-intent keywords with search volume and commercial value for your business." },
    { id: "03", title: "Content Optimization", desc: "We optimize existing content and create new content that ranks well and drives conversions." },
    { id: "04", title: "Link Building", desc: "We build high-quality backlinks from authoritative websites to increase your domain authority." }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* HERO SECTION */}
      <section className="relative py-20 bg-[#0a0a0a] border-b border-white/5 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
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
              
              {/* Main Image */}
              <img 
                src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1200" 
                alt="SEO Analysis" 
                className="w-full h-[450px] object-cover rounded-3xl mb-10 shadow-2xl"
              />

              <h2 className="text-4xl font-bold mb-6">SEO Services We Offer</h2>
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>Elevate your website's ranking and attract targeted traffic with our proven SEO strategies. We optimize your online presence for sustainable growth and measurable results.</p>
                <p>Our SEO services are designed to improve your website's visibility in search results and drive qualified organic traffic. We use white-hat techniques and follow Google's best practices for sustainable ranking improvements.</p>
                <p>We start with a comprehensive SEO audit to identify opportunities and challenges, then develop a customized strategy addressing technical SEO, on-page optimization, content strategy, and link building.</p>
                <p>Our team stays updated with the latest algorithm changes and SEO best practices. We focus on creating quality content that ranks well and provides value to your audience.</p>
                <p>Whether you're starting from scratch or looking to improve existing rankings, we provide transparent reporting and regular updates on your progress and ROI.</p>
              </div>

              {/* TWO CARDS WITH IMAGES */}
              <div className="grid md:grid-cols-2 gap-6 mt-12 mb-20">
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5 bg-[#111]">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="SEO Strategy" />
                </div>
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5 bg-[#111]">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Data Results" />
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
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
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
                  BOOST RANKINGS
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

export default ReadMore4;