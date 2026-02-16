// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Components
// import Navbar from './components/Navbar';
// import Footer from './pages/footer'; 

// // Home Page Sections
// import Hero from './pages/Hero';
// import OurServices from './pages/OurServices';
// import Testimonials from './pages/Testimonials';
// import CTASection from './pages/CTASection';

// // Portfolio & Service Pages
// import Portfolio from './pages/Portfolio';
// import Offers from './pages/Offers';
// import Contact from './pages/Contact'; 
// import ReadMore from './pages/ReadMore'; 
// import ReadMore1 from './pages/Readmore1'; 
// import ReadMore2 from './pages/ReadMore2';
// import ReadMore3 from './pages/ReadMore3'; // Apps Development Page
// import ReadMore3 from './pages/ReadMore4'; // Apps Development Page

// function App() {
//   return (
//     <Router>
//       <div className="bg-black min-h-screen">
//         <Navbar />
        
//         <Routes>
//           {/* Main Home Page */}
//           <Route path="/" element={
//             <main>
//               <Hero />
//               <OurServices />
//               <Testimonials/>
//               <CTASection />
//               <Footer />
//             </main>
//           } />
          
//           {/* Service Pages Routes */}
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/read-more" element={<ReadMore />} />   {/* Web Development */}
//           <Route path="/read-more1" element={<ReadMore1 />} /> {/* Digital Marketing */}
//           <Route path="/read-more2" element={<ReadMore2 />} /> {/* Shopify */}
//           <Route path="/read-more3" element={<ReadMore3 />} /> {/* Apps Development (Fixed Path) */}
//           <Route path="/read-more4" element={<ReadMore4 />} /> {/* Apps Development (Fixed Path) */}
          
//           <Route path="/offers" element={<Offers/>} />
          
//           {/* Blog & Contact */}
//           <Route path="/blog" element={<div className="text-white pt-32 text-center">Blog Page</div>} />
//           <Route path="/contact" element={<Contact/>} /> 
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Components
// import Navbar from './components/Navbar';
// import Footer from './pages/footer'; 

// // Home Page Sections
// import Hero from './pages/Hero';
// import OurServices from './pages/OurServices';
// import Testimonials from './pages/Testimonials';
// import CTASection from './pages/CTASection';

// // Portfolio & Service Pages
// import Portfolio from './pages/Portfolio';
// import Offers from './pages/Offers';
// import Contact from './pages/Contact'; 

// // Service Detail Pages (Read More)
// import ReadMore from './pages/ReadMore';   // Web Development
// import ReadMore1 from './pages/Readmore1'; // Digital Marketing
// import ReadMore2 from './pages/ReadMore2'; // Shopify/E-Commerce
// import ReadMore3 from './pages/ReadMore3'; // Apps Development
// import ReadMore4 from './pages/ReadMore4'; // SEO Services (Fixed)
// import ReadMore5 from './pages/ReadMore5';
// import BlogList from './pages/BlogList';
// import BlogDetail from './pages/BlogDetail';

// function App() {
//   return (
//     <Router>
//       <div className="bg-black min-h-screen">
//         <Navbar />
        
//         <Routes>
//           {/* Main Home Page */}
//           <Route path="/" element={
//             <main>
//               <Hero />
//               <OurServices />
//               <Testimonials/>
//               <CTASection />
//               <Footer />
//             </main>
//           } />
          
//           {/* Portfolio & Offers */}
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/offers" element={<Offers/>} />
          
//           {/* All Service Detail Routes */}
//           <Route path="/read-more" element={<ReadMore />} />
//           <Route path="/read-more1" element={<ReadMore1 />} />
//           <Route path="/read-more2" element={<ReadMore2 />} />
//           <Route path="/read-more3" element={<ReadMore3 />} />
//           <Route path="/read-more4" element={<ReadMore4 />} />
//           <Route path="/read-more5" element={<ReadMore5 />} />
          
//           {/* Blog & Contact */}
//           <Route path="/blog" element={<BlogList/>} />
//          <Route path="/blog/:slug" element={<BlogDetail/>} />
//           <Route path="/contact" element={<Contact/>} /> 
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;










import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './pages/Footer'; 

// Home Page Sections
import Hero from './pages/Hero';
import OurServices from './pages/OurServices';
import Testimonials from './pages/Testimonials';
import CTASection from './pages/CTASection';

// Portfolio & Service Pages
import Portfolio from './pages/Portfolio';
import Offers from './pages/Offers';
import Contact from './pages/Contact'; 

// Service Detail Pages (Read More)
import ReadMore from './pages/ReadMore';   
import ReadMore1 from './pages/Readmore1'; 
import ReadMore2 from './pages/ReadMore2'; 
import ReadMore3 from './pages/ReadMore3'; 
import ReadMore4 from './pages/ReadMore4'; 
import ReadMore5 from './pages/ReadMore5';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';

// --- Auth Pages ---
import Login from './auth/Login';
import Register from './auth/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './pages/ProtectedRoutes';

// --- Protected Route Wrapper ---
//import ProtectedRoute from './auth/ProtectedRoute'; // 👈 optional, agar future admin dashboard banega

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Navbar />
        
        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={
            <main>
              <Hero />
              <OurServices />
              <Testimonials/>
              <CTASection />
              <Footer />
            </main>
          } />
          
          {/* Portfolio & Offers */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/offers" element={<Offers/>} />
          
          {/* Service Detail Pages */}
          <Route path="/read-more" element={<ReadMore />} />
          <Route path="/read-more1" element={<ReadMore1 />} />
          <Route path="/read-more2" element={<ReadMore2 />} />
          <Route path="/read-more3" element={<ReadMore3 />} />
          <Route path="/read-more4" element={<ReadMore4 />} />
          <Route path="/read-more5" element={<ReadMore5 />} />
          
          {/* Blog Pages */}
          <Route path="/blog" element={<BlogList/>} />
          <Route path="/blog/:slug" element={<BlogDetail/>} />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact/>} /> 

          {/* --- Auth Routes --- */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Example: Protected Admin Route (future) */}
            <Route element={<ProtectedRoutes />}>
           <Route path="/dashboard" element={<Dashboard />}/> 
</Route>


 

        </Routes>


         
      </div>
    </Router>
  );
}

export default App;
