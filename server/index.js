require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller')
//app.use(express.static( __dirname + '/../public'))

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then((dbInstance) => {
    app.set('db', dbInstance);
    console.log('Connected to the db')
})
.catch((err) => {
    console.log(err)
})

app.get('/api/houses', (req,res) => {
    const dbInstance = req.app.get('db');
    dbInstance.get_all_houses().then((response) => {
        res.send(response)
    })
})

app.post('/api/houses', (req, res) => {
    const {name, address, city, state, zip} = req.body
    const dbInstance = req.app.get('db');
    dbInstance.create_house([name, address, city, state, zip]).then((response) => {
        res.status(200).send(response)
    })
})

app.delete('/api/houses/:id', (req, res) => {
    const {id} = req.params;                      
    const dbInstance = req.app.get('db');
    dbInstance.delete_house([id]).then(response => {
        res.status(200).send(response)
    })
    .catch((err) => {
        console.log(err)
    })

})

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
}) 