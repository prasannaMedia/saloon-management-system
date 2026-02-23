import {
  BarChart3,
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
  Clock,
  Star,
  ShoppingBag,
  Package,
  AlertCircle,
  ChevronRight
} from 'lucide-react'

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$24,589',
      change: '+18.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Appointments',
      value: '847',
      change: '+12.5%',
      trend: 'up',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'New Clients',
      value: '234',
      change: '+23.1%',
      trend: 'up',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Product Sales',
      value: '$8,942',
      change: '+8.7%',
      trend: 'up',
      icon: ShoppingBag,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const upcomingAppointments = [
    {
      id: 1,
      client: 'Sarah Johnson',
      service: 'Hair Color & Cut',
      time: '10:00 AM',
      stylist: 'Emma Davis',
      status: 'confirmed'
    },
    {
      id: 2,
      client: 'Michael Chen',
      service: 'Facial Treatment',
      time: '11:30 AM',
      stylist: 'Lisa Park',
      status: 'confirmed'
    },
    {
      id: 3,
      client: 'Emily Brown',
      service: 'Manicure & Pedicure',
      time: '2:00 PM',
      stylist: 'Anna Smith',
      status: 'pending'
    },
    {
      id: 4,
      client: 'David Wilson',
      service: 'Massage Therapy',
      time: '3:30 PM',
      stylist: 'James Wilson',
      status: 'confirmed'
    }
  ]

  const topServices = [
    { name: 'Hair Coloring', bookings: 142, revenue: '$21,300', change: '+15%' },
    { name: 'Facial Treatment', bookings: 98, revenue: '$11,760', change: '+22%' },
    { name: 'Manicure & Pedicure', bookings: 156, revenue: '$13,260', change: '+8%' },
    { name: 'Massage Therapy', bookings: 87, revenue: '$8,265', change: '+18%' }
  ]

  const recentActivity = [
    { type: 'booking', message: 'New appointment booked by Sarah Johnson', time: '5 min ago' },
    { type: 'payment', message: 'Payment received - $150.00', time: '12 min ago' },
    { type: 'review', message: 'New 5-star review from Michael Chen', time: '25 min ago' },
    { type: 'product', message: 'Product order shipped - Order #4823', time: '1 hour ago' }
  ]

  const staffPerformance = [
    { name: 'Emma Davis', appointments: 142, revenue: '$18,920', rating: 4.9 },
    { name: 'Lisa Park', appointments: 128, revenue: '$16,430', rating: 4.8 },
    { name: 'Anna Smith', appointments: 115, revenue: '$14,260', rating: 4.9 },
    { name: 'James Wilson', appointments: 98, revenue: '$12,145', rating: 4.7 }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Dashboard
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent"> Overview</span>
          </h1>
          <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm font-semibold ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Upcoming Appointments */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-pink-500" />
                Today's Appointments
              </h2>
              <button className="text-pink-500 font-semibold text-sm hover:text-pink-600">
                View All
                <ChevronRight className="inline w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold">
                      {appointment.client.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{appointment.client}</h3>
                      <p className="text-sm text-gray-600">{appointment.service}</p>
                      <p className="text-xs text-gray-500">with {appointment.stylist}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-700 font-semibold mb-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {appointment.time}
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      appointment.status === 'confirmed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2 text-pink-500" />
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'booking' ? 'bg-blue-500' :
                    activity.type === 'payment' ? 'bg-green-500' :
                    activity.type === 'review' ? 'bg-yellow-500' :
                    'bg-purple-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Top Services */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-pink-500" />
                Top Services
              </h2>
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-1 focus:outline-none focus:border-pink-500">
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="space-y-4">
              {topServices.map((service, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.bookings} bookings</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">{service.revenue}</p>
                      <p className="text-sm text-green-600 font-medium">{service.change}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full"
                      style={{ width: `${(service.bookings / 160) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Staff Performance */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <Users className="w-5 h-5 mr-2 text-pink-500" />
                Staff Performance
              </h2>
              <button className="text-pink-500 font-semibold text-sm hover:text-pink-600">
                View All
                <ChevronRight className="inline w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {staffPerformance.map((staff, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold">
                      {staff.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{staff.name}</h3>
                      <p className="text-sm text-gray-600">{staff.appointments} appointments</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{staff.revenue}</p>
                    <div className="flex items-center text-sm text-yellow-500">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      {staff.rating}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: Calendar, label: 'New Booking' },
              { icon: Users, label: 'Add Client' },
              { icon: Package, label: 'Add Product' },
              { icon: BarChart3, label: 'View Reports' }
            ].map((action, index) => {
              const Icon = action.icon
              return (
                <button
                  key={index}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg p-6 text-center transition-all duration-200 hover:scale-105"
                >
                  <Icon className="w-8 h-8 mx-auto mb-2" />
                  <span className="font-semibold">{action.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
