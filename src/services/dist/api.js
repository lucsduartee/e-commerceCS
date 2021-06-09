import express from 'express';
import cors from 'cors';
import uuid from 'uuid';
import { MongoClient } from 'mongodb';

const app = express();

app.use(express.json());
app.use(cors());

const fakeProducts = 
[
    {
        title: "fake product",
        description: "*",
        price: "R$50",
        stockAmount: "1"
    }
]

app.get('/api/products/:title', async (req, res) => {
    try{
        const productTitle = req.params.title;

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const database = client.db('shop');

        const productInfo = await database.collection('products').findOne({title: productTitle});
        res.status(200).json(productInfo);

        client.close();
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e});
    }
})

app.get('/api/products', async (req, res) => {
    try{
        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
        const database = client.db('shop');

        const products = await database.collection('products').find({}, {_id: 0}).toArray();

        //res.status(200).json(products);
        res.status(200).json(fakeProducts);
        console.log(products);
        console.log(fakeProducts);
        console.log('from server');
        client.close();
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e});
    }
});

app.listen(8080, () => console.log("Server listening on port 8080"));
