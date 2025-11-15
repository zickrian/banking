import React from 'react';
import { FunnelChart, Funnel, Tooltip, Cell } from 'recharts';

interface FunnelData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const ConversionFunnel: React.FC = () => {
  const funnelData: FunnelData[] = [
    {
      name: 'Total Leads (ML Prediksi)',
      value: 5000,
      percentage: 100,
      color: '#3B82F6'
    },
    {
      name: 'Leads Dihubungi',
      value: 2847,
      percentage: 56.9,
      color: '#10B981'
    },
    {
      name: 'Leads Tertarik',
      value: 876,
      percentage: 30.8,
      color: '#F59E0B'
    },
    {
      name: 'Berlangganan Deposito',
      value: 342,
      percentage: 39.0,
      color: '#EF4444'
    }
  ];

  const CustomFunnelLabel = (props: any) => {
    const { x, y, width, height, value, percentage, name } = props;
    const textX = x + width / 2;
    const textY = y + height / 2;
    
    return (
      <g>
        <text 
          x={textX} 
          y={textY - 8} 
          textAnchor="middle" 
          fill="white" 
          fontSize="14" 
          fontWeight="bold"
        >
          {value.toLocaleString()}
        </text>
        <text 
          x={textX} 
          y={textY + 8} 
          textAnchor="middle" 
          fill="white" 
          fontSize="12"
        >
          {percentage.toFixed(1)}%
        </text>
      </g>
    );
  };

  const renderFunnelData = () => {
    return funnelData.map((item, index) => (
      <div key={item.name} style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '1rem',
        borderBottom: index < funnelData.length - 1 ? '1px solid #e5e7eb' : 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div 
            style={{ 
              width: '1rem', 
              height: '1rem', 
              borderRadius: '0.125rem',
              backgroundColor: item.color 
            }}
          />
          <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>
            {item.name}
          </span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#111827' }}>
            {item.value.toLocaleString()}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
            {index === 0 ? '100%' : `${item.percentage.toFixed(1)}% dari tahap sebelumnya`}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div style={{ 
      backgroundColor: 'white', 
      padding: '1.5rem', 
      borderRadius: '0.5rem', 
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
      border: '1px solid #e5e7eb' 
    }}>
      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '1.5rem' }}>
        Conversion Funnel
      </h3>
      
      {/* Desktop Chart View */}
      <div style={{ display: 'none', height: '20rem', marginBottom: '1.5rem' }} className="lg:block">
        <FunnelChart width={400} height={300}>
          <Tooltip 
            formatter={(value: number, name: string) => [
              `${value.toLocaleString()} leads`,
              name
            ]}
            labelStyle={{ color: '#374151' }}
          />
          <Funnel
            dataKey="value"
            data={funnelData}
            isAnimationActive
            label={CustomFunnelLabel}
          >
            {funnelData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Funnel>
        </FunnelChart>
      </div>

      {/* Mobile/Desktop List View */}
      <div style={{ display: 'grid', gap: '0.5rem' }}>
        {renderFunnelData()}
      </div>

      {/* Key Insights */}
      <div style={{ 
        marginTop: '1.5rem', 
        padding: '1rem', 
        backgroundColor: '#dbeafe', 
        borderRadius: '0.5rem' 
      }}>
        <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e40af', marginBottom: '0.5rem' }}>
          Key Insights
        </h4>
        <ul style={{ fontSize: '0.875rem', color: '#1e40af' }}>
          <li>• Conversion rate tertinggi: Leads Tertarik → Deposito (39.0%)</li>
          <li>• Tahap dengan drop-off terbesar: Total Leads → Dihubungi (43.1%)</li>
          <li>• Fokus perbaikan: Tingkatkan reach rate dari 56.9% ke 70%+</li>
        </ul>
      </div>
    </div>
  );
};

export default ConversionFunnel;