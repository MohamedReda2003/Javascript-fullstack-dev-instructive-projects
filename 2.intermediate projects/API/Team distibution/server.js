import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = 3000;
const API_URL = 'http://localhost:4000';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// Route to render the main page
app.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/get-teams`);
        res.render('index', { teams: response.data.teams });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching teams' });
    }
});

// Route to distribute teams
app.post('/distribute', async (req, res) => {
    try {
        const { numPlayers, numTeams, players } = req.body;
        const playerArray = players.split(',').map(player => player.trim());
        
        const response = await axios.post(`${API_URL}/distribute-teams`, {
            num_players: parseInt(numPlayers),
            num_teams: parseInt(numTeams),
            players: playerArray
        });

        res.render('index', { teams: response.data.teams });
    } catch (error) {
        res.status(500).json({ message: 'Error distributing teams' });
    }
});

app.listen(port, () => {
    console.log(`Frontend server is running on http://localhost:${port}`);
});
