import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const SalesHistory = () => {
  const [sales, setSales] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Sales</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {sales.length === 0 ? (
          // Empty State
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No sales yet</h3>
              <p className="text-gray-600 mb-6">
                Your completed appointments and sales will appear here
              </p>
            </div>
          </div>
        ) : (
          // Sales Table
          <div className="bg-white rounded-xl shadow-sm">
            <div>
              <div className="grid grid-cols-4 gap-4 px-6 py-3 bg-gray-50 text-sm font-medium text-gray-700 border-b">
                <div>Appointment time</div>
                <div>Client</div>
                <div>Status</div>
                <div>Amount</div>
              </div>
              
              {sales.map((sale) => (
                <div key={sale.id} className="grid grid-cols-4 gap-4 px-6 py-4 border-b hover:bg-gray-50 items-center">
                  <div className="text-gray-900">{sale.time}</div>
                  <div className="text-gray-600">{sale.client}</div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      sale.status === 'completed' ? 'bg-green-100 text-green-700' :
                      sale.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {sale.status}
                    </span>
                  </div>
                  <div className="font-medium text-gray-900">${sale.amount}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesHistory;
