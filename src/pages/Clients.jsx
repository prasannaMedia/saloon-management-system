import React, { useState } from 'react';
import { Users, Plus, Search, X, Calendar, FileText, Package, User, Settings } from 'lucide-react';

const Clients = () => {
  const [showAddClient, setShowAddClient] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [clients, setClients] = useState([
    {
      id: 'C1',
      name: 'client 1',
      email: 'prasannanaik141@gmail.com',
      phone: '(916) 361-7484',
      initials: 'C1'
    }
  ]);

  const [formData, setFormData] = useState({
    fullName: '',
    pronouns: '',
    phone: '',
    email: '',
    birthday: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveClient = () => {
    if (formData.fullName && formData.email && formData.phone) {
      const newClient = {
        id: `C${clients.length + 1}`,
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        initials: formData.fullName.split(' ').map(n => n[0]).join('').toUpperCase()
      };
      setClients([...clients, newClient]);
      setFormData({ fullName: '', pronouns: '', phone: '', email: '', birthday: '' });
      setShowAddClient(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Export clients
              </button>
              <button 
                onClick={() => setShowAddClient(true)}
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center gap-2"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {clients.length === 0 ? (
          // Empty State
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-gray-700" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Clients</h2>
                  <p className="text-gray-600">Build stronger client relationships</p>
                </div>
              </div>

              <div className="flex gap-3 mb-12">
                <button 
                  onClick={() => setShowAddClient(true)}
                  className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 font-medium"
                >
                  Add client
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-white font-medium">
                  Learn more
                </button>
              </div>

              {/* How it works */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">How it works</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <User className="w-6 h-6 text-gray-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Manage all your client info in one place</h4>
                    <p className="text-sm text-gray-600">
                      Important client info and appointment management in one easy place lets you actually focus on clients, not busywork.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Grow relationships, faster</h4>
                    <p className="text-sm text-gray-600">
                      Remember every detail with client notes, images saved to track progress, service & product preferences, analytics, visit history, birthday reminders and more.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-gray-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Protect your business with client card on file</h4>
                    <p className="text-sm text-gray-600">
                      Manage a client's card on file directly from their profile, protecting your business in the case of cancellations or no-shows, and making it faster and easier for your clients to pay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Client List
          <div className="bg-white rounded-xl shadow-sm">
            {/* Search Bar */}
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, phone number, or email address"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Client Table */}
            <div>
              <div className="grid grid-cols-4 gap-4 px-6 py-3 bg-gray-50 text-sm font-medium text-gray-700 border-b">
                <div>Name</div>
                <div>Email</div>
                <div>Phone</div>
                <div></div>
              </div>
              
              {clients.map((client) => (
                <div 
                  key={client.id}
                  onClick={() => setSelectedClient(client)}
                  className="grid grid-cols-4 gap-4 px-6 py-4 border-b hover:bg-pink-50 cursor-pointer items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-medium">
                      {client.initials}
                    </div>
                    <span className="font-medium text-gray-900">{client.name}</span>
                  </div>
                  <div className="text-gray-600">{client.email}</div>
                  <div className="text-gray-600">{client.phone}</div>
                  <div></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add Client Modal */}
      {showAddClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Add Client</h2>
              <button 
                onClick={() => setShowAddClient(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pronouns</label>
                <input
                  type="text"
                  name="pronouns"
                  value={formData.pronouns}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Pronouns"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Phone"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Birthday</label>
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t px-6 py-4">
              <button 
                onClick={handleSaveClient}
                className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 font-medium"
              >
                Save client
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Client Detail Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
          <div className="bg-white h-full w-full max-w-md overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-medium text-lg">
                    {selectedClient.initials}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{selectedClient.name}</h2>
                    <p className="text-sm text-gray-600">{selectedClient.email}</p>
                    <p className="text-sm text-gray-600">{selectedClient.phone}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedClient(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-black text-white rounded-lg hover:bg-gray-800 text-sm font-medium">
                  Book appointment
                </button>
                <button className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                  Quick sale
                </button>
              </div>
            </div>

            <div className="px-6 py-4 border-b">
              <div className="flex gap-6 overflow-x-auto">
                {['Appointments', 'Notes/Forms', 'Portfolio', 'Memberships', 'Packages'].map((tab) => (
                  <button
                    key={tab}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 pb-2 border-b-2 border-transparent hover:border-gray-900 whitespace-nowrap"
                  >
                    {tab}
                  </button>
                ))}
                <button className="text-sm text-gray-400 pb-2">Show more</button>
              </div>
            </div>

            <div className="px-6 py-8">
              <div className="flex gap-2 mb-6">
                <button className="px-4 py-2 bg-pink-50 text-pink-600 rounded-lg text-sm font-medium">
                  Upcoming
                </button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
                  Cancelled
                </button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
                  Past
                </button>
              </div>

              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">No appointments</h3>
                <p className="text-sm text-gray-600 mb-4">
                  This client does not have any upcoming appointments
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;
