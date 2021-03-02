$("#forClose1").click(function(){
    setTimeout(function(){
        $('#close1').click();
    }, 100); 
});

$("#forClose2").click(function(){
    setTimeout(function(){
        $('#close2').click();
    }, 100); 
});

$("#forClose3").click(function(){
    setTimeout(function(){
        $('#close3').click();
    }, 100); 
});

$("#forClose4").click(function(){
    setTimeout(function(){
        $('#close4').click();
    }, 100); 
});

$("#question1tak").on("click", function(event){
    //$("#question1tak, #question2tak").prop("checked", true);
    $("#myModalAnswer1Tak").css("display", "flex");
    $("#myModalAnswer1Tak").show();
    $("#question2tak").off("click");
    $("#question3nie").off("click");
    $("#question4tak").off("click");
    $("#question4nie").off("click");
});

$("#question2tak").on("click", function(event){
    //$("#question2tak").prop("checked", true);
    $("div.delete").remove();
    $("#myModalAnswer2Tak").css("display", "flex"); 
    $("#myModalAnswer2Tak").show();
});


$("#question3nie").on("click", function(event){
    $("div.delete").remove();
    $("div.delete2").remove();
    $("#myModalAnswer3Tak").css("display", "flex"); 
    $("#myModalAnswer3Tak").show();
    $("#question4tak").off("click");
});
 

$("#question4tak").on("click", function(event){
    
    $("div.delete").remove();
    $("div.delete2").remove();
    $("div.delete3").remove();
    $("#myModalAnswer4Tak").css("display", "flex"); 
    $("#myModalAnswer4Tak").show();
});

$("#question4nie").on("click", function(event){ 
    $("div.delete").remove();
    $("div.delete2").remove();
    $("#myModalAnswer3Tak").css("display", "flex"); 
    $("#myModalAnswer3Tak").show(); 
});
 
$("#forClose4").on("click", function(){
    $("input[name = 'optradio']").each(function(){
        if($(this).attr("checked") !== "checked"){
            alert("Nic nie wybrales!");
            return false;
        } else {
            console.log("ok")
        }
    })    
})








