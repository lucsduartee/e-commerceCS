import express from 'express';

const app = express();

app.get('/hello', (req, res) => res.send('Hello!'));

const PORT = 8080;
app.listen(PORT, () => console.log(`Listenin' on port ${PORT}`));