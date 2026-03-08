import React, { useState, useEffect } from 'react';

// Import Member 1: Framework & Styles
import './styles/App.css'; 

// Import Member 2: Navigation
import Navigation from './components/Navigation'; 

// Import Member 3: Content Pages
import Home from './pages/Home'; 

// Import Member 4: Legal Document Vault
import DocumentVault from './components/DocumentVault'; 

// Import Member 5: Grants & Dashboard
import Grants from './pages/GrantsAndDashboard'; 

// Import Member 6: Claude AI Assistant
import AIAssistant from './components/AIAssistant'; 

export default function App() {
  // --- GLOBAL STATE MANAGEMENT ---
  const [currentPage, setCurrentPage] = useState('home');
  const [userProfile, setUserProfile] = useState(null);
  
  // Modal & Vault State
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [activeDocId, setActiveDocId] = useState(null);

  // --- MEMBER 1: CUSTOM CURSOR EFFECT ---
  // We attach the vanilla JS cursor logic to the React lifecycle
  useEffect(() => {
    const cur = document.getElementById('cur');
    const crng = document.getElementById('cur-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    let animationFrame;

    const onMouseMove = (e) => {
      mx = e.clientX; 
      my = e.clientY;
      if (cur) { cur.style.left = mx + 'px'; cur.style.top = my + 'px'; }
    };

    const animate = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (crng) { crng.style.left = rx + 'px'; crng.style.top = ry + 'px'; }
      animationFrame = requestAnimationFrame(animate);
    };

    const onMouseDown = () => document.body.classList.add('clicking');
    const onMouseUp = () => document.body.classList.remove('clicking');

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    animate();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // --- ROUTING & HANDLERS ---
  const openVault = (docId) => {
    setActiveDocId(docId);
    setIsVaultOpen(true);
  };

  const closeVault = () => {
    setIsVaultOpen(false);
    setActiveDocId(null);
  };

  // Simple router function to render pages based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home goToPage={setCurrentPage} />;
      case 'funding':
        return <Grants goToPage={setCurrentPage} />;
      // Note: You would create separate components for Onboarding, Login, and Dashboard
      // case 'ob': return <Onboarding goToPage={setCurrentPage} setUserProfile={setUserProfile} />;
      // case 'db': return <Dashboard userProfile={userProfile} openVault={openVault} />;
      default:
        return <Home goToPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-container">
      {/* Custom Cursor DOM Elements */}
      <div id="cur"></div>
      <div id="cur-ring"></div>

      {/* Member 2: Navigation Component */}
      <Navigation 
        setCurrentPage={setCurrentPage} 
      />

      {/* Dynamic Page Rendering (Member 3, Member 5, etc.) */}
      <main>
        {renderPage()}
      </main>

      {/* Member 4: Document Vault Overlay */}
      <DocumentVault 
        isOpen={isVaultOpen} 
        closeVault={closeVault} 
        activeDocId={activeDocId} 
      />

      {/* Member 6: Floating AI Assistant */}
      <AIAssistant 
        userProfile={userProfile} 
      />
    </div>
  );
}

