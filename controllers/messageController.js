const db = require("../db")

async function getMessage(req, res) {
   try{
    const message = await db.getMessage();
    const links = await db.getLinks();

    if(!message){
      throw new Error("No messages available");
    }
    res.render("index", {messages: message, links: links});
   }catch(error){
    console.log("Error retrieved!");
    res.status(500).send("Internal Server Error");
   }
};

async function addMessage(req, res) {
  const {messageText, messageUser} = req.body;

  if (!messageText?.trim() || !messageUser?.trim()) {
    return res.status(400).render("form", {error: "Message and user name cannot be empty"});
  }

  try{
    const message = {
      text: messageText.trim(),
      user: messageUser.trim(),
      added: new Date()
    }

    if(!message.text || !message.user || !message.added){
      throw new Error("Message Object not populated in Controller");
    }
    await db.addMessage(message);
    res.redirect("/");
  }catch(error){
    console.log("Error retireved");
    res.status(500).send("Internal server Error");
  }
};

async function getMessageDetails(req, res) {
  try{
    const message = await db.getMessageById(req.params.id);
    
    if(!message) return res.status(404).send("Message not found");
    res.render("message", {message});
  }catch(error){
    console.log("Error retrieving message details:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {getMessage, addMessage, getMessageDetails};