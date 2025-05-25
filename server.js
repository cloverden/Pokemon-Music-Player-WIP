const express = require('express');
const path = require('path');
const app = express();
const PORT = 4001;

//for serving static files (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

//for routing home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

//starting the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});