const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(express.json())
// app.use(cors())
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tlhsc_db'
});

// app.get('/dashboard-data', (req, res) => {
//   res.send('asd')
// })


db.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});


app.get('/dashboard-data', (req, res) => {
  const deliveryStatusQuery = 'SELECT COUNT(*) as count FROM delivery';

  db.query(deliveryStatusQuery, (err, deliveryStatusResults) => {
    if (err) {
      console.error('Error fetching delivery status:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const soldProductsQuery = 'SELECT COUNT(*) as count FROM product WHERE product_status = "sold"';

    db.query(soldProductsQuery, (err, soldProductsResults) => {
      if (err) {
        console.error('Error fetching sold products:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      const dashboardData = {
        deliveries: deliveryStatusResults,
        soldProducts: soldProductsResults[0].count
      };

      res.json(dashboardData);
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
