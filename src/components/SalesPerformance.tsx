import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SalesPerformance: React.FC = () => {
  const salesLeaderboard = [
    { 
      name: 'Budi Santoso', 
      conversions: 89, 
      conversionRate: 19.5
    },
    { 
      name: 'Siti Nurhaliza', 
      conversions: 78, 
      conversionRate: 18.4
    },
    { 
      name: 'Andi Wijaya', 
      conversions: 67, 
      conversionRate: 16.8
    },
    { 
      name: 'Maya Sari', 
      conversions: 56, 
      conversionRate: 14.5
    },
    { 
      name: 'Rizki Pratama', 
      conversions: 52, 
      conversionRate: 15.1
    },
    { 
      name: 'Diana Putri', 
      conversions: 48, 
      conversionRate: 14.4
    }
  ];

  return (
    <div style={{ 
      backgroundColor: 'white', 
      padding: '1.5rem', 
      borderRadius: '0.5rem', 
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
      border: '1px solid #e5e7eb' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>Performance Sales Team</h3>
        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Team Size: {salesLeaderboard.length} sales representatives
        </div>
      </div>

      {/* Performance Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '0.5rem', border: '1px solid #fde68a' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#92400e' }}>🏆</p>
            <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#92400e', marginTop: '0.25rem' }}>Top Performer</p>
            <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#92400e' }}>{salesLeaderboard[0].name}</p>
            <p style={{ fontSize: '0.75rem', color: '#a16207' }}>{salesLeaderboard[0].conversionRate}% conversion rate</p>
          </div>
        </div>
        
        <div style={{ padding: '1rem', backgroundColor: '#dbeafe', borderRadius: '0.5rem', border: '1px solid #bfdbfe' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e40af' }}>📊</p>
            <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1e40af', marginTop: '0.25rem' }}>Team Average</p>
            <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#1e40af' }}>
              {(salesLeaderboard.reduce((sum, person) => sum + person.conversionRate, 0) / salesLeaderboard.length).toFixed(1)}%
            </p>
            <p style={{ fontSize: '0.75rem', color: '#2563eb' }}>Conversion Rate</p>
          </div>
        </div>
      </div>

      {/* Individual Performance Chart */}
      <div>
        <h4 style={{ fontSize: '1rem', fontWeight: '500', color: '#374151', marginBottom: '1rem' }}>
          Individual Conversion Rates
        </h4>
        <div style={{ height: '16rem' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesLeaderboard}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 10 }}
                tickLine={{ stroke: '#e5e5e5' }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                tick={{ fontSize: 10 }}
                tickLine={{ stroke: '#e5e5e5' }}
                domain={[0, 25]}
              />
              <Tooltip 
                formatter={(value: number) => [`${value}%`, 'Conversion Rate']}
                contentStyle={{
                  backgroundColor: '#f8f9fa',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Bar 
                dataKey="conversionRate" 
                fill="#3B82F6" 
                radius={[2, 2, 0, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SalesPerformance;