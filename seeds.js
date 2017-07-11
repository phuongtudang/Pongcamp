var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [
    {
        name: "Nineth Cloud",
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description: "Nice scenery with playground for your kids. Bacon ipsum dolor amet ham short ribs alcatra jowl chuck filet mignon doner biltong pancetta kielbasa drumstick. Pork chop spare ribs kielbasa ground round jowl, sausage pork loin capicola prosciutto ribeye ball tip meatball pork belly turkey doner. Pork belly jowl ribeye beef ribs hamburger corned beef. Jowl brisket cupim, pastrami tri-tip pork loin flank pork belly bresaola strip steak leberkas. Short loin flank cupim, tongue kielbasa tenderloin ham tri-tip porchetta meatball. Jerky frankfurter jowl tail burgdoggen. Shank sausage brisket kevin burgdoggen. Pancetta meatball doner cow venison picanha. Bacon ball tip spare ribs, kevin kielbasa tail picanha. Sirloin leberkas bresaola t-bone ham hock chicken. Tenderloin pig jowl pastrami swine prosciutto, flank salami turducken pork loin strip steak turkey boudin leberkas short loin."
    },
    {
        name: "Wellington Beach",
        image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg",
        description: "Bacon ipsum dolor amet ham short ribs alcatra jowl chuck filet mignon doner biltong pancetta kielbasa drumstick. Pork chop spare ribs kielbasa ground round jowl, sausage pork loin capicola prosciutto ribeye ball tip meatball pork belly turkey doner. Pork belly jowl ribeye beef ribs hamburger corned beef. Jowl brisket cupim, pastrami tri-tip pork loin flank pork belly bresaola strip steak leberkas. Short loin flank cupim, tongue kielbasa tenderloin ham tri-tip porchetta meatball. Jerky frankfurter jowl tail burgdoggen. Shank sausage brisket kevin burgdoggen. Pancetta meatball doner cow venison picanha. Bacon ball tip spare ribs, kevin kielbasa tail picanha. Sirloin leberkas bresaola t-bone ham hock chicken. Tenderloin pig jowl pastrami swine prosciutto, flank salami turducken pork loin strip steak turkey boudin leberkas short loin."
    },
    {
        name: "Queenstown Heaven",
        image: "https://farm3.staticflickr.com/2655/3738566424_180036be3f.jpg",
        description: "Bacon ipsum dolor amet ham short ribs alcatra jowl chuck filet mignon doner biltong pancetta kielbasa drumstick. Pork chop spare ribs kielbasa ground round jowl, sausage pork loin capicola prosciutto ribeye ball tip meatball pork belly turkey doner. Pork belly jowl ribeye beef ribs hamburger corned beef. Jowl brisket cupim, pastrami tri-tip pork loin flank pork belly bresaola strip steak leberkas. Short loin flank cupim, tongue kielbasa tenderloin ham tri-tip porchetta meatball. Jerky frankfurter jowl tail burgdoggen. Shank sausage brisket kevin burgdoggen. Pancetta meatball doner cow venison picanha. Bacon ball tip spare ribs, kevin kielbasa tail picanha. Sirloin leberkas bresaola t-bone ham hock chicken. Tenderloin pig jowl pastrami swine prosciutto, flank salami turducken pork loin strip steak turkey boudin leberkas short loin."
    }
]

function seedDB(){
  //Remove all campgrounds
  Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        //  //add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err)
        //         } else {
        //             console.log("added a campground");
        //             //create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is great, but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //                 });
        //         }
        //     });
        // });
    }); 
}
                          

module.exports = seedDB;


