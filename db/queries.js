const pool = require("./pool");

async function getMessage() {
  const {rows} = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addMessage({text, user}) {
  await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [text, user]);
}

async function getMessageById(id) {
  const {rows} = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return rows[0];
}

module.exports = {getMessage, addMessage, getMessageById};