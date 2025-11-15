import React, { useState } from 'react';
import { Phone, FileText, TrendingUp, Users, Clock, Target, X, Eye, User, Briefcase, MapPin, Heart, Calendar } from 'lucide-react';
import { mockNasabah, Nasabah } from '../data/mockData';

// Modal Detail Nasabah
interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  nasabah: Nasabah | null;
}

const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, nasabah }) => {
  if (!isOpen || !nasabah) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 p-4 sm:p-6 flex items-center justify-between rounded-t-xl" style={{ background: '#184b86' }}>
          <div className="min-w-0 flex-1">
            <h2 className="text-lg sm:text-xl font-bold text-white truncate">Detail Lead</h2>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 truncate">{nasabah.nama}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0 ml-2"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Informasi Umum */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 sm:mb-4">Informasi Umum</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-slate-50 rounded-lg">
                <User className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" style={{ color: '#184b86' }} />
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 mb-1">Nama Lengkap</p>
                  <p className="font-semibold text-sm sm:text-base text-slate-900 break-words">{nasabah.nama}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-slate-50 rounded-lg">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" style={{ color: '#184b86' }} />
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 mb-1">Nomor Telepon</p>
                  <p className="font-semibold text-sm sm:text-base text-slate-900 break-words">{nasabah.telepon}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-slate-50 rounded-lg">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" style={{ color: '#184b86' }} />
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 mb-1">Umur</p>
                  <p className="font-semibold text-sm sm:text-base text-slate-900">{nasabah.umur} tahun</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-slate-50 rounded-lg">
                <User className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" style={{ color: '#184b86' }} />
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 mb-1">Jenis Kelamin</p>
                  <p className="font-semibold text-sm sm:text-base text-slate-900">{nasabah.jenisKelamin}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Informasi Pekerjaan */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 sm:mb-4">Pekerjaan & Industri</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-slate-50 rounded-lg">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" style={{ color: '#184b86' }} />
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 mb-1">Pekerjaan</p>
                  <p className="font-semibold text-sm sm:text-base text-slate-900 break-words">{nasabah.pekerjaan}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-slate-50 rounded-lg">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" style={{ color: '#184b86' }} />
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 mb-1">Sektor Industri</p>
                  <p className="font-semibold text-sm sm:text-base text-slate-900 break-words">{nasabah.sektorIndustri}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Informasi Penting */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 sm:mb-4">Informasi Penting</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-slate-50 rounded-lg">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" style={{ color: '#184b86' }} />
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 mb-1">Status Pernikahan</p>
                  <p className="font-semibold text-sm sm:text-base text-slate-900">{nasabah.statusPernikahan}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-slate-50 rounded-lg">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" style={{ color: '#184b86' }} />
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 mb-1">Domisili</p>
                  <p className="font-semibold text-sm sm:text-base text-slate-900 break-words">{nasabah.domisili}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 rounded-b-xl">
          <button
            onClick={onClose}
            className="w-full px-6 py-2.5 sm:py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 font-medium transition-colors text-sm sm:text-base"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

// Modal Aksi Nasabah
interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  nasabah: Nasabah | null;
}

const ActionModal: React.FC<ActionModalProps> = ({ isOpen, onClose, nasabah }) => {
  const [formData, setFormData] = useState({
    ketertarikan: '',
    statusKontak: 'not-contacted',
    alasanTidakTertarik: '',
    catatan: ''
  });

  if (!isOpen || !nasabah) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      // Reset alasan jika ketertarikan berubah dari tidak-tertarik
      ...(name === 'ketertarikan' && value !== 'tidak-tertarik' ? { alasanTidakTertarik: '' } : {})
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Data berhasil disimpan!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 p-4 sm:p-6 flex items-center justify-between rounded-t-xl" style={{ background: '#184b86' }}>
          <div className="min-w-0 flex-1">
            <h2 className="text-lg sm:text-xl font-bold text-white truncate">Aksi Lead</h2>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 truncate">{nasabah?.nama}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0 ml-2"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5">
          {/* Ketertarikan */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Ketertarikan <span className="text-red-500">*</span>
            </label>
            <select
              name="ketertarikan"
              value={formData.ketertarikan}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="">Pilih Status</option>
              <option value="tertarik">Tertarik</option>
              <option value="tidak-tertarik">Tidak Tertarik</option>
            </select>
          </div>

          {/* Alasan Tidak Tertarik (Conditional) */}
          {formData.ketertarikan === 'tidak-tertarik' && (
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Alasan Tidak Tertarik <span className="text-red-500">*</span>
              </label>
              <select
                name="alasanTidakTertarik"
                value={formData.alasanTidakTertarik}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="">Pilih Alasan</option>
                <option value="tidak-butuh-produk">Tidak butuh produk</option>
                <option value="sedang-sibuk">Sedang sibuk / tidak sempat</option>
                <option value="tidak-percaya">Tidak percaya / butuh penjelasan ulang</option>
                <option value="dana-belum-tersedia">Dana belum tersedia</option>
                <option value="kontak-tidak-aktif">Kontak tidak aktif</option>
              </select>
            </div>
          )}

          {/* Status Kontak */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Status Kontak <span className="text-red-500">*</span>
            </label>
            <select
              name="statusKontak"
              value={formData.statusKontak}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="not-contacted">Not Contacted</option>
              <option value="contacted">Contacted</option>
              <option value="follow-up">Follow Up</option>
            </select>
          </div>

          {/* Catatan */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Catatan <span className="text-red-500">*</span>
            </label>
            <textarea
              name="catatan"
              value={formData.catatan}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Tulis catatan interaksi dengan lead..."
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 px-6 py-2.5 sm:py-3 text-white rounded-lg font-semibold transition-colors text-sm sm:text-base"
              style={{ background: '#184b86' }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#0f3a6b'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#184b86'}
            >
              Simpan
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 sm:py-3 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 font-semibold transition-colors text-sm sm:text-base"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const DashboardPage: React.FC = () => {
  const [selectedNasabah, setSelectedNasabah] = useState<Nasabah | null>(null);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Filter 5 nasabah terakhir yang sudah dihubungi (contacted) berdasarkan tanggal riwayat kontak
  const contactedNasabah = mockNasabah
    .filter(n => n.statusKontak === 'contacted' && n.riwayatKontak.length > 0)
    .sort((a, b) => {
      // Sort berdasarkan tanggal riwayat kontak terakhir (terbaru dulu)
      const dateA = new Date(a.riwayatKontak[a.riwayatKontak.length - 1].tanggal);
      const dateB = new Date(b.riwayatKontak[b.riwayatKontak.length - 1].tanggal);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 5);

  const totalLeads = mockNasabah.length;
  const contacted = mockNasabah.filter(n => n.statusKontak === 'contacted').length;
  const followUp = mockNasabah.filter(n => n.statusKontak === 'follow-up').length;
  const conversionRate = ((contacted / totalLeads) * 100).toFixed(1);
  const highPriority = mockNasabah.filter(n => n.prioritas === 'high').length;

  const kpis = [
    { label: 'Total Leads', value: totalLeads, icon: Users, color: 'from-blue-500 to-blue-600' },
    { label: 'Sudah Dihubungi', value: contacted, icon: Phone, color: 'from-emerald-500 to-emerald-600' },
    { label: 'Follow Up Pending', value: followUp, icon: Clock, color: 'from-amber-500 to-amber-600' },
    { label: 'Conversion Rate', value: `${conversionRate}%`, icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
    { label: 'Prioritas Tinggi', value: highPriority, icon: Target, color: 'from-rose-500 to-rose-600' }
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return { label: 'High', class: 'bg-rose-100 text-rose-700 border-rose-200' };
      case 'medium':
        return { label: 'Medium', class: 'bg-amber-100 text-amber-700 border-amber-200' };
      case 'low':
        return { label: 'Low', class: 'bg-emerald-100 text-emerald-700 border-emerald-200' };
      default:
        return { label: priority, class: 'bg-slate-100 text-slate-700 border-slate-200' };
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'contacted':
        return { label: 'Contacted', class: 'bg-emerald-100 text-emerald-700 border-emerald-200' };
      case 'follow-up':
        return { label: 'Follow Up', class: 'bg-amber-100 text-amber-700 border-amber-200' };
      case 'not-contacted':
        return { label: 'Not Contacted', class: 'bg-slate-100 text-slate-700 border-slate-200' };
      default:
        return { label: status, class: 'bg-slate-100 text-slate-700 border-slate-200' };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="responsive-container p-3 sm:p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4 sm:mb-8 pb-3 sm:pb-4 border-b border-slate-200">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center sm:text-left" style={{ color: '#184b86' }}>Dashboard</h1>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-8">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div 
                key={index} 
                className={`kpi-card relative overflow-hidden bg-gradient-to-br ${kpi.color} rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 hover:shadow-xl transition-all hover:scale-105`}
              >
                {/* Konten Utama */}
                <div className="relative z-10">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">{kpi.value}</p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-white/90 font-medium leading-tight">{kpi.label}</p>
                  
                  {/* Icon Kecil dengan Badge */}
                  <div className="flex items-center gap-1 mt-2 sm:mt-3 md:mt-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                      <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] md:text-xs text-white/80">Active</span>
                  </div>
                </div>
                
                {/* Icon Samar di Kanan Bawah */}
                <div className="absolute -right-3 sm:-right-4 md:-right-6 -bottom-3 sm:-bottom-4 md:-bottom-6 opacity-10">
                  <Icon className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 text-white" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Leads yang Sudah Dihubungi */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-3 sm:p-6 border-b border-slate-200 bg-white">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 text-center sm:text-left">Leads yang Sudah Dihubungi</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 text-center sm:text-left">5 leads terakhir yang telah dikontak</p>
          </div>
          
          {/* Desktop Table View */}
          <div className="desktop-table hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Nama</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Telepon</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Pekerjaan</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Terakhir Dihubungi</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Prioritas</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {contactedNasabah.map((nasabah) => {
                  const priorityBadge = getPriorityBadge(nasabah.prioritas);
                  const statusBadge = getStatusBadge(nasabah.statusKontak);
                  const lastContact = nasabah.riwayatKontak.length > 0 
                    ? nasabah.riwayatKontak[nasabah.riwayatKontak.length - 1].tanggal 
                    : '-';
                  
                  return (
                    <tr key={nasabah.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#184b86' }}>
                            <span className="text-sm font-semibold text-white">{nasabah.nama.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{nasabah.nama}</p>
                            <p className="text-xs text-slate-500">{nasabah.domisili}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">{nasabah.telepon}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">{nasabah.pekerjaan}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-slate-400" />
                          <span className="text-sm text-slate-700">{lastContact}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${priorityBadge.class}`}>
                          {priorityBadge.label}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${statusBadge.class}`}>
                          {statusBadge.label}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2 justify-center">
                          <button 
                            onClick={() => {
                              setSelectedNasabah(nasabah);
                              setIsDetailModalOpen(true);
                            }}
                            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                            title="Lihat Detail"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => {
                              setSelectedNasabah(nasabah);
                              setIsActionModalOpen(true);
                            }}
                            className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            title="Aksi"
                          >
                            <FileText className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => window.open(`tel:${nasabah.telepon}`)}
                            className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                            style={{ color: '#184b86' }}
                            title="Telepon Lead"
                          >
                            <Phone className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="mobile-cards block md:hidden divide-y divide-slate-200">
            {contactedNasabah.map((nasabah) => {
              const priorityBadge = getPriorityBadge(nasabah.prioritas);
              const statusBadge = getStatusBadge(nasabah.statusKontak);
              const lastContact = nasabah.riwayatKontak.length > 0 
                ? nasabah.riwayatKontak[nasabah.riwayatKontak.length - 1].tanggal 
                : '-';
              
              return (
                <div key={nasabah.id} className="p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#184b86' }}>
                      <span className="text-base font-semibold text-white">{nasabah.nama.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 text-base mb-1">{nasabah.nama}</h3>
                      <p className="text-xs text-slate-500 mb-2">{nasabah.domisili}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold border ${priorityBadge.class}`}>
                          {priorityBadge.label}
                        </span>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold border ${statusBadge.class}`}>
                          {statusBadge.label}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-700">{nasabah.telepon}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-700">{nasabah.pekerjaan}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-700">{lastContact}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => {
                        setSelectedNasabah(nasabah);
                        setIsDetailModalOpen(true);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-sm font-medium"
                    >
                      <Eye className="w-4 h-4" />
                      Detail
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedNasabah(nasabah);
                        setIsActionModalOpen(true);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors text-sm font-medium"
                    >
                      <FileText className="w-4 h-4" />
                      Aksi
                    </button>
                    <button 
                      onClick={() => window.open(`tel:${nasabah.telepon}`)}
                      className="flex items-center justify-center px-3 py-2 hover:bg-blue-50 rounded-lg transition-colors"
                      style={{ color: '#184b86' }}
                    >
                      <Phone className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          
          {contactedNasabah.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              <Users className="w-12 h-12 mx-auto mb-3 text-slate-300" />
              <p>Belum ada leads yang dihubungi</p>
            </div>
          )}
        </div>

        {/* Modals */}
        <DetailModal 
          isOpen={isDetailModalOpen}
          onClose={() => {
            setIsDetailModalOpen(false);
            setSelectedNasabah(null);
          }}
          nasabah={selectedNasabah}
        />
        
        <ActionModal 
          isOpen={isActionModalOpen}
          onClose={() => {
            setIsActionModalOpen(false);
            setSelectedNasabah(null);
          }}
          nasabah={selectedNasabah}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
