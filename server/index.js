// this is the server index 
import express from 'express';
import cors from 'cors';

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
