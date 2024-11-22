import React from "react";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>{/* Navbar Component */}</header>
      <main className="flex-grow">{children}</main>
      <footer>{/* Footer Component */}</footer>
    </div>
  );
};

export default MainLayout;
