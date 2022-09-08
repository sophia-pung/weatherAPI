// this is the server index 
import express from 'express';
import cors from 'cors';
import Server from './server';
import fetch from "node-fetch";

import { config } from "dotenv";
config();

console.log(`Your api key is ${process.env.API_KEY}`);

const app = express();
const PORT = 8090; 

app.use(cors());

app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));

app.get('/', (req, res) => { //endpoint for root/
    res.json("Hello from Techtonica")
})

app.get('/api/outfits', (req, res) => {
    const OUTFIT = [
        {top: "short sleeve shirt", bottom: "patagonia shorts"},
        {top: "patagonia fleece", bottom: "REI camping pants"}
    ]
    res.json(OUTFIT)
})

app.get("/weather", (req, res) => {
    const city = req.query.cityName;
    const apiKey = process.env.API_KEY;
    const params = new URLSearchParams({
      q: req.query.cityName,
      appid: process.env.API_KEY,
      units: "imperial",
    });
    const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        res.send({ data });
      })
      .catch((err) => {
        console.log(err);
      });
  });

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});