import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    let chosen_name = "Richard";
    let chosen_title ; 
    let footer_chosen_name;   
    const inputString = req.body.inputString;

    if (!inputString){
        chosen_title = `Say Hi to ${chosen_name}`
        footer_chosen_name = chosen_name;
    }
    else{
        chosen_title = `Say Hi to ${inputString}`
        footer_chosen_name = inputString;
    }
    console.log(`Input is ${inputString}`);
    res.render("index.ejs",{name1:chosen_name,name2:inputString,title:chosen_title,footer_name:footer_chosen_name});
});
app.post("/", (req, res) => {
    let chosen_name = "Richard";
    const inputString = req.body.inputString;
    let chosen_title;
    let footer_chosen_name;

    if (!inputString){
        chosen_title = `Say Hi to ${chosen_name}`
        footer_chosen_name=chosen_name;
    }
    else{
        chosen_title = `Say Hi to ${inputString}`
        footer_chosen_name = inputString;
    }

    console.log(`Input is ${inputString}`);
    res.render("index.ejs",{name1:chosen_name,name2:inputString,title:chosen_title,footer_name:footer_chosen_name});
});

app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
});