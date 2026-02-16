// import React from 'react';
// import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="relative w-full text-white overflow-hidden bg-black">
//       {/* --- FIXED BACKGROUND IMAGE (PARALLAX) --- */}
//       <div 
//         className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-250"
//         style={{ backgroundImage: "url('/images/footerimag.PNG')" }} 
//       />
      
//       {/* Overlay for better text visibility */}
//       <div className="absolute inset-0 bg-black/80 z-0"></div>

//       <div className="relative z-10 container mx-auto px-8 md:px-20 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          
//           {/* 1. Brand & Subscribe */}
//           <div className="space-y-6">
//             <img src="/images/logo.PNG" alt="HyperNexis" className="h-12 w-auto" />
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Hypernexis where innovation meets exceptional experiences. Join us and elevate your online journey!
//             </p>
//             <div className="space-y-4">
//               <h4 className="font-bold text-lg">Subscribe For More</h4>
//               <div className="flex flex-col sm:flex-row gap-2">
//                 <input 
//                   type="email" 
//                   placeholder="Email Address" 
//                   className="bg-white/5 border border-white/10 rounded-md px-4 py-2 outline-none focus:border-blue-500 flex-1 text-sm text-white"
//                 />
//                 <button className="bg-[#00c2ff] hover:bg-blue-600 transition-colors text-black font-bold px-6 py-2 rounded-md text-sm">
//                   Subscribe
//                 </button>
//               </div>
//               <p className="text-[10px] text-gray-500">*We Will Not Share Your Personal Info</p>
//             </div>
//           </div>

//           {/* 2. Find Us */}
//           <div>
//             <h4 className="font-bold text-xl mb-6">Find Us</h4>
//             <ul className="space-y-4 text-gray-400">
//               <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
//                 <Linkedin size={18} className="text-blue-400" /> LinkedIn
//               </li>
//               <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
//                 <Facebook size={18} className="text-blue-400" /> Facebook
//               </li>
//               <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
//                 <Instagram size={18} className="text-blue-400" /> Instagram
//               </li>
//               <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
//                  {/* Pinterest icon ko manual text se replace kiya error hatane ke liye */}
//                 <span className="text-blue-400 font-bold w-[18px] text-center italic">P</span> Pinterest
//               </li>
//             </ul>
//           </div>

//           {/* 3. Menus */}
//           <div>
//             <h4 className="font-bold text-xl mb-6">Menus</h4>
//             <ul className="space-y-4 text-gray-400">
//               <li className="hover:text-blue-400 cursor-pointer list-none">- HOME</li>
//               <li className="hover:text-blue-400 cursor-pointer list-none">- PORTFOLIO</li>
//               <li className="hover:text-blue-400 cursor-pointer list-none">- OFFERS</li>
//               <li className="hover:text-blue-400 cursor-pointer list-none">- CONTACT US</li>
//             </ul>
//           </div>

//           {/* 4. Contact Information */}
//           <div className="space-y-6">
//             <h4 className="font-bold text-xl mb-6">Contact Information</h4>
//             <ul className="space-y-4 text-gray-400">
//               <li className="flex items-center gap-3">
//                 <Mail size={18} className="text-blue-400" /> hypernexis@gmail.com
//               </li>
//               <li className="flex items-center gap-3">
//                 <MapPin size={18} className="text-blue-400" /> DHA Raya Phase 6, Lahore
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone size={18} className="text-blue-400" /> +92 309 8809 778
//               </li>
//             </ul>
            
//             {/* Social Icons Row */}
//             <div className="flex gap-4 pt-4">
//               <div className="w-9 h-9 border border-blue-400/30 rounded flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors group">
//                 <Facebook size={16} className="text-blue-400 group-hover:text-white" />
//               </div>
//               <div className="w-9 h-9 border border-blue-400/30 rounded flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors group">
//                 <Instagram size={16} className="text-blue-400 group-hover:text-white" />
//               </div>
//               <div className="w-9 h-9 border border-blue-400/30 rounded flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors group">
//                 <Linkedin size={16} className="text-blue-400 group-hover:text-white" />
//               </div>
//               <div className="w-9 h-9 border border-blue-400/30 rounded flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors group">
//                 <span className="text-blue-400 font-bold group-hover:text-white italic">P</span>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Copyright */}
//         <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
//           © 2024 Hypernexis, All Rights Reserved.
//         </div>
//       </div>

//       {/* --- SCROLL TO TOP BUTTON --- */}
//       <button 
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-t from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 text-white font-bold"
//       >
//         ↑
//       </button>
//     </footer>
//   );
// };

// export default Footer;








