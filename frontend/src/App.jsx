import { useState } from "react";

// import ProtectedRoute from './contexts/ProtectedRoute'
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";

import HomePage from "./pages/HomePage";
import { AuthProvider } from "./Context/AuthContext";
import Navbar from "./comonents/Navbar";
import Footerr from "./comonents/Footerr";
import Result from "./pages/Result";
import Quiz from "./pages/Quiz";


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
             <Route path="/result" element={<Result />} />
               <Route path="/quiz" element={<Quiz />} />

            

            

            <Route
              path="*"
              element={
                <div className="flex h-screen items-center justify-center text-2xl font-semibold text-red-600">
                  Not a valid page 🚫
                </div>
              }
            />
          </Routes>
         <Footerr />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
