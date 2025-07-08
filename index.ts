import express from "express";
import fs from "fs";

const app = express();
const port = parseInt(process?.env?.PORT ?? '7700', 10) || 7700;

app.get("/", (req, res) => {
  res.send("Nothing to see here...");
});

app.get("/entries", (req, res) => {
  const data = fs.readFileSync('data/entries.json', 'utf-8');
  res.type('json').send(data);
})

app.listen(port, '0.0.0.0', () => {
  console.log("Hello from Bunkr dummy server! :)");
  console.log(`Listening on port ${port}...`);
});