import express from "express";
import fs from "fs";

import { type Response } from "./responses/Entries";

const app = express();
const port = parseInt(process?.env?.PORT ?? '7700', 10) || 7700;

app.get("/", (req, res) => {
  res.send("Nothing to see here...");
});

app.get("/entries", (req, res) => {
  const data = fs.readFileSync('data/entries.json', 'utf-8');
  res.type('json').send(data);
})

app.delete("/entries/:id", (req, res) => {
  console.log("DELETE route hit:", req.params.id);

  const id = req.params.id;
  const raw = fs.readFileSync('data/entries.json', 'utf-8');
  const data: Response[] = JSON.parse(raw); 

  console.log("Deleting an entry...");
  console.log("Initial lenght", data.length);

  const updated = data.filter(item => item.itemID !== id);
  fs.writeFileSync('data/entries.json', JSON.stringify(updated, null, 2));

  console.log("Final lenght", updated.length);

  res.status(200).json({ message: 'Deleted if existed' });
});

app.listen(port, '0.0.0.0', () => {
  console.log("Hello from Bunkr dummy server! :)");
  console.log(`Listening on port ${port}...`);
});