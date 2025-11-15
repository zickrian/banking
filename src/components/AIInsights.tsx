import React from 'react';
import { Brain, TrendingUp, Target, Users, Phone, Award } from 'lucide-react';

const AIInsights: React.FC = () => {
  const insights = [
    {
      icon: <Award className="w-5 h-5 text-yellow-600" />,
      title: "Optimal Campaign Timing",
      content: "Bulan terbaik untuk menawarkan deposito adalah Q4 (Oktober-Desember) dengan rata-rata konversi 18.2%, 23% lebih tinggi dari rata-rata tahunan.",
      type: "timing",
      confidence: 89
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: "Prime Customer Segment",
      content: "Segmen usia 30–45 memiliki konversi tertinggi (13.8%) dan menghasilkan 47% dari total revenue deposito. Fokus pada profesional dan middle management.",
      type: "segment",
      confidence: 92
    },
    {
      icon: <Target className="w-5 h-5 text-green-600" />,
      title: "High-Priority Lead Performance",
      content: "Leads High Priority menghasilkan 62% dari total konversi dengan akurasi prediksi ML 87.3%. ROI per lead: Rp 45.6 juta vs Rp 8.2 juta untuk Low Priority.",
      type: "priority",
      confidence: 95
    },
    {
      icon: <Phone className="w-5 h-5 text-purple-600" />,
      title: "Optimal Call Time Analysis",
      content: "Thursday 15:00 menunjukkan peak performance dengan 35% success rate. Weekend calls 50% kurang efektif, rekomendasikan untuk ditiadakan.",
      type: "timing",
      confidence: 88
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-indigo-600" />,
      title: "Model Accuracy Trends",
      content: "Akurasi ML model meningkat 12% dalam 6 bulan terakhir. High Priority classification menunjukkan precision 91% - excellent untuk targeting.",
      type: "model",
      confidence: 93
    },
    {
      icon: <Brain className="w-5 h-5 text-red-600" />,
      title: "Follow-up Strategy Insight",
      content: "Konversi optimal terjadi pada follow-up ke-2 hingga ke-3.超过3次 follow-up menunjukkan diminishing returns dan mengurangi customer satisfaction.",
      type: "strategy",
      confidence: 86
    }
  ];

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600 bg-green-100';
    if (confidence >= 80) return 'text-yellow-600 bg-yellow-100';
    return 'text-orange-600 bg-orange-100';
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'timing': return 'border-blue-200 bg-blue-50';
      case 'segment': return 'border-purple-200 bg-purple-50';
      case 'priority': return 'border-green-200 bg-green-50';
      case 'model': return 'border-indigo-200 bg-indigo-50';
      case 'strategy': return 'border-red-200 bg-red-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const actionableRecommendations = [
    {
      priority: "High",
      action: "Prioritaskan High Priority leads di slot Thursday 15:00",
      impact: "Potential 25% increase in conversions",
      timeline: "Implementasi immediately"
    },
    {
      priority: "Medium", 
      action: "Batasi follow-up calls maksimum 3 kali per customer",
      impact: "Reduce operational cost by 15%",
      timeline: "Implement dalam 2 minggu"
    },
    {
      priority: "Medium",
      action: "Fokus targeting usia 30-45 untuk campaign Q1 2024",
      impact: "Target 20% increase in qualified leads",
      timeline: "Planning stage untuk Q1"
    },
    {
      priority: "Low",
      action: "Evaluasi kembali kriteria Low Priority classification",
      impact: "Improve overall model accuracy",
      timeline: "Q2 2024 evaluation"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-700 bg-red-100 border-red-200';
      case 'Medium': return 'text-yellow-700 bg-yellow-100 border-yellow-200';
      case 'Low': return 'text-green-700 bg-green-100 border-green-200';
      default: return 'text-gray-700 bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">AI-Generated Insights</h3>
            <p className="text-sm text-gray-600">Machine Learning Analysis & Recommendations</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Last Updated: {new Date().toLocaleString('id-ID')}
        </div>
      </div>

      {/* Key Insights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {insights.map((insight, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg border-2 ${getTypeColor(insight.type)} transition-all duration-200 hover:shadow-md`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                {insight.icon}
                <h4 className="text-sm font-semibold text-gray-900">{insight.title}</h4>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full font-medium ${getConfidenceColor(insight.confidence)}`}>
                {insight.confidence}% confidence
              </span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{insight.content}</p>
          </div>
        ))}
      </div>

      {/* Actionable Recommendations */}
      <div className="mb-6">
        <h4 className="text-md font-semibold text-gray-800 mb-4">Actionable Recommendations</h4>
        <div className="space-y-3">
          {actionableRecommendations.map((rec, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(rec.priority)}`}>
                  {rec.priority}
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-900">{rec.action}</p>
                  <p className="text-xs text-gray-600">{rec.timeline}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-green-600">{rec.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
          <div className="text-center">
            <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-lg font-bold text-blue-900">+23%</p>
            <p className="text-sm text-blue-700">Potential Revenue Increase</p>
          </div>
        </div>
        
        <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
          <div className="text-center">
            <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-lg font-bold text-green-900">89.2%</p>
            <p className="text-sm text-green-700">Model Accuracy Score</p>
          </div>
        </div>
        
        <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
          <div className="text-center">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-lg font-bold text-purple-900">4.2x</p>
            <p className="text-sm text-purple-700">ROI Improvement Potential</p>
          </div>
        </div>
      </div>

      {/* AI Model Status */}
      <div className="p-4 bg-gray-50 rounded-lg border">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">ML Model Status</h4>
            <p className="text-sm text-gray-600">Predictive Lead Scoring v2.3</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-600">Active & Learning</span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-lg font-bold text-gray-900">5,247</p>
            <p className="text-xs text-gray-600">Total Predictions</p>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">87.3%</p>
            <p className="text-xs text-gray-600">Current Accuracy</p>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">342</p>
            <p className="text-xs text-gray-600">Confirmed Matches</p>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">3.2%</p>
            <p className="text-xs text-gray-600">False Positive Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;