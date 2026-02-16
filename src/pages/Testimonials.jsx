// import React from 'react';
// import { motion } from 'framer-motion';

// const testimonials = [
//   { id: 1, name: "Haseeba Shoukat", initial: "HS", text: "The app seamlessly integrates with our backend systems perfectly and performs exactly as we needed it." },
//   { id: 2, name: "Sara Khan", initial: "SK", text: "Professional team with clean design approach and excellent support that made our entire experience truly highly recommended." },
//   { id: 3, name: "Ali Raza", initial: "AR", text: "Loved the overall experience with their creative approach, reliability, and results-driven methodology that perfectly matched our vision." },
//   { id: 4, name: "Zainab Ali", initial: "ZA", text: "Exceptional quality and attention to detail. They transformed our old website into a modern masterpiece." },
//   { id: 5, name: "Hamza Sheikh", initial: "HS", text: "The team is very responsive and understood our requirements perfectly. Highly impressed with the results!" },
//   // Duplicate list for infinite scroll effect (Total 10 items)
//   { id: 6, name: "Haseeba Shoukat", initial: "HS", text: "The app seamlessly integrates with our backend systems perfectly and performs exactly as we needed it." },
//   { id: 7, name: "Sara Khan", initial: "SK", text: "Professional team with clean design approach and excellent support that made our entire experience truly highly recommended." },
//   { id: 8, name: "Ali Raza", initial: "AR", text: "Loved the overall experience with their creative approach, reliability, and results-driven methodology that perfectly matched our vision." },
//   { id: 9, name: "Zainab Ali", initial: "ZA", text: "Exceptional quality and attention to detail. They transformed our old website into a modern masterpiece." },
//   { id: 10, name: "Hamza Sheikh", initial: "HS", text: "The team is very responsive and understood our requirements perfectly. Highly impressed with the results!" },
// ];

// const Testimonials = () => {
//   return (
//     <section className="bg-black py-20 overflow-hidden text-white">
//       {/* Header */}
//       <div className="text-center mb-16">
//         <motion.span 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="text-blue-400 font-bold tracking-[0.3em] uppercase text-sm"
//         >
//           * TESTIMONIAL *
//         </motion.span>
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-5xl md:text-6xl font-black mt-4"
//         >
//           Our Clients <span className="text-blue-500">Say!</span>
//         </motion.h2>
//       </div>

//       {/* Infinite Scroll Container */}
//       <div className="flex overflow-hidden relative group">
//         <motion.div 
//           className="flex gap-8 whitespace-nowrap"
//           animate={{ x: [0, -1500] }} // Adjust based on card width
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: "loop",
//               duration: 20,
//               ease: "linear",
//             },
//           }}
//         >
//           {testimonials.map((item, index) => (
//             <div 
//               key={index} 
//               className="inline-block w-[350px] md:w-[450px] whitespace-normal"
//             >
//               <div className="flex flex-col items-center text-center">
//                 {/* Profile Circle */}
//                 <div className="w-20 h-20 rounded-full border-2 border-blue-500 flex items-center justify-center mb-4 text-xl font-bold text-blue-400">
//                   {item.initial}
//                 </div>
                
//                 <h3 className="text-xl font-bold">{item.name}</h3>
//                 <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest">Client</p>

//                 {/* Testimonial Card */}
//                 <div className={`p-8 rounded-xl border transition-all duration-500 min-h-[150px] flex items-center
//                   ${index % 2 === 1 
//                     ? 'bg-linear-to-r from-blue-400 to-purple-600 border-transparent text-white' 
//                     : 'bg-[#0a0a1a] border-gray-800 text-gray-300'
//                   } group-hover:scale-105`}
//                 >
//                   <p className="italic leading-relaxed">
//                     "{item.text}"
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Pagination Dots (Visual only) */}
//       <div className="flex justify-center gap-2 mt-12">
//         {[...Array(10)].map((_, i) => (
//           <div key={i} className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-blue-500 w-4' : 'bg-gray-700'}`} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;





// import React from 'react';
// import { motion } from 'framer-motion';

// const testimonials = [
//   { id: 1, name: "Muhammad Awais Toor", initial: "MT", text: "Amazing service with incredibly fast delivery and top-quality work standards." },
//   { id: 2, name: "Haseeba Shoukat", initial: "HS", text: "The app seamlessly integrates with our backend systems perfectly." },
//   { id: 3, name: "Sara Khan", initial: "SK", text: "Professional team with clean design approach and excellent support." },
//   { id: 4, name: "Ali Raza", initial: "AR", text: "Loved the creative approach and results-driven methodology." },
//   { id: 5, name: "Zainab Ali", initial: "ZA", text: "Exceptional quality and attention to detail. Modern masterpiece." },
//   { id: 6, name: "Hamza Sheikh", initial: "HS", text: "Responsive team that understood our requirements perfectly." },
//   { id: 7, name: "Ayesha Omer", initial: "AO", text: "Great experience! The UI/UX is exactly what we were looking for." },
//   { id: 8, name: "Usman Pirzada", initial: "UP", text: "Very professional and delivered the project before the deadline." },
//   { id: 9, name: "Esha Gupta", initial: "EG", text: "Highly recommended for anyone looking for top-notch digital solutions." },
// ];

// // Loop ko seamless banane ke liye list ko duplicate karna zaroori hai
// const fullList = [...testimonials, ...testimonials];

// const Testimonials = () => {
//   return (
//     <section className="bg-black py-20 overflow-hidden text-white">
//       {/* Header */}
//       <div className="text-center mb-16">
//         <motion.span 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="text-blue-400 font-bold tracking-[0.3em] uppercase text-[10px]"
//         >
//           * TESTIMONIAL *
//         </motion.span>
//         <h2 className="text-4xl md:text-5xl font-black mt-2">
//           Our Clients <span className="text-blue-500">Say!</span>
//         </h2>
//       </div>

//       {/* Infinite Marquee Container */}
//       <div className="flex relative">
//         {/* Left & Right Gradient Blur (for smooth entry/exit) */}
//         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
//         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

//         <motion.div 
//           className="flex gap-6 py-4"
//           animate={{ x: [0, -2500] }} // Loop animation
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: "loop",
//               duration: 30, // Speed control (Slow & Smooth)
//               ease: "linear",
//             },
//           }}
//         >
//           {fullList.map((item, index) => (
//             <div 
//               key={index} 
//               className="w-[300px] md:w-[350px] flex-shrink-0 group"
//             >
//               <div className="flex flex-col items-center text-center">
//                 {/* Avatar with Double Circle Border */}
//                 <div className="relative mb-4">
//                   <div className="w-16 h-16 rounded-full border border-blue-500/50 flex items-center justify-center p-1 group-hover:border-blue-400 transition-colors">
//                     <div className="w-full h-full rounded-full bg-blue-500/10 flex items-center justify-center text-lg font-bold text-blue-400 border border-blue-500">
//                       {item.initial}
//                     </div>
//                   </div>
//                 </div>
                
//                 <h3 className="text-base font-bold text-white">{item.name}</h3>
//                 <p className="text-gray-500 text-[9px] mb-4 uppercase tracking-[0.2em]">Client</p>

//                 {/* Testimonial Box */}
//                 <div className={`p-6 rounded-2xl border transition-all duration-500 min-h-[120px] flex items-center
//                   ${index % 2 === 1 
//                     ? 'bg-gradient-to-r from-[#22d3ee] to-[#9333ea] border-transparent text-white shadow-lg shadow-blue-500/10' 
//                     : 'bg-[#0a0a1a] border-white/5 text-gray-400 group-hover:border-blue-500/30'
//                   }`}
//                 >
//                   <p className="text-[13px] italic leading-relaxed text-center w-full">
//                     "{item.text}"
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Bottom Visual Indicator (Static like original site) */}
//       <div className="flex justify-center gap-2 mt-12">
//         {[...Array(8)].map((_, i) => (
//           <div 
//             key={i} 
//             className={`h-1.5 rounded-full transition-all duration-500 ${i === 2 ? 'bg-blue-500 w-8' : 'bg-gray-800 w-2'}`} 
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



