const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");
const bodyParser = require("body-parser");
const assert = require("assert");

const app = express();
const mongo_url = "mongodb://localhost/:27017";
const dataBase = "contact-api";

//connexion avec la base de donnée
app.use(bodyParser.json()); //this line has to exist for post
MongoClient.connect(mongo_url, (err, client) => {
  assert.equal(err, null, "data base connexion failed");

  const db = client.db(dataBase);



  var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
  //add a contact
  app.post("/add_contact", (req, res) => {
    let newContact = req.body;
    db.collection("contacts").insertOne(newContact, (err, contactData) => {
      if (err) res.send("contact added");
      else res.send(contactData);
    });
  });
  //get all contacts
  app.get("/all", (req, res) => {
    db.collection("contacts")
      .find()
      .toArray((err, contactData) => {
        if (err) res.send("cant fetch contacts");
        else res.send(contactData);
      });
  });
  // get a contact with its id

  app.get('/contact/:id',(req,res)=> {
      let contactId = req.params.id;
      db.collection ('contacts').findOne({_id:ObjectID(contactId)},(err, contactData)=>{
          if(err) res.send('cant fetch contacts')
          else  res.send(contactData)
      })
  })

  //modify a contact

  app.put('/update/:id',(req,res)=>{
  let id =ObjectID(req.params.id)
  let modifiedContact = req.body
  db.collection('contacts').findOneAndUpdate({_id:id},{$set:{...modifiedContact}},(err, contactData)=>{
      if(err) res.send('cant modify contact')
      else  res.send('contact was modified')
  })
  })

  //delete a contact
  app.delete('/delete/:id',(req,res)=>{
  let ContactToRemove = req.params.id
  db.collection('contacts').findOneAndDelete({_id:ObjectID(ContactToRemove)},(err, contactData)=>{
      if(err) res.send('cant delete the contact')
      else  res.send('contact was deleted')
  })

  })
});
app.listen(5000, err => {
  if (err) console.log("server err");
  else console.log("server is running on port 5000");
});
