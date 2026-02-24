import React, { useState } from 'react';
import { Package, Plus, Search } from 'lucide-react';

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {products.length === 0 ? (
          // Empty State
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your inventory is empty</h2>
              <p className="text-gray-700 mb-6">
                Your inventory and retail supplies are synced across your entire business. Once you add products, your list will show here and your inventory will automatically update with barcode scanning and point of sale.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowAddProduct(true)}
                  className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 font-medium"
                >
                  Add products
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-white font-medium">
                  Learn more
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600" 
                  alt="Inventory"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="w-32 h-32 bg-pink-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">🛍️</div>
                      <div className="text-xs text-gray-600 mt-2">Barcode</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Products List
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-4 border-b flex items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by product name or brand"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <button 
                onClick={() => setShowAddProduct(true)}
                className="ml-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Add
              </button>
            </div>

            <div className="grid grid-cols-6 gap-4 px-6 py-3 bg-gray-50 text-sm font-medium text-gray-700 border-b">
              <div>Product</div>
              <div>Brand</div>
              <div>Category</div>
              <div>Retail Price</div>
              <div>Quantity</div>
              <div></div>
            </div>
            
            {products.map((product) => (
              <div key={product.id} className="grid grid-cols-6 gap-4 px-6 py-4 border-b hover:bg-gray-50 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg"></div>
                  <span className="font-medium text-gray-900">{product.name}</span>
                </div>
                <div className="text-gray-600">{product.brand}</div>
                <div className="text-gray-600">{product.category}</div>
                <div className="text-gray-900">${product.price}</div>
                <div className="text-gray-600">{product.quantity}</div>
                <div></div>
              </div>
            ))}
          </div>
        )}

        {/* How it works */}
        <div className="mt-8 bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">How it works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Grow profits with less work</h4>
              <p className="text-sm text-gray-600">
                Businesses that track inventory earn 3x more. With built-in expense and point of sale reporting, you can make smarter decisions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Powerful & customizable</h4>
              <p className="text-sm text-gray-600">
                Auto-sync with point of sale, package sales, and tiered pricing options—manage inventory anytime, anywhere.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Stay stocked & sell more</h4>
              <p className="text-sm text-gray-600">
                Inventory auto-tracks via barcode scanning and point of sale. Use time-stock level alerts to avoid running out or missing sales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
