// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Calendar, Clock, ChevronRight } from "lucide-react";
// import Footer from "./footer";

// const blogs = [
//   {
//     slug: "digital-marketing-2024",
//     title: "Transform Your Business with Digital Marketing in 2024",
//     category: "Digital Marketing",
//     author: "HyperNexis Team",
//     date: "January 15, 2024",
//     readTime: "12 min read",
//     intro:
//       "The digital marketing landscape is evolving faster than ever. In 2024, brands that rely on outdated strategies will struggle to survive. This guide explores the most important shifts shaping modern digital marketing.",
//     sections: [
//       {
//         heading: "1. Understanding the Modern Digital Marketing Landscape",
//         image:
//           "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=60",
//         content:
//           "Digital marketing has transformed dramatically over the past few years. With AI, automation, and advanced analytics, businesses can now understand customer behavior at a deeper level than ever before.",
//         points: [
//           "Search Engine Optimization (SEO)",
//           "Content Marketing",
//           "Social Media Marketing",
//           "Email Marketing",
//           "Paid Advertising",
//         ],
//       },
//       {
//         heading: "2. The Power of Data-Driven Decision Making",
//         image:
//           "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=60",
//         content:
//           "Data is the backbone of successful marketing. Every click, conversion, and interaction provides insight that helps businesses optimize campaigns and maximize ROI.",
//         points: [
//           "Conversion Rate Optimization",
//           "Customer Lifetime Value",
//           "Return on Investment (ROI)",
//           "Customer Acquisition Cost",
//         ],
//       },
//       {
//         heading: "3. Content Marketing: The Foundation of Growth",
//         image:
//           "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=60",
//         content:
//           "Content is the fuel that powers digital growth. High-quality, consistent content builds trust, authority, and long-term visibility in search engines.",
//         points: [
//           "Solve real customer problems",
//           "Publish consistently",
//           "Optimize for SEO",
//           "Tell stories, not just features",
//         ],
//       },
//     ],
//   },
// ];

// const BlogDetail = () => {
//   const { slug } = useParams();
//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a] text-white">
//         Blog not found
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#0a0a1a] text-white">
//       {/* HEADER */}
//       <div className="max-w-3xl mx-auto px-6 pt-32">
//         {/* Breadcrumb */}
//         <div className="flex items-center text-xs text-gray-500 gap-2 mb-6">
//           <Link to="/" className="hover:text-blue-400">Home</Link>
//           <ChevronRight size={14} />
//           <Link to="/blog" className="hover:text-blue-400">Blog</Link>
//           <ChevronRight size={14} />
//           <span className="text-blue-400">{blog.category}</span>
//         </div>

//         {/* Meta */}
//         <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
//           <span>By <span className="text-white">{blog.author}</span></span>
//           <span className="flex items-center gap-1">
//             <Calendar size={14} /> {blog.date}
//           </span>
//           <span className="flex items-center gap-1">
//             <Clock size={14} /> {blog.readTime}
//           </span>
//         </div>

//         {/* Title */}
//         <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
//           {blog.title}
//         </h1>

//         {/* Intro */}
//         <p className="text-gray-300 text-lg leading-relaxed">
//           {blog.intro}
//         </p>
//       </div>

//       {/* CONTENT */}
//       <div className="max-w-3xl mx-auto px-6 py-20 space-y-24">
//         {blog.sections.map((section, i) => (
//           <motion.section
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-2xl font-black mb-6">
//               {section.heading}
//             </h2>

//             <img
//               src={section.image}
//               alt={section.heading}
//               className="rounded-2xl mb-8 border border-white/10"
//             />

//             <p className="text-gray-300 leading-relaxed mb-6">
//               {section.content}
//             </p>

//             <ul className="space-y-3 text-gray-300">
//               {section.points.map((point, idx) => (
//                 <li key={idx} className="flex gap-3">
//                   <span className="text-blue-500 font-bold">✓</span>
//                   {point}
//                 </li>
//               ))}
//             </ul>
//           </motion.section>
//         ))}
//       </div>

//       {/* CTA */}
//       <div className="max-w-4xl mx-auto px-6 mb-24">
//         <div className="bg-[#11112b] border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10" />
//           <h2 className="relative text-3xl font-black mb-4">
//             Ready to Scale Your Business?
//           </h2>
//           <p className="relative text-gray-400 mb-8 max-w-xl mx-auto">
//             Let our experts turn strategy into measurable growth.
//           </p>
//           <button className="relative px-10 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold shadow-lg">
//             Get Started 🚀
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default BlogDetail;




// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Calendar, Clock, ChevronRight } from "lucide-react";
// import Footer from "./footer";

// const blogs = [
//   {
//     slug: "digital-marketing-2024",
//     title: "Transform Your Business with Digital Marketing in 2024",
//     category: "Digital Marketing",
//     author: "HyperNexis Team",
//     date: "January 15, 2024",
//     readTime: "12 min read",
//     intro:
//       "The digital marketing landscape is evolving faster than ever. In 2024, brands that rely on outdated strategies will struggle to survive. This guide explores the most important shifts shaping modern digital marketing.",
//     sections: [
//       {
//         heading: "1. Understanding the Modern Digital Marketing Landscape",
//         image:
//           "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=80",
//         content:
//           "Digital marketing has transformed dramatically over the past few years. With AI, automation, and advanced analytics, businesses can now understand customer behavior at a deeper level than ever before.",
//         points: [
//           "Search Engine Optimization (SEO)",
//           "Content Marketing",
//           "Social Media Marketing",
//           "Email Marketing",
//           "Paid Advertising",
//         ],
//       },
//       {
//         heading: "2. The Power of Data-Driven Decision Making",
//         image:
//           "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800&q=80",
//         content:
//           "Data is the backbone of successful marketing. Every click, conversion, and interaction provides insight that helps businesses optimize campaigns and maximize ROI.",
//         points: [
//           "Conversion Rate Optimization",
//           "Customer Lifetime Value",
//           "Return on Investment (ROI)",
//           "Customer Acquisition Cost",
//         ],
//       },
//       {
//         heading: "3. Content Marketing: The Foundation of Growth",
//         image:
//           "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1800&q=80",
//         content:
//           "Content is the fuel that powers digital growth. High-quality, consistent content builds trust, authority, and long-term visibility in search engines.",
//         points: [
//           "Solve real customer problems",
//           "Publish consistently",
//           "Optimize for SEO",
//           "Tell stories, not just features",
//         ],
//       },
//     ],
//   },
// ];

// const BlogDetail = () => {
//   const { slug } = useParams();
//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a] text-white">
//         Blog not found
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#0a0a1a] text-white">
//       {/* HEADER */}
//       <div className="max-w-7xl mx-auto px-6 pt-32">
//         <div className="max-w-5xl">
//           {/* Breadcrumb */}
//           <div className="flex items-center text-xs text-gray-500 gap-2 mb-6">
//             <Link to="/" className="hover:text-blue-400">Home</Link>
//             <ChevronRight size={14} />
//             <Link to="/blog" className="hover:text-blue-400">Blog</Link>
//             <ChevronRight size={14} />
//             <span className="text-blue-400">{blog.category}</span>
//           </div>

//           {/* Meta */}
//           <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-8">
//             <span>By <span className="text-white">{blog.author}</span></span>
//             <span className="flex items-center gap-1">
//               <Calendar size={14} /> {blog.date}
//             </span>
//             <span className="flex items-center gap-1">
//               <Clock size={14} /> {blog.readTime}
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight mb-10">
//             {blog.title}
//           </h1>

//           {/* Intro */}
//           <p className="text-gray-300 text-2xl leading-relaxed max-w-4xl">
//             {blog.intro}
//           </p>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="max-w-7xl mx-auto px-6 py-32">
//         <div className="grid grid-cols-12 gap-16">
//           {/* MAIN CONTENT */}
//           <div className="col-span-12 lg:col-span-9 space-y-32">
//             {blog.sections.map((section, i) => (
//               <motion.section
//                 key={i}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7 }}
//               >
//                 <h2 className="text-4xl font-black mb-10">
//                   {section.heading}
//                 </h2>

//                 <img
//                   src={section.image}
//                   alt={section.heading}
//                   className="rounded-[2.5rem] mb-12 border border-white/10 w-full"
//                 />

//                 <p className="text-gray-300 text-xl leading-loose mb-10 max-w-5xl">
//                   {section.content}
//                 </p>

//                 <ul className="space-y-5 text-gray-300 text-xl">
//                   {section.points.map((point, idx) => (
//                     <li key={idx} className="flex gap-4">
//                       <span className="text-blue-500 font-bold">✓</span>
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.section>
//             ))}
//           </div>

