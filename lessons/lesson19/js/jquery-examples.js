// $
// $("<div></div>")

// $("<img>", {
//     src: "img/image1.jpg",
//     title: "Good cat",
//     click: function() {
//         alert("This is cat");
//     }
// }).appendTo("body");

// $("#test").text("#andrzejdudajestdebilem");

// $("#text").fadeOut("slow");

// $("#style").addClass("betterStyle");

// $("#test").removeClass("defaultStyle");

// $("#test").css("color", "green");


// $("#clickme").click(function() {
//     $("#cat").slideDown("slow", function() {});
// });



$(document).ready(function () {
    $(".btn-slide").click(function () {
        $("#panel").slideToggle("slow");
        $(this).toggleClass("");
    })
})

$(".run").click(function () {
    $("#box").animate({
        opacity: "0.1", left: "+=400"
    }, 1200).animate({
        opacity: "0.4", top: "+=160"
    }, "slow").animate({
        opacity: "1", left: "0"
    }, "slow").animate({
        top: "0"
    }, "fast").slideUP().slideDown("slow");

})

$(".accordion h3:first").addClass("active");
$(".accordion p:not(:first)").hide();

$(".accordion h3").click(function () {
    $(this).next("p").slideToggle("slow")
        .siblings("p:visible").slideUP("slow");
    $(this).toggleClass("active");
    $(this).siblings("h3").removeClass("active");
});

$(".thumbs a").click(function () {
    let largePath = $(this).attr("href");
    let largeAlt = $(this).attr("title");
    $("#largeImg").attr({src: largePath, alt: largeAlt});
})