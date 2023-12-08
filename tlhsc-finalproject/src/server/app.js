
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tlhsc_db'
});

db.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.get('/dashboard-data', async (req, res) => {
  try {

    const deliveryStatusQuery = `
      SELECT
        (SELECT COUNT(*) as count FROM delivery WHERE delivery_status = 'UNPACKED') as unpacked,
        (SELECT COUNT(*) as count FROM delivery WHERE delivery_status = 'PACKED') as packed,
        (SELECT COUNT(*) as count FROM delivery WHERE delivery_status = 'SHIPPED') as shipped,
        (SELECT COUNT(*) as count FROM delivery WHERE delivery_status = 'DELIVERED') as delivered,
        (SELECT COUNT(*) as count FROM delivery WHERE delivery_status = 'CANCELLED') as cancelled
    `;

    const soldProductsQuery = 'SELECT COUNT(*) as count FROM product WHERE product_status = "sold"';

    const [deliveryStatusResults, soldProductsResults] = await Promise.all([
      db.promise().query(deliveryStatusQuery),
      db.promise().query(soldProductsQuery),
    ]);

    const dashboardData = {
      deliveries: {
        unpacked: deliveryStatusResults[0][0].unpacked,
        packed: deliveryStatusResults[0][0].packed,
        shipped: deliveryStatusResults[0][0].shipped,
        delivered: deliveryStatusResults[0][0].delivered,
        cancelled: deliveryStatusResults[0][0].cancelled,
      },
      soldProducts: soldProductsResults[0][0].count,
    };

    const branchCountsQuery = `
      SELECT
        branch_id,
        (SELECT COUNT(*) as count FROM delivery WHERE branch_id = b.branch_id AND delivery_status = 'UNPACKED') as unpacked,
        (SELECT COUNT(*) as count FROM delivery WHERE branch_id = b.branch_id AND delivery_status = 'PACKED') as packed,
        (SELECT COUNT(*) as count FROM delivery WHERE branch_id = b.branch_id AND delivery_status = 'SHIPPED') as shipped,
        (SELECT COUNT(*) as count FROM delivery WHERE branch_id = b.branch_id AND delivery_status = 'DELIVERED') as delivered,
        (SELECT COUNT(*) as count FROM delivery WHERE branch_id = b.branch_id AND delivery_status = 'CANCELLED') as cancelled
      FROM branch b;
    `;

    const branchCountsResults = await db.promise().query(branchCountsQuery);
    const branchCounts = {};

    branchCountsResults[0].forEach((branch) => {
      branchCounts[`BRANCH_${branch.branch_id}`] = {
        unpacked: branch.unpacked,
        packed: branch.packed,
        shipped: branch.shipped,
        delivered: branch.delivered,
        cancelled: branch.cancelled,
      };
    });

    dashboardData.branchCounts = branchCounts;

    res.json(dashboardData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});