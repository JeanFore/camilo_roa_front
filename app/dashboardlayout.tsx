import React, { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      {/* Componentes del layout del dashboard */}
      <header>Tu Navbar del Dashboard</header>
      <main>{children}</main>
      <footer>Tu Footer del Dashboard</footer>
    </>
  );
};

export default DashboardLayout;
