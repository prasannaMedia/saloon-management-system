import { Link, useLocation } from 'react-router-dom'
import { Calendar, ShoppingBag, LayoutDashboard, Sparkles, Menu, X, Users, FileText, DollarSign, Scissors, Package, UsersRound } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [showCRM, setShowCRM] = useState(false)

  const navLinks = [
    { path: '/', label: 'Home', icon: Sparkles },
    { path: '/services', label: 'Services', icon: Sparkles },
    { path: '/products', label: 'Shop', icon: ShoppingBag },
    { path: '/booking', label: 'Book Now', icon: Calendar },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ]

  const crmLinks = [
    { path: '/crm/clients', label: 'Clients', icon: Users },
    { path: '/crm/invoices', label: 'Invoices', icon: FileText },
    { path: '/crm/sales', label: 'Sales', icon: DollarSign },
    { path: '/crm/services', label: 'Services', icon: Scissors },
    { path: '/crm/packages', label: 'Packages', icon: Package },
    { path: '/crm/staff', label: 'Staff', icon: UsersRound },
  ]

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-2 rounded-lg">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Fabb6
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                      : 'text-gray-700 hover:bg-pink-50 hover:text-pink-500'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              )
            })}
            
            {/* CRM Dropdown */}
            <div className="relative">
              <Link
                to="/crm"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname.startsWith('/crm')
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                    : 'text-gray-700 hover:bg-pink-50 hover:text-pink-500'
                }`}
                onMouseEnter={() => setShowCRM(true)}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="font-medium">CRM</span>
              </Link>
              
              {showCRM && (
                <div 
                  className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50"
                  onMouseLeave={() => setShowCRM(false)}
                >
                  <Link
                    to="/crm"
                    onClick={() => setShowCRM(false)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span className="text-sm font-medium">CRM Dashboard</span>
                  </Link>
                  <div className="border-t my-2"></div>
                  {crmLinks.map((link) => {
                    const Icon = link.icon
                    const isActive = location.pathname === link.path
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setShowCRM(false)}
                        className={`flex items-center space-x-2 px-4 py-2 transition-colors ${
                          isActive
                            ? 'bg-pink-50 text-pink-600'
                            : 'text-gray-700 hover:bg-pink-50 hover:text-pink-500'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{link.label}</span>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-pink-50"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                      : 'text-gray-700 hover:bg-pink-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              )
            })}
            
            {/* CRM Section */}
            <div className="pt-4 border-t border-gray-200">
              <div className="px-4 py-2">
                <span className="text-xs font-semibold text-gray-500 uppercase">CRM</span>
              </div>
              {crmLinks.map((link) => {
                const Icon = link.icon
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                        : 'text-gray-700 hover:bg-pink-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
