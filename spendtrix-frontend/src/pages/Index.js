// pages/index.js
import { useState, useEffect } from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseSummary from '../components/ExpenseSummary';

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch expenses from your API here
    // For now, we'll use dummy data
    const dummyExpenses = [
      { id: 1, date: '2023-09-01', category: 'Food', amount: 50 },
      { id: 2, date: '2023-09-02', category: 'Transport', amount: 30 },
      { id: 3, date: '2023-09-03', category: 'Entertainment', amount: 100 },
    ];
    setExpenses(dummyExpenses);
    setLoading(false);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recent Expenses</h2>
          {loading ? (
            <p>Loading expenses...</p>
          ) : (
            <ExpenseList expenses={expenses} />
          )}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Expense Summary</h2>
          <ExpenseSummary expenses={expenses} />
        </div>
      </div>
    </div>
  );
}