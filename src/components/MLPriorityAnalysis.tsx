import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const MLPriorityAnalysis: React.FC = () => {
  const priorityData = [
    { 
      name: 'High Priority', 
      leads: 1500, 
      converted: 189, 
      conversionRate: 12.6,
      color: '#EF4444'
    },
    { 
      name: 'Medium Priority', 
      leads: 2500, 
      converted: 118, 
      conversionRate: 4.7,
      color: '#F59E0B'
    },
    { 
      name: 'Low Priority', 
      leads: 1000, 
      converted: 35, 
      conversionRate: 3.5,
      color: '#10B981'
    }
  ];

  const pieData = priorityData.map(item => ({
    name: item.name,
    value: item.converted,
    color: item.color
  }));

  const COLORS = ['#EF4444', '#F59E0B', '#10B981'];

  return (
    <div style={{ 
      backgroundColor: 'white', 
      padding: '1.5rem', 
      borderRadius: '0.5rem', 
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
      border: '1px solid #e5e7eb' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>Analisis Prioritas ML</h3>
        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Model Effectiveness Analysis
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Conversion by Priority */}
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: '500', color: '#374151', marginBottom: '1rem' }}>
            Konversi Berdasarkan Prioritas
          </h4>
          <div style={{ height: '16rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  label={(entry: any) => `${((entry.value / 342) * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [`${value} deposits`, 'Jumlah']}
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

        {/* Detailed Statistics */}
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: '500', color: '#374151', marginBottom: '1rem' }}>
            Model Performance
          </h4>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {priorityData.map((priority, index) => (
              <div key={priority.name} style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h5 style={{ fontWeight: '500', color: '#111827' }}>{priority.name}</h5>
                  <div 
                    style={{ 
                      width: '1rem', 
                      height: '1rem', 
                      borderRadius: '0.125rem',
                      backgroundColor: priority.color 
                    }}
                  />
                </div>
                <div style={{ fontSize: '0.875rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#6b7280' }}>Total Leads:</span>
                    <span style={{ fontWeight: '500' }}>{priority.leads.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#6b7280' }}>Converted:</span>
                    <span style={{ fontWeight: '500', color: '#059669' }}>{priority.converted}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#6b7280' }}>Conversion Rate:</span>
                    <span style={{ fontWeight: '500', color: '#2563eb' }}>{priority.conversionRate}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div style={{ 
        marginTop: '1.5rem', 
        padding: '1rem', 
        backgroundColor: '#dbeafe', 
        borderRadius: '0.5rem' 
      }}>
        <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e40af', marginBottom: '0.5rem' }}>
          Model Performance Insights
        </h4>
        <ul style={{ fontSize: '0.875rem', color: '#1e40af' }}>
          <li>• High Priority leads menghasilkan 55.3% dari total konversi</li>
          <li>• Akurasi model ML tertinggi pada High Priority: 87.3%</li>
          <li>• Rekomendasi: Fokus pada High Priority untuk ROI maksimal</li>
        </ul>
      </div>
    </div>
  );
};

export default MLPriorityAnalysis;