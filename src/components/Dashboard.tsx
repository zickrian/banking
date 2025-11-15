import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  Phone, 
  Target, 
  TrendingUp, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import SummaryCards from './SummaryCards';
import ConversionFunnel from './ConversionFunnel';
import MonthlyAnalytics from './MonthlyAnalytics';
import MLPriorityAnalysis from './MLPriorityAnalysis';
import DemographicsAnalysis from './DemographicsAnalysis';
import FollowUpAnalytics from './FollowUpAnalytics';
import SalesPerformance from './SalesPerformance';
import CallTimeHeatmap from './CallTimeHeatmap';
import AIInsights from './AIInsights';
import CustomerTable from './CustomerTable';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'customers', label: 'Customer Analytics', icon: Users },
    { id: 'campaigns', label: 'Campaign Performance', icon: Target },
    { id: 'sales', label: 'Sales Performance', icon: Phone },
    { id: 'insights', label: 'AI Insights', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <SummaryCards />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <ConversionFunnel />
              <MonthlyAnalytics />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <MLPriorityAnalysis />
              <DemographicsAnalysis />
            </div>
            <AIInsights />
            <CustomerTable />
          </div>
        );
      case 'customers':
        return (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827' }}>Customer Analytics</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <DemographicsAnalysis />
              <FollowUpAnalytics />
            </div>
            <CallTimeHeatmap />
          </div>
        );
      case 'campaigns':
        return (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827' }}>Campaign Performance</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <ConversionFunnel />
              <MLPriorityAnalysis />
            </div>
            <MonthlyAnalytics />
          </div>
        );
      case 'sales':
        return (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827' }}>Sales Performance</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <SalesPerformance />
              <FollowUpAnalytics />
            </div>
          </div>
        );
      case 'insights':
        return (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827' }}>AI-Generated Insights</h2>
            <AIInsights />
          </div>
        );
      case 'settings':
        return (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827' }}>Settings</h2>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb' }}>
              <p style={{ color: '#4b5563' }}>Settings panel coming soon...</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div style={{
        position: 'fixed',
        left: sidebarOpen ? 0 : '-16rem',
        top: 0,
        bottom: 0,
        width: '16rem',
        backgroundColor: '#1e40af',
        transition: 'left 0.3s ease',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem', padding: '0 1.5rem', backgroundColor: '#1e40af' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '2rem', height: '2rem', backgroundColor: 'white', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BarChart3 className="w-5 h-5 text-blue-900" />
            </div>
            <h1 style={{ marginLeft: '0.75rem', fontSize: '1.25rem', fontWeight: '600', color: 'white' }}>Bank Analytics</h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            style={{ display: 'none', color: 'white' }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav style={{ marginTop: '2rem', flex: 1 }}>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem 1.5rem',
                  textAlign: 'left',
                  backgroundColor: activeSection === item.id ? '#1e40af' : 'transparent',
                  borderRight: activeSection === item.id ? '4px solid white' : 'none',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.id) e.currentTarget.style.backgroundColor = '#1e40af';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Icon className="w-5 h-5 mr-3 text-blue-200" />
                <span style={{ color: 'white' }}>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div style={{ padding: '1.5rem' }}>
          <button style={{ 
            width: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            padding: '0.5rem 1rem', 
            textAlign: 'left', 
            color: '#bfdbfe',
            backgroundColor: 'transparent',
            borderRadius: '0.5rem',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e40af'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ 
        flex: 1, 
        marginLeft: '16rem',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header */}
        <header style={{ 
          backgroundColor: 'white', 
          borderBottom: '1px solid #e5e7eb',
          position: 'sticky',
          top: 0,
          zIndex: 40
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem', padding: '0 1.5rem' }}>
            <button
              onClick={() => setSidebarOpen(true)}
              style={{ color: '#4b5563' }}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827' }}>
              {navigationItems.find(item => item.id === activeSection)?.label || 'Dashboard'}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                {new Date().toLocaleDateString('id-ID', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ 
          flex: 1, 
          padding: '1.5rem', 
          backgroundColor: '#f9fafb',
          overflow: 'auto'
        }}>
          {renderContent()}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          style={{ 
            position: 'fixed', 
            inset: 0, 
            zIndex: 40, 
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;