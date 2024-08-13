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
    let color1 = req.body.color1;
    let color2 = req.body.color2;
    let color3 = req.body.color3;
    let color4 = req.body.color1;

    if (!inputString){
        chosen_title = `Say Hi to ${chosen_name}`
        footer_chosen_name = chosen_name;
    }
    else{
        chosen_title = `Say Hi to ${inputString}`
        footer_chosen_name = inputString;
    }
    console.log(`Input is ${inputString}`);
    res.render("index.ejs",{name1:chosen_name,name2:inputString,title:chosen_title,footer_name:footer_chosen_name,color1:color1,color2:color2,color3:color3,color4:color4});
});
app.post("/", (req, res) => {
    let chosen_name = "Richard";
    const inputString = req.body.inputString;
    let chosen_title;
    let footer_chosen_name;
    let color1 = req.body.color1;
    let color2 = req.body.color2;
    let color3 = req.body.color3;
    let color4 = req.body.color1;

    if (!inputString){
        chosen_title = `Say Hi to ${chosen_name}`
        footer_chosen_name=chosen_name;
    }
    else{
        chosen_title = `Say Hi to ${inputString}`
        footer_chosen_name = inputString;
    }

    console.log(`Input is ${inputString}`);
    res.render("index.ejs",{name1:chosen_name,name2:inputString,title:chosen_title,footer_name:footer_chosen_name,color1:color1,color2:color2,color3:color3,color4:color4});
});

app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
});