const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );

app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});



const database = "projeto";


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.urlencoded());

//==================================================

app.get("/tablets", (req, res) => {
  con.query(`USE ${database}`);
  con.query(
    'SELECT h.prof, h.quantidade, h.dia, h.hora FROM horario h order by dia, hora',
    function(error, result) {
      if (error) throw new Error(error);
      const payload = {
        body: result
      };
      res.send(JSON.stringify(result));
    }
  );
});

app.get("/profs", (req, res) => {
  con.query(`USE ${database}`);
  con.query(
    'SELECT p.nome FROM profs p order by nome',
    function(error, result) {
      if (error) throw new Error(error);
      const payload = {
        body: result 
      };
      res.send(JSON.stringify(result));
    }
  );
});

app.post("/validar",(req, res) => {
  var total=0;
  con.query(`USE ${database}`);
  con.query(
    `SELECT sum(quantidade) as soma from horario where hora =  "${req.body.hora}" AND dia =  "${req.body.dia}" GROUP BY dia, hora`,
    function(error, result) {
      if(result[0] != null){
        total = result[0].soma;
      } 
      const payload = {
        statusCode: 200,
        body: total
      };
      var n = total;
      res.send(JSON.stringify(n));
    }
  );
});

app.post("/estoque",(req, res) => {
  var total = [];
  con.query(`USE ${database}`);
  con.query(
    `SELECT sum(quantidade) as soma, hora from horario where dia =  "${req.body.dia}" GROUP BY hora order by hora`,
    function(error, result) {
      if(result[0] != null){
        total = result;
      }else{
        for (let index = 0; index < 10; index++) {
          total[index] = 0;
        }
      }
      res.send(JSON.stringify(total));
    }
  );
});

app.post("/delet",(req, res) => {
  con.query(`USE ${database}`);
  con.query(
    `delete from horario where dia < "${req.body.dia}";`,
  );
});

app.post("/tablets",(req, res) => {
  con.query(`USE ${database}`);
  con.query(
    `INSERT INTO horario(prof, quantidade, dia, hora) VALUES ("${req.body.nome}",${parseInt(req.body.quant)}, "${req.body.dia}", "${req.body.hora}");`,
    function(error) {
      if (error) throw new Error(error);
      const payload = {
        statusCode: 200
      };
      res.send(JSON.stringify(payload));
    }
  );
});

app.get("/", (req, res) => {
  res.send("Aplicação de tablets");
});

app.listen(3000);