const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://pratieksonareisc:4VdtBchT1in5fC7X@cluster0.duvd1m7.mongodb.net/";

 
//Creating a MongoClient
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


MongoClient.connect(uri, function(err, client) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MongoDB');
  }
});

async function run() {
    try {
        await client.connect();

        const bookCollections = client.db("BookInventory").collection("books");

        app.post("/upload-book", async (req, res) => {
            const data = req.body;
            const result = await bookCollections.insertOne(data);
            res.send(result);

        })

        app.get("/book-list", async (req, res) => {
            const books = bookCollections.find();
            const result = await books.toArray();
            res.send(result);
        })

        app.patch("/book/:id", async (req, res) => {
            const id = req.params.id;
            const updateBookData = req.body;
            const filter = { _id: new ObjectId(id)};
            const updateDoc = {
                $set: {
                    ...updateBookData
                },
            }
            const options = { upsert: true };
            
            const result = await bookCollections.updateOne(filter, updateDoc, options );
            res.send(result);
        })

        app.delete("/book/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id)};
            
            const result = await bookCollections.deleteOne(filter);
            res.send(result);
        })

        app.get("/book-list", async (req, res) => {
            let query = {};
            if(req.query?.category){
                query = {category: req.query.category}
            }

            const result = await bookCollections.find(query).toArray();
            res.send(result);
        })

        app.get("/book/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id)};
            const result = await bookCollections.findOne(filter);
            res.send(result);
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. Successfully connected to MongoDB.");

    } finally {

    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

})