import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Filter, Search } from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 24)); // Feb 24, 2026
  const [view, setView] = useState('week'); // 'day', 'week', 'month'

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const appointments = [
    {
      id: 1,
      clientName: 'Sarah Johnson',
      service: 'Haircut & Style',
      time: '09:00 AM',
      duration: '1h',
      staff: 'Emma Thompson',
      status: 'confirmed',
      color: 'pink'
    },
    {
      id: 2,
      clientName: 'Michael Chen',
      service: 'Beard Trim',
      time: '10:30 AM',
      duration: '30min',
      staff: 'Emma Thompson',
      status: 'confirmed',
      color: 'blue'
    },
    {
      id: 3,
      clientName: 'Emily Davis',
      service: 'Manicure',
      time: '11:00 AM',
      duration: '45min',
      staff: 'Lisa Anderson',
      status: 'pending',
      color: 'purple'
    },
    {
      id: 4,
      clientName: 'David Wilson',
      service: 'Hair Coloring',
      time: '02:00 PM',
      duration: '2h',
      staff: 'Emma Thompson',
      status: 'confirmed',
      color: 'green'
    }
  ];

  const hours = Array.from({ length: 13 }, (_, i) => i + 8); // 8 AM to 8 PM

  const formatTime = (hour) => {
    if (hour === 12) return '12 PM';
    if (hour > 12) return `${hour - 12} PM`;
    return `${hour} AM`;
  };

  const navigateDate = (direction) => {
    const newDate = new Date(currentDate);
    if (view === 'day') {
      newDate.setDate(newDate.getDate() + direction);
    } else if (view === 'week') {
      newDate.setDate(newDate.getDate() + (direction * 7));
    } else {
      newDate.setMonth(newDate.getMonth() + direction);
    }
    setCurrentDate(newDate);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigateDate(-1)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentDate(new Date())}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  Today
                </button>
                <button
                  onClick={() => navigateDate(1)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="text-lg font-semibold text-gray-900 ml-2">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setView('day')}
                  className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                    view === 'day' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'
                  }`}
                >
                  Day
                </button>
                <button
                  onClick={() => setView('week')}
                  className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                    view === 'week' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'
                  }`}
                >
                  Week
                </button>
                <button
                  onClick={() => setView('month')}
                  className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                    view === 'month' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'
                  }`}
                >
                  Month
                </button>
              </div>

              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Filter className="w-5 h-5 text-gray-600" />
              </button>

              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Search className="w-5 h-5 text-gray-600" />
              </button>

              <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:opacity-90 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Content */}
      <div className="p-4 sm:p-6 lg:p-8">
        {view === 'week' && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Week Days Header */}
            <div className="grid grid-cols-8 border-b bg-gray-50">
              <div className="p-4 border-r"></div>
              {weekDays.map((day, index) => (
                <div key={day} className="p-4 text-center border-r last:border-r-0">
                  <div className="text-xs font-medium text-gray-500 uppercase">{day}</div>
                  <div className={`text-2xl font-semibold mt-1 ${
                    index === 1 ? 'text-pink-500' : 'text-gray-900'
                  }`}>
                    {18 + index}
                  </div>
                </div>
              ))}
            </div>

            {/* Time Slots */}
            <div className="overflow-y-auto max-h-[calc(100vh-250px)]">
              {hours.map((hour) => (
                <div key={hour} className="grid grid-cols-8 border-b min-h-20">
                  <div className="p-4 border-r text-sm text-gray-500 text-right">
                    {formatTime(hour)}
                  </div>
                  {weekDays.map((_, dayIndex) => (
                    <div key={dayIndex} className="p-2 border-r last:border-r-0 hover:bg-gray-50 relative">
                      {/* Show appointments for Monday (index 1) */}
                      {dayIndex === 1 && hour === 9 && (
                        <div className="absolute inset-2 bg-pink-100 border-l-4 border-pink-500 rounded p-2">
                          <div className="text-xs font-semibold text-gray-900">
                            {appointments[0].clientName}
                          </div>
                          <div className="text-xs text-gray-600">{appointments[0].service}</div>
                          <div className="text-xs text-gray-500">{appointments[0].duration}</div>
                        </div>
                      )}
                      {dayIndex === 1 && hour === 10 && (
                        <div className="absolute inset-2 bg-blue-100 border-l-4 border-blue-500 rounded p-2">
                          <div className="text-xs font-semibold text-gray-900">
                            {appointments[1].clientName}
                          </div>
                          <div className="text-xs text-gray-600">{appointments[1].service}</div>
                        </div>
                      )}
                      {dayIndex === 1 && hour === 14 && (
                        <div className="absolute inset-2 bg-green-100 border-l-4 border-green-500 rounded p-2">
                          <div className="text-xs font-semibold text-gray-900">
                            {appointments[3].clientName}
                          </div>
                          <div className="text-xs text-gray-600">{appointments[3].service}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {view === 'day' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Today's Schedule - February 24, 2026
            </h3>
            <div className="space-y-3">
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    apt.color === 'pink' ? 'bg-pink-50 border-pink-500' :
                    apt.color === 'blue' ? 'bg-blue-50 border-blue-500' :
                    apt.color === 'purple' ? 'bg-purple-50 border-purple-500' :
                    'bg-green-50 border-green-500'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{apt.clientName}</h4>
                      <p className="text-sm text-gray-600">{apt.service}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {apt.time} • {apt.duration} • {apt.staff}
                      </p>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        apt.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {apt.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === 'month' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {/* Calendar grid for month view */}
              {weekDays.map((day) => (
                <div key={day} className="bg-gray-50 p-3 text-center">
                  <div className="text-sm font-medium text-gray-700">{day}</div>
                </div>
              ))}
              {Array.from({ length: 35 }, (_, i) => {
                const dayNum = i - 2; // Start from Feb 1
                const isToday = dayNum === 24;
                const hasAppointments = dayNum === 24;
                return (
                  <div
                    key={i}
                    className={`bg-white p-3 min-h-24 ${
                      dayNum < 1 || dayNum > 29 ? 'text-gray-300' : ''
                    } hover:bg-gray-50`}
                  >
                    {dayNum > 0 && dayNum <= 29 && (
                      <>
                        <div className={`text-sm font-medium ${
                          isToday ? 'w-7 h-7 bg-pink-500 text-white rounded-full flex items-center justify-center' : ''
                        }`}>
                          {dayNum}
                        </div>
                        {hasAppointments && (
                          <div className="mt-2 space-y-1">
                            <div className="text-xs bg-pink-100 text-pink-700 rounded px-2 py-0.5 truncate">
                              4 appointments
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
