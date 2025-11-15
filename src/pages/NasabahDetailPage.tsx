import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, FileText, User, Briefcase, TrendingUp, Calendar, MessageSquare, Building2 } from 'lucide-react';
import { mockNasabah } from '../data/mockData';

const NasabahDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [catatan, setCatatan] = useState('');

  const nasabah = mockNasabah.find(n => n.id === id);

  if (!nasabah) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <div className="text-center py-12">
          <p className="text-slate-500">Lead tidak ditemukan</p>
          <button 
            onClick={() => navigate('/nasabah')}
            className="mt-4 text-blue-600 hover:underline"
          >
            Kembali ke daftar leads
          </button>
        </div>
      </div>
    );
  }

  const handleSaveCatatan = () => {
    alert(`Catatan disimpan: ${catatan}`);
    setCatatan('');
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return { label: 'High Priority', class: 'bg-rose-100 text-rose-700 border-rose-200' };
      case 'medium':
        return { label: 'Medium Priority', class: 'bg-amber-100 text-amber-700 border-amber-200' };
      case 'low':
        return { label: 'Low Priority', class: 'bg-emerald-100 text-emerald-700 border-emerald-200' };
      default:
        return { label: priority, class: 'bg-slate-100 text-slate-700 border-slate-200' };
    }
  };

  const priorityBadge = getPriorityBadge(nasabah.prioritas);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button 
            onClick={() => navigate('/nasabah')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Kembali</span>
          </button>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">{nasabah.nama.charAt(0)}</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-800">{nasabah.nama}</h1>
                  <p className="text-slate-600">{nasabah.pekerjaan}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => window.open(`tel:${nasabah.telepon}`)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Telepon
                </button>
                <button 
                  onClick={() => navigate(`/form-kredit/${nasabah.id}`)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium shadow-sm transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Form Kredit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Informasi Umum */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                Informasi Umum
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Nama Lengkap</p>
                  <p className="font-semibold text-slate-900">{nasabah.nama}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Nomor Telepon</p>
                  <p className="font-semibold text-slate-900">{nasabah.telepon}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Umur</p>
                  <p className="font-semibold text-slate-900">{nasabah.umur} tahun</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Jenis Kelamin</p>
                  <p className="font-semibold text-slate-900">{nasabah.jenisKelamin}</p>
                </div>
              </div>
            </div>

            {/* Informasi Pekerjaan */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
                Pekerjaan & Industri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Pekerjaan</p>
                  <p className="font-semibold text-slate-900">{nasabah.pekerjaan}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Sektor Industri</p>
                  <p className="font-semibold text-slate-900">{nasabah.sektorIndustri}</p>
                </div>
              </div>
            </div>

            {/* Informasi Penting */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                Informasi Penting
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Status Pernikahan</p>
                  <p className="font-semibold text-slate-900">{nasabah.statusPernikahan}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Domisili</p>
                  <p className="font-semibold text-slate-900">{nasabah.domisili}</p>
                </div>
              </div>
            </div>

            {/* Riwayat Kontak */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Riwayat Kontak
              </h2>
              {nasabah.riwayatKontak.length > 0 ? (
                <div className="space-y-4">
                  {nasabah.riwayatKontak.map((kontak, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 py-3 bg-slate-50 rounded-r-lg">
                      <p className="text-xs text-slate-500 mb-1">{kontak.tanggal}</p>
                      <p className="font-medium text-slate-900 mb-2">{kontak.catatan}</p>
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                        kontak.hasil === 'Positif' ? 'bg-emerald-100 text-emerald-700' :
                        kontak.hasil === 'Negosiasi' ? 'bg-amber-100 text-amber-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {kontak.hasil}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500 text-sm">Belum ada riwayat kontak</p>
              )}
            </div>

            {/* Input Catatan */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                Tambah Catatan Follow-Up
              </h2>
              <textarea
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                placeholder="Tulis catatan follow-up..."
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={4}
              />
              <button 
                onClick={handleSaveCatatan}
                className="mt-3 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-sm transition-colors"
              >
                Simpan Catatan
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prioritas ML */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Prioritas ML
              </h2>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-4xl font-bold text-white shadow-lg mb-4">
                  {nasabah.probabilitasML}%
                </div>
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border ${priorityBadge.class}`}>
                  {priorityBadge.label}
                </span>
              </div>
            </div>

            {/* Status Kontak */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-800 mb-5">Status Kontak</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-600">Status</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    nasabah.statusKontak === 'contacted' ? 'bg-emerald-100 text-emerald-700' :
                    nasabah.statusKontak === 'follow-up' ? 'bg-amber-100 text-amber-700' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                    {nasabah.statusKontak === 'contacted' ? 'Contacted' :
                     nasabah.statusKontak === 'follow-up' ? 'Follow Up' : 'Not Contacted'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-600">Saldo</span>
                  <span className="font-semibold text-slate-900">Rp {nasabah.saldo.toLocaleString('id-ID')}</span>
                </div>
              </div>
            </div>

            {/* Rekomendasi Percakapan */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                Rekomendasi
              </h2>
              <ul className="space-y-3">
                {nasabah.rekomendasiPercakapan.map((rekomendasi, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed">{rekomendasi}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NasabahDetailPage;
