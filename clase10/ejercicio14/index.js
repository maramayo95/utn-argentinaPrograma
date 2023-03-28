$(document).ready(function(){
  $("#btn1").click(function(){
    $("#noticia1").toggle();
  });

  $("#btn2").click(function(){
    $("#noticia2").toggle();
  });

  $("#btn3").click(function(){
    $("#noticia3").toggle();
  });

  $(".btn").click(function(){
    $(".noticia").css("font-size", "20px");
    $("#" + this.id.slice(0,4)).css("font-size", "30px");
  });
});
  