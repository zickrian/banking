import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, FileText } from 'lucide-react';
import { mockNasabah } from '../data/mockData';

const FormKreditPage: React.FC = () => {
  const { nasabahId } = useParams();
  const navigate = useNavigate();
  
  const nasabah = nasabahId ? mockNasabah.find(n => n.id === nasabahId) : null;

  const [formData, setFormData] = useState({
    namaNasabah: nasabah?.nama || '',
    telepon: nasabah?.telepon || '',
    jenisKredit: '',
    jumlahPengajuan: '',
    tenor: '',
    tujuanKredit: '',
    penghasilanBulanan: '',
    catatan: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form pengajuan kredit berhasil disimpan!');
    navigate('/nasabah');
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="mb-4 sm:mb-6 pb-4 border-b border-slate-200">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-3 sm:mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm sm:text-base">Kembali</span>
        </button>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="bg-green-100 p-2 sm:p-3 rounded-lg">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold" style={{ color: '#184b86' }}>Form Pengajuan Kredit</h1>
            <p className="text-xs sm:text-sm text-gray-600">Isi formulir pengajuan kredit untuk nasabah</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <div className="space-y-5 sm:space-y-6">
            {/* Data Nasabah */}
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Data Nasabah</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Nasabah <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="namaNasabah"
                    value={formData.namaNasabah}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telepon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telepon"
                    value={formData.telepon}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Detail Kredit */}
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Detail Kredit</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Kredit <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="jenisKredit"
                    value={formData.jenisKredit}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Pilih Jenis Kredit</option>
                    <option value="KPR">Kredit Pemilikan Rumah (KPR)</option>
                    <option value="KKB">Kredit Kendaraan Bermotor (KKB)</option>
                    <option value="Multiguna">Kredit Multiguna</option>
                    <option value="Modal Usaha">Kredit Modal Usaha</option>
                    <option value="Investasi">Kredit Investasi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jumlah Pengajuan (Rp) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="jumlahPengajuan"
                    value={formData.jumlahPengajuan}
                    onChange={handleChange}
                    required
                    placeholder="Contoh: 100000000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tenor (Bulan) <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="tenor"
                    value={formData.tenor}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Pilih Tenor</option>
                    <option value="12">12 Bulan</option>
                    <option value="24">24 Bulan</option>
                    <option value="36">36 Bulan</option>
                    <option value="48">48 Bulan</option>
                    <option value="60">60 Bulan</option>
                    <option value="120">120 Bulan</option>
                    <option value="180">180 Bulan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Penghasilan Bulanan (Rp) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="penghasilanBulanan"
                    value={formData.penghasilanBulanan}
                    onChange={handleChange}
                    required
                    placeholder="Contoh: 15000000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Tujuan Kredit */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tujuan Kredit <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="tujuanKredit"
                value={formData.tujuanKredit}
                onChange={handleChange}
                required
                placeholder="Contoh: Pembelian rumah, renovasi, modal usaha, dll"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Catatan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Catatan Tambahan
              </label>
              <textarea
                name="catatan"
                value={formData.catatan}
                onChange={handleChange}
                rows={4}
                placeholder="Catatan atau informasi tambahan..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium text-sm sm:text-base"
              >
                <Save className="w-4 h-4" />
                Simpan Pengajuan
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium text-sm sm:text-base"
              >
                Batal
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormKreditPage;
