const express = require('express');
const { users, posts } = require('./models');

const app = express();

app.use(express.urlencoded({ extended: false }));


app.get('/users', async (req, res) => {
    const usersList = await users.findAll({
        include: [posts]
    });
    res.json(usersList);
}); //Listar todos
app.post('/users', (req, res) => {}); // Criar
app.get('/users/:id', (req, res) => {}); //Buscar
app.put('/users/:id', (req, res) => {}); //Editar
app.delete('/users/:id', (req, res) => {}); //Deletar

app.listen(3000);