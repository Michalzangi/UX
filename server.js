const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json()); 


app.get('/', (req, res) => {
  // You can optionally handle requests to the root URL separately here
  res.send('Hello from the root URL!');
});





// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});