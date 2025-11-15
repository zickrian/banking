import React, { useState, useMemo } from 'react';
import { Search, Download, Filter, ChevronUp, ChevronDown, ArrowUpDown } from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  mlScore: number;
  priority: 'High' | 'Medium' | 'Low';
  callStatus: 'Not Called' | 'Called' | 'Interested' | 'Not Interested' | 'Callback';
  prediction: 'Will Convert' | 'Won\'t Convert';
  realization: 'Deposit' | 'No Deposit';
  followUpDate: string;
  age: number;
  job: string;
  maritalStatus: string;
  hasLoan: boolean;
  estimatedRevenue: number;
}

const CustomerTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof Customer>('mlScore');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [filterPriority, setFilterPriority] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Called' | 'Interested' | 'Not Interested'>('All');

  // Mock customer data
  const customers: Customer[] = [
    {
      id: 'C001',
      name: 'Ahmad Rizki Pratama',
      mlScore: 92,
      priority: 'High',
      callStatus: 'Interested',
      prediction: 'Will Convert',
      realization: 'Deposit',
      followUpDate: '2024-01-15',
      age: 35,
      job: 'Software Engineer',
      maritalStatus: 'Married',
      hasLoan: false,
      estimatedRevenue: 45000000
    },
    {
      id: 'C002',
      name: 'Siti Nurhaliza',
      mlScore: 87,
      priority: 'High',
      callStatus: 'Called',
      prediction: 'Will Convert',
      realization: 'Deposit',
      followUpDate: '2024-01-16',
      age: 28,
      job: 'Marketing Manager',
      maritalStatus: 'Single',
      hasLoan: true,
      estimatedRevenue: 38000000
    },
    {
      id: 'C003',
      name: 'Budi Santoso',
      mlScore: 76,
      priority: 'Medium',
      callStatus: 'Interested',
      prediction: 'Will Convert',
      realization: 'Deposit',
      followUpDate: '2024-01-17',
      age: 42,
      job: 'Business Owner',
      maritalStatus: 'Married',
      hasLoan: false,
      estimatedRevenue: 52000000
    },
    {
      id: 'C004',
      name: 'Maya Sari Dewi',
      mlScore: 68,
      priority: 'Medium',
      callStatus: 'Not Interested',
      prediction: 'Won\'t Convert',
      realization: 'No Deposit',
      followUpDate: '2024-01-18',
      age: 31,
      job: 'Teacher',
      maritalStatus: 'Married',
      hasLoan: true,
      estimatedRevenue: 0
    },
    {
      id: 'C005',
      name: 'Andi Wijaya',
      mlScore: 45,
      priority: 'Low',
      callStatus: 'Called',
      prediction: 'Won\'t Convert',
      realization: 'No Deposit',
      followUpDate: '2024-01-19',
      age: 24,
      job: 'Student',
      maritalStatus: 'Single',
      hasLoan: false,
      estimatedRevenue: 0
    },
    {
      id: 'C006',
      name: 'Diana Putri',
      mlScore: 83,
      priority: 'High',
      callStatus: 'Callback',
      prediction: 'Will Convert',
      realization: 'Deposit',
      followUpDate: '2024-01-20',
      age: 29,
      job: 'Financial Analyst',
      maritalStatus: 'Single',
      hasLoan: false,
      estimatedRevenue: 35000000
    },
    {
      id: 'C007',
      name: 'Rizki Pratama',
      mlScore: 72,
      priority: 'Medium',
      callStatus: 'Called',
      prediction: 'Will Convert',
      realization: 'No Deposit',
      followUpDate: '2024-01-21',
      age: 38,
      job: 'Sales Manager',
      maritalStatus: 'Married',
      hasLoan: true,
      estimatedRevenue: 0
    },
    {
      id: 'C008',
      name: 'Indira Setiawan',
      mlScore: 91,
      priority: 'High',
      callStatus: 'Interested',
      prediction: 'Will Convert',
      realization: 'Deposit',
      followUpDate: '2024-01-22',
      age: 33,
      job: 'Consultant',
      maritalStatus: 'Married',
      hasLoan: false,
      estimatedRevenue: 48000000
    }
  ];

  const filteredAndSortedCustomers = useMemo(() => {
    let filtered = customers.filter(customer => {
      const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           customer.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           customer.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesPriority = filterPriority === 'All' || customer.priority === filterPriority;
      const matchesStatus = filterStatus === 'All' || customer.callStatus === filterStatus;
      
      return matchesSearch && matchesPriority && matchesStatus;
    });

    filtered.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      return 0;
    });

    return filtered;
  }, [customers, searchTerm, sortField, sortDirection, filterPriority, filterStatus]);

  const handleSort = (field: keyof Customer) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const exportToCSV = () => {
    const headers = [
      'ID',
      'Name',
      'ML Score',
      'Priority',
      'Call Status',
      'Prediction',
      'Realization',
      'Follow-up Date',
      'Age',
      'Job',
      'Marital Status',
      'Has Loan',
      'Estimated Revenue'
    ];

    const csvContent = [
      headers.join(','),
      ...filteredAndSortedCustomers.map(customer => [
        customer.id,
        `"${customer.name}"`,
        customer.mlScore,
        customer.priority,
        customer.callStatus,
        customer.prediction,
        customer.realization,
        customer.followUpDate,
        customer.age,
        `"${customer.job}"`,
        customer.maritalStatus,
        customer.hasLoan ? 'Yes' : 'No',
        customer.estimatedRevenue
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `customer_data_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const getSortIcon = (field: keyof Customer) => {
    if (sortField !== field) return <ArrowUpDown className="w-4 h-4 text-gray-400" />;
    return sortDirection === 'asc' 
      ? <ChevronUp className="w-4 h-4 text-blue-600" />
      : <ChevronDown className="w-4 h-4 text-blue-600" />;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Called': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Interested': return 'bg-green-100 text-green-800 border-green-200';
      case 'Not Interested': return 'bg-red-100 text-red-800 border-red-200';
      case 'Callback': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Customer Data Detail</h3>
            <p className="text-sm text-gray-600">
              Total records: {filteredAndSortedCustomers.length} of {customers.length}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Filters */}
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            >
              <option value="All">All Priorities</option>
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Low">Low Priority</option>
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            >
              <option value="All">All Status</option>
              <option value="Called">Called</option>
              <option value="Interested">Interested</option>
              <option value="Not Interested">Not Interested</option>
            </select>

            {/* Export Button */}
            <button
              onClick={exportToCSV}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('id')}
              >
                <div className="flex items-center space-x-1">
                  <span>ID</span>
                  {getSortIcon('id')}
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center space-x-1">
                  <span>Name</span>
                  {getSortIcon('name')}
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('mlScore')}
              >
                <div className="flex items-center space-x-1">
                  <span>ML Score</span>
                  {getSortIcon('mlScore')}
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Call Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prediction
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Realization
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('followUpDate')}
              >
                <div className="flex items-center space-x-1">
                  <span>Follow-up Date</span>
                  {getSortIcon('followUpDate')}
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Job
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('estimatedRevenue')}
              >
                <div className="flex items-center space-x-1">
                  <span>Est. Revenue</span>
                  {getSortIcon('estimatedRevenue')}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAndSortedCustomers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {customer.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {customer.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex items-center">
                    <span className="font-medium">{customer.mlScore}</span>
                    <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${customer.mlScore}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(customer.priority)}`}>
                    {customer.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(customer.callStatus)}`}>
                    {customer.callStatus}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {customer.prediction}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    customer.realization === 'Deposit' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {customer.realization}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {customer.followUpDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {customer.age}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {customer.job}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {customer.estimatedRevenue > 0 
                    ? `Rp ${customer.estimatedRevenue.toLocaleString()}`
                    : '-'
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination or Summary */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>
            Showing {filteredAndSortedCustomers.length} of {customers.length} records
          </div>
          <div className="flex items-center space-x-4">
            <div>
              Total Revenue: <span className="font-medium text-green-600">
                Rp {filteredAndSortedCustomers
                  .filter(c => c.realization === 'Deposit')
                  .reduce((sum, c) => sum + c.estimatedRevenue, 0)
                  .toLocaleString()
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;