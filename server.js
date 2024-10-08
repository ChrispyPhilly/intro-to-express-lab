const express = require(`express`)
const PORT = process.env.PORT || 3001

const app = express()

const numbers = []

const greetings = [
    { id: 1, name: 'Christy', },
    { id: 2, name: 'Mathilda', },
    
];

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get(`/`, (req, res) => {
    res.send(`Welcome to my page`)
})

app.get(`/greetings`, (req, res) => {
    res.send(`Hello there,Christy!`);
        
    })



//task 2 rolling numbers

app.get('/roll', (req, res) => {
    const rollNumber = Math.floor(Math.random() * 16) + 1; // Generates a number between 1 and 100
    res.send(`Your roll number is: ${rollNumber}`);
  });
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

//task 3

app.get(`/collectibles/2`, (req, res) => {
    res.send(`So, you want the autographed picture of a dog? For 10, it can be yours!`)
})

//task 4

app.get(`/shoes`, (req, res) => {
    res.send([
        {
            min,price: 0,
            max,price: 100,
            type: boot
        },
//last part of our code-thank you molly
app.get(`/*`, (req, res) => {
    res.send({
        error: `404 file not found`
    })
})}