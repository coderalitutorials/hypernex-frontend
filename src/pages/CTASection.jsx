// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

// const CTASection = () => {
//   return (
//     <section className="bg-black py-24 px-8 text-center relative overflow-hidden">
//       {/* Background Subtle Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[120px] pointer-events-none"></div>

//       <div className="container mx-auto relative z-10">
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
//         >
//           Let's Work Together To Make Your <br />
//           Business <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">Successful!</span>
//         </motion.h2>

//         <motion.p 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
//         >
//           Join 500+ successful brands that are already growing with HyperNexis
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5 }}
//           className="flex justify-center"
//         >
//           {/* Updated Button Logic */}
//           <motion.button 
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: "0px 0px 25px 5px rgba(59, 130, 246, 0.6)" // Blue Glowing Shadow
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="group relative flex items-center gap-3 p-[2px] rounded-xl overflow-hidden bg-linear-to-r from-blue-400 to-purple-600 transition-all duration-300"
//           >
//             {/* Inner Container: Background transitions to black on hover */}
//             <div className="relative z-10 flex items-center gap-3 px-8 py-4 rounded-[10px] bg-linear-to-r from-blue-400 to-purple-600 group-hover:bg-none group-hover:bg-black transition-all duration-300 h-full w-full">
//               <span className="relative z-10 text-white font-bold text-lg">Get Started Today</span>
              
//               <div className="relative z-10 w-8 h-8 bg-black/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
//                 <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
//               </div>
//             </div>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;




import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 👈 Navigation ke liye import

const CTASection = () => {
  const navigate = useNavigate(); // 👈 Hook initialize kiya

  return (
    <section className="bg-black py-24 px-8 text-center relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
        >
          Let's Work Together To Make Your <br />
          Business <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">Successful!</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
        >
          Join 500+ successful brands that are already growing with HyperNexis
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          {/* Button with Navigation Logic */}
          <motion.button 
            onClick={() => navigate('/contact')} // 👈 Click hone par contact page jayega
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 0px 25px 5px rgba(59, 130, 246, 0.6)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 p-[2px] rounded-xl overflow-hidden bg-linear-to-r from-blue-400 to-purple-600 transition-all duration-300 cursor-pointer"
          >
            {/* Inner Container */}
            <div className="relative z-10 flex items-center gap-3 px-8 py-4 rounded-[10px] bg-linear-to-r from-blue-400 to-purple-600 group-hover:bg-none group-hover:bg-black transition-all duration-300 h-full w-full">
              <span className="relative z-10 text-white font-bold text-lg">Get Started Today</span>
              
              <div className="relative z-10 w-8 h-8 bg-black/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;