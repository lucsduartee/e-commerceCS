import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectID, ObjectId } from 'mongodb';
import _ from 'lodash';

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
                amount: 1,
                category1: category1,
                category2: category2,
                image2: image2,
                image1: image1,
                popularity: 0
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
        const { title, description, price, stockAmount, amount, category1, category2, image1, image2, popularity } = req.body;

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('shop');

        const updatedProduct = await db.collection('products').updateOne({ _id: _id }, { $set: { title, description, price, stockAmount, amount, category1, category2, image1, image2, popularity } });

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
    
        const removedProduct = await db.collection('products').deleteOne({ _id: _id });

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

        const userInfo = await db.collection('users').findOne({_id: _id});
        if(userInfo){
            res.status(200).json(userInfo);
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
        const { username, email, password, products } = req.body;

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('shop');

        if (username && email && password && products) {
            const insertedUser = { username, email, password, products, credit: 0 }

            await db.collection('users').insertOne(insertedUser);
            console.log(insertedUser);
            res.status(200).json(insertedUser);
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
        const { userName, email, password, products, credit } = req.body;

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('shop');
        const updatedUser = await db.collection('users').updateOne({_id: _id}, { $set: { userName, email, password, products, credit }});

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
    
        const removedUser = await db.collection('users').deleteOne({ _id: _id });

        if(removedUser){
            res.status(200).json(removedUser);
        } else{
            res.status(400).json({ message: 'There is no product with that id' })
        }
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e });
    }
});



app.get('/api/users/:username/products', async (req, res) => {
    try{
        const username = req.params.username;

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
        const db = client.db('shop');

        const user = await db.collection('users').findOne({ username: username});

        if(user)
            res.status(200).json(user);
        else
            res.status(400).json({ message: 'There is no user with that username' })

        client.close();
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e});
    }
});

app.get('/api/users/:id/products', async (req, res) => {
    try{
        const _id = ObjectID(req.params.id);

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
        const db = client.db('shop');

        const user = await db.collection('users').findOne({ _id: _id});

        if(user)
            res.status(200).json(user);
        else
            res.status(400).json({ message: 'There is no user with that username' })

        client.close();
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e});
    }
});

app.get('/api/users/:userId/products/:productId', async (req, res) => {
    try{
        const userId = ObjectID(req.params.userId);

        const productId = ObjectID(req.params.productId);
        const productIdString = ObjectId.toString(productId);

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
        const db = client.db('shop');

        const user = await db.collection('users').findOne({ _id: userId });
        const products = await user.products;
        const product = await products.find(product => ObjectId.toString(product._id) === productIdString);

        if(!product)
            res.status(400).json({ message: 'There is no product with that id' })

        res.status(200).json(product);
            
        client.close();
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e});
    }
});

app.post('/api/users/:userId/products/:productId', async (req, res) => {
    try{
        const userId = ObjectID(req.params.userId);
        const productId = ObjectID(req.params.productId);

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('shop');

        const productToAdd = await db.collection('products').findOne({ _id: productId });

        const updatedPopularity = productToAdd.popularity+1;
        const updatedProduct = { ...productToAdd, popularity: updatedPopularity }
        await db.collection('users').updateOne({ _id: userId }, { $push: { products: updatedProduct } });
        await db.collection('products').updateOne({ _id: productId }, { $set: { popularity: updatedPopularity}})

        res.status(200).json(productToAdd);
        client.close();
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e });
    }
});

app.put('/api/users/:userId/products/:productId/:amount', async (req, res) => {
    try{
        const userId = ObjectID(req.params.userId);
        const productId = ObjectID(req.params.productId);
        const amount = Number(req.params.amount)

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('shop');

        const productToUpdate = await db.collection('products').findOne({ _id: productId });

        const updatedProduct = { ...productToUpdate, amount: amount }

        await db.collection('users').updateOne({ _id: userId }, { $pull: { products: { _id: productId } } });
        await db.collection('users').updateOne({ _id: userId }, { $push: { products: updatedProduct } });
        res.status(200).json(updatedProduct);
        client.close();
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e });
    }
});

app.delete('/api/users/:userId/products/:productId', async (req, res) => {
    try{
        const userId = ObjectID(req.params.userId);
        const productId = ObjectID(req.params.productId);

        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('shop');

        const productToRemove = await db.collection('products').findOne({ _id: productId })
        await db.collection('users').updateOne({ _id: userId}, { $pull : { products: { _id: productId }}});
    
        console.log(productToRemove);

        if(productToRemove){
            res.status(200).json(productToRemove);
        } else{
            res.status(400).json({ message: 'There is no product with that id' })
        }
        client.close();
    } catch(e){
        res.status(500).json({ message: 'Error connecting to db', e });
    }
});


app.listen(8080, () => console.log("Server listening on port 8080"));
