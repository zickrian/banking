import React from 'react';

const CallTimeHeatmap: React.FC = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  
  const heatmapData = [
    // Sample data - simplified
    { day: 0, hour: 0, value: 12, dayName: 'Monday', hourLabel: '09:00' },
    { day: 1, hour: 0, value: 15, dayName: 'Tuesday', hourLabel: '09:00' },
    { day: 2, hour: 0, value: 18, dayName: 'Wednesday', hourLabel: '09:00' },
    { day: 3, hour: 0, value: 20, dayName: 'Thursday', hourLabel: '09:00' },
    { day: 3, hour: 6, value: 35, dayName: 'Thursday', hourLabel: '15:00' }, // Peak time
    { day: 5, hour: 0, value: 8, dayName: 'Saturday', hourLabel: '09:00' },
    { day: 6, hour: 0, value: 5, dayName: 'Sunday', hourLabel: '09:00' }
  ];

  const getColor = (value: number) => {
    if (value >= 30) return '#10B981'; // Green - High success
    if (value >= 20) return '#F59E0B'; // Yellow - Medium-High
    if (value >= 15) return '#F97316'; // Orange - Medium
    if (value >= 10) return '#EF4444'; // Red - Low-Medium
    return '#6B7280'; // Gray - Low
  };

  const bestTimes = [
    { dayName: 'Thursday', hourLabel: '15:00', value: 35 },
    { dayName: 'Wednesday', hourLabel: '11:00', value: 28 },
    { dayName: 'Thursday', hourLabel: '10:00', value: 28 }
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
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>Heatmap Waktu Terbaik untuk Outbound Call</h3>
        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Success Rate by Day & Hour
        </div>
      </div>

      {/* Heatmap Grid */}
      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <div style={{ minWidth: '600px', display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '0.25rem' }}>
          {/* Header Row */}
          <div style={{ display: 'contents' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '500', color: '#4b5563', textAlign: 'center', padding: '0.5rem' }}>Day/Hour</div>
            {hours.map((hour) => (
              <div key={hour} style={{ fontSize: '0.75rem', fontWeight: '500', color: '#4b5563', textAlign: 'center', padding: '0.5rem' }}>
                {hour}
              </div>
            ))}
          </div>

          {/* Heatmap Rows */}
          {days.map((day, dayIndex) => (
            <div key={day} style={{ display: 'contents' }}>
              <div style={{ 
                fontSize: '0.75rem', 
                fontWeight: '500', 
                color: '#374151', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '0.5rem', 
                backgroundColor: '#f9fafb', 
                borderRadius: '0.25rem' 
              }}>
                {day}
              </div>
              {hours.map((hour, hourIndex) => {
                const cellData = heatmapData.find(d => d.day === dayIndex && d.hour === hourIndex);
                const value = cellData?.value || Math.floor(Math.random() * 15) + 5; // Random fallback
                return (
                  <div
                    key={`${day}-${hour}`}
                    style={{
                      width: '100%',
                      height: '3rem',
                      borderRadius: '0.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      backgroundColor: getColor(value)
                    }}
                  >
                    {value}%
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Best and Worst Times */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div style={{ padding: '1rem', backgroundColor: '#dcfce7', borderRadius: '0.5rem', border: '1px solid #bbf7d0' }}>
          <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#166534', marginBottom: '0.75rem' }}>
            Waktu Terbaik untuk Call
          </h4>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            {bestTimes.map((time, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.875rem', color: '#166534' }}>
                  {time.dayName} {time.hourLabel}
                </span>
                <span style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#14532d' }}>{time.value}%</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #bbf7d0' }}>
            <p style={{ fontSize: '0.75rem', color: '#15803d' }}>
              ⚡ Thursday 15:00 - Puncak konversi dengan 35% success rate
            </p>
          </div>
        </div>

        <div style={{ padding: '1rem', backgroundColor: '#dbeafe', borderRadius: '0.5rem', border: '1px solid #bfdbfe' }}>
          <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e40af', marginBottom: '0.75rem' }}>
            Call Timing Insights
          </h4>
          <ul style={{ fontSize: '0.875rem', color: '#1e40af' }}>
            <li>• Jam kerja efektif: 10:00-16:00</li>
            <li>• Hari terbaik: Thursday dan Wednesday</li>
            <li>• Hindari weekend calls - success rate rendah</li>
            <li>• Peak hour: Thursday 15:00 (35%)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CallTimeHeatmap;