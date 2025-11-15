import React, { useState } from 'react';
import { Search, Filter, ArrowUpDown, Phone, FileText, Eye, User, X, Briefcase, MapPin, Heart, Calendar } from 'lucide-react';
import { mockNasabah, Nasabah } from '../data/mockData';

type TabType = 'all' | 'contacted' | 'not-contacted' | 'follow-up';

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

const NasabahPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedNasabah, setSelectedNasabah] = useState<Nasabah | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'nama' | 'prioritas' | 'umur'>('prioritas');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [filterPrioritas, setFilterPrioritas] = useState<string>('all');
  const [filterPekerjaan, setFilterPekerjaan] = useState<string>('all');
  const [sortOpen, setSortOpen] = useState(false);

  const tabs = [
    { id: 'all' as TabType, label: 'Semua', count: mockNasabah.length },
    { id: 'contacted' as TabType, label: 'Contacted', count: mockNasabah.filter(n => n.statusKontak === 'contacted').length },
    { id: 'not-contacted' as TabType, label: 'Not Contacted', count: mockNasabah.filter(n => n.statusKontak === 'not-contacted').length },
    { id: 'follow-up' as TabType, label: 'Follow Up', count: mockNasabah.filter(n => n.statusKontak === 'follow-up').length }
  ];

  // Get unique pekerjaan for filter
  const uniquePekerjaan = Array.from(new Set(mockNasabah.map(n => n.pekerjaan)));

  const filteredNasabah = mockNasabah
    .filter(nasabah => {
      const matchesSearch = nasabah.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           nasabah.telepon.includes(searchQuery) ||
                           nasabah.pekerjaan.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTab = activeTab === 'all' || nasabah.statusKontak === activeTab;
      const matchesPrioritas = filterPrioritas === 'all' || nasabah.prioritas === filterPrioritas;
      const matchesPekerjaan = filterPekerjaan === 'all' || nasabah.pekerjaan === filterPekerjaan;
      
      return matchesSearch && matchesTab && matchesPrioritas && matchesPekerjaan;
    })
    .sort((a, b) => {
      let comparison = 0;
      
      if (sortBy === 'nama') {
        comparison = a.nama.localeCompare(b.nama);
      } else if (sortBy === 'prioritas') {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        comparison = priorityOrder[a.prioritas as keyof typeof priorityOrder] - priorityOrder[b.prioritas as keyof typeof priorityOrder];
      } else if (sortBy === 'umur') {
        comparison = a.umur - b.umur;
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });

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
      {/* Backdrop for mobile dropdowns */}
      {(filterOpen || sortOpen) && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 sm:hidden"
          onClick={() => {
            setFilterOpen(false);
            setSortOpen(false);
          }}
        />
      )}
      
      <div className="responsive-container p-3 sm:p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4 sm:mb-8 pb-3 sm:pb-4 border-b border-slate-200">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center sm:text-left" style={{ color: '#184b86' }}>Daftar Leads</h1>
          
        </div>

        {/* Search & Actions */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Cari nama, telepon, atau pekerjaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
            />
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1 sm:flex-none">
            <button 
              onClick={() => {
                setFilterOpen(!filterOpen);
                setSortOpen(false);
              }}
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 shadow-sm transition-colors w-full sm:w-auto"
            >
              <Filter className="w-4 h-4" />
              <span className="font-medium text-sm sm:text-base">Filter</span>
            </button>
            
            {filterOpen && (
              <div className="fixed inset-x-0 top-auto bottom-0 sm:absolute sm:inset-auto sm:right-0 sm:top-full sm:mt-2 w-full sm:w-64 bg-white rounded-t-2xl sm:rounded-xl shadow-2xl border border-slate-200 p-4 z-50 max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-800">Filter Leads</h3>
                  <button 
                    onClick={() => setFilterOpen(false)}
                    className="sm:hidden p-1 hover:bg-slate-100 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Prioritas</label>
                    <select
                      value={filterPrioritas}
                      onChange={(e) => setFilterPrioritas(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="all">Semua Prioritas</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Pekerjaan</label>
                    <select
                      value={filterPekerjaan}
                      onChange={(e) => setFilterPekerjaan(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="all">Semua Pekerjaan</option>
                      {uniquePekerjaan.map(pekerjaan => (
                        <option key={pekerjaan} value={pekerjaan}>{pekerjaan}</option>
                      ))}
                    </select>
                  </div>
                  
                  <button
                    onClick={() => {
                      setFilterPrioritas('all');
                      setFilterPekerjaan('all');
                    }}
                    className="w-full px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    Reset Filter
                  </button>
                </div>
              </div>
            )}
            </div>
          
            <div className="relative flex-1 sm:flex-none">
            <button 
              onClick={() => {
                setSortOpen(!sortOpen);
                setFilterOpen(false);
              }}
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 shadow-sm transition-colors w-full sm:w-auto"
            >
              <ArrowUpDown className="w-4 h-4" />
              <span className="font-medium text-sm sm:text-base">Sort</span>
            </button>
            
            {sortOpen && (
              <div className="fixed inset-x-0 top-auto bottom-0 sm:absolute sm:inset-auto sm:right-0 sm:top-full sm:mt-2 w-full sm:w-48 bg-white rounded-t-2xl sm:rounded-xl shadow-2xl border border-slate-200 p-2 z-50">
                <div className="flex items-center justify-between px-2 py-2 sm:hidden">
                  <h3 className="font-semibold text-slate-800">Urutkan</h3>
                  <button 
                    onClick={() => setSortOpen(false)}
                    className="p-1 hover:bg-slate-100 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <button
                  onClick={() => {
                    setSortBy('nama');
                    setSortOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    sortBy === 'nama' ? 'font-medium' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  style={sortBy === 'nama' ? { background: '#e3f2fd', color: '#184b86' } : {}}
                >
                  Nama
                </button>
                <button
                  onClick={() => {
                    setSortBy('prioritas');
                    setSortOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    sortBy === 'prioritas' ? 'font-medium' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  style={sortBy === 'prioritas' ? { background: '#e3f2fd', color: '#184b86' } : {}}
                >
                  Prioritas
                </button>
                <button
                  onClick={() => {
                    setSortBy('umur');
                    setSortOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    sortBy === 'umur' ? 'font-medium' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  style={sortBy === 'umur' ? { background: '#e3f2fd', color: '#184b86' } : {}}
                >
                  Umur
                </button>
                <div className="border-t border-slate-200 my-2"></div>
                <button
                  onClick={() => {
                    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  {sortOrder === 'asc' ? '↑ Ascending' : '↓ Descending'}
                </button>
              </div>
            )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 sm:gap-2 mb-4 sm:mb-6 bg-white p-1.5 sm:p-2 rounded-xl shadow-lg border border-slate-200 overflow-x-auto scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-3 sm:px-4 py-2 sm:py-2.5 font-semibold text-xs sm:text-sm rounded-lg transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
              style={activeTab === tab.id ? { background: '#184b86' } : {}}
            >
              {tab.label} <span className={`${activeTab === tab.id ? 'text-blue-100' : 'text-slate-400'}`}>({tab.count})</span>
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Desktop Table View - Hidden on mobile */}
          <div className="desktop-table hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Nama</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Telepon</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Pekerjaan</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Prioritas</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredNasabah.map((nasabah) => {
                  const priorityBadge = getPriorityBadge(nasabah.prioritas);
                  const statusBadge = getStatusBadge(nasabah.statusKontak);
                  
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
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${statusBadge.class}`}>
                          {statusBadge.label}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${priorityBadge.class}`}>
                          {priorityBadge.label}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
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
                            onClick={() => window.open(`tel:${nasabah.telepon}`)}
                            className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                            style={{ color: '#184b86' }}
                            title="Telepon"
                          >
                            <Phone className="w-4 h-4" />
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
            {filteredNasabah.map((nasabah) => {
              const priorityBadge = getPriorityBadge(nasabah.prioritas);
              const statusBadge = getStatusBadge(nasabah.statusKontak);
              
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

          {filteredNasabah.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              <User className="w-16 h-16 mx-auto mb-4 text-slate-300" />
              <p className="text-lg font-medium">Tidak ada leads yang ditemukan</p>
              <p className="text-sm mt-1">Coba ubah filter atau kata kunci pencarian</p>
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

export default NasabahPage;
