import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    let chosen_name = "Richard";
    const inputString = req.body.inputString;
    console.log(`Input is ${inputString}`);
    res.render("index.ejs",{name1:chosen_name,name2:inputString});
});
app.post("/", (req, res) => {
    let chosen_name = "Richard";
    const inputString = req.body.inputString;
    console.log(`Input is ${inputString}`);
    res.render("index.ejs",{name1:chosen_name,name2:inputString});
});

app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
});
