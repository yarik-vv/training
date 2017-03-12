#!/bin/bash
mongod --dbpath /home/komar/.db/
NODE_PATH=. node createDb.js