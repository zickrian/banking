import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const FollowUpAnalytics: React.FC = () => {
  const followUpData = [
    { name: 'Successful', value: 156, color: '#10B981' },
    { name: 'Not Interested', value: 89, color: '#EF4444' },
    { name: 'No Answer', value: 67, color: '#F59E0B' },
    { name: 'Already Has Deposit', value: 45, color: '#8B5CF6' },
    { name: 'Other', value: 23, color: '#6B7280' }
  ];

  const COLORS = ['#10B981', '#EF4444', '#F59E0B', '#8B5CF6', '#6B7280'];

  return (
    <div style={{ 
      backgroundColor: 'white', 
      padding: '1.5rem', 
      borderRadius: '0.5rem', 
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
      border: '1px solid #e5e7eb' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>Analisis Hasil Follow-Up Sales</h3>
        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Total Follow-ups: 380
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Donut Chart */}
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: '500', color: '#374151', marginBottom: '1rem' }}>
            Distribusi Hasil Follow-Up
          </h4>
          <div style={{ height: '16rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={followUpData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {followUpData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [`${value} cases`, 'Count']}
                  contentStyle={{
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Statistics */}
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: '500', color: '#374151', marginBottom: '1rem' }}>
            Performance Summary
          </h4>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: '#dcfce7', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#166534' }}>41.1%</p>
                <p style={{ fontSize: '0.875rem', color: '#166534' }}>Overall Success Rate</p>
              </div>
            </div>
            
            <div style={{ padding: '1rem', backgroundColor: '#dbeafe', borderRadius: '0.5rem', border: '1px solid #bfdbfe' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e40af' }}>1.8</p>
                <p style={{ fontSize: '0.875rem', color: '#1e40af' }}>Avg Follow-ups per Conversion</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div style={{ 
        marginTop: '1.5rem', 
        padding: '1rem', 
        backgroundColor: '#dbeafe', 
        borderRadius: '0.5rem' 
      }}>
        <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e40af', marginBottom: '0.5rem' }}>
          Follow-up Strategy Recommendations
        </h4>
        <ul style={{ fontSize: '0.875rem', color: '#1e40af' }}>
          <li>• Focus on converting "Not Interested" segment with personalized offers</li>
          <li>• Success rate 41.1% is above industry average (35-40%)</li>
          <li>• Implement callback scheduling for "No Answer" cases</li>
        </ul>
      </div>
    </div>
  );
};

export default FollowUpAnalytics;