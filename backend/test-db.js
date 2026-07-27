const { Client } = require("pg");

console.log("Testing with password:", "Shahil@2002");

const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "Shahil@2002",
  database: "nest_auth",
});

client
  .connect()
  .then(() => {
    console.log("✅ Connected Successfully!");
    return client.end();
  })
  .catch((err) => {
    console.error(err);
  });