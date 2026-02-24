import React, { useState } from 'react';
import { Users, Clock, DollarSign, Settings } from 'lucide-react';

const Staff = () => {
  const [staff, setStaff] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Staff</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Banner */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-12 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
              <Users className="w-8 h-8 text-gray-700" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Staff</h2>
              <p className="text-gray-700">Manage your staff, all in one place.</p>
            </div>
          </div>

          <div className="flex gap-3 mb-12">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 font-medium">
              Set up staff
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-white font-medium">
              It's just me
            </button>
          </div>

          {/* Staff Image */}
          <div className="flex justify-end">
            <div className="w-64 h-48 bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400" 
                alt="Staff"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">How it works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Better management, less work</h4>
              <p className="text-sm text-gray-600">
                Be a better manager with onboarding, offboarding, staff availability, service assignments, timesheets, payroll, commissions and more.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Your management needs, in one app</h4>
              <p className="text-sm text-gray-600">
                Fabb6 centralizes the essential tools that you need to manage your team easily, in one easy place.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Customizable permissions & control</h4>
              <p className="text-sm text-gray-600">
                With some of the industry's most powerful permission tools and role controls, we help you customize what staff can see and do.
              </p>
            </div>
          </div>
        </div>

        {/* Staff List */}
        {staff.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm">
            <div className="px-6 py-4 border-b">
              <h3 className="font-semibold text-gray-900">Team Members</h3>
            </div>
            <div>
              <div className="grid grid-cols-5 gap-4 px-6 py-3 bg-gray-50 text-sm font-medium text-gray-700 border-b">
                <div>Name</div>
                <div>Role</div>
                <div>Email</div>
                <div>Phone</div>
                <div>Status</div>
              </div>
              
              {staff.map((member) => (
                <div key={member.id} className="grid grid-cols-5 gap-4 px-6 py-4 border-b hover:bg-gray-50 items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-medium">
                      {member.initials}
                    </div>
                    <span className="font-medium text-gray-900">{member.name}</span>
                  </div>
                  <div className="text-gray-600">{member.role}</div>
                  <div className="text-gray-600">{member.email}</div>
                  <div className="text-gray-600">{member.phone}</div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      Active
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Staff;
