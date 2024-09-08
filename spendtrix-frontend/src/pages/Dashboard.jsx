import React, { useState } from 'react';
import { FaCalendarAlt, FaListUl, FaPencilAlt, FaDollarSign, FaFilter, FaSort } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, date: '2023-05-15', category: 'Food', description: 'Lunch at cafe', amount: 15.99 },
    { id: 2, date: '2023-05-16', category: 'Transportation', description: 'Bus fare', amount: 2.50 },
    { id: 3, date: '2023-05-17', category: 'Shopping', description: 'New shoes', amount: 89.99 },
  ]);

  const [newExpense, setNewExpense] = useState({
    date: '',
    category: '',
    description: '',
    amount: '',
  });

  const categories = ['Food', 'Transportation', 'Shopping', 'Entertainment', 'Bills', 'Other'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newExpense.date && newExpense.category && newExpense.description && newExpense.amount) {
      setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
      setNewExpense({ date: '', category: '', description: '', amount: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-2xl font-bold text-center py-4 bg-blue-600 text-white">Personal Expense Tracker</h1>
        
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-gray-500" />
            <input
              type="date"
              name="date"
              value={newExpense.date}
              onChange={handleInputChange}
              className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          
          <div className="flex items-center space-x-2 relative">
            <FaListUl className="text-gray-500" />
            <select
              name="category"
              value={newExpense.category}
              onChange={handleInputChange}
              className="flex-grow p-2 border rounded appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <IoIosArrowDown className="absolute right-3 text-gray-500" />
          </div>
          
          <div className="flex items-center space-x-2">
            <FaPencilAlt className="text-gray-500" />
            <input
              type="text"
              name="description"
              value={newExpense.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <FaDollarSign className="text-gray-500" />
            <input
              type="number"
              name="amount"
              value={newExpense.amount}
              onChange={handleInputChange}
              placeholder="Amount"
              step="0.01"
              min="0"
              className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Expense
          </button>
        </form>
        
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Expenses</h2>
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition duration-300">
                <FaFilter className="text-gray-600" />
              </button>
              <button className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition duration-300">
                <FaSort className="text-gray-600" />
              </button>
            </div>
          </div>
          
          <ul className="space-y-4">
            {expenses.map((expense) => (
              <li key={expense.id} className="bg-gray-50 p-3 rounded-lg shadow">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{expense.date}</span>
                  <span className="text-blue-600 font-bold">${expense.amount.toFixed(2)}</span>
                </div>
                <div className="mt-1">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {expense.category}
                  </span>
                </div>
                <p className="text-gray-600 mt-1">{expense.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;