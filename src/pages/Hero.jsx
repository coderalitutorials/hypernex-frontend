


// import React, { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

// // Animation Variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: "easeOut" } 
//   }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };

// const Hero = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     let particles = [];
//     let animationFrameId;
//     const mouse = { x: null, y: null, radius: 100 };

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     const handleMouseMove = (e) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('resize', handleResize);
//     handleResize();

//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 1.5 + 0.5; 
//         this.speedX = (Math.random() * 0.8) - 0.4; 
//         this.speedY = (Math.random() * 0.8) - 0.4;
//         this.color = Math.random() > 0.5 ? '#3b82f6' : '#a855f7';
//       }

//       draw() {
//         ctx.save();
//         ctx.globalAlpha = 0.4; 
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = this.color;
//         ctx.shadowBlur = 5;
//         ctx.shadowColor = this.color;
//         ctx.fill();
//         ctx.restore();
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x > canvas.width) this.x = 0;
//         else if (this.x < 0) this.x = canvas.width;
//         if (this.y > canvas.height) this.y = 0;
//         else if (this.y < 0) this.y = canvas.height;

//         let dx = mouse.x - this.x;
//         let dy = mouse.y - this.y;
//         let distance = Math.sqrt(dx * dx + dy * dy);
//         if (distance < mouse.radius) {
//           const force = (mouse.radius - distance) / mouse.radius;
//           const moveX = (dx / distance) * force * 5;
//           const moveY = (dy / distance) * force * 5;
//           this.x -= moveX;
//           this.y -= moveY;
//         }
//       }
//     }

