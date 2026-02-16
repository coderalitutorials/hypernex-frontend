// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   ChevronRight, 
//   ChevronDown, 
//   Facebook, 
//   Instagram, 
//   Linkedin, 
//   Twitter, 
//   ArrowRight,
//   CheckCircle2
// } from 'lucide-react';
// import Footer from './footer'; // Make sure the path is correct

// const ReadMore = () => {
//   const [activeFAQ, setActiveFAQ] = useState(null);
//   const [activeService, setActiveService] = useState('Web Development');

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
//       q: "What technologies do you use?",
//       a: "We work with modern technologies including React, Angular, Vue.js, Node.js, and various backend frameworks. We choose the best tech stack based on your project requirements and goals."
//     },
//     {
//       q: "How long does web development take?",
//       a: "Timeline varies based on complexity. A standard website typically takes 4-8 weeks, while complex applications may take longer. We'll provide a detailed timeline after the discovery phase."
//     },
//     {
//       q: "Is the website mobile-friendly?",
//       a: "Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops to ensure a great user experience across all platforms."
//     },
//     {
//       q: "Do you provide maintenance services?",
//       a: "Yes, we offer ongoing maintenance, updates, security patches, and support to keep your website running smoothly and secure."
//     }
//   ];

//   const whyChooseUs = [
//     { id: "01", title: "Latest Technologies", desc: "We use cutting-edge frameworks and tools to build scalable, modern websites that stay ahead of the curve." },
//     { id: "02", title: "Unique Solutions", desc: "Each project is custom-tailored to your specific needs, ensuring your website stands out from competitors." },
//     { id: "03", title: "Powerful Strategies", desc: "Our development approach includes SEO optimization, performance tuning, and conversion rate optimization." },
//     { id: "04", title: "Deliver On Time", desc: "We respect your timeline and deliver projects on schedule without compromising quality." }
//   ];

//   return (
//     <div className="min-h-screen bg-[#0a0a1a] text-white pt-24">
//       {/* HERO SECTION */}
//       <section className="relative py-20 bg-[#11112b] border-b border-white/5 overflow-hidden text-center">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="relative z-10"
//         >
//           <h1 className="text-5xl md:text-6xl font-black mb-4">Web Development</h1>
//           <nav className="text-blue-400 font-medium tracking-wide">
//             Home / Services / <span className="text-white">Web Development</span>
//           </nav>
//         </motion.div>
//       </section>

//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid lg:grid-cols-3 gap-12">
          
//           {/* LEFT SIDE CONTENT */}
//           <div className="lg:col-span-2">
//             <motion.div 
//               initial={{ opacity: 0 }} 
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//             >
//               <img 
//                 src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200" 
//                 alt="Web Development" 
//                 className="w-full h-[400px] object-cover rounded-3xl mb-10 shadow-2xl"
//               />
//               <h2 className="text-4xl font-bold mb-6 text-blue-50">Web Development Services We Offer</h2>
//               <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
//                 <p>Transform your ideas into stunning websites with our expert web development services. From sleek designs to seamless functionality, we bring your vision to life with responsive, fast, and search-optimized solutions.</p>
//                 <p>We specialize in creating custom websites that perfectly match your brand identity and business goals. Our web development team uses cutting-edge technologies and best practices to deliver high-performance solutions.</p>
//                 <p>Every project begins with a thorough discovery phase to understand your needs, target audience, and competitive landscape. We then move into design and development, ensuring seamless functionality and exceptional user experiences.</p>
//                 <p>Our expertise spans across modern frameworks like React, Angular, and Vue.js, along with backend technologies. We focus on performance optimization, SEO best practices, and ensuring your website is mobile-responsive and accessible to all users.</p>
//                 <p>From e-commerce platforms to corporate websites, we deliver solutions that drive business growth and provide measurable results.</p>
//               </div>

//               {/* TWO CARDS UNDER TEXT */}
//               <div className="grid md:grid-cols-2 gap-6 mt-12 mb-20">
//                 <div className="rounded-2xl overflow-hidden h-60 relative group">
//                   <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" alt="Work 1" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
//                 </div>
//                 <div className="rounded-2xl overflow-hidden h-60 relative group">
//                   <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" alt="Work 2" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
//                 </div>
//               </div>

