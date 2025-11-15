import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const MonthlyAnalytics: React.FC = () => {
  const monthlyData = [
    {
      month: 'Jan',
      deposits: 245,
      calls: 2156,
      mlPrediction: 268,
      realization: 245
    },
    {
      month: 'Feb',
      deposits: 198,
      calls: 1876,
      mlPrediction: 212,
      realization: 198
    },
    {
      month: 'Mar',
      deposits: 312,
      calls: 2345,
      mlPrediction: 334,
      realization: 312
    },
    {
      month: 'Apr',
      deposits: 289,
      calls: 2234,
      mlPrediction: 301,
      realization: 289
    },
    {
      month: 'May',
      deposits: 267,
      calls: 2089,
      mlPrediction: 278,
      realization: 267
    },
    {
      month: 'Jun',
      deposits: 334,
      calls: 2456,
      mlPrediction: 356,
      realization: 334
    },
    {
      month: 'Jul',
      deposits: 298,
      calls: 2234,
      mlPrediction: 312,
      realization: 298
    },
    {
      month: 'Aug',
      deposits: 276,
      calls: 2167,
      mlPrediction: 289,
      realization: 276
    },
    {
      month: 'Sep',
      deposits: 342,
      calls: 2456,
      mlPrediction: 367,
      realization: 342
    },
    {
      month: 'Oct',
      deposits: 356,
      calls: 2567,
      mlPrediction: 378,
      realization: 356
    },
    {
      month: 'Nov',
      deposits: 298,
      calls: 2234,
      mlPrediction: 312,
      realization: 298
    },
    {
      month: 'Dec',
      deposits: 342,
      calls: 2456,
      mlPrediction: 367,
      realization: 342
    }
  ];

  const bestMonth = monthlyData.reduce((best, current) => 
    current.deposits > best.deposits ? current : best
  );
  const worstMonth = monthlyData.reduce((worst, current) => 
    current.deposits < worst.deposits ? current : worst
  );

  return (
    <div style={{ 
      backgroundColor: 'white', 
      padding: '1.5rem', 
      borderRadius: '0.5rem', 
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
      border: '1px solid #e5e7eb' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>Analisis Bulanan</h3>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '0.75rem', height: '0.75rem', backgroundColor: '#3B82F6', borderRadius: '50%', marginRight: '0.5rem' }}></div>
            <span style={{ color: '#4b5563' }}>Outbound Calls</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '0.75rem', height: '0.75rem', backgroundColor: '#10B981', borderRadius: '50%', marginRight: '0.5rem' }}></div>
            <span style={{ color: '#4b5563' }}>Deposits</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '0.75rem', height: '0.75rem', backgroundColor: '#F59E0B', borderRadius: '50%', marginRight: '0.5rem' }}></div>
            <span style={{ color: '#4b5563' }}>ML Prediction</span>
          </div>
        </div>
      </div>

      {/* Monthly Performance Chart */}
      <div style={{ height: '20rem', marginBottom: '1.5rem' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              tickLine={{ stroke: '#e5e5e5' }}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              tickLine={{ stroke: '#e5e5e5' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend />
            <Bar dataKey="calls" fill="#3B82F6" name="Outbound Calls" radius={[2, 2, 0, 0]} />
            <Bar dataKey="deposits" fill="#10B981" name="Deposits" radius={[2, 2, 0, 0]} />
            <Bar dataKey="mlPrediction" fill="#F59E0B" name="ML Prediction" radius={[2, 2, 0, 0]} opacity={0.7} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Highlights */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <div style={{ padding: '1rem', backgroundColor: '#dcfce7', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#166534' }}>Performa Terbaik</p>
              <p style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#14532d' }}>{bestMonth.month}</p>
              <p style={{ fontSize: '0.875rem', color: '#15803d' }}>{bestMonth.deposits} deposits</p>
            </div>
            <div style={{ fontSize: '1.5rem' }}>📈</div>
          </div>
        </div>
        
        <div style={{ padding: '1rem', backgroundColor: '#fef2f2', borderRadius: '0.5rem', border: '1px solid #fecaca' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#991b1b' }}>Performa Terendah</p>
              <p style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#7f1d1d' }}>{worstMonth.month}</p>
              <p style={{ fontSize: '0.875rem', color: '#dc2626' }}>{worstMonth.deposits} deposits</p>
            </div>
            <div style={{ fontSize: '1.5rem' }}>📉</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyAnalytics;