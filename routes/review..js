const express=require("express");
const router=express.Router({mergeParams:true});

const wrapAsync=require("../utils/wrapAsync.js");
// const ExpressError=require("../utils/ExpressError.js");
// const {reviewSchema}=require("../schema.js");
const Review = require("../models/review");
const Listing = require("../models/listing");
const {validateReview,isLoggedIn, isReviewAuthor}=require("../middleware.js");
const reviewController=require("../controller/reviews.js");




//Review
//post method

router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//delete review

router.delete("/:rid",isLoggedIn,isReviewAuthor,reviewController.destroyReview);

module.exports=router;