//     const init = () => {
//       particles = [];
//       for (let i = 0; i < 70; i++) { particles.push(new Particle()); }
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       for (let i = 0; i < particles.length; i++) {
//         particles[i].update();
//         particles[i].draw();
//       }
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     init();
//     animate();

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <section className="relative min-h-screen bg-black overflow-hidden flex items-center px-8 md:px-24">
      
//       {/* Background Subtle Glows */}
//       <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
//         <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px]"></div>
//         <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-[150px]"></div>
//       </div>

//       <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 pt-20">
        
//         {/* Left Content */}
//         <motion.div 
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//           className="md:w-1/2 text-white"
//         >
//           <motion.span 
//             variants={fadeInUp}
//             className="text-blue-400 font-bold tracking-[0.3em] mb-4 block uppercase text-sm"
//           >
//             * IT Solutions *
//           </motion.span>

//           <motion.h1 
//             variants={fadeInUp}
//             className="text-5xl md:text-6xl font-extrabold mb-3 leading-[1.1]"
//           >
//             Empowering Your <br />
//             {/* Split Colors: Digital (Blue) and Vision (Purple) */}
//             <span className="text-blue-500">Digital</span>{' '}
//             <span className="text-purple-500">Vision</span>
//           </motion.h1>

//           <motion.p 
//             variants={fadeInUp}
//             className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed"
//           >
//             Transform your ideas into reality with our innovative solutions. 
//             Let's create a vibrant online presence that stands out and drives success!
//           </motion.p>

//           <motion.div variants={fadeInUp}>
//             {/* --- CUSTOM ANIMATED BUTTON --- */}
//             <motion.button 
//               whileHover="hover"
//               className="group relative flex items-center gap-4 bg-linear-to-r from-blue-500 to-purple-600 p-[2px] rounded-full overflow-hidden"
//             >
//               {/* Button Inner Body */}
//               <div className="relative flex items-center gap-3 px-8 py-4 bg-blue-600 rounded-full transition-all duration-300 group-hover:bg-black">
//                 <span className="text-white font-bold text-lg relative z-10">
//                   Book An Appointment
//                 </span>
                
//                 {/* Arrow Container with Hidden Overflow */}
//                 <div className="relative w-6 h-6 overflow-hidden flex items-center justify-center">
//                   <motion.div
//                     className="flex absolute"
//                     variants={{
//                       hover: { x: [0, 30, -30, 0] }
//                     }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}
//                   >
//                     <ArrowRight className="w-6 h-6 text-white min-w-[24px]" />
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.button>
//           </motion.div>
//         </motion.div>

//         {/* Right Content */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.8, x: 50 }}
//           animate={{ opacity: 1, scale: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="md:w-1/2 flex justify-end mt-12 md:mt-0 relative"
//         >
//           {/* Bulb Purple Glow */}
//           <motion.div
//             animate={{
//               opacity: [0.3, 0.7, 0.3],
//               scale: [1, 1.2, 1],
//             }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute top-[-40px] right-[100px] w-56 h-56 bg-purple-600/50 rounded-full filter blur-[80px] z-0 pointer-events-none"
//           ></motion.div>

//           <motion.img 
//             src="/images/home imag.PNG" 
//             alt="Hero Illustration"
//             className="w-full max-w-xl relative z-10 drop-shadow-[0_0_50px_rgba(168,85,247,0.2)]"
//             animate={{ 
//               y: [0, -20, 0],
//               rotate: [0, 1, 0, -1, 0] 
//             }}
//             transition={{ 
//               y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//               rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
//             }}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 👈 1. Import useNavigate

// Animation Variants (Same as before)
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Hero = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate(); // 👈 2. Initialize useNavigate

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    const mouse = { x: null, y: null, radius: 100 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5; 
        this.speedX = (Math.random() * 0.8) - 0.4; 
        this.speedY = (Math.random() * 0.8) - 0.4;
        this.color = Math.random() > 0.5 ? '#3b82f6' : '#a855f7';
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = 0.4; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 5;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const moveX = (dx / distance) * force * 5;
          const moveY = (dy / distance) * force * 5;
          this.x -= moveX;
          this.y -= moveY;
        }
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 70; i++) { particles.push(new Particle()); }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center px-8 md:px-24">
      
      {/* Background Subtle Glows */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-[150px]"></div>
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 pt-20">
        
        {/* Left Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="md:w-1/2 text-white"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-blue-400 font-bold tracking-[0.3em] mb-4 block uppercase text-sm"
          >
            * IT Solutions *
          </motion.span>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-extrabold mb-3 leading-[1.1]"
          >
            Empowering Your <br />
            <span className="text-blue-500">Digital</span>{' '}
            <span className="text-purple-500">Vision</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed"
          >
            Transform your ideas into reality with our innovative solutions. 
            Let's create a vibrant online presence that stands out and drives success!
          </motion.p>

          <motion.div variants={fadeInUp}>
            {/* --- CUSTOM ANIMATED BUTTON WITH REDIRECT --- */}
            <motion.button 
              whileHover="hover"
              onClick={() => navigate('/contact')} // 👈 3. Add onClick to Contact Page
              className="group relative flex items-center gap-4 bg-linear-to-r from-blue-500 to-purple-600 p-[2px] rounded-full overflow-hidden cursor-pointer"
            >
              {/* Button Inner Body */}
              <div className="relative flex items-center gap-3 px-8 py-4 bg-blue-600 rounded-full transition-all duration-300 group-hover:bg-black">
                <span className="text-white font-bold text-lg relative z-10">
                  Book An Appointment
                </span>
                
                {/* Arrow Container */}
                <div className="relative w-6 h-6 overflow-hidden flex items-center justify-center">
                  <motion.div
                    className="flex absolute"
                    variants={{
                      hover: { x: [0, 30, -30, 0] }
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-6 h-6 text-white min-w-[24px]" />
                  </motion.div>
                </div>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:w-1/2 flex justify-end mt-12 md:mt-0 relative"
        >
          {/* Bulb Purple Glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-40px] right-[100px] w-56 h-56 bg-purple-600/50 rounded-full filter blur-[80px] z-0 pointer-events-none"
          ></motion.div>

          <motion.img 
            src="/images/home imag.PNG" 
            alt="Hero Illustration"
            className="w-full max-w-xl relative z-10 drop-shadow-[0_0_50px_rgba(168,85,247,0.2)]"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 1, 0, -1, 0] 
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;