// import React from 'react';
// import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="relative w-full text-white overflow-hidden bg-black">
      
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
//         style={{ backgroundImage: "url('/images/footerimag.PNG')" }} 
//       />
      
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/80 z-0"></div>

//       <div className="relative z-10 container mx-auto px-8 md:px-20 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          
//           {/* 1. Brand & Subscribe */}
//           <div className="space-y-6">
//             <img src="/images/logo.PNG" alt="HyperNexis" className="h-12 w-auto" />
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Hypernexis where innovation meets exceptional experiences. Join us and elevate your online journey!
//             </p>

//             <div className="space-y-4">
//               <h4 className="font-bold text-lg">Subscribe For More</h4>
//               <div className="flex flex-col sm:flex-row gap-2">
//                 <input 
//                   type="email" 
//                   placeholder="Email Address" 
//                   className="bg-white/5 border border-white/10 rounded-md px-4 py-2 outline-none focus:border-blue-500 flex-1 text-sm text-white"
//                 />
//                 <button className="bg-[#00c2ff] hover:bg-blue-600 transition-colors text-black font-bold px-6 py-2 rounded-md text-sm">
//                   Subscribe
//                 </button>
//               </div>
//               <p className="text-[10px] text-gray-500">
//                 *We Will Not Share Your Personal Info
//               </p>
//             </div>
//           </div>

//           {/* 2. Find Us */}
//           <div>
//             <h4 className="font-bold text-xl mb-6">Find Us</h4>
//             <ul className="space-y-4 text-gray-400">
              
//               <li>
//                 <a 
//                   href="https://www.linkedin.com/company/hypernexis/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-3 hover:text-blue-400"
//                 >
//                   <Linkedin size={18} className="text-blue-400" /> LinkedIn
//                 </a>
//               </li>

//               <li>
//                 <a 
//                   href="https://www.facebook.com/hypernexis"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-3 hover:text-blue-400"
//                 >
//                   <Facebook size={18} className="text-blue-400" /> Facebook
//                 </a>
//               </li>

//               <li>
//                 <a 
//                   href="https://www.instagram.com/hyper_nexis/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-3 hover:text-blue-400"
//                 >
//                   <Instagram size={18} className="text-blue-400" /> Instagram
//                 </a>
//               </li>

//               <li>
//                 <a 
//                   href="https://www.pinterest.com/hyper_nexis/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-3 hover:text-blue-400"
//                 >
//                   {/* Safe Pinterest icon using custom span */}
//                   <span className="text-blue-400 font-bold italic w-[18px] text-center">P</span> Pinterest
//                 </a>
//               </li>

//             </ul>
//           </div>

//           {/* 3. Menus */}
//           <div>
//             <h4 className="font-bold text-xl mb-6">Menus</h4>
//             <ul className="space-y-4 text-gray-400">
//               <li className="hover:text-blue-400 cursor-pointer">- HOME</li>
//               <li className="hover:text-blue-400 cursor-pointer">- PORTFOLIO</li>
//               <li className="hover:text-blue-400 cursor-pointer">- OFFERS</li>
//               <li className="hover:text-blue-400 cursor-pointer">- CONTACT US</li>
//             </ul>
//           </div>

//           {/* 4. Contact Information */}
//           <div className="space-y-6">
//             <h4 className="font-bold text-xl mb-6">Contact Information</h4>
            
//             <ul className="space-y-4 text-gray-400">
//               <li className="flex items-center gap-3">
//                 <Mail size={18} className="text-blue-400" />
//                 hypernexis@gmail.com
//               </li>
//               <li className="flex items-center gap-3">
//                 <MapPin size={18} className="text-blue-400" />
//                 DHA Raya Phase 6, Lahore
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone size={18} className="text-blue-400" />
//                 +92 309 8809 778
//               </li>
//             </ul>
            
//             {/* Social Icons Row */}
//             <div className="flex gap-4 pt-4">
              
//               <a 
//                 href="https://www.facebook.com/hypernexis"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 border border-blue-400/30 rounded flex items-center justify-center hover:bg-blue-600 transition-colors group"
//               >
//                 <Facebook size={16} className="text-blue-400 group-hover:text-white" />
//               </a>

//               <a 
//                 href="https://www.instagram.com/hyper_nexis/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 border border-blue-400/30 rounded flex items-center justify-center hover:bg-blue-600 transition-colors group"
//               >
//                 <Instagram size={16} className="text-blue-400 group-hover:text-white" />
//               </a>

//               <a 
//                 href="https://www.linkedin.com/company/hypernexis/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 border border-blue-400/30 rounded flex items-center justify-center hover:bg-blue-600 transition-colors group"
//               >
//                 <Linkedin size={16} className="text-blue-400 group-hover:text-white" />
//               </a>

