const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const cartRoutes = require('./routes/cart.js');

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(bodyParser.json());
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));
app.use('/cart', cartRoutes);


// MongoDB Connection
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const adminCollection = client.db("BookInventory").collection("adminUsers");
    const bookCollection = client.db("BookInventory").collection("books");
    const userCollection = client.db("BookInventory").collection("users");

    // Admin login route
    app.post("/admin-login", async (req, res) => {
      const { username, password } = req.body;
      try {
        const admin = await adminCollection.findOne({ username });
        if (!admin || admin.password !== password) {
          return res.status(401).send('Invalid username or password');
        }

        req.session.admin = { id: admin._id, username: admin.username };
        res.status(200).send('Login successful');
      } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).send('Server error');
      }
    });

    // Admin logout route
    app.post("/admin-logout", (req, res) => {
      req.session.destroy((err) => {
        if (err) {
          return res.status(500).send('Could not log out.');
        } else {
          res.status(200).send('Logout successful');
        }
      });
    });

    // Middleware to check admin session
    function checkAdminSession(req, res, next) {
      if (!req.session.admin) {
        return res.status(401).send('Unauthorized');
      }
      next();
    }

    // Protected route example
    app.get("/admin/protected", (req, res) => {
      res.send('This is a protected admin route');
    });

    // Route to upload a book
    app.post("/upload-book", async (req, res) => {
      const data = req.body;

      try {
        const result = await bookCollection.insertOne(data);
        res.send(result);
      } catch (err) {
        res.status(400).send(err);
      }
    });

    // Route to update a book
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          ...updateBookData
        },
      };
      const options = { upsert: true };

      try {
        const result = await bookCollection.updateOne(filter, updateDoc, options);
        res.send(result);
      } catch (err) {
        res.status(400).send(err);
      }
    });

    // Route to delete a book
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };

      try {
        const result = await bookCollection.deleteOne(filter);
        res.send(result);
      } catch (err) {
        res.status(400).send(err);
      }
    });

    // PUBLIC ROUTES

    app.get("/book-list", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }

      try {
        const result = await bookCollection.find(query).toArray();
        res.send(result);
      } catch (err) {
        res.status(400).send(err);
      }
    });

    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };

      try {
        const result = await bookCollection.findOne(filter);
        res.send(result);
      } catch (err) {
        res.status(400).send(err);
      }
    });

  } catch (error) {
    console.error('Error during MongoDB connection:', error);
  }
}

run();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
