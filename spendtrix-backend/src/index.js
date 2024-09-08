require('dotenv').config();
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const morgan = require('morgan')


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use(morgan('dev'));

app.get("/" , async(req, res) => {
  return res.status(200).json({
    success:true,
    message : "spendtrix is up and running" 
  })
} );

app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/expenses', expenseRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});