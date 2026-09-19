const queries = require("../db/queries");
const db = require("../db");
const {body, validationResult, matchedData} = require("express-validator");

const lenErr = "must contains letters";

const validateUser = [
  body("messageText").trim()
      .isLength({min: 1}).withMessage(`Message ${lenErr}`),

  body("messageUser").trim()
      .isLength({min: 1}).withMessage(`User ${lenErr}`),
]

async function getMessage(req, res, next) {
   try{
    const message = await queries.getMessage();
    const links = await db.getLinks();

    res.render("index", {messages: message, links: links});
   }catch(error){
    next(error);
   }
};

addMessage = [
  validateUser,
  async (req, res, next) =>{
    const {messageText, messageUser} = req.body;

    const errors = validationResult(req);

    if(!errors.isEmpty()){
      return res.status(400).render("form", {
        errors: errors.array(),
        messageText,
        messageUser,
      })
    }

    try{
      await queries.addMessage({
        text: messageText.trim(),
        user: messageUser.trim()
      })
      res.redirect("/");
    }catch(error){
      next(error);
    }
  }
]

async function getMessageDetails(req, res, next) {
  const id = Number(req.params.id);
  if(!Number.isInteger(id)){
    return res.status(404).send("Message not found");
  }

  try{
    const message = await queries.getMessageById(id);
    if(!message) return res.status(404).send("Message not found");
    res.render("message", {message});
  }catch(error){
    next(error);
  }
}

module.exports = {getMessage, addMessage, getMessageDetails};