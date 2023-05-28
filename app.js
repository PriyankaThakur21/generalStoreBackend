const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const sequelize = require('./database');

const Routes = require('./routes');

app.use(express.json());

app.use(Routes);

sequelize.sync()
.then((res)=>{
    app.listen(8080);
})
.catch((err)=>{
    console.log(err);
})