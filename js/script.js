// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 2.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_stack_vertical(d,a,b){var e=jQuery;var c=e("li",b);this.go=function(k,h,n,m){var g=(k-h+1)%c.length;if(Math.abs(m)>=1){g=(m>0)?0:1}g=!!g^!!d.revers;var i=(d.revers?1:-1)+"00%";c.each(function(o){if(g&&o!=h){this.style.zIndex=(Math.max(0,this.style.zIndex-1))}});var j=e("ul",b);var l=document.all?0:"0%";var f=e(c.get(g?k:h)).clone().css({position:"absolute","z-index":4,width:"100%",top:0,top:(g?i:l)});if(g){f.appendTo(b)}else{f.insertAfter(j)}if(!g){e("ul",b).css({left:-k+"00%"})}f.animate({top:(g?l:i)},d.duration,"easeInOutExpo",function(){if(g){j.css({left:-k+"00%"})}e(this).remove()});return k}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 2.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
wowReInitor(jQuery("#wowslider-container1"),{effect:"stack_vertical",prev:"",next:"",duration:20*100,delay:20*100,width:960,height:360,autoPlay:true,stopOnHover:false,loop:false,bullets:true,caption:true,controls:true,logo:"engine1/loading.gif",images:0});