import React, { useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { id: 1, name: "Muhammad Awais Toor", initial: "MT", text: "Amazing service with incredibly fast delivery and top-quality work standards." },
  { id: 2, name: "Haseeba Shoukat", initial: "HS", text: "The app seamlessly integrates with our backend systems perfectly." },
  { id: 3, name: "Sara Khan", initial: "SK", text: "Professional team with clean design approach and excellent support." },
  { id: 4, name: "Ali Raza", initial: "AR", text: "Loved the creative approach and results-driven methodology." },
  { id: 5, name: "Zainab Ali", initial: "ZA", text: "Exceptional quality and attention to detail. Modern masterpiece." },
  { id: 6, name: "Hamza Sheikh", initial: "HS", text: "Responsive team that understood our requirements perfectly." },
  { id: 7, name: "Ayesha Omer", initial: "AO", text: "Great experience! The UI/UX is exactly what we were looking for." },
  { id: 8, name: "Usman Pirzada", initial: "UP", text: "Very professional and delivered the project before the deadline." },
  { id: 9, name: "Esha Gupta", initial: "EG", text: "Highly recommended for anyone looking for top-notch digital solutions." },
];

// Seamless loop ke liye list ko duplicate kiya
const fullList = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);

  // Manual Scroll Logic
  const handleManualScroll = (direction) => {
    controls.stop(); // Auto-move ko temporarily rokne ke liye
    const moveAmount = direction === 'left' ? 400 : -400;
    controls.start({
      x: moveAmount,
      transition: { duration: 0.5, ease: "easeOut" }
    });
  };

  return (
    <section className="bg-black py-20 overflow-hidden text-white relative group/section">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-400 font-bold tracking-[0.3em] uppercase text-[10px]"
        >
          * TESTIMONIAL *
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-black mt-2">
          Our Clients <span className="text-blue-500">Say!</span>
        </h2>
      </div>

      {/* Manual Navigation Arrows (Visible on Hover) */}
      <div className="absolute inset-x-0 top-[60%] -translate-y-1/2 flex justify-between px-4 md:px-10 z-30 opacity-0 group-hover/section:opacity-100 transition-opacity duration-500 pointer-events-none">
        <button 
          onClick={() => handleManualScroll('left')}
          className="p-3 bg-blue-600/20 hover:bg-blue-600 border border-blue-500/50 rounded-full transition-all cursor-pointer pointer-events-auto shadow-lg shadow-blue-500/20"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => handleManualScroll('right')}
          className="p-3 bg-blue-600/20 hover:bg-blue-600 border border-blue-500/50 rounded-full transition-all cursor-pointer pointer-events-auto shadow-lg shadow-blue-500/20"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Infinite Marquee Container */}
      <div className="flex relative">
        {/* Side Blurs */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 hidden md:block"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 hidden md:block"></div>

        <motion.div 
          className="flex gap-6 py-4 cursor-grab active:cursor-grabbing"
          animate={isPaused ? {} : { x: [0, -3150] }} // Animation control based on state
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          onMouseEnter={() => setIsPaused(true)} // Hover par rokne ke liye
          onMouseLeave={() => setIsPaused(false)} // Cursor hatate hi chalne ke liye
        >
          {fullList.map((item, index) => (
            <div 
              key={index} 
              className="w-[280px] md:w-[350px] flex-shrink-0 group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full border border-blue-500/30 flex items-center justify-center p-1 group-hover:border-blue-400 transition-all duration-500">
                    <div className="w-full h-full rounded-full bg-blue-500/10 flex items-center justify-center text-lg font-bold text-blue-400 border border-blue-500/50">
                      {item.initial}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">{item.name}</h3>
                <p className="text-gray-500 text-[9px] mb-4 uppercase tracking-[0.2em]">Client</p>

                {/* Testimonial Card */}
                <div className={`p-6 rounded-2xl border transition-all duration-700 min-h-[130px] flex items-center shadow-xl
                  ${index % 2 === 1 
                    ? 'bg-gradient-to-br from-[#22d3ee] via-[#3b82f6] to-[#9333ea] border-transparent text-white scale-100 group-hover:scale-105' 
                    : 'bg-[#0a0a1a] border-white/5 text-gray-400 group-hover:border-blue-500/30 group-hover:bg-[#0d0d25]'
                  }`}
                >
                  <p className="text-[13px] italic leading-relaxed text-center w-full">
                    "{item.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Visual Bottom Indicators */}
      <div className="flex justify-center gap-2 mt-12">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-700 ${i === 2 ? 'bg-blue-500 w-8' : 'bg-gray-800 w-2'}`} 
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;