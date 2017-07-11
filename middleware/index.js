var Campground = require("../models/campground");
var Comment = require("../models/comment");

var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please login first!")
    res.redirect("/login");
};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
    // is user logged in?
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                req.flash("error", "Campground not found!")
                res.redirect("/campgrounds")
            } else{
                // does user own the campground?
                if(foundCampground.author.id.equals(req.user.id)){
                  next();
                } else{
                    req.flash("error", "You dont have permission to do that!");
                    res.redirect("back")  
                }
            }
        })
    } else{
         // if not, redirect somewhere
        req.flash("error", "Please login first!")
        res.redirect("/login");
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next){
    // is user logged in?
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                req.flash("error", "Comment not found!")
                res.redirect("back")
            } else{
                // does user own the comment?
                if(foundComment.author.id.equals(req.user.id)){
                  next();
                } else{
                    req.flash("error", "You dont have permission to do that!");
                    res.redirect("back")
                }
            }
        })
    } else{
         // if not, redirect somewhere
        res.redirect("/login")
    }
};


module.exports = middlewareObj