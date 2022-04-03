$(function(){
    $("input").on("click",function(){
        //var x=5;
        //debugger;
        //alert('yo');
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem); 
        $("h1").text($("li").eq(randomChildNumber).text());
    });
});