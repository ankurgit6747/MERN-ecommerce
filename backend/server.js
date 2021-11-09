const app = require('./app');

const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// configuration
dotenv.config({path:"backend/config/config.env"})

// connecting to database
connectDatabase()

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });
  
// Unhandled promise rejection 
process.on('unhandledRejection', err => {
  console.log(`Err: ${err.message}`);
  console.log('Shutting down the server due to unhandled promise rejection')

  server.close(() => {
    process.exit(1);
  })
})