const {randomUUID} = require('node:crypto');

const messages = [
  {
    id: randomUUID(),
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: randomUUID(),
    text: "Hello World",
    user: "Charles",
    added: new Date()
  }
];

const links = [
  {href: "/", text: "HomePage"},
  {href: "/new", text: "New Message"},
]

async function getMessage() {
  return messages;
}

async function addMessage(message) {
  message.id = randomUUID();
  messages.push(message);
}

async function getMessageById(id) {
  return messages.find((message) => message.id === id);
}

async function getLinks() {
  return links;
}

module.exports = {getMessage, addMessage, getLinks, getMessageById};