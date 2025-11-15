import React from 'react';
import { TrendingUp, Users, Target, Briefcase } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { monthlyDeposits, conversionData, professionData, rejectionReasonsData, mockNasabah } from '../data/mockData';

const AnalyticsPage: React.FC = () => {

  // Hitung nasabah yang sudah deposito bulan ini (contacted)
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  
  const depositedThisMonth = mockNasabah.filter(nasabah => {
    if (nasabah.statusKontak === 'contacted' && nasabah.riwayatKontak.length > 0) {
      const lastContact = nasabah.riwayatKontak[nasabah.riwayatKontak.length - 1];
      const contactDate = new Date(lastContact.tanggal);
      return contactDate.getMonth() === currentMonth && contactDate.getFullYear() === currentYear;
    }
    return false;
  }).length;

  const avgGrowth = 8.5;
  const topSegment = 'Entrepreneur';
  const totalLeads = mockNasabah.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="responsive-container p-3 sm:p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4 sm:mb-8 pb-3 sm:pb-4 border-b border-slate-200">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center sm:text-left" style={{ color: '#184b86' }}>Analytics</h1>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-8">
          {/* Card 1 - Leads Deposito Baru */}
          <div className="kpi-card relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all hover:scale-105">
            <div className="relative z-10">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">20</p>
              <p className="text-xs sm:text-sm text-white/90 font-medium">Leads Baru Bulan Ini</p>
              
              <div className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 sm:p-1.5">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-xs text-white/80">Active</span>
              </div>
            </div>
            
            <div className="absolute -right-4 sm:-right-6 -bottom-4 sm:-bottom-6 opacity-10">
              <TrendingUp className="w-20 h-20 sm:w-32 sm:h-32 text-white" />
            </div>
          </div>

          {/* Card 2 - Growth */}
          <div className="kpi-card relative overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all hover:scale-105">
            <div className="relative z-10">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">+{avgGrowth}%</p>
              <p className="text-xs sm:text-sm text-white/90 font-medium">Growth Per Bulan</p>
              
              <div className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 sm:p-1.5">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-xs text-white/80">Active</span>
              </div>
            </div>
            
            <div className="absolute -right-4 sm:-right-6 -bottom-4 sm:-bottom-6 opacity-10">
              <Target className="w-20 h-20 sm:w-32 sm:h-32 text-white" />
            </div>
          </div>

          {/* Card 3 - Segmen Terbaik */}
          <div className="kpi-card relative overflow-hidden bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all hover:scale-105">
            <div className="relative z-10">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">{topSegment}</p>
              <p className="text-xs sm:text-sm text-white/90 font-medium">Segmen Terbaik</p>
              
              <div className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 sm:p-1.5">
                  <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-xs text-white/80">Active</span>
              </div>
            </div>
            
            <div className="absolute -right-4 sm:-right-6 -bottom-4 sm:-bottom-6 opacity-10">
              <Briefcase className="w-20 h-20 sm:w-32 sm:h-32 text-white" />
            </div>
          </div>

          {/* Card 4 - Total Leads */}
          <div className="kpi-card relative overflow-hidden bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all hover:scale-105">
            <div className="relative z-10">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{totalLeads}</p>
              <p className="text-xs sm:text-sm text-white/90 font-medium">Total Leads Aktif</p>
              
              <div className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 sm:p-1.5">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-xs text-white/80">Active</span>
              </div>
            </div>
            
            <div className="absolute -right-4 sm:-right-6 -bottom-4 sm:-bottom-6 opacity-10">
              <Users className="w-20 h-20 sm:w-32 sm:h-32 text-white" />
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Nasabah Deposito Bulanan */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            <h2 className="text-base sm:text-lg font-bold text-slate-800 mb-3 sm:mb-4">Nasabah Deposito Bulanan (Jan - Des)</h2>
            <div className="w-full overflow-x-auto">
              <ResponsiveContainer width="100%" height={250} minWidth={300}>
                <BarChart data={monthlyDeposits}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="amount" fill="#3b82f6" name="Jumlah Nasabah" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Konversi Sales */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            <h2 className="text-base sm:text-lg font-bold text-slate-800 mb-3 sm:mb-4">Konversi Sales Per Bulan (%)</h2>
            <div className="w-full overflow-x-auto">
              <ResponsiveContainer width="100%" height={250} minWidth={300}>
                <LineChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Line type="monotone" dataKey="rate" stroke="#10b981" strokeWidth={3} name="Conversion Rate (%)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Profesi Terbanyak */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            <h2 className="text-base sm:text-lg font-bold text-slate-800 mb-3 sm:mb-4">Profesi Terbanyak Berlangganan</h2>
            <div className="w-full overflow-x-auto">
              <ResponsiveContainer width="100%" height={250} minWidth={300}>
                <BarChart data={professionData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" tick={{ fontSize: 12 }} />
                  <YAxis dataKey="profession" type="category" width={80} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="count" fill="#8b5cf6" name="Jumlah Nasabah" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Alasan Nasabah Menolak / Tidak Berminat */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            <h2 className="text-base sm:text-lg font-bold text-slate-800 mb-3 sm:mb-4">Alasan Nasabah Menolak / Tidak Berminat</h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">Kategori alasan saat sales menelepon</p>
            <div className="w-full overflow-x-auto">
              <ResponsiveContainer width="100%" height={250} minWidth={300}>
                <PieChart>
                  <Pie
                    data={rejectionReasonsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ value }) => `${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {rejectionReasonsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    wrapperStyle={{ fontSize: '11px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
