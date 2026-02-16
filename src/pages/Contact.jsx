

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import Footer from './footer'; // Check karlein agar file name Footer hai ya footer

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-[#0a0a1a] text-white pt-32 overflow-x-hidden">
      
//       {/* --- TOP HEADING SECTION --- */}
//       <div className="text-center px-6 mb-16">
//         <motion.h1 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-6xl font-black mb-6"
//         >
//           Contact Us
//         </motion.h1>
        
//         <div className="flex flex-col items-center">
//           <p className="text-[#3b82f6] font-bold tracking-[0.3em] uppercase text-sm mb-4">Contact Us</p>
//           <div className="w-24 h-1 bg-linear-to-r from-[#00c2ff] to-[#9333ea]"></div>
//         </div>
//       </div>

//       {/* --- BOOK APPOINTMENT & FORM SECTION --- */}
//       <div className="container mx-auto px-6 md:px-20 mb-20">
//         <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-tight">Book An Appointment</h2>
        
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="max-w-3xl mx-auto bg-[#11112b] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
//         >
//           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <input 
//                 type="text" placeholder="Name" 
//                 className="w-full bg-[#0a0a1a] border border-white/10 rounded-xl px-5 py-4 focus:border-blue-500 outline-none transition-all"
//               />
//               <input 
//                 type="email" placeholder="Email" 
//                 className="w-full bg-[#0a0a1a] border border-white/10 rounded-xl px-5 py-4 focus:border-blue-500 outline-none transition-all"
//               />
//             </div>
//             <input 
//               type="text" placeholder="Address" 
//               className="w-full bg-[#0a0a1a] border border-white/10 rounded-xl px-5 py-4 focus:border-blue-500 outline-none transition-all"
//             />
//             <textarea 
//               placeholder="Your Message" rows="5"
//               className="w-full bg-[#0a0a1a] border border-white/10 rounded-xl px-5 py-4 focus:border-blue-500 outline-none transition-all resize-none"
//             ></textarea>
            
//             <motion.button
//               whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.4)" }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full py-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all"
//             >
//               <Send className="w-5 h-5" />
//               Send Your Message
//             </motion.button>
//           </form>
//         </motion.div>
//       </div>

//       <div className="container mx-auto px-6 md:px-20"><hr className="border-white/5 mb-20" /></div>

//       {/* --- LOCATION SECTION (Updated Background Color) --- */}
//       <div className="container mx-auto px-6 md:px-20 mb-20 text-center">
//         <h2 className="text-3xl font-bold mb-10 uppercase tracking-tight">Location</h2>
        
//         <motion.div 
//           whileHover={{ y: -10 }}
//           style={{ backgroundColor: '#221040' }} // Your Requested Color
//           className="max-w-lg mx-auto p-10 rounded-3xl border border-white/10 shadow-2xl text-left relative overflow-hidden"
//         >
//           {/* Subtle Background Glow */}
//           <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
          
//           <div className="relative z-10 space-y-8">
//             {/* Address */}
//             <div className="flex items-start gap-5">
//               <div className="bg-white/5 p-3 rounded-xl border border-white/10">
//                 <MapPin className="text-blue-400 w-6 h-6 shrink-0" />
//               </div>
//               <div>
//                 <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">Our Office</p>
//                 <p className="text-xl font-semibold text-white">DHA Raya Phase 6, Lahore</p>
//               </div>
//             </div>
            
//             {/* Email */}
//             <div className="flex items-start gap-5">
//               <div className="bg-white/5 p-3 rounded-xl border border-white/10">
//                 <Mail className="text-blue-400 w-6 h-6 shrink-0" />
//               </div>
//               <div>
//                 <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">Email Us</p>
//                 <a href="mailto:hypernexis@gmail.com" className="text-xl font-semibold text-white hover:text-blue-400 transition-colors">
//                   hypernexis@gmail.com
//                 </a>
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="flex items-start gap-5">
//               <div className="bg-white/5 p-3 rounded-xl border border-white/10">
//                 <Phone className="text-blue-400 w-6 h-6 shrink-0" />
//               </div>
//               <div>
//                 <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">Call Us</p>
//                 <a href="tel:+923098809778" className="text-xl font-semibold text-white hover:text-blue-400 transition-colors">
//                   +92 309 8809 778
//                 </a>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <div className="container mx-auto px-6 md:px-20"><hr className="border-white/5 mb-20" /></div>

//       {/* --- MAP SECTION --- */}
//       <div className="container mx-auto px-6 md:px-20 mb-24 text-center">
//         <h2 className="text-3xl font-bold mb-10 uppercase tracking-tight">Find Us On Google Maps</h2>
//         <div className="rounded-3xl overflow-hidden border-4 border-[#11112b] shadow-2xl h-[450px]">
//           <iframe 
//             title="Google Map"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.442971168142!2d74.45339687544321!3d31.45703817424368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391909249764f697%3A0x6b4904077227d824!2sDHA%20Raya%20Golf%20%26%20Country%20Club!5e0!3m2!1sen!2s!4v1709123456789!5m2!1sen!2s" 
//             width="100%" 
//             height="100%" 
//             style={{ border: 0 }} 
//             allowFullScreen="" 
//             loading="lazy" 
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;















// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
// import Footer from "./footer";
// import { useCreateContactMutation } from "../features/contacts/contactApi";

// const Contact = () => {
//   const [createContact, { isLoading, isSuccess, isError }] =
//     useCreateContactMutation();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await createContact(formData).unwrap();

//       // reset form on success
//       setFormData({
//         name: "",
//         email: "",
//         address: "",
//         message: "",
//       });
//     } catch (err) {
//       console.error("Contact submit failed:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0a1a] text-white pt-32 overflow-x-hidden">

//       {/* --- TOP HEADING SECTION --- */}
//       <div className="text-center px-6 mb-16">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-6xl font-black mb-6"
//         >
//           Contact Us
//         </motion.h1>

//         <div className="flex flex-col items-center">
//           <p className="text-[#3b82f6] font-bold tracking-[0.3em] uppercase text-sm mb-4">
//             Contact Us
//           </p>
//           <div className="w-24 h-1 bg-linear-to-r from-[#00c2ff] to-[#9333ea]"></div>
//         </div>
//       </div>

//       {/* --- FORM SECTION --- */}
//       <div className="container mx-auto px-6 md:px-20 mb-20">
//         <h2 className="text-3xl font-bold mb-10 text-center uppercase">
//           Book An Appointment
//         </h2>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="max-w-3xl mx-auto bg-[#11112b] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
//         >
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <input
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 type="text"
//                 placeholder="Name"
//                 required
//                 className="w-full bg-[#0a0a1a] border border-white/10 rounded-xl px-5 py-4 outline-none"
//               />

//               <input
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 type="email"
//                 placeholder="Email"
//                 required
//                 className="w-full bg-[#0a0a1a] border border-white/10 rounded-xl px-5 py-4 outline-none"
//               />
//             </div>

//             <input
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               type="text"
//               placeholder="Address"
//               className="w-full bg-[#0a0a1a] border border-white/10 rounded-xl px-5 py-4 outline-none"
//             />

//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="5"
//               placeholder="Your Message"
//               required
//               className="w-full bg-[#0a0a1a] border border-white/10 rounded-xl px-5 py-4 outline-none resize-none"
//             ></textarea>

//             <motion.button
//               type="submit"
//               disabled={isLoading}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full py-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-lg flex items-center justify-center gap-3 disabled:opacity-60"
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="animate-spin w-5 h-5" />
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   <Send className="w-5 h-5" />
//                   Send Your Message
//                 </>
//               )}
//             </motion.button>

//             {/* SIMPLE FEEDBACK (NO TOAST) */}
//             {isSuccess && (
//               <p className="text-green-400 text-center font-semibold">
//                 Message sent successfully!
//               </p>
//             )}

//             {isError && (
//               <p className="text-red-400 text-center font-semibold">
//                 Something went wrong. Please try again.
//               </p>
//             )}
//           </form>
//         </motion.div>
//       </div>

//       {/* --- LOCATION SECTION --- */}
//       <div className="container mx-auto px-6 md:px-20 mb-20 text-center">
//         <h2 className="text-3xl font-bold mb-10 uppercase">Location</h2>

//         <div
//           style={{ backgroundColor: "#221040" }}
//           className="max-w-lg mx-auto p-10 rounded-3xl border border-white/10 shadow-2xl text-left"
//         >
//           <div className="space-y-8">
//             <div className="flex gap-5">
//               <MapPin className="text-blue-400 w-6 h-6" />
//               <p>DHA Raya Phase 6, Lahore</p>
//             </div>

//             <div className="flex gap-5">
//               <Mail className="text-blue-400 w-6 h-6" />
//               <p>hypernexis@gmail.com</p>
//             </div>

//             <div className="flex gap-5">
//               <Phone className="text-blue-400 w-6 h-6" />
//               <p>+92 309 8809 778</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;












import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import Footer from "./Footer";
import { useCreateContactMutation } from "../features/contacts/contactApi"; // first API
import {useSendEmailMutation} from "../email/emailApi"; // second API

const Contact = () => {
  // Both RTK Query hooks
  const [createContact, { isLoading: isCreating, isSuccess: createSuccess, isError: createError }] =
    useCreateContactMutation();
  const [sendEmail, { isLoading: isSending, isSuccess: emailSuccess, isError: emailError }] =
    useSendEmailMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call both APIs in parallel
      await Promise.all([
        createContact(formData).unwrap(),
        sendEmail(formData).unwrap(),
      ]);

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        address: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact submit failed:", err);
    }
  };

  // Overall loading / success / error flags
  const isLoading = isCreating || isSending;
  const isSuccess = createSuccess && emailSuccess;
  const isError = createError || emailError;

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white pt-32 overflow-x-hidden">

      {/* --- TOP HEADING SECTION --- */}
      <div className="text-center px-6 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-6"
        >
          Contact Us
        </motion.h1>

        <div className="flex flex-col items-center">
          <p className="text-[#3b82f6] font-bold tracking-[0.3em] uppercase text-sm mb-4">
            Contact Us
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-[#00c2ff] to-[#9333ea]"></div>
        </div>
      </div>

      {/* --- FORM SECTION --- */}
      <div className="container mx-auto px-6 md:px-20 mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center uppercase">
          Book An Appointment
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-[#11112b] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Name"
                required
                className="w-full bg-[#0a0a1a] border border-white/10 rounded-xl px-5 py-4 outline-none"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                required
                className="w-full bg-[#0a0a1a] border border-white/10 rounded-xl px-5 py-4 outline-none"
              />
            </div>

            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              type="text"
              placeholder="Address"
              className="w-full bg-[#0a0a1a] border border-white/10 rounded-xl px-5 py-4 outline-none"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              className="w-full bg-[#0a0a1a] border border-white/10 rounded-xl px-5 py-4 outline-none resize-none"
            ></textarea>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-lg flex items-center justify-center gap-3 disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Your Message
                </>
              )}
            </motion.button>

            {/* SIMPLE FEEDBACK */}
            {isSuccess && (
              <p className="text-green-400 text-center font-semibold">
                Message sent successfully!
              </p>
            )}

            {isError && (
              <p className="text-red-400 text-center font-semibold">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>

      {/* --- LOCATION SECTION --- */}
      <div className="container mx-auto px-6 md:px-20 mb-20 text-center">
        <h2 className="text-3xl font-bold mb-10 uppercase">Location</h2>

        <div
          style={{ backgroundColor: "#221040" }}
          className="max-w-lg mx-auto p-10 rounded-3xl border border-white/10 shadow-2xl text-left"
        >
          <div className="space-y-8">
            <div className="flex gap-5">
              <MapPin className="text-blue-400 w-6 h-6" />
              <p>DHA Raya Phase 6, Lahore</p>
            </div>

            <div className="flex gap-5">
              <Mail className="text-blue-400 w-6 h-6" />
              <p>hypernexis@gmail.com</p>
            </div>

            <div className="flex gap-5">
              <Phone className="text-blue-400 w-6 h-6" />
              <p>+92 309 8809 778</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
