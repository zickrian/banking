import React, { useState } from 'react';
import { User, Mail, Lock, Moon, Sun, LogOut, Bell, Shield, Globe } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [userData] = useState({
    name: 'Admin User',
    email: 'admin@bankportal.com',
    role: 'Administrator'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center py-8">
      <div className="w-full max-w-3xl px-6">
        {/* Header */}
        <div className="mb-8 pb-4 border-b border-slate-200 text-center">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#184b86' }}>Settings</h1>
     
        </div>

        <div className="space-y-6">
          {/* Profile Information */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
                <User className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Informasi Profil</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <User className="w-4 h-4 text-slate-500" />
                  Nama User
                </label>
                <input
                  type="text"
                  value={userData.name}
                  readOnly
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-slate-50 text-slate-700"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <Mail className="w-4 h-4 text-slate-500" />
                  Email
                </label>
                <input
                  type="email"
                  value={userData.email}
                  readOnly
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-slate-50 text-slate-700"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <Shield className="w-4 h-4 text-slate-500" />
                  Role
                </label>
                <input
                  type="text"
                  value={userData.role}
                  readOnly
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-slate-50 text-slate-700"
                />
              </div>
            </div>
          </div>

          {/* Change Password */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2 rounded-lg">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Ganti Password</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  Password Lama
                </label>
                <input
                  type="password"
                  placeholder="Masukkan password lama"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  Password Baru
                </label>
                <input
                  type="password"
                  placeholder="Masukkan password baru"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  Konfirmasi Password Baru
                </label>
                <input
                  type="password"
                  placeholder="Konfirmasi password baru"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold shadow-sm transition-colors">
                <Lock className="w-4 h-4" />
                Update Password
              </button>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-2 rounded-lg">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Preferensi</h2>
            </div>
            
            <div className="space-y-4">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  {darkMode ? <Moon className="w-5 h-5 text-slate-600" /> : <Sun className="w-5 h-5 text-slate-600" />}
                  <div>
                    <p className="font-semibold text-slate-900">Mode {darkMode ? 'Gelap' : 'Terang'}</p>
                    <p className="text-sm text-slate-500">Ubah tampilan aplikasi</p>
                  </div>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                    darkMode ? 'bg-blue-600' : 'bg-slate-300'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-md ${
                      darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Notifications Toggle */}
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-slate-600" />
                  <div>
                    <p className="font-semibold text-slate-900">Notifikasi</p>
                    <p className="text-sm text-slate-500">Terima notifikasi penting</p>
                  </div>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                    notifications ? 'bg-blue-600' : 'bg-slate-300'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-md ${
                      notifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Logout */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 w-full font-semibold shadow-sm transition-colors">
              <LogOut className="w-5 h-5" />
              Logout dari Akun
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
