import React, { useState } from 'react';
import { FileText, ArrowRight, DollarSign, Clock, CheckCircle } from 'lucide-react';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Banner */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 mb-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Let clients pay from anywhere</h2>
            <p className="text-gray-700 mb-6 max-w-2xl">
              Send professional invoices your clients can pay from their personal device. Ideal for custom events, remote product sales, or collecting no-show fees without needing to store card details.
            </p>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 font-medium flex items-center gap-2">
                Create an invoice
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-white font-medium">
                Learn more
              </button>
            </div>
          </div>

          {/* Preview Image */}
          <div className="mt-8 flex justify-end">
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-medium">TH</span>
                </div>
                <div>
                  <p className="font-semibold">The Hair Palace</p>
                  <p className="text-sm text-gray-600">Pay your invoice from Hair Palace</p>
                </div>
              </div>
              <div className="border rounded-lg p-4 mb-3">
                <p className="text-sm text-gray-600 mb-1">Your Invoice from</p>
                <p className="text-2xl font-bold">Hair Palace</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">$260.00</p>
                <p className="text-sm text-gray-600 mt-1">Due June 1st, 2024</p>
              </div>
              <button className="w-full py-3 bg-black text-white rounded-lg font-medium">
                Pay invoice
              </button>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">How it works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Create itemized invoices in seconds</h4>
              <p className="text-sm text-gray-600">
                Add services, products, and due dates—so your clients know exactly what they're paying for.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Get paid from anywhere</h4>
              <p className="text-sm text-gray-600">
                Send a secure payment link by text or email. Clients can pay instantly from their personal device.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Track invoice statuses in real-time</h4>
              <p className="text-sm text-gray-600">
                See what's paid, pending, or overdue at a glance—and send reminders for outstanding balances.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Invoices */}
        {invoices.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm">
            <div className="px-6 py-4 border-b">
              <h3 className="font-semibold text-gray-900">Recent Invoices</h3>
            </div>
            <div>
              <div className="grid grid-cols-5 gap-4 px-6 py-3 bg-gray-50 text-sm font-medium text-gray-700 border-b">
                <div>Invoice #</div>
                <div>Client</div>
                <div>Date</div>
                <div>Amount</div>
                <div>Status</div>
              </div>
              
              {invoices.map((invoice) => (
                <div key={invoice.id} className="grid grid-cols-5 gap-4 px-6 py-4 border-b hover:bg-gray-50 items-center">
                  <div className="font-medium text-gray-900">{invoice.number}</div>
                  <div className="text-gray-600">{invoice.client}</div>
                  <div className="text-gray-600">{invoice.date}</div>
                  <div className="font-medium text-gray-900">${invoice.amount}</div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      invoice.status === 'paid' ? 'bg-green-100 text-green-700' :
                      invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {invoice.status}
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

export default Invoices;
