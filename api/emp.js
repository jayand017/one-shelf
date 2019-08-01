const express = require('express');
const employee = express();
const conn = require('../config')

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

employee.get("/api/employee/one/:id", (req, res) => {
    const client = new MongoClient(conn.uri, { useNewUrlParser: true});
    client.connect(err => {
        if(err) {
            return  res.status(403).send(err);
        }
        const col = client.db(conn.dbName).collection(conn.colEmp)
        col.findOne({"_id": ObjectId(req.params.id)}, (err, result) => {
            if(err) {
                return res.status(503).send(err);
            }
            res.send(result);
            client.close();
        })
    })
})

employee.get("/api/employee/search/:q", (req, res) => {
    const client = new MongoClient(conn.uri, { useNewUrlParser: true});
    client.connect(err => {
        if(err) {
            return  res.status(403).send(err);
        }
        const col = client.db(conn.dbName).collection(conn.colEmp)
        col.find({$or: [{"first_name": {$regex: `.*${req.params.q}.*`, $options: 'i'}}, 
                        {"last_name": {$regex: `.*${req.params.q}.*`, $options: 'i'}}
                    ]}).toArray((err, result) => {
            if(err) {
                return res.status(503).send(err);
            }
            res.send(result);
            client.close();
        })
    })
})

module.exports = employee;