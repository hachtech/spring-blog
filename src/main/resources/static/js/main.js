/**
 * Created by Fer on 1/9/17.
 */
$(document).ready(function(){

    console.log("Js loaded");
    $(".dropdown-button").dropdown();
    $('.materialboxed').materialbox();
    $(".side-navBtn").sideNav();
    $('.parallax').parallax();

    //toasts
    // var toastError = $("<span class='error'>I am toast content</span>");
    //
    // $(".submit").click(function(){
    //     Materialize.toast($toastContent, 5000);
    // });


    function testJson(){
        $.ajax({
            url: "/posts.json",
            method: "GET"
        }).done(function(posts){

            console.log(posts);
            html = "";

            for (i = 0; i < posts.length; i++) {
                html += "<div><h1>" + posts[i].title + "</h1><p>" + posts[i].body + "</p></div>";
            }

            console.log(html);

        });
    }

    testJson();

});