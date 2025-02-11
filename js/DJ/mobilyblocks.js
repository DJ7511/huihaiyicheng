/* ==========================================================
 * MobilyBlocks
 * date: 29.11.2010
 * last update: 25.1.2011
 * author: Marcin Dziewulski
 * web: http://www.mobily.pl or http://playground.mobily.pl
 * email: hello@mobily.pl
 * Free to use under the MIT license.
========================================================== */
(function($){$.fn.mobilyblocks=function(options){var defaults={trigger:"click",direction:"clockwise",duration:750,zIndex:10,widthMultiplier:1.2};var sets=$.extend({},defaults,options);return this.each(function(){var $t=$(this),w=$t.width(),h=$t.height(),parent=$t.find("ul"),list=parent.find("li"),size=list.length,hov=false,dir;if(sets.direction=="clockwise"){dir=-1}else{if(sets.direction=="counter"){dir=1}}var socials={init:function(){parent.hide().css({zIndex:sets.zIndex});$t.append($("<a />").addClass("trigger").css({display:"block",position:"absolute",zIndex:1,top:0,left:0,width:"100%",height:"100%"}));switch(sets.trigger){case"click":socials.click();break;case"hover":socials.hover();break;default:socials.click()}},click:function(){var trigger=$t.find("a.trigger");trigger.bind("click",function(){if($t.hasClass("close")){parent.fadeTo(sets.duration,0);socials.animation.close();$t.removeClass("close")}else{parent.fadeTo(sets.duration,1);socials.animation.open();$t.addClass("close")}return false})},hover:function(){var trigger=$t.find("a.trigger");trigger.bind("mouseover",function(){if(hov==false){parent.fadeTo(sets.duration,1);socials.animation.open();$t.addClass("close")}});parent.bind("mouseleave",function(){$t.removeClass("close");parent.fadeTo(sets.duration,0);socials.animation.close();hov=true;setTimeout(function(){hov=false},500)})},animation:{open:function(){socials.ie.open();list.each(function(i){var li=$(this);li.animate({path:new $.path.arc({center:[0,0],radius:w*sets.widthMultiplier,start:0,end:360/size*i,dir:dir})},sets.duration)});list.hover(function(){var li=$(this);li.css({zIndex:sets.zIndex}).siblings("li").css({zIndex:sets.zIndex-1})})},close:function(){list.each(function(i){var li=$(this);li.animate({top:0,left:0},sets.duration,function(){socials.ie.close()})})}},ie:{open:function(){if($.browser.msie){list.show()}},close:function(){if($.browser.msie){list.hide()}}}};socials.init()})}}(jQuery));(function($){$.path={};$.path.arc=function(params){for(var i in params){this[i]=params[i]}this.dir=this.dir||1;while(this.start>this.end&&this.dir>0){this.start-=360}while(this.start<this.end&&this.dir<0){this.start+=360}this.css=function(p){var a=this.start*(p)+this.end*(1-(p));a=a*3.1415927/180;var x=Math.sin(a)*this.radius+this.center[0];var y=Math.cos(a)*this.radius+this.center[1];return{top:y+"px",left:x+"px"}}};$.fx.step.path=function(fx){var css=fx.end.css(1-fx.pos);for(var i in css){fx.elem.style[i]=css[i]}}})(jQuery);

$(function(){
	$('.nature').mobilyblocks({
		trigger: 'hover', //触发的方式
		direction: 'counter', //动画方向
		duration:500,  //动画持续时间
		zIndex:50,  //z-inde值
		widthMultiplier:1  //宽度的倍数
	});
});