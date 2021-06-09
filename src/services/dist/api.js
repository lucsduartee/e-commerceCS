import express from 'express';
import cors from 'cors';
import uuid from 'uuid';
import { MongoClient } from 'mongodb';

const app = express();

app.use(express.json());
app.use(cors());

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

        res.status(200).json(products);
        console.log(products);
        console.log('from server');
        client.close();
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e});
    }
});

app.post('/api/products', async (req, res) => {
    const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
    const database = await client.db('shop');
    const products = await database.collection('products').find({}).toArray();

    const { title, description, price, stockAmount } = req.body;
    if (title && description && price && stockAmount) {
        const insertedProduct = {
            title,
            description,
            price,
            stockAmount
        }
        products.push(insertedProduct);
        res.status(200).json(insertedProduct);
    } else {
        res.status(400).json({ message: 'Request body should have a title, a description, a price and a stock amount property' });
    }
});

app.delete('/api/products/:id', async (req, res) => {
    const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
    const database = await client.db('shop');
    var products = await database.collection('products').find({}).toArray();

    const { id } = req.params.id;
    
    const removedProduct = products.find(product => product.id === id);
    products = products.filter(product => product.id !== id);
    res.status(200).json(removedProduct);
});

app.listen(8080, () => console.log("Server listening on port 8080"));
