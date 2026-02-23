import { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone, CreditCard, Check } from 'lucide-react'

const Booking = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    staff: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  })

  const services = [
    { id: 1, name: 'Hair Cut & Style', duration: '60 min', price: '$75' },
    { id: 2, name: 'Hair Color', duration: '120 min', price: '$150' },
    { id: 3, name: 'Facial Treatment', duration: '90 min', price: '$120' },
    { id: 4, name: 'Massage Therapy', duration: '60 min', price: '$95' },
    { id: 5, name: 'Manicure & Pedicure', duration: '75 min', price: '$85' },
    { id: 6, name: 'Makeup Application', duration: '45 min', price: '$65' }
  ]

  const staff = [
    { id: 1, name: 'Sarah Johnson', specialty: 'Hair Specialist', rating: 4.9, image: '👩‍🦰' },
    { id: 2, name: 'Michael Chen', specialty: 'Color Expert', rating: 4.8, image: '👨‍🦱' },
    { id: 3, name: 'Emma Davis', specialty: 'Skincare Pro', rating: 5.0, image: '👩‍🦳' },
    { id: 4, name: 'James Wilson', specialty: 'Massage Therapist', rating: 4.9, image: '👨‍🦲' }
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Booking confirmed! You will receive a confirmation email shortly.')
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent"> Appointment</span>
          </h1>
          <p className="text-xl text-gray-600">Select your service and preferred time</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            {[
              { num: 1, label: 'Service' },
              { num: 2, label: 'Staff & Time' },
              { num: 3, label: 'Details' }
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                  step >= s.num 
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > s.num ? <Check className="w-5 h-5" /> : s.num}
                </div>
                <span className={`ml-2 font-medium ${step >= s.num ? 'text-pink-500' : 'text-gray-500'}`}>
                  {s.label}
                </span>
                {idx < 2 && <div className={`w-16 h-1 mx-4 ${step > s.num ? 'bg-pink-500' : 'bg-gray-200'}`}></div>}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          {/* Step 1: Select Service */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose a Service</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setFormData({ ...formData, service: service.name })}
                    className={`card cursor-pointer transition-all duration-200 ${
                      formData.service === service.name
                        ? 'ring-2 ring-pink-500 shadow-xl'
                        : 'hover:shadow-xl'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                      <span className="text-pink-500 font-bold text-lg">{service.price}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => formData.service && setStep(2)}
                disabled={!formData.service}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue to Staff Selection
              </button>
            </div>
          )}

          {/* Step 2: Select Staff and Time */}
          {step === 2 && (
            <div className="space-y-8 animate-fadeIn">
              {/* Staff Selection */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Stylist</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {staff.map((member) => (
                    <div
                      key={member.id}
                      onClick={() => setFormData({ ...formData, staff: member.name })}
                      className={`card cursor-pointer transition-all duration-200 ${
                        formData.staff === member.name
                          ? 'ring-2 ring-pink-500 shadow-xl'
                          : 'hover:shadow-xl'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-5xl">{member.image}</div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                          <p className="text-sm text-gray-600">{member.specialty}</p>
                          <div className="flex items-center mt-1">
                            <span className="text-yellow-500 mr-1">★</span>
                            <span className="text-sm font-semibold">{member.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Date & Time</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="input-field"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn-secondary flex-1"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => formData.staff && formData.date && formData.time && setStep(3)}
                  disabled={!formData.staff || !formData.date || !formData.time}
                  className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Details
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Details */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h2>
              
              {/* Booking Summary */}
              <div className="card bg-gradient-to-br from-pink-50 to-rose-50">
                <h3 className="font-bold text-lg mb-4">Booking Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stylist:</span>
                    <span className="font-medium">{formData.staff}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date & Time:</span>
                    <span className="font-medium">{formData.date} at {formData.time}</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline w-4 h-4 mr-1" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline w-4 h-4 mr-1" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    className="input-field"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline w-4 h-4 mr-1" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="input-field"
                  required
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-secondary flex-1"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn-primary flex-1"
                >
                  <CreditCard className="inline w-5 h-5 mr-2" />
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Booking
