import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users, Calendar, Download, Filter, FileText } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Reports = () => {
  const [dateRange, setDateRange] = useState('This Month');

  const revenueData = [
    { month: 'Jan', revenue: 12400, appointments: 45 },
    { month: 'Feb', revenue: 15800, appointments: 52 },
    { month: 'Mar', revenue: 14200, appointments: 48 },
    { month: 'Apr', revenue: 18900, appointments: 61 },
    { month: 'May', revenue: 16500, appointments: 54 },
    { month: 'Jun', revenue: 21300, appointments: 68 },
  ];

  const serviceData = [
    { name: 'Haircut & Style', value: 35, revenue: 8400 },
    { name: 'Hair Coloring', value: 25, revenue: 6500 },
    { name: 'Manicure', value: 20, revenue: 3200 },
    { name: 'Spa Treatment', value: 12, revenue: 2400 },
    { name: 'Others', value: 8, revenue: 800 },
  ];

  const staffPerformance = [
    { name: 'Emma Thompson', appointments: 128, revenue: 12800, rating: 4.9 },
    { name: 'Lisa Anderson', appointments: 98, revenue: 9200, rating: 4.8 },
    { name: 'Michael Brown', appointments: 86, revenue: 8600, rating: 4.7 },
    { name: 'Sarah Wilson', appointments: 72, revenue: 6800, rating: 4.8 },
  ];

  const COLORS = ['#EC4899', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
            <div className="flex items-center gap-3">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
                <option>This Year</option>
                <option>Custom Range</option>
              </select>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-5 h-5 text-gray-600" />
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:opacity-90 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Total Revenue</span>
              <DollarSign className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">$21,300</p>
            <p className="text-sm text-green-600 mt-1">↑ 18% from last month</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Total Appointments</span>
              <Calendar className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">68</p>
            <p className="text-sm text-green-600 mt-1">↑ 12% from last month</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">New Clients</span>
              <Users className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">24</p>
            <p className="text-sm text-green-600 mt-1">↑ 8% from last month</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Avg. Booking Value</span>
              <TrendingUp className="w-5 h-5 text-pink-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">$313</p>
            <p className="text-sm text-green-600 mt-1">↑ 5% from last month</p>
          </div>
        </div>

        {/* Revenue Trend */}
        <div className="bg-white rounded-xl p-6 shadow-sm border mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-pink-500 rounded"></div>
                <span className="text-sm text-gray-600">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-sm text-gray-600">Appointments</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#EC4899" strokeWidth={2} />
              <Line yAxisId="right" type="monotone" dataKey="appointments" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Services Breakdown */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Services Breakdown</h3>
            <div className="flex items-center justify-between">
              <ResponsiveContainer width="50%" height={200}>
                <PieChart>
                  <Pie
                    data={serviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {serviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-3">
                {serviceData.map((service, index) => (
                  <div key={service.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <span className="text-sm text-gray-600">{service.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{service.value}%</div>
                      <div className="text-xs text-gray-500">${service.revenue}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Services */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Revenue by Service</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={serviceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#EC4899" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Staff Performance */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Staff Performance</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Staff Member</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-700">Appointments</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-700">Revenue</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-700">Rating</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-700">Performance</th>
                </tr>
              </thead>
              <tbody>
                {staffPerformance.map((staff, index) => (
                  <tr key={staff.name} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-medium">
                          {staff.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-medium text-gray-900">{staff.name}</span>
                      </div>
                    </td>
                    <td className="text-right py-4 px-4 text-gray-900">{staff.appointments}</td>
                    <td className="text-right py-4 px-4 text-gray-900 font-medium">${staff.revenue.toLocaleString()}</td>
                    <td className="text-right py-4 px-4">
                      <div className="flex items-center justify-end gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-gray-900">{staff.rating}</span>
                      </div>
                    </td>
                    <td className="text-right py-4 px-4">
                      <div className="w-full bg-gray-200 rounded-full h-2 max-w-24 ml-auto">
                        <div
                          className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full"
                          style={{ width: `${(staff.revenue / 12800) * 100}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Reports */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <button className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow text-left">
            <FileText className="w-8 h-8 text-pink-500 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-1">Sales Report</h4>
            <p className="text-sm text-gray-600">Detailed sales and transaction history</p>
          </button>

          <button className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow text-left">
            <Users className="w-8 h-8 text-blue-500 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-1">Client Report</h4>
            <p className="text-sm text-gray-600">Client retention and acquisition metrics</p>
          </button>

          <button className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow text-left">
            <TrendingUp className="w-8 h-8 text-green-500 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-1">Growth Report</h4>
            <p className="text-sm text-gray-600">Business growth and trends analysis</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