//           {/* RIGHT WHITESPACE */}
//           <div className="hidden lg:block col-span-3"></div>
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="max-w-7xl mx-auto px-6 mb-40">
//         <div className="bg-[#11112b] border border-white/10 rounded-[3rem] p-16 text-center relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10" />
//           <h2 className="relative text-4xl md:text-5xl font-black mb-6">
//             Ready to Scale Your Business?
//           </h2>
//           <p className="relative text-gray-400 mb-10 max-w-3xl mx-auto text-xl">
//             Let our experts turn strategy into measurable growth.
//           </p>
//           <button className="relative px-14 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-lg shadow-xl">
//             Get Started 🚀
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default BlogDetail;






// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Calendar, Clock, ChevronRight } from "lucide-react";
// import Footer from "./footer";
// import { useGetBlogBySlugQuery } from "../features/blogs/blogsApi";

// const BlogDetail = () => {
//   const { slug } = useParams();

//   const { data: blogRes, isLoading } = useGetBlogBySlugQuery(slug);
//   const blog = blogRes?.data || blogRes;

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a] text-white">
//         Loading blog...
//       </div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a] text-white">
//         Blog not found
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#0a0a1a] text-white">
//       {/* HEADER */}
//       <div className="max-w-7xl mx-auto px-6 pt-32">
//         <div className="max-w-5xl">
//           {/* Breadcrumb */}
//           <div className="flex items-center text-xs text-gray-500 gap-2 mb-6">
//             <Link to="/" className="hover:text-blue-400">
//               Home
//             </Link>
//             <ChevronRight size={14} />
//             <Link to="/blog" className="hover:text-blue-400">
//               Blog
//             </Link>
//             <ChevronRight size={14} />
//             <span className="text-blue-400">
//               {blog.categories?.[0]?.name}
//             </span>
//           </div>

//           {/* Meta */}
//           <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-8">
//             <span>
//               By <span className="text-white">{blog.author}</span>
//             </span>
//             <span className="flex items-center gap-1">
//               <Calendar size={14} />
//               {new Date(blog.createdAt).toLocaleDateString()}
//             </span>
//             <span className="flex items-center gap-1">
//               <Clock size={14} />
//               {blog.readTime || "5 min read"}
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight mb-10">
//             {blog.title}
//           </h1>

//           {/* Intro */}
//           <p className="text-gray-300 text-2xl leading-relaxed max-w-4xl">
//             {blog.excerpt}
//           </p>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="max-w-7xl mx-auto px-6 py-32">
//         <div className="grid grid-cols-12 gap-16">
//           {/* MAIN CONTENT */}
//           <div className="col-span-12 lg:col-span-9 space-y-24">
//             {/* FEATURE IMAGE */}
//             {blog.blogImage && (
//               <img
//                 src={blog.blogImage}
//                 alt={blog.title}
//                 className="rounded-[2.5rem] border border-white/10"
//               />
//             )}

//             {/* BLOG CONTENT */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="prose prose-invert max-w-none prose-lg"
//               dangerouslySetInnerHTML={{
//                 __html: blog.content,
//               }}
//             />
//           </div>

//           {/* RIGHT WHITESPACE */}
//           <div className="hidden lg:block col-span-3"></div>
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="max-w-7xl mx-auto px-6 mb-40">
//         <div className="bg-[#11112b] border border-white/10 rounded-[3rem] p-16 text-center relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10" />
//           <h2 className="relative text-4xl md:text-5xl font-black mb-6">
//             Ready to Scale Your Business?
//           </h2>
//           <p className="relative text-gray-400 mb-10 max-w-3xl mx-auto text-xl">
//             Let our experts turn strategy into measurable growth.
//           </p>
//           <button className="relative px-14 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-lg shadow-xl">
//             Get Started 🚀
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default BlogDetail;







// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Calendar, Clock, ChevronRight } from "lucide-react";
// import Footer from "./footer";
// import { useGetBlogBySlugQuery } from "../features/blogs/blogsApi";

// // Markdown support
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm"; // for tables, strikethrough, task lists
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// const BlogDetail = () => {
//   const { slug } = useParams();

