import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop";

const MainLayouts = () => {
  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-700 ease-in-out
      /* Light Mode: Warm, organic tones */
      bg-linear-to-br from-[#fafaf9] via-[#e7e5e4] to-[#d6d3d1] 
      /* Dark Mode: Deep, professional Charcoal/Slate */
      dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] 
      selection:bg-teal-500/30 selection:text-white"
    >
      <ScrollToTop></ScrollToTop>
      {/* Grain Texture - This makes the dark mode look 'Matte' instead of flat */}
      <div className="fixed inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none -z-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

      {/* Floating Ambient Glow (Top Right) */}
      <div
        className="fixed top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full 
        bg-orange-200/20 dark:bg-blue-500/10 blur-[100px] -z-10 animate-pulse"
      ></div>

      <Navbar />

      <main className="grow relative z-10 px-4 md:px-12 py-8 lg:px-24">
        <div className="max-w-7xl mx-auto w-full">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayouts;
