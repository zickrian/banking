import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut,
  Menu,
  X,
  Building2
} from 'lucide-react';

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { id: 'nasabah', label: 'Leads', icon: Users, path: '/nasabah' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/analytics' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Logo BCA di paling atas */}
        <div className="py-4">
          <div className="flex items-center justify-center">
            <img 
              src="https://jasalogocepat.com/wp-content/uploads/2023/09/Logo-Bank-BCA-PNG-Transparan-jasalogocepat-1024x335.png" 
              alt="BCA Logo" 
              className="h-12 w-auto object-contain"
            />
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden absolute right-4 top-4 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Garis Pemisah */}
        <div className="px-6">
          <div className="border-t border-slate-200"></div>
        </div>

        {/* Profile Sales Section */}
        <div className="px-6 py-6">
          <div className="flex flex-col items-center text-center">
            {/* Foto Profile */}
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <img 
                src="https://blog.amikom.ac.id/wp-content/uploads/2025/09/Prompt-Gemini-AI-Foto-Formal-Cara-Bikin-Pas-Foto-Potret-Resmi-dan-Hasil-Profesional-Tanpa-Studio-3.jpg" 
                alt="Profile Sales" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Nama Sales */}
            <h3 className="text-base font-bold text-blue-900 mb-1">SALES NAME</h3>
            {/* Email */}
            <p className="text-xs text-slate-500">sales@bank.com</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-3 space-y-1">

          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive 
                    ? 'text-white shadow-md' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
                style={isActive ? { backgroundColor: '#184b86' } : {}}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-700'}`} />
                <span className="font-medium text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button className="flex items-center justify-center gap-3 w-full px-4 py-3 bg-white text-blue-900 border-2 border-blue-900 rounded-lg hover:bg-blue-50 transition-all duration-200 font-medium">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Keluar</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-slate-600 hover:text-slate-900"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#184b86' }}>
                <Building2 className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-base font-bold text-slate-800">Bank Portal</h2>
            </div>
            <div className="w-6" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-slate-50">
          <Outlet />
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;