//   const { data: blogRes, isLoading } = useGetBlogBySlugQuery(slug);
//   const blog = blogRes?.data || blogRes;

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a] text-white">
//         Loading blog...
//       </div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a] text-white">
//         Blog not found
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#0a0a1a] text-white">
//       {/* HEADER */}
//       <div className="max-w-7xl mx-auto px-6 pt-32">
//         <div className="max-w-5xl">
//           {/* Breadcrumb */}
//           <div className="flex items-center text-xs text-gray-500 gap-2 mb-6">
//             <Link to="/" className="hover:text-blue-400">
//               Home
//             </Link>
//             <ChevronRight size={14} />
//             <Link to="/blog" className="hover:text-blue-400">
//               Blog
//             </Link>
//             <ChevronRight size={14} />
//             <span className="text-blue-400">
//               {blog.categories?.[0]?.name}
//             </span>
//           </div>

//           {/* Meta */}
//           <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-8">
//             <span>
//               By <span className="text-white">{blog.author}</span>
//             </span>
//             <span className="flex items-center gap-1">
//               <Calendar size={14} />
//               {new Date(blog.createdAt).toLocaleDateString()}
//             </span>
//             <span className="flex items-center gap-1">
//               <Clock size={14} />
//               {blog.readTime || "5 min read"}
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight mb-10">
//             {blog.title}
//           </h1>

//           {/* Intro */}
//           <p className="text-gray-300 text-2xl leading-relaxed max-w-4xl">
//             {blog.excerpt}
//           </p>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="max-w-7xl mx-auto px-6 py-32">
//         <div className="grid grid-cols-12 gap-16">
//           {/* MAIN CONTENT */}
//           <div className="col-span-12 lg:col-span-9 space-y-24">
//             {/* FEATURE IMAGE */}
//             {blog.blogImage && (
//               <img
//                 src={blog.blogImage}
//                 alt={blog.title}
//                 className="rounded-[2.5rem] border border-white/10"
//               />
//             )}

//             {/* MARKDOWN BLOG CONTENT */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="prose prose-invert max-w-none prose-lg"
//             >
//               <ReactMarkdown
//                 remarkPlugins={[remarkGfm]}
//                 components={{
//                   code({ node, inline, className, children, ...props }) {
//                     const match = /language-(\w+)/.exec(className || "");
//                     return !inline && match ? (
//                       <SyntaxHighlighter
//                         style={oneDark}
//                         language={match[1]}
//                         PreTag="div"
//                         {...props}
//                       >
//                         {String(children).replace(/\n$/, "")}
//                       </SyntaxHighlighter>
//                     ) : (
//                       <code className={className} {...props}>
//                         {children}
//                       </code>
//                     );
//                   },
//                   h1: ({ node, ...props }) => (
//                     <h1 className="text-4xl font-black mt-8 mb-4" {...props} />
//                   ),
//                   h2: ({ node, ...props }) => (
//                     <h2 className="text-3xl font-bold mt-6 mb-3" {...props} />
//                   ),
//                   h3: ({ node, ...props }) => (
//                     <h3 className="text-2xl font-bold mt-5 mb-2" {...props} />
//                   ),
//                   p: ({ node, ...props }) => (
//                     <p className="text-gray-300 text-lg leading-relaxed mb-4" {...props} />
//                   ),
//                   li: ({ node, ...props }) => (
//                     <li className="mb-2 ml-5 list-disc" {...props} />
//                   ),
//                 }}
//               >
//                 {blog.content}
//               </ReactMarkdown>
//             </motion.div>
//           </div>

//           {/* RIGHT WHITESPACE */}
//           <div className="hidden lg:block col-span-3"></div>
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="max-w-7xl mx-auto px-6 mb-40">
//         <div className="bg-[#11112b] border border-white/10 rounded-[3rem] p-16 text-center relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10" />
//           <h2 className="relative text-4xl md:text-5xl font-black mb-6">
//             Ready to Scale Your Business?
//           </h2>
//           <p className="relative text-gray-400 mb-10 max-w-3xl mx-auto text-xl">
//             Let our experts turn strategy into measurable growth.
//           </p>
//           <button className="relative px-14 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-lg shadow-xl">
//             Get Started 🚀
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default BlogDetail;











// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Calendar, Clock, ChevronRight } from "lucide-react";
// import Footer from "./footer";
// import { useGetBlogBySlugQuery } from "../features/blogs/blogsApi";

// // Markdown support
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm"; // tables, strikethrough, task lists
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// const BlogDetail = () => {
//   const { slug } = useParams();

