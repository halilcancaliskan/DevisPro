const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Serveur Express fonctionne !');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Réponse depuis le serveur Express !' });
});

app.listen(port, () => {
    console.log(`Serveur Express écoutant sur le port ${port}`);
});



