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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-8">
          {/* Card 1 - Leads Deposito Baru */}
          <div className="kpi-card relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 hover:shadow-xl transition-all hover:scale-105">
            <div className="relative z-10">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">20</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-white/90 font-medium leading-tight">Leads Baru Bulan Ini</p>
              
              <div className="flex items-center gap-1 mt-2 sm:mt-3 md:mt-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                  <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                </div>
                <span className="text-[9px] sm:text-[10px] md:text-xs text-white/80">Active</span>
              </div>
            </div>
            
            <div className="absolute -right-3 sm:-right-4 md:-right-6 -bottom-3 sm:-bottom-4 md:-bottom-6 opacity-10">
              <TrendingUp className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white" />
            </div>
          </div>

          {/* Card 2 - Growth */}
          <div className="kpi-card relative overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 hover:shadow-xl transition-all hover:scale-105">
            <div className="relative z-10">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">+{avgGrowth}%</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-white/90 font-medium leading-tight">Growth Per Bulan</p>
              
              <div className="flex items-center gap-1 mt-2 sm:mt-3 md:mt-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                  <Target className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                </div>
                <span className="text-[9px] sm:text-[10px] md:text-xs text-white/80">Active</span>
              </div>
            </div>
            
            <div className="absolute -right-3 sm:-right-4 md:-right-6 -bottom-3 sm:-bottom-4 md:-bottom-6 opacity-10">
              <Target className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white" />
            </div>
          </div>

          {/* Card 3 - Segmen Terbaik */}
          <div className="kpi-card relative overflow-hidden bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 hover:shadow-xl transition-all hover:scale-105">
            <div className="relative z-10">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">{topSegment}</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-white/90 font-medium leading-tight">Segmen Terbaik</p>
              
              <div className="flex items-center gap-1 mt-2 sm:mt-3 md:mt-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                  <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                </div>
                <span className="text-[9px] sm:text-[10px] md:text-xs text-white/80">Active</span>
              </div>
            </div>
            
            <div className="absolute -right-3 sm:-right-4 md:-right-6 -bottom-3 sm:-bottom-4 md:-bottom-6 opacity-10">
              <Briefcase className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white" />
            </div>
          </div>

          {/* Card 4 - Total Leads */}
          <div className="kpi-card relative overflow-hidden bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 hover:shadow-xl transition-all hover:scale-105">
            <div className="relative z-10">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">{totalLeads}</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-white/90 font-medium leading-tight">Total Leads Aktif</p>
              
              <div className="flex items-center gap-1 mt-2 sm:mt-3 md:mt-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                  <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                </div>
                <span className="text-[9px] sm:text-[10px] md:text-xs text-white/80">Active</span>
              </div>
            </div>
            
            <div className="absolute -right-3 sm:-right-4 md:-right-6 -bottom-3 sm:-bottom-4 md:-bottom-6 opacity-10">
              <Users className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white" />
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Nasabah Deposito Bulanan */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200">
            <h2 className="text-base sm:text-lg font-bold text-slate-800 mb-3 sm:mb-4">Nasabah Deposito Bulanan (Jan - Des)</h2>
            <div className="w-full h-64 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyDeposits} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip contentStyle={{ fontSize: '12px' }} />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                  <Bar dataKey="amount" fill="#3b82f6" name="Jumlah Nasabah" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Konversi Sales */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200">
            <h2 className="text-base sm:text-lg font-bold text-slate-800 mb-3 sm:mb-4">Konversi Sales Per Bulan (%)</h2>
            <div className="w-full h-64 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={conversionData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip contentStyle={{ fontSize: '12px' }} />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                  <Line type="monotone" dataKey="rate" stroke="#10b981" strokeWidth={2} name="Conversion Rate (%)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Profesi Terbanyak */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200">
            <h2 className="text-base sm:text-lg font-bold text-slate-800 mb-3 sm:mb-4">Profesi Terbanyak Berlangganan</h2>
            <div className="w-full h-64 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={professionData} layout="vertical" margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" tick={{ fontSize: 10 }} />
                  <YAxis dataKey="profession" type="category" width={70} tick={{ fontSize: 9 }} />
                  <Tooltip contentStyle={{ fontSize: '12px' }} />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                  <Bar dataKey="count" fill="#8b5cf6" name="Jumlah Nasabah" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Alasan Nasabah Menolak / Tidak Berminat */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200">
            <h2 className="text-base sm:text-lg font-bold text-slate-800 mb-3 sm:mb-4">Alasan Nasabah Menolak / Tidak Berminat</h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">Kategori alasan saat sales menelepon</p>
            <div className="w-full h-64 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={rejectionReasonsData}
                    cx="50%"
                    cy="45%"
                    labelLine={false}
                    label={({ value }) => `${value}%`}
                    outerRadius={window.innerWidth < 640 ? 60 : 80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {rejectionReasonsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ fontSize: '12px' }} />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    wrapperStyle={{ fontSize: '10px' }}
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