//   const { data: blogRes, isLoading } = useGetBlogBySlugQuery(slug);
//   const blog = blogRes?.data || blogRes;

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a] text-white">
//         Loading blog...
//       </div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a] text-white">
//         Blog not found
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#0a0a1a] text-white">
//       {/* HEADER */}
//       <div className="max-w-7xl mx-auto px-6 pt-32">
//         <div className="max-w-5xl">
//           {/* Breadcrumb */}
//           <div className="flex items-center text-xs text-gray-500 gap-2 mb-6">
//             <Link to="/" className="hover:text-blue-400">Home</Link>
//             <ChevronRight size={14} />
//             <Link to="/blog" className="hover:text-blue-400">Blog</Link>
//             <ChevronRight size={14} />
//             <span className="text-blue-400">{blog.categories?.[0]?.name}</span>
//           </div>

//           {/* Meta */}
//           <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-8">
//             <span>By <span className="text-white">{blog.author}</span></span>
//             <span className="flex items-center gap-1">
//               <Calendar size={14} />
//               {new Date(blog.createdAt).toLocaleDateString()}
//             </span>
//             <span className="flex items-center gap-1">
//               <Clock size={14} />
//               {blog.readTime || "5 min read"}
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight mb-10">
//             {blog.title}
//           </h1>

//           {/* Intro */}
//           <p className="text-gray-300 text-2xl leading-relaxed max-w-4xl">{blog.excerpt}</p>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="max-w-7xl mx-auto px-6 py-32">
//         <div className="grid grid-cols-12 gap-16">
//           {/* MAIN CONTENT */}
//           <div className="col-span-12 lg:col-span-9 space-y-24">
//             {/* FEATURE IMAGE */}
//             {blog.blogImage && (
//               <img
//                 src={blog.blogImage}
//                 alt={blog.title}
//                 className="rounded-md        w-full 
//         h-[70vh] 
//         object-cover 
//  border border-white/10"
//               />
//             )}

//             {/* MARKDOWN BLOG CONTENT */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="prose prose-invert max-w-none prose-lg"
//             >
//               <ReactMarkdown
//                 remarkPlugins={[remarkGfm]}
//                 components={{
//                   code({ node, inline, className, children, ...props }) {
//                     const match = /language-(\w+)/.exec(className || "");
//                     return !inline && match ? (
//                       <SyntaxHighlighter
//                         style={oneDark}
//                         language={match[1]}
//                         PreTag="div"
//                         {...props}
//                       >
//                         {String(children).replace(/\n$/, "")}
//                       </SyntaxHighlighter>
//                     ) : (
//                       <code className={className} {...props}>{children}</code>
//                     );
//                   },
//                   h1: ({ node, ...props }) => <h1 className="text-4xl font-black mt-8 mb-4" {...props} />,
//                   h2: ({ node, ...props }) => <h2 className="text-3xl font-bold mt-6 mb-3" {...props} />,
//                   h3: ({ node, ...props }) => <h3 className="text-2xl font-bold mt-5 mb-2" {...props} />,
//                   p: ({ node, ...props }) => <p className="text-gray-300 text-lg leading-relaxed mb-4" {...props} />,
//                   li: ({ node, ...props }) => <li className="mb-2 ml-5 list-disc" {...props} />,
//                   table: ({ node, ...props }) => (
//                     <table className="table-auto border border-gray-500 text-left w-full mb-4" {...props} />
//                   ),
//                   th: ({ node, ...props }) => (
//                     <th className="border border-gray-500 px-2 py-1 bg-gray-700 text-white" {...props} />
//                   ),
//                   td: ({ node, ...props }) => (
//                     <td className="border border-gray-500 px-2 py-1" {...props} />
//                   ),
//                 }}
//               >
//                 {blog.content}
//               </ReactMarkdown>
//             </motion.div>
//           </div>

//           {/* RIGHT WHITESPACE */}
//           <div className="hidden lg:block col-span-3"></div>
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="max-w-7xl mx-auto px-6 mb-40">
//         <div className="bg-[#11112b] border border-white/10 rounded-[3rem] p-16 text-center relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10" />
//           <h2 className="relative text-4xl md:text-5xl font-black mb-6">Ready to Scale Your Business?</h2>
//           <p className="relative text-gray-400 mb-10 max-w-3xl mx-auto text-xl">
//             Let our experts turn strategy into measurable growth.
//           </p>
//           <button className="relative px-14 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-lg shadow-xl">
//             Get Started 🚀
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default BlogDetail;












// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Calendar, Clock, ChevronRight } from "lucide-react";
// import Footer from "./footer";
// import { useGetBlogBySlugQuery } from "../features/blogs/blogsApi";

// // Markdown support
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm"; // tables, strikethrough, task lists
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// const BlogDetail = () => {
//   const { slug } = useParams();

//   const { data: blogRes, isLoading } = useGetBlogBySlugQuery(slug);
//   const blog = blogRes?.data || blogRes;

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a] text-white">
//         Loading blog...
//       </div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a] text-white">
//         Blog not found
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#0a0a1a] text-white">
//       {/* HEADER */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 pt-20 md:pt-32">
//         <div className="max-w-5xl mx-auto">
//           {/* Breadcrumb */}
//           <div className="flex flex-wrap items-center text-xs text-gray-500 gap-2 mb-4 sm:mb-6">
//             <Link to="/" className="hover:text-blue-400">Home</Link>
//             <ChevronRight size={14} />
//             <Link to="/blog" className="hover:text-blue-400">Blog</Link>
//             <ChevronRight size={14} />
//             <span className="text-blue-400">{blog.categories?.[0]?.name}</span>
//           </div>

//           {/* Meta */}
//           <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-400 mb-6 sm:mb-8">
//             <span>By <span className="text-white">{blog.author}</span></span>
//             <span className="flex items-center gap-1">
//               <Calendar size={14} />
//               {new Date(blog.createdAt).toLocaleDateString()}
//             </span>
//             <span className="flex items-center gap-1">
//               <Clock size={14} />
//               {blog.readTime || "5 min read"}
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 sm:mb-10">
//             {blog.title}
//           </h1>

//           {/* Intro */}
//           <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-full sm:max-w-4xl mb-8">
//             {blog.excerpt}
//           </p>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-16 md:py-32">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
//           {/* MAIN CONTENT */}
//           <div className="col-span-12 lg:col-span-9 space-y-12 md:space-y-24">
//             {/* FEATURE IMAGE */}
//             {blog.blogImage && (
//               <img
//                 src={blog.blogImage}
//                 alt={blog.title}
//                 className="rounded-md w-full max-h-[70vh] object-cover border border-white/10"
//               />
//             )}

//             {/* MARKDOWN BLOG CONTENT */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="prose prose-invert max-w-full sm:max-w-none prose-lg"
//             >
//               <ReactMarkdown
//                 remarkPlugins={[remarkGfm]}
//                 components={{
//                   code({ node, inline, className, children, ...props }) {
//                     const match = /language-(\w+)/.exec(className || "");
//                     return !inline && match ? (
//                       <SyntaxHighlighter
//                         style={oneDark}
//                         language={match[1]}
//                         PreTag="div"
//                         {...props}
//                       >
//                         {String(children).replace(/\n$/, "")}
//                       </SyntaxHighlighter>
//                     ) : (
//                       <code className={className} {...props}>{children}</code>
//                     );
//                   },
//                   h1: ({ node, ...props }) => <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mt-6 mb-4" {...props} />,
//                   h2: ({ node, ...props }) => <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-5 mb-3" {...props} />,
//                   h3: ({ node, ...props }) => <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 mb-2" {...props} />,
//                   p: ({ node, ...props }) => <p className="text-gray-300 text-base sm:text-lg md:text-lg leading-relaxed mb-4" {...props} />,
//                   li: ({ node, ...props }) => <li className="mb-2 ml-5 list-disc" {...props} />,
//                   table: ({ node, ...props }) => (
//                     <div className="overflow-x-auto">
//                       <table className="table-auto border border-gray-500 text-left w-full mb-4" {...props} />
//                     </div>
//                   ),
//                   th: ({ node, ...props }) => (
//                     <th className="border border-gray-500 px-2 py-1 bg-gray-700 text-white" {...props} />
//                   ),
//                   td: ({ node, ...props }) => (
//                     <td className="border border-gray-500 px-2 py-1" {...props} />
//                   ),
//                 }}
//               >
//                 {blog.content}
//               </ReactMarkdown>
//             </motion.div>
//           </div>

