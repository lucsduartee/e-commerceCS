import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectID } from 'mongodb';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/products/:id', async (req, res) => {
    try{
        const _id = ObjectID(req.params.id);

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('shop');

        const productInfo = await db.collection('products').findOne({_id: _id});
        if(productInfo){
            res.status(200).json(productInfo);
        } else{
            res.status(400).json({ message: 'There is no product with that id' });
        }

        client.close();
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e});
    }
})

app.get('/api/products', async (req, res) => {
    try{
        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
        const db = client.db('shop');

        const products = await db.collection('products').find({}).toArray();

        res.status(200).json(products);
        
        client.close();
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e});
    }
});

app.post('/api/products', async (req, res) => {
    try{
        const { title, description, price, stockAmount, category1, category2, image1, image2 } = req.body;

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('shop');

        if (title && description && price && stockAmount && category1 && image1) {
            const insertedProduct = {
                title: title,
                description: description,
                price: price,
                stockAmount: stockAmount,
                category1: category1,
                category2: category2,
                image2: image2,
                image1: image1,
            }
        
        await db.collection('products').insertOne(insertedProduct);
        console.log(insertedProduct);
        res.status(200).json(insertedProduct);
        } else {
            res.status(400).json({ message: 'Request body should have a text property' });
        }
        client.close();
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e });
    }
});

app.post('/api/products/:id/update', async (req, res) => {
    try{
        const _id = ObjectID(req.params.id);
        const { title, description, price, stockAmount, category1, category2, image1, image2 } = req.body;

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('shop');

        const updatedProduct = await db.collection('products').updateOne({ _id: _id }, { $set: { title, description, price, stockAmount, category1, category2, image1, image2 } });

        if(updatedProduct){
            res.status(200).json(updatedProduct);
        } else{
            res.status(400).json({ message: 'There is no product with that id' });
        }
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e });
    }
})

app.delete('/api/products/:id', async (req, res) => {
    try{
        const _id = ObjectID(req.params.id);

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('shop');
    
        const removedProduct = await db.collection('products').deleteOne({ _id });

        if(removedProduct){
            res.status(200).json(removedProduct);
        } else{
            res.status(400).json({ message: 'There is no product with that id' })
        }
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e });
    }
});



app.get('/api/users/:id', async (req, res) => {
    try{
        const _id = ObjectID(req.params.id);

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('shop');

        const productInfo = await db.collection('clients').findOne({_id: _id});
        if(productInfo){
            res.status(200).json(productInfo);
        } else{
            res.status(400).json({ message: 'There is no user with that id' });
        }

        client.close();
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e});
    }
})

app.get('/api/users', async (req, res) => {
    try{
        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
        const db = client.db('shop');

        const products = await db.collection('users').find({}).toArray();

        res.status(200).json(products);
        
        client.close();
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e});
    }
});

app.post('/api/users', async (req, res) => {
    try{
        const { userName, email, password, products } = req.body;

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('shop');

        if (userName && email && password && products) {
            const insertedProduct = { userName, email, password, products }

            await db.collection('users').insertOne(insertedProduct);
            console.log(insertedProduct);
            res.status(200).json(insertedProduct);
        } else {
            res.status(400).json({ message: 'Request body should have a text property' });
        }
        client.close();
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e });
    }
});

app.post('/api/users/:id/change', async (req, res) => {
    try{
        const _id = ObjectID(req.params.id);
        const { userName, email, password, products } = req.body;

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('shop');
        const updatedUser = await db.collection('users').updateOne({_id: _id}, { $set: { userName, email, password, products }});

        if(updatedUser){
            res.status(200).json(updatedUser);
        } else{
            res.status(400).json({ message: 'There is no product with that id' });
        }
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e });
    }
})

app.delete('/api/users/:id', async (req, res) => {
    try{
        const _id = ObjectID(req.params.id);

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('shop');
    
        const removedUser = await db.collection('users').deleteOne({ _id });

        if(removedUser){
            res.status(200).json(removedUser);
        } else{
            res.status(400).json({ message: 'There is no product with that id' })
        }
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e });
    }
});


app.listen(8080, () => console.log("Server listening on port 8080"));
