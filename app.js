if(process.env.NODE_ENV!="production"){
    require('dotenv').config();
    // console.log(process.env.SECRET) ;
}

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const port=8080; 
// const Listing = require("./models/listing");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
// const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");
// const {listingSchema,reviewSchema}=require("./schema.js");
// const Review = require("./models/review");
const listingRouter=require("./routes/listing.js")
const reviewRouter=require("./routes/review..js")
const userRouter=require("./routes/user.js");
const session=require("express-session");
const MongoStore = require('connect-mongo').default;
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");
// const maplibregl = require('maplibre-gl');

const dbUrl=process.env.ATLAS_DB;
// console.log(dbUrl)
main()
.then(()=>{
    console.log("connected to mongodbdatabase");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(dbUrl);
}
app.engine('ejs', ejsMate);
app.set("view engine",'ejs');
app.set("views",path.join(__dirname,"views"));
// app.get("/",(req,res)=>{
//     res.send("this is a root route")
// })
//session create
const store=MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET
    },
    tochAfter:24 * 3600
});
store.on("error",()=>{
    console.log("Error in mongo connect store",err);
})
const sessionOptions={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    // saveUninitialized:false,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true
    }
};

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname,"/public")));

app.use((req,res,next)=>{
    res.locals.successMsg=req.flash("success");
    res.locals.errorMsg=req.flash("error");
    res.locals.currUser=req.user;
    res.locals.category = req.query.category || null;
    res.locals.search = req.query.search || "";
    next();
});

// app.get("/demoUser",async(req,res)=>{
//     let fakeUser=new User({
//         email:"student@gmail.com",
//         username:"delta-student"
//     })
//     let registeredUser=await User.register(fakeUser,"helloworld");
//     res.send(registeredUser);
// })

app.use("/listings",listingRouter)
app.use("/listings/:id/reviews",reviewRouter)
app.use("/",userRouter)



app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err,req,res,next)=>{
    let { status = 500, message = "Something went wrong" } = err;
    res.status(status).render("listings/error.ejs",{message});
    // res.status(status).send(message);
});

app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
});