//           {/* RIGHT WHITESPACE */}
//           <div className="hidden lg:block col-span-3"></div>
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 mb-20 sm:mb-32">
//         <div className="bg-[#11112b] border border-white/10 rounded-2xl sm:rounded-[3rem] p-8 sm:p-16 text-center relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10" />
//           <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
//             Ready to Scale Your Business?
//           </h2>
//           <p className="relative text-gray-400 mb-6 sm:mb-10 max-w-full sm:max-w-3xl mx-auto text-base sm:text-lg md:text-xl">
//             Let our experts turn strategy into measurable growth.
//           </p>
//           <button className="relative px-10 sm:px-14 py-3 sm:py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-base sm:text-lg shadow-xl">
//             Get Started 🚀
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default BlogDetail;














import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Footer from "./Footer";
import { useGetBlogBySlugQuery } from "../features/blogs/blogsApi";

// Markdown support
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogDetail = () => {
  const { slug } = useParams();

  const { data: blogRes, isLoading } = useGetBlogBySlugQuery(slug);
  const blog = blogRes?.data || blogRes;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a] text-white font-medium">
        Loading blog...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a] text-white font-medium">
        Blog not found
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a1a] text-white selection:bg-blue-500/30">
      {/* --- HEADER SECTION --- */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-20 md:pt-32">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-500 gap-2 mb-6 uppercase tracking-widest">
          <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
          <ChevronRight size={12} />
          <span className="text-blue-400 font-semibold">{blog.categories?.[0]?.name}</span>
        </div>

        {/* Title: Size optimized for readability */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
          {blog.title}
        </h1>

        {/* Intro Paragraph: Better size and weight */}
        <p className="text-gray-400 text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 font-medium">
          {blog.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-gray-500 border-b border-white/10 pb-8 mb-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
              {blog.author?.charAt(0)}
            </div>
            <span>By <span className="text-white font-semibold">{blog.author}</span></span>
          </div>
          <span className="flex items-center gap-1.5">
            <Calendar size={15} />
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={15} />
            {blog.readTime || "5 min read"}
          </span>
        </div>

        {/* FEATURE IMAGE: Placed between intro and content as requested */}
        {blog.blogImage && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12 md:mb-20"
          >
            <img
              src={blog.blogImage}
              alt={blog.title}
              className="rounded-2xl w-full aspect-video object-cover shadow-2xl border border-white/5"
            />
          </motion.div>
        )}
      </div>

      {/* --- MAIN BLOG CONTENT --- */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="prose prose-invert prose-lg max-w-none 
            prose-headings:tracking-tight prose-headings:font-bold
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-li:text-gray-300 prose-img:rounded-xl
            prose-strong:text-white prose-a:text-blue-400"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <div className="my-8 rounded-xl overflow-hidden border border-white/10">
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      customStyle={{ margin: 0, padding: '1.5rem' }}
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code className="bg-white/10 px-1.5 py-0.5 rounded text-blue-300 before:content-none after:content-none" {...props}>{children}</code>
                );
              },
              h1: ({ node, ...props }) => <h1 className="text-3xl sm:text-4xl font-black mt-12 mb-6 text-white" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-5 text-white/90 border-l-4 border-blue-500 pl-4" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-white/80" {...props} />,
              p: ({ node, ...props }) => <p className="mb-6" {...props} />,
              ul: ({ node, ...props }) => <ul className="my-6 space-y-2" {...props} />,
              table: ({ node, ...props }) => (
                <div className="my-8 overflow-x-auto rounded-xl border border-white/10">
                  <table className="min-w-full divide-y divide-white/10" {...props} />
                </div>
              ),
              th: ({ node, ...props }) => <th className="bg-white/5 px-4 py-3 text-sm font-bold text-white" {...props} />,
              td: ({ node, ...props }) => <td className="px-4 py-3 text-sm text-gray-400 border-t border-white/5" {...props} />,
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </motion.div>
      </div>

      {/* --- CALL TO ACTION --- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-20 sm:mb-32">
        <div className="bg-gradient-to-br from-[#11112b] to-[#0a0a1a] border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[100px] -z-10" />
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 tracking-tight">
            Ready to Scale Your Business?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Join 500+ companies using our strategies to turn potential into measurable digital growth.
          </p>
          <button className="px-10 py-4 sm:py-5 rounded-xl bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-bold text-white shadow-lg shadow-blue-500/20 active:scale-95">
            Get Started 🚀
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
