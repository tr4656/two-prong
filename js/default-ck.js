/* ==========================================================
  Base Default JavaScript
  -- Table of Contents --
*/// JS functions and initiations go here...
//Function
//Slider
$(function(){function e(){var e=$("#two-prong-slider").val(),t=$("#chain-slider").val(),n=0;e==0&&t==1?n=7.5:e==0&&t==2?n=18.75:e==0&&t==3?n=33.75:e==0&&t==4?n=52.5:e==1&&t==1?n=8.13:e==1&&t==2?n=20.31:e==1&&t==3?n=36.56:e==1&&t==4&&(n=56.88);document.getElementById("two-prong-multiplier").innerHTML=n}$("#two-prong-slider").noUiSlider({start:3,step:1,range:{min:0,max:12},serialization:{lower:[$.Link({target:$("#numTwo"),format:{decimals:0}})]},format:{decimals:0}});$("#chain-slider").noUiSlider({start:1,step:1,range:{min:1,max:4},serialization:{lower:[$.Link({target:$("#numChain"),format:{decimals:0}})]},format:{decimals:0}});$("#two-prong-slider").on("slide",function(){e()});$("#chain-slider").on("slide",function(){e()})});