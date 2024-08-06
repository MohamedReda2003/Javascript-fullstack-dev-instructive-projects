import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// In-memory data store for the last distributed teams
let lastTeams = [];

// POST to distribute players into teams
app.post('/distribute-teams', (req, res) => {
    const { num_players, num_teams, players } = req.body;
    
    if (players.length !== num_players) {
        return res.status(400).json({ detail: 'Number of players does not match the provided player list.' });
    }
    
    if (num_players < num_teams) {
        return res.status(400).json({ detail: 'Number of players must be greater than or equal to the number of teams.' });
    }

    const shuffledPlayers = players.sort(() => Math.random() - 0.5);
    const teams = Array.from({ length: num_teams }, () => []);
    
    shuffledPlayers.forEach((player, index) => {
        teams[index % num_teams].push(player);
    });
    
    lastTeams = teams;
    res.json({ teams });
});

// GET to retrieve the last distributed teams
app.get('/get-teams', (req, res) => {
    res.json({ teams: lastTeams });
});

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});
