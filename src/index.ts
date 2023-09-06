import dotenv from "dotenv";
import express from "express";
import expressLayouts from "express-ejs-layouts"
import path from "path";
import * as routes from "./routes/index";

dotenv.config();

const app=express()

// setup Layout
app.use(expressLayouts);
app.set('layout','layouts/layout');
// setting the view engine
app.set('view engine','ejs');
// setting for the root path for views directory
app.set("views",path.join(__dirname,'views'))



// setting for the root path for public directory
app.use(express.static(path.join(__dirname,'public')))

// Configure routes
routes.register(app);

const PORT =process.env.SERVER_PORT;

app.listen(PORT,()=>{
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`)
})
