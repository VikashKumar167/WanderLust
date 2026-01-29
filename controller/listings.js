const Listing = require("../models/listing");
module.exports.index = async (req, res) => {
    // let allListings=await Listing.find();
    const { category, search } = req.query;

    let query = {};

    if (category) {
        query.category = category;
    }

    if (search && search.trim() !== "") {
        query.title = { $regex: search.trim(), $options: "i" };
    }

    const allListings = await Listing.find(query);

    res.render("listings/index", {
        allListings,
        category,
        search
    });
}
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
}
module.exports.createListing = async (req, res, next) => {
    // console.log(result.error);
    const address = req.body.listing.location;

    const geoUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${process.env.MAP_TOKEN}`;

    const response = await fetch(geoUrl);
    const data = await response.json();
    // res.json(data.features[0].geometry.coordinates);
    let url = req.file.path;
    let filename = req.file.filename;
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image.url = url;
    newListing.image.filename = filename;
    newListing.geometry = data.features[0].geometry;
    let savedListing = await newListing.save();
    // console.log(savedListing);
    req.flash("success", "new listing added successfully");
    res.redirect("/listings");
}
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "listing you are requested for does not exist");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    // console.log(originalImageUrl);
    // console.log(listing.image.url);
    res.render("listings/edit.ejs", { listing, originalImageUrl });
}
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let updateData = { ...req.body.listing };
    // let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        updateData.image = { url, filename };
    }
    if (req.body.listing.location) {
        const address = req.body.listing.location;
        const geoUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${process.env.MAP_TOKEN}`;

        try {
            const response = await fetch(geoUrl);
            const data = await response.json();

            if (data.features && data.features.length > 0) {
                updateData.geometry = data.features[0].geometry;
            }
        } catch (err) {
            console.error("Geocoding failed:", err.message);
        }
    }
    await Listing.findByIdAndUpdate(id, updateData);
    req.flash("success", "listing updated successfully");
    res.redirect(`/listings/${id}`);
}
module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let list = await Listing.findByIdAndDelete(id);
    // console.log(list);
    req.flash("success", "listing deleted successfully");
    res.redirect("/listings")
}
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" }, }).populate("owner");
    if (!listing) {
        req.flash("error", "listing you are requested for does not exist");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}