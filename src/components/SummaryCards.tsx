import React from 'react';
import { Users, DollarSign, Target, TrendingUp, Award } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  color: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  icon, 
  color 
}) => {
  const changeColorClass = {
    positive: { color: '#059669' },
    negative: { color: '#dc2626' },
    neutral: { color: '#4b5563' }
  }[changeType];

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb',
      transition: 'box-shadow 0.2s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4b5563' }}>{title}</p>
          <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#111827', marginTop: '0.5rem' }}>{value}</p>
          {change && (
            <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', ...changeColorClass }}>
              {changeType === 'positive' ? '↗' : changeType === 'negative' ? '↘' : ''} {change}
            </p>
          )}
        </div>
        <div style={{ 
          padding: '0.75rem', 
          borderRadius: '0.5rem', 
          backgroundColor: color 
        }}>
          {icon}
        </div>
      </div>
    </div>
  );
};

const SummaryCards: React.FC = () => {
  const cards = [
    {
      title: 'Total Nasabah Dihubungi (Bulan Ini)',
      value: '2,847',
      change: '+12% dari bulan lalu',
      changeType: 'positive' as const,
      icon: <Users className="w-6 h-6 text-blue-600" />,
      color: '#dbeafe'
    },
    {
      title: 'Total Nasabah Berlangganan Deposito',
      value: '342',
      change: '+8% dari bulan lalu',
      changeType: 'positive' as const,
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      color: '#d1fae5'
    },
    {
      title: 'Conversion Rate',
      value: '12.0%',
      change: '+2.1% dari bulan lalu',
      changeType: 'positive' as const,
      icon: <Target className="w-6 h-6 text-purple-600" />,
      color: '#e9d5ff'
    },
    {
      title: 'Nasabah Prioritas Tinggi',
      value: '489',
      change: '+5% dari bulan lalu',
      changeType: 'positive' as const,
      icon: <Award className="w-6 h-6 text-orange-600" />,
      color: '#fed7aa'
    },
    {
      title: 'Akurasi Model ML',
      value: '87.3%',
      change: '+1.2% dari bulan lalu',
      changeType: 'positive' as const,
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
      color: '#e0e7ff'
    },
    {
      title: 'Estimated Revenue',
      value: 'Rp 15.2M',
      change: '+15% dari bulan lalu',
      changeType: 'positive' as const,
      icon: <DollarSign className="w-6 h-6 text-emerald-600" />,
      color: '#d1fae5'
    }
  ];

  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827' }}>Key Performance Indicators</h2>
        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Terakhir diperbarui: {new Date().toLocaleTimeString('id-ID')}
        </div>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {cards.map((card, index) => (
          <SummaryCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default SummaryCards;