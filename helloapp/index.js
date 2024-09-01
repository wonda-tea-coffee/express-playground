import express from "express";
import http from 'http';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;
const DEFAULT_MESSAGE = "hello server";

let message = DEFAULT_MESSAGE;
app.get('/message', (req, res) => {
  res.status(200).send(`${message}\n`);
});

app.post('/message', (req, res) => {
  if (req.body.message) {
    message = req.body.message;
    res.status(200).send(`OK:${message}\n`);
  } else {
    res.status(400).send("ERROR");
  }
});

app.delete('/message', (req, res) => {
  message = DEFAULT_MESSAGE;
  res.status(200).send("OK\n");
});

const webServer = http.createServer(app);
webServer.listen(PORT, () => {
  console.log(`server running PORT:${PORT}`);
});
