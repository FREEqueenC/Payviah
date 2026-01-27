const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// DEBUG: Log connection info (Masked)
const connStr = process.env.DATABASE_URL || '';
console.log('DEBUG: Connecting to DB. Length:', connStr.length);
console.log('DEBUG: Starts with:', connStr.substring(0, 15));
console.log('DEBUG: SSL Config:', JSON.stringify({ rejectUnauthorized: false }));

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
