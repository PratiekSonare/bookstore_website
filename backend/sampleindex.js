const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://pratiek_alt:pratiek_alt_password@cluster0.duvd1m7.mongodb.net/';
const dbName = 'mydatabase';

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');

  const db = client.db(dbName);

  // Check if the database exists
  db.listCollections().toArray(function(err, collections) {
    if (err) {
      console.log('Error listing collections:', err);
      return;
    }
    console.log('Collections:', collections.map(c => c.name));
  });

  // Close the client
  client.close();
});