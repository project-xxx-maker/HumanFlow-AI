import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
  res.send("HumanFlow API ONLINE 🚀");
});

app.listen(3001, ()=>{
  console.log("API rodando na porta 3001");
});
