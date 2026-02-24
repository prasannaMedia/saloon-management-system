import React, { useState } from 'react';
import { Mail, MessageSquare, Gift, Star } from 'lucide-react';

const Marketing = () => {
  const [campaigns, setCampaigns] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Marketing</h1>
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Create email campaign</h3>
            </div>
            <p className="text-sm text-gray-600">Free to send</p>
          </div>

          <div className="bg-white rounded-xl p-6 border hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Create text campaign</h3>
            </div>
            <p className="text-sm text-gray-600">1 credit per text</p>
          </div>

          <div className="bg-white rounded-xl p-6 border hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Buy more credits</h3>
            </div>
            <p className="text-sm text-gray-600">600 credits remaining</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-t-xl border-b">
          <div className="flex gap-6 px-6">
            <button className="px-4 py-3 border-b-2 border-black font-medium text-sm">
              All (0)
            </button>
            <button className="px-4 py-3 text-gray-600 hover:text-gray-900 text-sm">
              Email (0)
            </button>
            <button className="px-4 py-3 text-gray-600 hover:text-gray-900 text-sm">
              Text (0)
            </button>
          </div>
        </div>

        {/* Empty State */}
        {campaigns.length === 0 && (
          <div className="bg-white rounded-b-xl border-t-0 border p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No marketing campaigns yet</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Send a targeted messaging to drive sales, recognize and retain engagement by clicking on the buttons above or you'll find it here.
            </p>
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 font-medium">
              Create campaign
            </button>
          </div>
        )}

        {/* How it works */}
        <div className="mt-8 bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">How it works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Emailing clients to book for no extra fees</h4>
              <p className="text-sm text-gray-600">
                Create email campaigns that boost bookings with image templates and client filters.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Send text campaigns with images and GIFs</h4>
              <p className="text-sm text-gray-600">
                Target specific clients to send personalized text messages (including images) to drive sales and re-study.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Save time with our assistant</h4>
              <p className="text-sm text-gray-600">
                Our marketing tech assistant have AI recommendations built-in to make campaign creation easy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
