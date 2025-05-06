import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 2468;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});


app.get('/games', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'games.html'));
});


app.listen(PORT, () => {
    console.log(`🌊`)
    console.log(`   Server is running on http://localhost:${PORT}`);
    console.log(`🌊`)
});
