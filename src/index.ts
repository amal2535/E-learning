import dotenv from "dotenv";
import express from "express";
import expressLayouts from "express-ejs-layouts"
import path from "path";

dotenv.config();

const app=express()

// setup Layout
app.use(expressLayouts);
app.set('layout','Layouts/layout');
// setting the view engine
app.set('view engine','ejs');
// setting for the root path for views directory
app.set("views",path.join(__dirname,'views'))



// setting for the root path for public directory
app.use(express.static(path.join(__dirname,'public')))


app.get('/',(req,res) => res.render('home'));
app.get('/cours/tous',(req,res)=> res.render('cours'))

const PORT =process.env.SERVER_PORT;

app.listen(PORT,()=>{
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`)
})
