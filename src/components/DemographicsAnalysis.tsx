import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DemographicsAnalysis: React.FC = () => {
  const ageData = [
    { name: '18-25', total: 450, converted: 32, conversionRate: 7.1 },
    { name: '26-35', total: 890, converted: 123, conversionRate: 13.8 },
    { name: '36-45', total: 756, converted: 98, conversionRate: 13.0 },
    { name: '46-55', total: 534, converted: 67, conversionRate: 12.5 },
    { name: '56-65', total: 217, converted: 22, conversionRate: 10.1 }
  ];

  const pieData = ageData.map(item => ({
    name: item.name,
    value: item.converted,
    conversionRate: item.conversionRate
  }));

  const pieColors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  return (
    <div style={{ 
      backgroundColor: 'white', 
      padding: '1.5rem', 
      borderRadius: '0.5rem', 
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
      border: '1px solid #e5e7eb' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>Segmentasi Nasabah</h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Bar Chart */}
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: '500', color: '#374151', marginBottom: '1rem' }}>
            Analisis Berdasarkan Usia
          </h4>
          <div style={{ height: '16rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 10 }}
                  tickLine={{ stroke: '#e5e5e5' }}
                />
                <YAxis 
                  tick={{ fontSize: 10 }}
                  tickLine={{ stroke: '#e5e5e5' }}
                />
                <Tooltip 
                  formatter={(value: number, name: string) => [
                    name === 'conversionRate' ? `${value}%` : value,
                    name === 'conversionRate' ? 'Conversion Rate' : name === 'converted' ? 'Converted' : 'Total'
                  ]}
                  contentStyle={{
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="total" fill="#E5E7EB" name="Total" radius={[2, 2, 0, 0]} />
                <Bar dataKey="converted" fill="#3B82F6" name="Converted" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart for Conversion Distribution */}
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: '500', color: '#374151', marginBottom: '1rem' }}>
            Distribusi Konversi
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
                  label={(entry: any) => `${entry.conversionRate}%`}
                  labelLine={false}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [`${value} deposits`, 'Converted']}
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
      </div>

      {/* Key Insights */}
      <div style={{ 
        marginTop: '1.5rem', 
        padding: '1rem', 
        backgroundColor: '#dcfce7', 
        borderRadius: '0.5rem',
        border: '1px solid #bbf7d0'
      }}>
        <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#166534', marginBottom: '0.5rem' }}>
          Segment with Highest Conversion
        </h4>
        <div style={{ fontSize: '0.875rem', color: '#166534' }}>
          <p>• <strong>26-35 age group</strong> menunjukkan konversi tertinggi (13.8%)</p>
          <p>• Segment millennial lebih responsif terhadap deposito</p>
        </div>
      </div>
    </div>
  );
};

export default DemographicsAnalysis;