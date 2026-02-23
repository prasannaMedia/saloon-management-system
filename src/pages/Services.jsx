import { Scissors, Sparkles, Droplet, Heart, Star, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const serviceCategories = [
    {
      id: 1,
      icon: Scissors,
      title: 'Hair Services',
      color: 'from-pink-500 to-rose-500',
      services: [
        { name: 'Women\'s Haircut', duration: '60 min', price: '$75', description: 'Precision cut with style consultation' },
        { name: 'Men\'s Haircut', duration: '45 min', price: '$45', description: 'Classic or modern styling' },
        { name: 'Hair Coloring', duration: '120 min', price: '$150', description: 'Full color or highlights' },
        { name: 'Balayage', duration: '180 min', price: '$250', description: 'Hand-painted highlights' },
        { name: 'Hair Treatment', duration: '45 min', price: '$65', description: 'Deep conditioning and repair' }
      ]
    },
    {
      id: 2,
      icon: Sparkles,
      title: 'Nail Services',
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Classic Manicure', duration: '45 min', price: '$35', description: 'Polish and nail care' },
        { name: 'Gel Manicure', duration: '60 min', price: '$55', description: 'Long-lasting gel polish' },
        { name: 'Pedicure', duration: '60 min', price: '$50', description: 'Foot spa and polish' },
        { name: 'Nail Art', duration: '30 min', price: '$25', description: 'Custom designs per nail' },
        { name: 'Acrylic Nails', duration: '90 min', price: '$85', description: 'Full set with shaping' }
      ]
    },
    {
      id: 3,
      icon: Droplet,
      title: 'Skin & Spa',
      color: 'from-blue-500 to-purple-500',
      services: [
        { name: 'Signature Facial', duration: '75 min', price: '$120', description: 'Customized facial treatment' },
        { name: 'Anti-Aging Facial', duration: '90 min', price: '$180', description: 'Advanced anti-aging therapy' },
        { name: 'Chemical Peel', duration: '60 min', price: '$150', description: 'Skin resurfacing treatment' },
        { name: 'Microdermabrasion', duration: '60 min', price: '$140', description: 'Exfoliation and rejuvenation' },
        { name: 'LED Light Therapy', duration: '30 min', price: '$75', description: 'Skin healing and renewal' }
      ]
    },
    {
      id: 4,
      icon: Heart,
      title: 'Body Treatments',
      color: 'from-rose-500 to-pink-500',
      services: [
        { name: 'Swedish Massage', duration: '60 min', price: '$95', description: 'Relaxing full body massage' },
        { name: 'Deep Tissue Massage', duration: '75 min', price: '$115', description: 'Therapeutic muscle work' },
        { name: 'Hot Stone Massage', duration: '90 min', price: '$135', description: 'Heated stone therapy' },
        { name: 'Body Scrub', duration: '60 min', price: '$85', description: 'Exfoliating body treatment' },
        { name: 'Body Wrap', duration: '90 min', price: '$125', description: 'Detoxifying wrap treatment' }
      ]
    }
  ]

  const packages = [
    {
      name: 'Bridal Package',
      price: '$599',
      duration: '5 hours',
      services: ['Hair styling', 'Makeup', 'Manicure', 'Pedicure', 'Facial'],
      popular: true
    },
    {
      name: 'Spa Day',
      price: '$349',
      duration: '3 hours',
      services: ['Facial', 'Massage', 'Body scrub', 'Manicure'],
      popular: false
    },
    {
      name: 'Beauty Refresh',
      price: '$199',
      duration: '2 hours',
      services: ['Haircut', 'Blow dry', 'Manicure', 'Makeup'],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent"> Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium beauty and wellness services tailored to your needs
          </p>
        </div>

        {/* Service Categories */}
        {serviceCategories.map((category, idx) => {
          const Icon = category.icon
          return (
            <div key={category.id} className="mb-16">
              <div className="flex items-center mb-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIdx) => (
                  <div key={serviceIdx} className="card group hover:scale-105 transition-transform duration-200">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-500 transition-colors">
                        {service.name}
                      </h3>
                      <span className="text-pink-500 font-bold text-xl">{service.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                      <Link
                        to="/booking"
                        className="text-pink-500 font-semibold text-sm hover:text-pink-600 flex items-center"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {/* Packages Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Special
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent"> Packages</span>
            </h2>
            <p className="text-lg text-gray-600">Save more with our curated service bundles</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`card relative ${
                  pkg.popular ? 'ring-2 ring-pink-500 shadow-2xl' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{pkg.duration}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.services.map((service, serviceIdx) => (
                    <div key={serviceIdx} className="flex items-center text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <Star className="w-3 h-3 text-green-600 fill-current" />
                      </div>
                      {service}
                    </div>
                  ))}
                </div>

                <Link
                  to="/booking"
                  className={`block text-center py-3 rounded-lg font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-lg'
                      : 'bg-pink-50 text-pink-500 hover:bg-pink-100'
                  }`}
                >
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-12 text-white">
            <Sparkles className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Not Sure Which Service to Choose?</h2>
            <p className="text-lg mb-6 opacity-90">
              Book a free consultation with our experts
            </p>
            <Link
              to="/booking"
              className="inline-block bg-white text-pink-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
