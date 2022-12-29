// express
const express = require('express');
const app = express();

// port
const port = process.env.PORT || 5000;

// cors
const cors = require('cors');
// middleware cors 
app.use(cors());

// middleware json
app.use(express.json());

// dotenv
require('dotenv').config()


// mongodb
const {MongoClient, ServerApiVersion} = require('mongodb');
const uri = `mongodb+srv://${process.env.LANTABUR_USER}:${process.env.LANTABUR_PASSWORD}@lantabur-task-scheduler.rrluqlo.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


const run = async() => {
    try {
        const todoCollection = client.db('LanTaburTask').collection('ToDo');
        const ongoingCollection = client.db('LanTaburTask').collection('OnGoing');
        const completedCollection = client.db('LanTaburTask').collection('Completed');
        
    }
    finally {

    }
}
run().catch(er => console.error(er));



/*************** 
    Operation
***************/

app.get('/', (req, res) => {
    res.send('Server is okay.')
})

app.listen(port, () => {
    console.log(`server is running on port - ${port}`)
})