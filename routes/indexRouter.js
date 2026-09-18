const express = require('express');
const { getMessage, addMessage, getMessageDetails } = require('../controllers/messageController');
const { renderForm } = require('../controllers/formController')
const indexRouter = express.Router();

indexRouter.get("/", getMessage);
indexRouter.get("/messages/:id", getMessageDetails);
indexRouter.get("/new", renderForm);
indexRouter.post("/new", addMessage);

module.exports = indexRouter;