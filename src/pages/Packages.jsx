import React, { useState } from 'react';
import { Package, Plus, X } from 'lucide-react';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [showAddPackage, setShowAddPackage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    sellOnWebsite: true,
    packagePrice: '',
    discount: '',
    expiration: false,
    expirationDays: '',
    termsAndConditions: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSavePackage = () => {
    if (formData.name && formData.packagePrice) {
      const newPackage = {
        id: Date.now(),
        ...formData
      };
      setPackages([...packages, newPackage]);
      setFormData({
        name: '',
        description: '',
        sellOnWebsite: true,
        packagePrice: '',
        discount: '',
        expiration: false,
        expirationDays: '',
        termsAndConditions: ''
      });
      setShowAddPackage(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Packages</h1>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                View reports
              </button>
              <button 
                onClick={() => setShowAddPackage(true)}
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {packages.length === 0 ? (
          // Empty State
          <>
            <div className="bg-white rounded-xl border p-12 text-center mb-8">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Drive revenue with Packages</h3>
              <p className="text-gray-600 mb-4 max-w-md mx-auto">
                Bundle services and products to build loyalty and increase ticket value by 5.8x on average.
              </p>
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={() => setShowAddPackage(true)}
                  className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 font-medium"
                >
                  Create package
                </button>
                <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">
                  Learn more
                </button>
              </div>
            </div>

            {/* How it works */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">How it works</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Configure package details</h4>
                  <p className="text-sm text-gray-600">
                    Tailor package prices, included products & services and expiry dates, providing customized bundles for your clients.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Build & reward client loyalty</h4>
                  <p className="text-sm text-gray-600">
                    Offer exclusive discounts on pre-purchased services and products, rewarding clients who spend more upfront.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Automatic tracking & redemption</h4>
                  <p className="text-sm text-gray-600">
                    Automatically redeem packages at checkout and easily track package purchases and redemptions – no manual work required.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Packages List
          <div className="bg-white rounded-xl shadow-sm">
            <div className="grid grid-cols-4 gap-4 px-6 py-3 bg-gray-50 text-sm font-medium text-gray-700 border-b">
              <div>Package Name</div>
              <div>Price</div>
              <div>Discount</div>
              <div>Status</div>
            </div>
            
            {packages.map((pkg) => (
              <div key={pkg.id} className="grid grid-cols-4 gap-4 px-6 py-4 border-b hover:bg-gray-50 items-center">
                <div className="font-medium text-gray-900">{pkg.name}</div>
                <div className="text-gray-900">${pkg.packagePrice}</div>
                <div className="text-gray-600">{pkg.discount ? `${pkg.discount}%` : '-'}</div>
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    Active
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Package Modal */}
      {showAddPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setShowAddPackage(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h2 className="text-xl font-bold">New package</h2>
              </div>
              <button 
                onClick={handleSavePackage}
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 font-medium"
              >
                Save
              </button>
            </div>

            {/* Sidebar Navigation */}
            <div className="flex border-b overflow-x-auto">
              <button className="px-6 py-3 border-b-2 border-black font-medium text-sm whitespace-nowrap">Details</button>
              <button className="px-6 py-3 text-gray-600 text-sm whitespace-nowrap">Products & Services</button>
              <button className="px-6 py-3 text-gray-600 text-sm whitespace-nowrap">Pricing</button>
              <button className="px-6 py-3 text-gray-600 text-sm whitespace-nowrap">Expiration</button>
              <button className="px-6 py-3 text-gray-600 text-sm whitespace-nowrap">Terms & Conditions</button>
            </div>

            <div className="p-6 space-y-6">
              {/* Image Upload */}
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gray-200 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <button className="text-sm text-gray-600 hover:text-gray-900">Add image</button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Description"
                />
              </div>

              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <input
                  type="checkbox"
                  name="sellOnWebsite"
                  checked={formData.sellOnWebsite}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-pink-600 rounded"
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">Sell on your website</p>
                  <p className="text-xs text-gray-600">
                    Enable selling this package online on your Fabb6 and Storefront sites and automatically track after credits.
                  </p>
                </div>
              </div>

              {/* Products and Services */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Products and Services</h3>
                <p className="text-sm text-gray-600 mb-4">Add the items included in this package.</p>
                
                <div className="border rounded-lg p-6 text-center bg-gray-50">
                  <p className="text-sm text-gray-600 mb-3">No items from your added yet</p>
                  <div className="flex gap-2 justify-center">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-white text-sm font-medium">
                      + Item
                    </button>
                    <button className="px-4 py-2 text-pink-600 hover:bg-pink-50 rounded-lg text-sm font-medium">
                      Set up packages ↗
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    Cost before any package discount: $0
                  </p>
                </div>
              </div>

              {/* Pricing */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Set a discounted custom price for this package lower than the total price of the products and services you selected to drive uptake.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Package price</label>
                    <input
                      type="number"
                      name="packagePrice"
                      value={formData.packagePrice}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Package price"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Discount</label>
                    <input
                      type="number"
                      name="discount"
                      value={formData.discount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Discount %"
                    />
                  </div>
                </div>
              </div>

              {/* Expiration */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expiration</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Set an expiration date for this package after purchase or leave it disabled if you don't want it to expire.
                </p>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Enable expiration</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="expiration"
                      checked={formData.expiration}
                      onChange={handleInputChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
                  </label>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Terms and Conditions</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Include any package-specific guidelines or restrictions so clients are aware.
                </p>
                
                <textarea
                  name="termsAndConditions"
                  value={formData.termsAndConditions}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Add package terms & conditions"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Packages;
