const mongoose=require("mongoose");
const initdata=require("./data.js");
const Listing=require("../models/listing.js");
main()
.then(()=>{
    console.log("connected to mongodbdatabase");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}
const initdb=async()=>{
    await Listing.deleteMany({});
    // initdata.data=initdata.data.map((obj)=>({...obj,owner:"6967deed2c19bbbaba3ccc3a"}));
    initdata.data = initdata.data.map((obj) => ({
    ...obj,
    owner: "6967deed2c19bbbaba3ccc3a",
    category: obj.category || "rooms",
    geometry: {
        type: "Point",
        coordinates: [77.1025, 28.7041] // Delhi default
    }
}));

    await Listing.insertMany(initdata.data);
    console.log("init data was intialized");
}
initdb();