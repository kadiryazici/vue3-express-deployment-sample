const express = require('express');
const path = require('path');

const app = express();
const root = process.cwd();

app.use(express.static(path.join(root, 'static')));
app.get('/api/hello', (req, res) => {
   res.status(200).send('Merhabalar Api');
});
app.get('*', (req, res) => {
   res.sendFile(path.join(root, 'static', 'index.html'));
});

app.listen(3000, () => {
   console.log('Server is on http://localhost:3000');
});
