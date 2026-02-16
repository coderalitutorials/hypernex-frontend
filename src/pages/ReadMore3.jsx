// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   ChevronRight, 
//   ChevronDown, 
//   Facebook, 
//   Instagram, 
//   Linkedin, 
//   Twitter, 
//   ArrowRight,
//   Smartphone
// } from 'lucide-react';
// import Footer from './footer'; 

// const ReadMore3 = () => {
//   const [activeFAQ, setActiveFAQ] = useState(null);
//   const [activeService, setActiveService] = useState('Apps Development');

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
//       q: "Should I choose native or cross-platform development?",
//       a: "Native apps offer best performance and platform-specific features. Cross-platform apps (React Native, Flutter) are faster to develop and cost-effective. We recommend the best approach based on your requirements."
//     },
//     {
//       q: "How long does app development take?",
//       a: "Simple apps take 2-3 months, while complex apps with backend systems may take 4-6 months. Timeline depends on features and complexity."
//     },
//     {
//       q: "Do you handle app store submission?",
//       a: "Yes, we manage the entire app store submission process including account setup, guidelines compliance, and optimization for better visibility."
//     },
//     {
//       q: "What about ongoing maintenance?",
//       a: "We provide ongoing support for bug fixes, OS updates compatibility, feature enhancements, and performance optimization."
//     }
//   ];

//   const whyChooseUs = [
//     { id: "01", title: "Cross-Platform", desc: "We develop apps for iOS and Android using modern frameworks, ensuring wide reach and consistent experience." },
//     { id: "02", title: "User-Centric Design", desc: "Our design team creates intuitive interfaces that users love, leading to higher engagement and retention." },
//     { id: "03", title: "Backend Integration", desc: "We build robust backend systems and APIs to support your app's functionality and scale." },
//     { id: "04", title: "App Store Ready", desc: "We handle all aspects of app store submission and optimization for both Apple App Store and Google Play." }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white pt-24">
//       {/* HERO SECTION */}
//       <section className="relative py-20 bg-[#0a0a0a] border-b border-white/5 text-center">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <h1 className="text-5xl md:text-6xl font-black mb-4">Apps Development</h1>
//           <nav className="text-blue-500 font-medium">
//             Home / Services / <span className="text-white">Apps Development</span>
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
//                 src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200" 
//                 alt="Apps Development" 
//                 className="w-full h-[450px] object-cover rounded-3xl mb-10 shadow-2xl"
//               />

//               <h2 className="text-4xl font-bold mb-6">Apps Development Services We Offer</h2>
//               <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
//                 <p>Craft intuitive and engaging mobile apps that enhance user experience and drive engagement. We turn your app vision into reality with cutting-edge technology and exceptional design.</p>
//                 <p>We develop native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences and business value. Our app development process combines strategic planning, creative design, and robust development.</p>
//                 <p>From concept to launch, we guide you through every stage of app development. We focus on creating apps that are intuitive, performant, and scalable, meeting both user needs and business goals.</p>
//                 <p>Our expertise spans React Native, Flutter, Swift, Kotlin, and various backend technologies. We build apps with offline capabilities, real-time synchronization, and seamless integration with backend services.</p>
//                 <p>We also provide post-launch support, bug fixes, updates, and feature enhancements to ensure your app remains competitive and user satisfaction stays high.</p>
//               </div>

//               {/* TWO CARDS WITH IMAGES */}
//               <div className="grid md:grid-cols-2 gap-6 mt-12 mb-20">
//                 <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5 bg-[#111]">
//                   <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Mobile App Design" />
//                 </div>
//                 <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5 bg-[#111]">
//                   <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="App Development Team" />
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

// export default ReadMore3;




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
  ArrowRight,
  Smartphone
} from 'lucide-react';
import Footer from './Footer'; 

const ReadMore3 = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const navigate = useNavigate(); // 👈 Hook initialize

  // Is page ki identity sidebar highlight ke liye
  const activeServiceName = 'Apps Development';

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
      q: "Should I choose native or cross-platform development?",
      a: "Native apps offer best performance and platform-specific features. Cross-platform apps (React Native, Flutter) are faster to develop and cost-effective. We recommend the best approach based on your requirements."
    },
    {
      q: "How long does app development take?",
      a: "Simple apps take 2-3 months, while complex apps with backend systems may take 4-6 months. Timeline depends on features and complexity."
    },
    {
      q: "Do you handle app store submission?",
      a: "Yes, we manage the entire app store submission process including account setup, guidelines compliance, and optimization for better visibility."
    },
    {
      q: "What about ongoing maintenance?",
      a: "We provide ongoing support for bug fixes, OS updates compatibility, feature enhancements, and performance optimization."
    }
  ];

  const whyChooseUs = [
    { id: "01", title: "Cross-Platform", desc: "We develop apps for iOS and Android using modern frameworks, ensuring wide reach and consistent experience." },
    { id: "02", title: "User-Centric Design", desc: "Our design team creates intuitive interfaces that users love, leading to higher engagement and retention." },
    { id: "03", title: "Backend Integration", desc: "We build robust backend systems and APIs to support your app's functionality and scale." },
    { id: "04", title: "App Store Ready", desc: "We handle all aspects of app store submission and optimization for both Apple App Store and Google Play." }
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
              {/* Main Large Image */}
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200" 
                alt="Apps Development" 
                className="w-full h-[450px] object-cover rounded-3xl mb-10 shadow-2xl"
              />

              <h2 className="text-4xl font-bold mb-6">Apps Development Services We Offer</h2>
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>Craft intuitive and engaging mobile apps that enhance user experience and drive engagement. We turn your app vision into reality with cutting-edge technology and exceptional design.</p>
                <p>We develop native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences and business value. Our app development process combines strategic planning, creative design, and robust development.</p>
                <p>From concept to launch, we guide you through every stage of app development. We focus on creating apps that are intuitive, performant, and scalable, meeting both user needs and business goals.</p>
                <p>Our expertise spans React Native, Flutter, Swift, Kotlin, and various backend technologies. We build apps with offline capabilities, real-time synchronization, and seamless integration with backend services.</p>
                <p>We also provide post-launch support, bug fixes, updates, and feature enhancements to ensure your app remains competitive and user satisfaction stays high.</p>
              </div>

              {/* TWO CARDS WITH IMAGES */}
              <div className="grid md:grid-cols-2 gap-6 mt-12 mb-20">
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5 bg-[#111]">
                  <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Mobile App Design" />
                </div>
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-white/5 bg-[#111]">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="App Development Team" />
                </div>
              </div>

              {/* WHY CHOOSE US */}
              <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-20">
                {whyChooseUs.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-[#0a0a1a] border border-blue-900/30 rounded-2xl"
                  >
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
                    <button 
                      onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                      className="w-full p-6 flex justify-between items-center text-left cursor-pointer"
                    >
                      <span className="font-bold">{faq.q}</span>
                      {activeFAQ === index ? <ChevronDown className="text-blue-500" /> : <ChevronRight />}
                    </button>
                    <AnimatePresence>
                      {activeFAQ === index && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-6 pb-6 text-gray-400"
                        >
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

export default ReadMore3;
