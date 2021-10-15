const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


app.get("/api/fortune", (req,res) => {
  const fortunes = ["A dubious friend may be an enemy in camouflage.",
  "A beautiful, smart, and loving person will be coming into your life.",
  "A faithful friend is a strong defense.",
  "A fresh start will put you on your way.",
  "A gambler not only will lose what he has, but also will lose what he doesn’t have.",
  ];
let randomIndex = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomIndex];

res.status(200).send(randomFortune);
})

app.get("/api/peptalk", (req,res) => {
  const pepTalks = ["Real optimism is not the pep talk you give yourself. It is earned through the labor involved in emotional housekeeping",
  "Too many people in this world think small is the best they can do. Not you, Libby Strout. You weren't born for small! You don't know how to do small! Small is not in you!",
  "Good morning. Your very presence is intoxicating. Good night. Your very absence is sobering.",
  "I am the captain of my own crunch.",
  "Aspire to do anything, start something and stop at nothing.",
  ];
let randomIndex = Math.floor(Math.random() * pepTalks.length);
let randomPep = pepTalks[randomIndex];

res.status(200).send(randomPep);
})
app.get("/api/toughLove", (req,res) => {
  const toughLove = ["Don't be upset about the results you didn't get, from the work you didn't do",
  "Never make someone a priority who only makes you an option",
  "If it is important to you, you will find a way. If not you'll find an excuse",
  "Some people create their own storms, then get upset when it rains.",
  "If it doesn't open, it's not the right door",
  ];
let randomIndex = Math.floor(Math.random() * toughLove.length);
let randomTough = toughLove[randomIndex];

res.status(200).send(randomTough);
})
app.get("/api/video", (req,res) => {
  const videos = ["https://www.youtube.com/watch?v=wnHW6o8WMas",
  "https://www.youtube.com/watch?v=JXQN7W9y_Tw",
  "https://www.youtube.com/watch?v=ZXsQAXx_ao0",
  ];
let randomIndex = Math.floor(Math.random() * videos.length);
let randomVideo = videos[randomIndex];

res.status(200).send(randomVideo);
})

app.listen(4000, () => console.log("Server running on 4000"));
