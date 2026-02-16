// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Zap, 
//   TrendingUp, 
//   ShieldCheck, 
//   Smartphone, 
//   Search, 
//   Users, 
//   ArrowRight 
// } from 'lucide-react';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.6, ease: "easeOut" } 
//   }
// };

// const services = [
//   {
//     icon: <Zap className="w-6 h-6 text-white" />,
//     title: "Web Development",
//     desc: "Transform your ideas into stunning websites with our expert web development services. From sleek designs to seamless functionality, we bring your vision to life!"
//   },
//   {
//     icon: <TrendingUp className="w-6 h-6 text-white" />,
//     title: "Digital Marketing",
//     desc: "Transform your brand with our expert digital marketing expertise. We create impactful strategies that drive measurable results and target audience effectively!"
//   },
//   {
//     icon: <ShieldCheck className="w-6 h-6 text-white" />,
//     title: "Shopify/ E-Commerce",
//     desc: "Create a stunning Shopify store that boosts sales. From intuitive design to seamless functionality, we transform your e-commerce vision to life!"
//   },
//   {
//     icon: <Smartphone className="w-6 h-6 text-white" />,
//     title: "Apps Development",
//     desc: "Craft intuitive and engaging mobile apps that enhance user experience and drive engagement. We turn your app vision into reality with cutting-edge technology and design!"
//   },
//   {
//     icon: <Search className="w-6 h-6 text-white" />,
//     title: "SEO Services",
//     desc: "Elevate your website's ranking and attract targeted traffic with our SEO strategies. We optimize your online presence for sustainable growth!"
//   },
//   {
//     icon: <Users className="w-6 h-6 text-white" />,
//     title: "Graphic Designing",
//     desc: "Create stunning visuals that capture attention and convey your message effectively. We transform your ideas into captivating designs that last impact!"
//   }
// ];

// const stats = [
//   { label: "finished projects", value: "320+" },
//   { label: "Created Jobs", value: "10+" },
//   { label: "Happy Customers", value: "200+" },
//   { label: "Years of Experience", value: "04+" }
// ];

// const OurServices = () => {
//   return (
//     <section className="bg-black py-20 px-8 md:px-24 text-white overflow-hidden">
//       {/* Header Section */}
//       <div className="text-center mb-16">
//         <motion.span 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm"
//         >
//           *SERVICES*
//         </motion.span>
//         <motion.h2 
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeInUp}
//           className="text-4xl md:text-5xl font-extrabold mt-4 mb-4"
//         >
//           Our Services
//         </motion.h2>
//         <motion.p 
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeInUp}
//           className="text-gray-400 text-lg max-w-2xl mx-auto"
//         >
//           Comprehensive Services Designed to Elevate Your Brand!
//         </motion.p>
//       </div>

//       {/* 6 Services Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             whileHover={{ y: -10 }}
//             className="bg-[#0a0a1a] border border-blue-900/30 p-8 rounded-2xl relative group"
//           >
//             {/* Icon Box */}
//             <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
//               {service.icon}
//             </div>

//             <h3 className="text-xl font-bold mb-4">{service.title}</h3>
//             <p className="text-gray-400 leading-relaxed mb-6 text-sm">
//               {service.desc}
//             </p>

//             {/* Read More Button */}
//             <button className="flex items-center gap-2 text-blue-400 font-bold group-hover:text-white transition-colors">
//               Read More 
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
//             </button>

//             {/* Subtle glow effect on hover */}
//             <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
//           </motion.div>
//         ))}
//       </div>

//       {/* Statistics Section */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-gray-800/50">
//         {stats.map((stat, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: index * 0.1 }}
//             className="text-center"
//           >
//             <h4 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-500 mb-2">
//               {stat.value}
//             </h4>
//             <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
//               {stat.label}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurServices;




// import React from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom'; // 👈 Import useNavigate
// import { 
//   Zap, 
//   TrendingUp, 
//   ShieldCheck, 
//   Smartphone, 
//   Search, 
//   Users, 
//   ArrowRight 
// } from 'lucide-react';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.6, ease: "easeOut" } 
//   }
// };

// const OurServices = () => {
//   const navigate = useNavigate(); // 👈 Initialize Navigate

//   const services = [
//     {
//       icon: <Zap className="w-6 h-6 text-white" />,
//       title: "Web Development",
//       desc: "Transform your ideas into stunning websites with our expert web development services. From sleek designs to seamless functionality, we bring your vision to life!",
//       path: "/read-more" // 👈 Added Path
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6 text-white" />,
//       title: "Digital Marketing",
//       desc: "Transform your brand with our expert digital marketing expertise. We create impactful strategies that drive measurable results and target audience effectively!",
//       path: "#"
//     },
//     {
//       icon: <ShieldCheck className="w-6 h-6 text-white" />,
//       title: "Shopify/ E-Commerce",
//       desc: "Create a stunning Shopify store that boosts sales. From intuitive design to seamless functionality, we transform your e-commerce vision to life!",
//       path: "#"
//     },
//     {
//       icon: <Smartphone className="w-6 h-6 text-white" />,
//       title: "Apps Development",
//       desc: "Craft intuitive and engaging mobile apps that enhance user experience and drive engagement. We turn your app vision into reality with cutting-edge technology and design!",
//       path: "#"
//     },
//     {
//       icon: <Search className="w-6 h-6 text-white" />,
//       title: "SEO Services",
//       desc: "Elevate your website's ranking and attract targeted traffic with our SEO strategies. We optimize your online presence for sustainable growth!",
//       path: "#"
//     },
//     {
//       icon: <Users className="w-6 h-6 text-white" />,
//       title: "Graphic Designing",
//       desc: "Create stunning visuals that capture attention and convey your message effectively. We transform your ideas into captivating designs that last impact!",
//       path: "#"
//     }
//   ];

