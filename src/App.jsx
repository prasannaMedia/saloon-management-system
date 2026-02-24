import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Services from './pages/Services'
import Products from './pages/Products'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import CRMDashboard from './pages/CRMDashboard'
import Clients from './pages/Clients'
import Invoices from './pages/Invoices'
import SalesHistory from './pages/SalesHistory'
import ServicesCRM from './pages/ServicesCRM'
import Packages from './pages/Packages'
import Staff from './pages/Staff'
import Inventory from './pages/Inventory'
import Marketing from './pages/Marketing'
import Calendar from './pages/Calendar'
import Reports from './pages/Reports'

function AppContent() {
  const location = useLocation();
  
  // Routes that should use sidebar instead of navbar
  const sidebarRoutes = ['/crm', '/inventory', '/marketing', '/calendar', '/payments', '/team', '/settings', '/insights'];
  const useSidebar = sidebarRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div className="min-h-screen bg-gray-50">
      {useSidebar ? (
        <>
          <Sidebar />
          <div className="lg:pl-64">
            <Routes>
              <Route path="/crm" element={<CRMDashboard />} />
              <Route path="/crm/clients" element={<Clients />} />
              <Route path="/crm/invoices" element={<Invoices />} />
              <Route path="/crm/sales" element={<SalesHistory />} />
              <Route path="/crm/services" element={<ServicesCRM />} />
              <Route path="/crm/packages" element={<Packages />} />
              <Route path="/crm/staff" element={<Staff />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/insights/reports" element={<Reports />} />
            </Routes>
          </div>
        </>
      ) : (
        <div className="bg-gradient-to-br from-pink-50 via-white to-rose-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
