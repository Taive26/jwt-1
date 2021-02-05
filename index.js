const createApp = require('./src/app');
require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000;

const app = createApp();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// npm install express ejs dotenv body-parser jsonwebtoken bcryptjs sqlite3 morgan cookie-parser
