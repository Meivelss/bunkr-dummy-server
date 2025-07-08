import express from "express";
import fs from "fs";

import { POSTcompiler, type GneralResponse, type POSTResponse } from "./responses/Entries";

const app = express();
app.use(express.json());
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
  const data: GneralResponse[] = JSON.parse(raw); 

  console.log("Deleting an entry...");
  console.log("Initial lenght", data.length);

  const updated = data.filter(item => item.itemID !== id);
  fs.writeFileSync('data/entries.json', JSON.stringify(updated, null, 2));

  console.log("Final lenght", updated.length);

  res.status(200).json({ message: 'Deleted if existed' });
});

app.post("/entries/:id", (req, res) => {
  console.log("POST route hit:", req.params.id);

  if (!POSTcompiler.Check(req.body)) {
    console.log("Validation failed:", [...POSTcompiler.Errors(req.body)]);
    res.status(400).json({ message: 'Invalid entry data' });
    return;
  }

  const id = req.params.id;
  const newEntry = { ...req.body, itemID: id };

  const raw = fs.readFileSync("data/entries.json", "utf-8");
  const data: GneralResponse[] = JSON.parse(raw);
  const index = data.findIndex(item => item.itemID.trim() === id.trim());

  let alreadyExists: boolean = false;

  console.log("URL id:", id);

  if (index != -1) {
    console.log("Entry already exists, updating its values...");
    data[index] = newEntry;
    alreadyExists = true;
  }
  else {
    console.log("Creating a new entry...");
    data.push(newEntry);
  }

  fs.writeFileSync("data/entries.json", JSON.stringify(data, null, 2));

  res.status(200).json({ message: `Entry ${id} ${alreadyExists ? "updated" : "created"}` });
});

app.listen(port, '0.0.0.0', () => {
  console.log("Hello from Bunkr dummy server! :)");
  console.log(`Listening on port ${port}...`);
});