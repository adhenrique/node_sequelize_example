const express = require('express');
const db = require('./models');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/users', async (req, res) => {
    const usersList = await db.User.findAll({
        include: [db.Post]
    });
    res.json(usersList);
}); //Listar todos

app.listen(3000);