const Listing=require("../models/listing");
const Review=require("../models/review");


module.exports.createReview=async (req,res)=>{
    // console.log(req.params.id)
     let listing=await Listing.findById(req.params.id);
    let newReview=new Review(req.body.review);
    newReview.author=req.user._id;
    // console.log(newReview);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    // console.log("added");
    req.flash("success","new review added successfully");
    res.redirect(`/listings/${listing._id}`);
   
}
module.exports.destroyReview=async(req,res)=>{
    let {id,rid}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:rid}});
    await Review.findByIdAndDelete(rid);
    req.flash("success","review deleted successfully");
    res.redirect(`/listings/${id}`);

}