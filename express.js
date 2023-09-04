import express from "express"

const app = express();

app.get("/",(req,res) => res.send("hello WAS!!") )

export default app;