//               {/* WHY CHOOSE US */}
//               <h2 className="text-4xl font-bold mb-10 text-center md:text-left">Why Choose Us</h2>
//               <div className="grid md:grid-cols-2 gap-6 mb-20">
//                 {whyChooseUs.map((item, idx) => (
//                   <motion.div 
//                     key={idx}
//                     whileHover={{ y: -5 }}
//                     className="p-8 bg-[#11112b] border border-white/5 rounded-2xl hover:border-blue-500/50 transition-all shadow-xl"
//                   >
//                     <span className="text-4xl font-black text-blue-500/20 block mb-4">{item.id}</span>
//                     <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//                     <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* FAQ SECTION */}
//               <h2 className="text-4xl font-bold mb-10">Most Asked Questions</h2>
//               <div className="space-y-4">
//                 {faqs.map((faq, index) => (
//                   <div key={index} className="border border-white/5 rounded-2xl bg-[#11112b] overflow-hidden">
//                     <button 
//                       onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
//                       className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
//                     >
//                       <span className="font-bold text-lg">{faq.q}</span>
//                       {activeFAQ === index ? <ChevronDown className="text-blue-500" /> : <ChevronRight />}
//                     </button>
//                     <AnimatePresence>
//                       {activeFAQ === index && (
//                         <motion.div 
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: 'auto', opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           className="px-6 pb-6 text-gray-400 leading-relaxed"
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

//           {/* RIGHT SIDEBAR (Sticky) */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-28 space-y-8">
              
//               {/* LIST OF SERVICES BOX */}
//               <div className="bg-[#11112b] p-8 rounded-3xl border border-white/5 shadow-2xl">
//                 <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">List of Services</h3>
//                 <div className="space-y-3">
//                   {servicesList.map((service) => (
//                     <button
//                       key={service}
//                       onClick={() => setActiveService(service)}
//                       className={`w-full flex justify-between items-center p-4 rounded-xl font-bold transition-all duration-300 group ${
//                         activeService === service 
//                         ? 'bg-blue-600 text-white' 
//                         : 'bg-white/5 text-gray-400 hover:bg-blue-600/10 hover:text-blue-400'
//                       }`}
//                     >
//                       {service}
//                       <ChevronRight className={`w-5 h-5 transition-transform ${activeService === service ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* FOLLOW US BOX */}
//               <div className="bg-[#11112b] p-8 rounded-3xl border border-white/5 shadow-2xl">
//                 <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
//                 <div className="flex gap-4">
//                   {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
//                     <motion.a 
//                       key={i} 
//                       href="#" 
//                       whileHover={{ scale: 1.2, rotate: 10 }}
//                       className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 transition-colors"
//                     >
//                       <Icon size={20} />
//                     </motion.a>
//                   ))}
//                 </div>
                
//                 {/* GET STARTED BUTTON */}
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full mt-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-black text-lg flex items-center justify-center gap-3 group shadow-xl"
//                 >
//                   GET STARTED
//                   <ArrowRight className="group-hover:translate-x-2 transition-transform" />
//                 </motion.button>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ReadMore;










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

