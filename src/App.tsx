import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage";
import i18n from './translations/i18n';


function App() {
  useEffect(() => {
    // Set the default language to 'en' if not set in local storage
    const storedLanguage = localStorage.getItem('language');
    if (!storedLanguage) {
      localStorage.setItem('language', 'en');
    } else {
         i18n.changeLanguage(storedLanguage);
    }
  }, []);
  return (
    <>
   <Router>
          <Routes>
            <Route path="/testPage" element={<TestPage />} />
            </Routes>
            </Router>
    </>
  );
}

export default App;