//   const stats = [
//     { label: "finished projects", value: "320+" },
//     { label: "Created Jobs", value: "10+" },
//     { label: "Happy Customers", value: "200+" },
//     { label: "Years of Experience", value: "04+" }
//   ];

//   return (
//     <section className="bg-black py-20 px-8 md:px-24 text-white overflow-hidden">
//       {/* Header Section */}
//       <div className="text-center mb-16">
//         <motion.span 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm"
//         >
//           *SERVICES*
//         </motion.span>
//         <motion.h2 
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeInUp}
//           className="text-4xl md:text-5xl font-extrabold mt-4 mb-4"
//         >
//           Our Services
//         </motion.h2>
//         <motion.p 
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeInUp}
//           className="text-gray-400 text-lg max-w-2xl mx-auto"
//         >
//           Comprehensive Services Designed to Elevate Your Brand!
//         </motion.p>
//       </div>

//       {/* 6 Services Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             whileHover={{ y: -10 }}
//             className="bg-[#0a0a1a] border border-blue-900/30 p-8 rounded-2xl relative group"
//           >
//             {/* Icon Box */}
//             <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
//               {service.icon}
//             </div>

//             <h3 className="text-xl font-bold mb-4">{service.title}</h3>
//             <p className="text-gray-400 leading-relaxed mb-6 text-sm">
//               {service.desc}
//             </p>

//             {/* Read More Button with Logic */}
//             <button 
//               onClick={() => service.path !== "#" && navigate(service.path)} // 👈 Logic added here
//               className="flex items-center gap-2 text-blue-400 font-bold group-hover:text-white transition-colors"
//             >
//               Read More 
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
//             </button>

//             {/* Subtle glow effect on hover */}
//             <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
//           </motion.div>
//         ))}
//       </div>

//       {/* Statistics Section */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-gray-800/50">
//         {stats.map((stat, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: index * 0.1 }}
//             className="text-center"
//           >
//             <h4 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
//               {stat.value}
//             </h4>
//             <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
//               {stat.label}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurServices;



import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // 👈 Import useNavigate
import { 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Smartphone, 
  Search, 
  Users, 
  ArrowRight 
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const OurServices = () => {
  const navigate = useNavigate(); // 👈 Initialize Navigate

  const services = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Web Development",
      desc: "Transform your ideas into stunning websites with our expert web development services. From sleek designs to seamless functionality, we bring your vision to life!",
      path: "/read-more" // 👈 Added Path
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Digital Marketing",
      desc: "Transform your brand with our expert digital marketing expertise. We create impactful strategies that drive measurable results and target audience effectively!",
      path: "/read-more1" // 👈 Yahan maine path laga diya hai
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Shopify/ E-Commerce",
      desc: "Create a stunning Shopify store that boosts sales. From intuitive design to seamless functionality, we transform your e-commerce vision to life!",
      path: "/read-more2"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "Apps Development",
      desc: "Craft intuitive and engaging mobile apps that enhance user experience and drive engagement. We turn your app vision into reality with cutting-edge technology and design!",
      path: "/read-more3"
    },
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "SEO Services",
      desc: "Elevate your website's ranking and attract targeted traffic with our SEO strategies. We optimize your online presence for sustainable growth!",
      path: "/read-more4"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Graphic Designing",
      desc: "Create stunning visuals that capture attention and convey your message effectively. We transform your ideas into captivating designs that last impact!",
      path: "/read-more5"
    }
  ];

  const stats = [
    { label: "finished projects", value: "320+" },
    { label: "Created Jobs", value: "10+" },
    { label: "Happy Customers", value: "200+" },
    { label: "Years of Experience", value: "04+" }
  ];

  return (
    <section className="bg-black py-20 px-8 md:px-24 text-white overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm"
        >
          *SERVICES*
        </motion.span>
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-extrabold mt-4 mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Comprehensive Services Designed to Elevate Your Brand!
        </motion.p>
      </div>

      {/* 6 Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-[#0a0a1a] border border-blue-900/30 p-8 rounded-2xl relative group"
          >
            {/* Icon Box */}
            <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              {service.icon}
            </div>

            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              {service.desc}
            </p>

            {/* Read More Button - ONLY CHANGED CURSOR AND HOVER COLOR */}
            <button 
              onClick={() => service.path !== "#" && navigate(service.path)} 
              className="flex items-center gap-2 text-blue-400 font-bold cursor-pointer hover:text-white transition-colors"
            >
              Read More 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>

            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-gray-800/50">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <h4 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-500 mb-2">
              {stat.value}
            </h4>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;