const ReadMore = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const navigate = useNavigate(); // 👈 Navigation hook
  
  // Is page ki identity
  const activeServiceName = 'Web Development';

  // Jab page load ho to scroll top par jaye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Services List with Paths
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
      q: "What technologies do you use?",
      a: "We work with modern technologies including React, Angular, Vue.js, Node.js, and various backend frameworks. We choose the best tech stack based on your project requirements and goals."
    },
    {
      q: "How long does web development take?",
      a: "Timeline varies based on complexity. A standard website typically takes 4-8 weeks, while complex applications may take longer. We'll provide a detailed timeline after the discovery phase."
    },
    {
      q: "Is the website mobile-friendly?",
      a: "Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops to ensure a great user experience across all platforms."
    },
    {
      q: "Do you provide maintenance services?",
      a: "Yes, we offer ongoing maintenance, updates, security patches, and support to keep your website running smoothly and secure."
    }
  ];

  const whyChooseUs = [
    { id: "01", title: "Latest Technologies", desc: "We use cutting-edge frameworks and tools to build scalable, modern websites that stay ahead of the curve." },
    { id: "02", title: "Unique Solutions", desc: "Each project is custom-tailored to your specific needs, ensuring your website stands out from competitors." },
    { id: "03", title: "Powerful Strategies", desc: "Our development approach includes SEO optimization, performance tuning, and conversion rate optimization." },
    { id: "04", title: "Deliver On Time", desc: "We respect your timeline and deliver projects on schedule without compromising quality." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white pt-24">
      {/* HERO SECTION */}
      <section className="relative py-20 bg-[#11112b] border-b border-white/5 overflow-hidden text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase">{activeServiceName}</h1>
          <nav className="text-blue-400 font-medium tracking-wide">
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
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200" 
                alt="Web Development" 
                className="w-full h-[400px] object-cover rounded-3xl mb-10 shadow-2xl"
              />
              <h2 className="text-4xl font-bold mb-6 text-blue-50">Web Development Services We Offer</h2>
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>Transform your ideas into stunning websites with our expert web development services. From sleek designs to seamless functionality, we bring your vision to life with responsive, fast, and search-optimized solutions.</p>
                <p>We specialize in creating custom websites that perfectly match your brand identity and business goals. Our web development team uses cutting-edge technologies and best practices to deliver high-performance solutions.</p>
                <p>Every project begins with a thorough discovery phase to understand your needs, target audience, and competitive landscape. We then move into design and development, ensuring seamless functionality and exceptional user experiences.</p>
                <p>Our expertise spans across modern frameworks like React, Angular, and Vue.js, along with backend technologies. We focus on performance optimization, SEO best practices, and ensuring your website is mobile-responsive and accessible to all users.</p>
                <p>From e-commerce platforms to corporate websites, we deliver solutions that drive business growth and provide measurable results.</p>
              </div>

              {/* TWO CARDS */}
              <div className="grid md:grid-cols-2 gap-6 mt-12 mb-20">
                <div className="rounded-2xl overflow-hidden h-60 relative group shadow-lg border border-white/5">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" alt="Work 1" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="rounded-2xl overflow-hidden h-60 relative group shadow-lg border border-white/5">
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" alt="Work 2" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
                </div>
              </div>

              {/* WHY CHOOSE US */}
              <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-20">
                {whyChooseUs.map((item, idx) => (
                  <motion.div key={idx} whileHover={{ y: -5 }} className="p-8 bg-[#11112b] border border-white/5 rounded-2xl hover:border-blue-500/50 transition-all shadow-xl">
                    <span className="text-4xl font-black text-blue-500/20 block mb-4">{item.id}</span>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* FAQ SECTION */}
              <h2 className="text-4xl font-bold mb-10">Most Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-white/5 rounded-2xl bg-[#11112b] overflow-hidden">
                    <button onClick={() => setActiveFAQ(activeFAQ === index ? null : index)} className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors">
                      <span className="font-bold text-lg">{faq.q}</span>
                      {activeFAQ === index ? <ChevronDown className="text-blue-500" /> : <ChevronRight />}
                    </button>
                    <AnimatePresence>
                      {activeFAQ === index && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 text-gray-400 leading-relaxed">
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
              
              {/* LIST OF SERVICES BOX */}
              <div className="bg-[#11112b] p-8 rounded-3xl border border-white/5 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">List of Services</h3>
                <div className="space-y-3">
                  {services.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => navigate(service.path)} // 👈 Navigation added
                      className={`w-full flex justify-between items-center p-4 rounded-xl font-bold transition-all duration-300 group cursor-pointer ${
                        activeServiceName === service.name 
                        ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                        : 'bg-white/5 text-gray-400 hover:bg-blue-600/10 hover:text-blue-400'
                      }`}
                    >
                      {service.name}
                      <ChevronRight className={`w-5 h-5 transition-transform ${activeServiceName === service.name ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* FOLLOW US BOX */}
              <div className="bg-[#11112b] p-8 rounded-3xl border border-white/5 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex gap-4 mb-8">
                  {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                    <motion.a key={i} href="#" whileHover={{ scale: 1.2, rotate: 10 }} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 transition-colors cursor-pointer">
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
                
                {/* GET STARTED BUTTON */}
                <motion.button
                  onClick={() => navigate('/contact')} // 👈 Contact link added
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl font-black text-lg flex items-center justify-center gap-3 group shadow-xl cursor-pointer"
                >
                  GET STARTED
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReadMore;
