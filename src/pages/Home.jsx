import { Link } from 'react-router-dom'
import { 
  Calendar, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Clock, 
  Star,
  Check,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  CreditCard
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Smart Booking',
      description: 'AI-powered scheduling that maximizes your appointments and minimizes no-shows',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: CreditCard,
      title: 'Seamless Payments',
      description: 'Accept all payment types with low fees and instant payouts',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Client Management',
      description: 'Build lasting relationships with detailed client profiles and preferences',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Real-time reports to make data-driven decisions',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'AI-powered campaigns that drive rebookings and new clients',
      color: 'from-orange-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Staff Management',
      description: 'Automated payroll, commissions, and team scheduling',
      color: 'from-teal-500 to-green-500'
    }
  ]

  const stats = [
    { value: '35%', label: 'Average Revenue Increase' },
    { value: '80%', label: 'Client Retention Rate' },
    { value: '50hrs', label: 'Saved Per Month' },
    { value: '99.9%', label: 'Platform Uptime' }
  ]

  const benefits = [
    'Free 14-day trial, no credit card required',
    'Free data migration from any platform',
    'Dedicated onboarding specialist',
    '24/7 customer support',
    'Mobile apps for staff and clients',
    'Automated reminders and notifications'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Sparkles className="w-4 h-4 text-pink-500" />
                <span className="text-sm font-semibold text-gray-700">AI-Powered Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Grow Your
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent"> Beauty Business </span>
                Effortlessly
              </h1>
              
              <p className="text-xl text-gray-600">
                The all-in-one platform for salons, spas, and medspas. Book more clients, 
                increase revenue, and automate your operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="btn-primary text-center">
                  Start Free Trial
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </Link>
                <Link to="/dashboard" className="btn-secondary text-center">
                  View Demo Dashboard
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 border-2 border-white"></div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-gray-600 font-medium">Trusted by 10,000+ businesses</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Today's Overview</h3>
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-600">Bookings</p>
                    <p className="text-3xl font-bold text-pink-600">47</p>
                    <p className="text-xs text-green-600 mt-1">↑ 23% vs yesterday</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-600">Revenue</p>
                    <p className="text-3xl font-bold text-purple-600">$3.2K</p>
                    <p className="text-xs text-green-600 mt-1">↑ 18% vs yesterday</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-600">New Clients</p>
                    <p className="text-3xl font-bold text-blue-600">12</p>
                    <p className="text-xs text-green-600 mt-1">↑ 34% vs yesterday</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-600">Utilization</p>
                    <p className="text-3xl font-bold text-green-600">94%</p>
                    <p className="text-xs text-green-600 mt-1">↑ 8% vs yesterday</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">Next Appointment</p>
                      <p className="font-semibold text-lg">2:30 PM - Hair Color</p>
                    </div>
                    <Clock className="w-8 h-8 opacity-80" />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Live Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to 
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent"> Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help beauty and wellness businesses grow faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card group hover:scale-105 transition-transform duration-200">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-rose-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose 
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent"> Fabb6?</span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <Link to="/booking" className="btn-primary inline-block mt-8">
                Get Started Free
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="card bg-gradient-to-br from-pink-500 to-rose-500 text-white">
                  <Calendar className="w-10 h-10 mb-3" />
                  <h4 className="font-bold text-lg mb-2">10K+</h4>
                  <p className="text-sm opacity-90">Daily Bookings</p>
                </div>
                <div className="card">
                  <TrendingUp className="w-10 h-10 text-green-500 mb-3" />
                  <h4 className="font-bold text-lg mb-2">2.5x</h4>
                  <p className="text-sm text-gray-600">Revenue Growth</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="card">
                  <Users className="w-10 h-10 text-blue-500 mb-3" />
                  <h4 className="font-bold text-lg mb-2">500K+</h4>
                  <p className="text-sm text-gray-600">Active Clients</p>
                </div>
                <div className="card bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                  <Star className="w-10 h-10 mb-3" />
                  <h4 className="font-bold text-lg mb-2">4.9/5</h4>
                  <p className="text-sm opacity-90">Customer Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-12 text-center text-white shadow-2xl">
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful beauty professionals using Fabb6
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/booking" 
                className="bg-white text-pink-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/services" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pink-500 transition-all duration-200"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
