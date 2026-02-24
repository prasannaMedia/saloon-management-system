import React, { useState } from 'react';
import { Plus, X, Scissors, Sparkles } from 'lucide-react';

const ServicesCRM = () => {
  const [services, setServices] = useState([]);
  const [showAddService, setShowAddService] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    calendarColor: '#E91E63',
    pricingType: 'fixed',
    price: '',
    showOnWebsite: true,
    totalDuration: '',
    requireDeposit: false,
    processingTime: false,
    blockTime: false
  });

  const suggestedServices = [
    { name: 'Eyebrow lamination', price: 50 },
    { name: 'Scalp massage', price: 40 },
    { name: 'Blemish extraction', price: 35 }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSaveService = () => {
    if (formData.name && formData.price) {
      const newService = {
        id: Date.now(),
        ...formData
      };
      setServices([...services, newService]);
      setFormData({
        name: '',
        description: '',
        category: '',
        calendarColor: '#E91E63',
        pricingType: 'fixed',
        price: '',
        showOnWebsite: true,
        totalDuration: '',
        requireDeposit: false,
        processingTime: false,
        blockTime: false
      });
      setShowAddService(false);
    }
  };

  const createSuggestedServices = () => {
    const newServices = suggestedServices.map((service, index) => ({
      id: Date.now() + index,
      name: service.name,
      price: service.price,
      category: '',
      calendarColor: '#E91E63',
      pricingType: 'fixed',
      showOnWebsite: true
    }));
    setServices([...services, ...newServices]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Services</h1>
            <button 
              onClick={() => setShowAddService(true)}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center gap-2"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {services.length === 0 ? (
          // Empty State
          <>
            <div className="bg-white rounded-xl border p-8 text-center mb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Scissors className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No services yet</h3>
              <p className="text-gray-600 mb-4">
                Create your first by clicking below.<br />
                Once you've created it, you'll find it here.
              </p>
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={() => setShowAddService(true)}
                  className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 font-medium"
                >
                  Add service
                </button>
                <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">
                  Learn more
                </button>
              </div>
            </div>

            {/* Suggested Services */}
            <div className="bg-white rounded-xl border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gray-600" />
                  <h3 className="font-semibold text-gray-900">Suggested services</h3>
                </div>
                <button className="text-sm text-gray-600 hover:text-gray-900">Hide</button>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                We've recommended a catalog based on your business.
              </p>
              <div className="flex gap-3 flex-wrap mb-4">
                {suggestedServices.map((service, index) => (
                  <div key={index} className="px-4 py-2 bg-pink-50 text-pink-600 rounded-lg text-sm font-medium">
                    {service.name} ${service.price}
                  </div>
                ))}
              </div>
              <button 
                onClick={createSuggestedServices}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Create services
              </button>
            </div>

            {/* How it works */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">How it works</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Scissors className="w-6 h-6 text-gray-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Configure service details</h4>
                  <p className="text-sm text-gray-600">
                    Tailor service prices, duration, deposits, category, etc to increase bookings and optimize your schedule.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Assign options & providers</h4>
                  <p className="text-sm text-gray-600">
                    Assign providers services based on their expertise then leverage options to ensure personalized client experiences.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sell customized packages</h4>
                  <p className="text-sm text-gray-600">
                    Create packages to enhance customer loyalty and offer exclusive discounts on services and products.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Services List
          <div className="bg-white rounded-xl shadow-sm">
            <div className="grid grid-cols-4 gap-4 px-6 py-3 bg-gray-50 text-sm font-medium text-gray-700 border-b">
              <div>Service Name</div>
              <div>Category</div>
              <div>Price</div>
              <div>Duration</div>
            </div>
            
            {services.map((service) => (
              <div key={service.id} className="grid grid-cols-4 gap-4 px-6 py-4 border-b hover:bg-gray-50 items-center">
                <div className="font-medium text-gray-900">{service.name}</div>
                <div className="text-gray-600">{service.category || '-'}</div>
                <div className="text-gray-900">${service.price}</div>
                <div className="text-gray-600">{service.totalDuration || '-'}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Service Modal */}
      {showAddService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setShowAddService(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h2 className="text-xl font-bold">New service</h2>
              </div>
              <button 
                onClick={handleSaveService}
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 font-medium"
              >
                Save
              </button>
            </div>

            {/* Sidebar Navigation */}
            <div className="flex border-b">
              <button className="px-6 py-3 border-b-2 border-black font-medium text-sm">Basic details</button>
              <button className="px-6 py-3 text-gray-600 text-sm">Pricing</button>
              <button className="px-6 py-3 text-gray-600 text-sm">Duration</button>
              <button className="px-6 py-3 text-gray-600 text-sm">Resources</button>
              <button className="px-6 py-3 text-gray-600 text-sm">Options</button>
            </div>

            <div className="p-6 space-y-6">
              {/* Image Upload */}
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gray-200 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <button className="text-sm text-gray-600 hover:text-gray-900">+ Add image</button>
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
                <button className="mt-2 text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Generate description
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Category</option>
                    <option value="hair">Hair</option>
                    <option value="nails">Nails</option>
                    <option value="skin">Skin & Spa</option>
                    <option value="body">Body</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Calendar Color</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      name="calendarColor"
                      value={formData.calendarColor}
                      onChange={handleInputChange}
                      className="w-12 h-10 border border-gray-300 rounded-lg cursor-pointer"
                    />
                    <select className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                      <option>Pink</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between py-3 border-t">
                <div>
                  <p className="font-medium text-gray-900">Show on website</p>
                  <p className="text-sm text-gray-600">
                    Turning this off means that clients will not see this service on your online booking webpage.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="showOnWebsite"
                    checked={formData.showOnWebsite}
                    onChange={handleInputChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
                </label>
              </div>

              {/* Pricing Section */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing</h3>
                <p className="text-sm text-gray-600 mb-4">Set a price for this service.</p>
                
                <div className="flex gap-4 mb-4">
                  <label className="flex-1 flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="pricingType"
                      value="fixed"
                      checked={formData.pricingType === 'fixed'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-pink-600"
                    />
                    <span className="font-medium">Fixed</span>
                  </label>
                  
                  <label className="flex-1 flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="pricingType"
                      value="starting"
                      checked={formData.pricingType === 'starting'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-pink-600"
                    />
                    <span className="font-medium">Starting At</span>
                  </label>
                  
                  <label className="flex-1 flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="pricingType"
                      value="hidden"
                      checked={formData.pricingType === 'hidden'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-pink-600"
                    />
                    <span className="font-medium">Price Hidden</span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Price"
                  />
                </div>

                <div className="flex items-center justify-between py-4 border-t mt-4">
                  <div>
                    <p className="font-medium text-gray-900">Require deposit</p>
                    <p className="text-sm text-gray-600">
                      Require clients to pay a deposit when they book this service online.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="requireDeposit"
                      checked={formData.requireDeposit}
                      onChange={handleInputChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
                  </label>
                </div>
              </div>

              {/* Duration Section */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Duration</h3>
                <p className="text-sm text-gray-600 mb-4">Specify how long this service takes.</p>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total Duration</label>
                  <select
                    name="totalDuration"
                    value={formData.totalDuration}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Total Duration</option>
                    <option value="15min">15 minutes</option>
                    <option value="30min">30 minutes</option>
                    <option value="45min">45 minutes</option>
                    <option value="1hr">1 hour</option>
                    <option value="1.5hr">1.5 hours</option>
                    <option value="2hr">2 hours</option>
                  </select>
                </div>
              </div>

              {/* Resources Section */}
              <div className="border-t pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">Gold</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Add resource categories and specific resources that are needed to book this service.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <p className="text-sm text-gray-600">
                    You need to set up resources before you can assign them to services.
                  </p>
                  <button className="mt-3 text-sm text-pink-600 hover:text-pink-700 font-medium">
                    Set up resources →
                  </button>
                </div>
              </div>

              {/* Options Section */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Options</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Offer different options for clients, such as hair length, aromatherapy scent, or treatment area for a dermal filler.
                </p>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add options
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesCRM;
