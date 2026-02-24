import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  CreditCard, 
  Users, 
  LayoutGrid, 
  UsersRound,
  Megaphone,
  TrendingUp,
  Package,
  DollarSign,
  Settings,
  ChevronDown,
  ChevronRight,
  Scissors,
  Gift,
  Crown,
  Users2,
  Clock,
  Percent,
  Clock3,
  Sparkles,
  Menu,
  X
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState({
    payments: false,
    catalog: true,
    team: false,
    insights: false
  });
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = (menu) => {
    setExpandedMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  const isActive = (path) => location.pathname === path;
  const isParentActive = (paths) => paths.some(path => location.pathname.startsWith(path));

  const menuItems = [
    {
      icon: Calendar,
      label: 'Calendar',
      path: '/calendar'
    },
    {
      icon: CreditCard,
      label: 'Payments',
      expandable: true,
      key: 'payments',
      subItems: [
        { label: 'Gift Cards', path: '/payments/gift-cards' },
        { label: 'Invoices', path: '/crm/invoices' },
        { label: 'Sales history', path: '/crm/sales' }
      ]
    },
    {
      icon: Users,
      label: 'Clients',
      path: '/crm/clients'
    },
    {
      icon: LayoutGrid,
      label: 'Catalog',
      expandable: true,
      key: 'catalog',
      subItems: [
        { label: 'Services', path: '/crm/services', icon: Scissors },
        { label: 'Packages', path: '/crm/packages', icon: Gift },
        { label: 'Memberships', path: '/memberships', icon: Crown },
        { label: 'Resources', path: '/resources', icon: Package, badge: 'Beta' }
      ]
    },
    {
      icon: Users2,
      label: 'Team',
      expandable: true,
      key: 'team',
      subItems: [
        { label: 'Staff', path: '/crm/staff' },
        { label: 'Payroll', path: '/team/payroll' },
        { label: 'Commissions', path: '/team/commissions' },
        { label: 'Time tracking', path: '/team/time-tracking' }
      ]
    },
    {
      icon: Megaphone,
      label: 'Marketing',
      path: '/marketing'
    },
    {
      icon: TrendingUp,
      label: 'Insights',
      expandable: true,
      key: 'insights',
      subItems: [
        { label: 'Analytics', path: '/insights/analytics' },
        { label: 'Reports', path: '/insights/reports' }
      ]
    },
    {
      icon: Package,
      label: 'Inventory',
      path: '/inventory'
    },
    {
      icon: DollarSign,
      label: 'Fabb6 Financing',
      path: '/financing'
    },
    {
      icon: Sparkles,
      label: 'Fabb6 Shop',
      path: '/products',
      badge: 'New'
    },
    {
      icon: Clock3,
      label: 'Upcoming',
      path: '/upcoming'
    }
  ];

  const SidebarContent = () => (
    <>
      {/* User Profile */}
      <div className="p-4 border-b flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold">PN</span>
        </div>
        <div className="flex-1">
          <p className="font-semibold text-gray-900">Prasanna Naik</p>
          <button className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1">
            <span>Switch account</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
          <span>0/3 Get Started</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div className="bg-pink-500 h-1.5 rounded-full" style={{ width: '0%' }}></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-2">
        {menuItems.map((item) => (
          <div key={item.label}>
            {item.expandable ? (
              <>
                <button
                  onClick={() => toggleMenu(item.key)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-gray-100 ${
                    isParentActive(item.subItems?.map(sub => sub.path) || []) ? 'bg-gray-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-700">{item.label}</span>
                  </div>
                  {expandedMenus[item.key] ? (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  )}
                </button>
                {expandedMenus[item.key] && (
                  <div className="bg-gray-50">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setIsMobileOpen(false)}
                        className={`flex items-center gap-3 pl-12 pr-4 py-2.5 text-sm hover:bg-gray-100 ${
                          isActive(subItem.path) ? 'bg-pink-50 text-pink-600 border-l-4 border-pink-500' : 'text-gray-700'
                        }`}
                      >
                        {subItem.icon && <subItem.icon className="w-4 h-4" />}
                        <span>{subItem.label}</span>
                        {subItem.badge && (
                          <span className="ml-auto px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded">
                            {subItem.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-100 ${
                  isActive(item.path) ? 'bg-pink-50 text-pink-600 border-l-4 border-pink-500' : 'text-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded">
                    {item.badge}
                  </span>
                )}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t">
        <Link
          to="/referral"
          className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
        >
          <Gift className="w-5 h-5" />
          <span>Refer and get $30</span>
        </Link>
        <Link
          to="/settings"
          className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Link>
        <div className="px-4 py-3 border-t">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-1.5 rounded-lg">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">FABB6</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white border-r w-64 flex flex-col z-40 transform transition-transform duration-300 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <SidebarContent />
      </aside>
    </>
  );
};

export default Sidebar;
