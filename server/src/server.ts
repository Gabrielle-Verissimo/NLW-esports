import express from 'express';
const app = express();

app.get('/ads', (req, res) => {
    return res.json([
        {id: 1, name: 'Gabrielle'},
        {id: 2, name: 'Gabriel'},
        {id: 3, name: 'Mavis'},
        {id: 4, name: 'Nick'},
        {id: 5, name: 'Mari'},

    ])
});

app.listen(3333, () => {
    console.log('Acesse http://localhost:3333/ads');
});