//               <a 
//                 href="https://www.pinterest.com/hyper_nexis/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 border border-blue-400/30 rounded flex items-center justify-center hover:bg-blue-600 transition-colors group"
//               >
//                 <span className="text-blue-400 font-bold group-hover:text-white italic">P</span>
//               </a>

//             </div>
//           </div>

//         </div>

//         {/* Copyright */}
//         <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
//           © 2024 Hypernexis, All Rights Reserved.
//         </div>
//       </div>

//       {/* Scroll To Top */}
//       <button 
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-t from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 text-white font-bold"
//       >
//         ↑
//       </button>

//     </footer>
//   );
// };

// export default Footer;









import React, { useState } from "react";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { useSubscribeMutation } from "../features/subscriber/subscriberApi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, { isLoading, isSuccess }] = useSubscribeMutation();

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setMessage("Please enter email first");
      return;
    }

    setMessage(""); // clear previous

    try {
      await subscribe(email).unwrap();
      setMessage("Subscribed successfully ✅");
      setEmail(""); // clear input
    } catch (err) {
      setMessage(err?.data?.message || "Server error");
    }
  };

  return (
    <footer className="relative w-full text-white overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/footerimag.PNG')" }}
      />
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <div className="relative z-10 container mx-auto px-8 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          
          {/* 1. Brand & Subscribe */}
          <div className="space-y-6">
            <img src="/images/logo.PNG" alt="HyperNexis" className="h-12 w-auto" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Hypernexis where innovation meets exceptional experiences. Join us and elevate your online journey!
            </p>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Subscribe For More</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading || isSuccess}
                  className="bg-white/5 border border-white/10 rounded-md px-4 py-2 outline-none focus:border-blue-500 flex-1 text-sm text-white"
                />
                <button
                  onClick={handleSubscribe}
                  disabled={isLoading || isSuccess}
                  className={`px-6 py-2 rounded-md text-sm font-bold ${
                    isSuccess
                      ? "bg-green-500 cursor-not-allowed text-black"
                      : "bg-[#00c2ff] hover:bg-blue-600 text-black"
                  }`}
                >
                  {isLoading
                    ? "Subscribing..."
                    : isSuccess
                    ? "Subscribed ✅"
                    : "Subscribe"}
                </button>
              </div>
              {message && (
                <p
                  className={`text-[10px] ${
                    isSuccess ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {message}
                </p>
              )}
              <p className="text-[10px] text-gray-500">
                *We Will Not Share Your Personal Info
              </p>
            </div>
          </div>

          {/* 2. Find Us */}
          <div>
            <h4 className="font-bold text-xl mb-6">Find Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="https://www.linkedin.com/company/hypernexis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-blue-400"
                >
                  <Linkedin size={18} className="text-blue-400" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/hypernexis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-blue-400"
                >
                  <Facebook size={18} className="text-blue-400" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hyper_nexis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-blue-400"
                >
                  <Instagram size={18} className="text-blue-400" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com/hyper_nexis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-blue-400"
                >
                  <span className="text-blue-400 font-bold italic w-[18px] text-center">P</span> Pinterest
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Menus */}
          <div>
            <h4 className="font-bold text-xl mb-6">Menus</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-blue-400 cursor-pointer">- HOME</li>
              <li className="hover:text-blue-400 cursor-pointer">- PORTFOLIO</li>
              <li className="hover:text-blue-400 cursor-pointer">- OFFERS</li>
              <li className="hover:text-blue-400 cursor-pointer">- CONTACT US</li>
            </ul>
          </div>

          {/* 4. Contact Information */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl mb-6">Contact Information</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" /> hypernexis@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400" /> DHA Raya Phase 6, Lahore
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" /> +92 309 8809 778
              </li>
            </ul>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.facebook.com/hypernexis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-blue-400/30 rounded flex items-center justify-center hover:bg-blue-600 transition-colors group"
              >
                <Facebook size={16} className="text-blue-400 group-hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/hyper_nexis/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-blue-400/30 rounded flex items-center justify-center hover:bg-blue-600 transition-colors group"
              >
                <Instagram size={16} className="text-blue-400 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/hypernexis/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-blue-400/30 rounded flex items-center justify-center hover:bg-blue-600 transition-colors group"
              >
                <Linkedin size={16} className="text-blue-400 group-hover:text-white" />
              </a>
              <a
                href="https://www.pinterest.com/hyper_nexis/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-blue-400/30 rounded flex items-center justify-center hover:bg-blue-600 transition-colors group"
              >
                <span className="text-blue-400 font-bold group-hover:text-white italic">P</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          © 2024 Hypernexis, All Rights Reserved.
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-t from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 text-white font-bold"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
