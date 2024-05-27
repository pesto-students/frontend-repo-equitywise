import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import MarketUpdate from './pages/MarketUpdate';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MyPortfolio from './pages/MyPortfolio';
import MyWishlist from './pages/MyWishlist';
import AboutUs from './pages/FooterPages/AboutUs';
import Careers from './pages/FooterPages/Careers';
import InvestorRelations from './pages/FooterPages/InvestorRelations';
import SecurityInformation from './pages/FooterPages/SecurityInformation';
import ContactUs from './pages/FooterPages/ContactUs';
import FAQ from './pages/FooterPages/FAQ';
// import PrivateRoute from './components/PrivateRoute'; // Comment out this import if not using it

function App() {
  const handleGoogleLoginSuccess = (response) => {
    console.log('Google Login Success:', response);
    // Handle login success (e.g., send token to your server or store it locally)
  };

  const handleGoogleLoginFailure = (response) => {
    console.log('Google Login Failed:', response);
    // Handle login failure
  };

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketupdate" element={<MarketUpdate />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myportfolio" element={<MyPortfolio />} />
          <Route path="/mywishlist" element={<MyWishlist />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/security" element={<SecurityInformation />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;


//import React from 'react';
//import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import Home from './pages/Home';
//import MarketUpdate from './pages/MarketUpdate';
//import Signup from './pages/Signup';
//import Login from './pages/Login';
//import MyPortfolio from './pages/MyPortfolio';
//import MyWishlist from './pages/MyWishlist';
//import AboutUs from './pages/FooterPages/AboutUs';
//import Careers from './pages/FooterPages/Careers';
//import InvestorRelations from './pages/FooterPages/InvestorRelations';
//import SecurityInformation from './pages/FooterPages/SecurityInformation';
//import ContactUs from './pages/FooterPages/ContactUs';
//import FAQ from './pages/FooterPages/FAQ';
//import PrivateRoute from './components/PrivateRoute';

//function App() {
//  const handleGoogleLoginSuccess = (response) => {
//    console.log('Google Login Success:', response);
//    // Handle login success (e.g., send token to your server or store it locally)
//  };

//  const handleGoogleLoginFailure = (response) => {
//    console.log('Google Login Failed:', response);
//    // Handle login failure
//  };

//  return (
//    <Router>
//      <>
//        <Routes>
//          <Route path="/" element={<Home />} />
//          <Route path="/marketupdate" element={<MarketUpdate />} />
//          <Route path="/signup" element={<Signup />} />
//          <Route path="/login" element={<Login />} />
//          <Route path="/myportfolio" element={<PrivateRoute />}>
//            <Route path="/myportfolio" element={<MyPortfolio />} />
//          </Route>
//          <Route path="/mywishlist" element={<PrivateRoute />}>
//            <Route path="/mywishlist" element={<MyWishlist />} />
//          </Route>
//          <Route path="/about" element={<AboutUs />} />
//          <Route path="/careers" element={<Careers />} />
//          <Route path="/investor-relations" element={<InvestorRelations />} />
//          <Route path="/security" element={<SecurityInformation />} />
//          <Route path="/contact" element={<ContactUs />} />
//          <Route path="/faq" element={<FAQ />} />
//          <Route path="*" element={<Navigate to="/" />} />
//        </Routes>
//      </>
//    </Router>
//  );
//}

//export default App;