const {Client} = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  username VARCHAR (255),
  added TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO messages (text, username)
VALUES
  ('Hi There!', 'Amando'),
  ('Hello World!', 'Charles');
`;

async function main() {
  const connectionString = process.argv[2];

  if(!connectionString){
    console.error("Usage: node db/populatedb.js <connction-string>");
    process.exit(1);
  }

  console.log("seeding...");
  const client = new Client({
    connectionString,
    ssl: isLocal? false: {rejectUnauthorized:false},
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done");
}

main().catch((err) =>{
  console.error(err);
  process.exit(1);
})