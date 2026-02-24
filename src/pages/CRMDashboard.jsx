import React from 'react';
import { Link } from 'react-router-dom';
import { Users, FileText, DollarSign, Scissors, Package, UsersRound, Calendar, TrendingUp } from 'lucide-react';

const CRMDashboard = () => {
  const crmModules = [
    {
      path: '/crm/clients',
      title: 'Clients',
      description: 'Manage client information, appointments, and history',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      stats: '150+ clients'
    },
    {
      path: '/crm/invoices',
      title: 'Invoices',
      description: 'Create and manage professional invoices',
      icon: FileText,
      color: 'from-purple-500 to-purple-600',
      stats: '45 pending'
    },
    {
      path: '/crm/sales',
      title: 'Sales History',
      description: 'Track all appointments and sales transactions',
      icon: DollarSign,
      color: 'from-green-500 to-green-600',
      stats: '$12.5K this month'
    },
    {
      path: '/crm/services',
      title: 'Services',
      description: 'Configure and manage your service catalog',
      icon: Scissors,
      color: 'from-pink-500 to-rose-500',
      stats: '24 services'
    },
    {
      path: '/crm/packages',
      title: 'Packages',
      description: 'Create service bundles and loyalty packages',
      icon: Package,
      color: 'from-orange-500 to-orange-600',
      stats: '8 packages'
    },
    {
      path: '/crm/staff',
      title: 'Staff Management',
      description: 'Manage team members, schedules, and permissions',
      icon: UsersRound,
      color: 'from-indigo-500 to-indigo-600',
      stats: '6 team members'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">CRM Dashboard</h1>
          <p className="text-gray-600">Manage your salon business efficiently</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Today's Appointments</span>
              <Calendar className="w-5 h-5 text-pink-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">12</p>
            <p className="text-sm text-green-600 mt-1">↑ 8% from yesterday</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Revenue Today</span>
              <DollarSign className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">$2,450</p>
            <p className="text-sm text-green-600 mt-1">↑ 12% from yesterday</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Active Clients</span>
              <Users className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">156</p>
            <p className="text-sm text-green-600 mt-1">↑ 5 new this week</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Pending Invoices</span>
              <FileText className="w-5 h-5 text-orange-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">8</p>
            <p className="text-sm text-gray-600 mt-1">Total: $3,200</p>
          </div>
        </div>

        {/* CRM Modules Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">CRM Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crmModules.map((module) => {
              const Icon = module.icon;
              return (
                <Link
                  key={module.path}
                  to={module.path}
                  className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-200 overflow-hidden group"
                >
                  <div className={`h-2 bg-gradient-to-r ${module.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${module.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <svg 
                        className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{module.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm font-medium text-gray-500">{module.stats}</span>
                      <span className="text-sm text-pink-600 font-medium group-hover:underline">Open →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              to="/crm/clients"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-pink-500 hover:bg-pink-50 transition-colors text-center"
            >
              <Users className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-700">Add Client</span>
            </Link>
            
            <Link 
              to="/booking"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-pink-500 hover:bg-pink-50 transition-colors text-center"
            >
              <Calendar className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-700">Book Appointment</span>
            </Link>
            
            <Link 
              to="/crm/invoices"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-pink-500 hover:bg-pink-50 transition-colors text-center"
            >
              <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-700">Create Invoice</span>
            </Link>
            
            <Link 
              to="/crm/services"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-pink-500 hover:bg-pink-50 transition-colors text-center"
            >
              <Scissors className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-700">Add Service</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMDashboard;
