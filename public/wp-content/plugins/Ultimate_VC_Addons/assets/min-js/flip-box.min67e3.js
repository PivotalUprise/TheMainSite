!function(c,r,i){function f(){c(".flip-box").each(function(i,f){c(document).width();var t=r.innerWidth;if(""!=t)if(768<=t){if(""!=(d=c(this).attr("data-min-height")||"")){if(c(this).hasClass("ifb-custom-height")){if(c(this).css("min-height",d),c(this).css("height",d),c(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")){var s=c(this).find(".ifb-back").outerHeight(),e=c(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();(s=parseInt(d))<=(e=parseInt(e))&&c(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle")}if(c(this).find(".ifb-front").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")){var n=c(this).find(".ifb-front").outerHeight();n=parseInt(d);var b=c(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight();n<=(b=parseInt(b))&&c(this).find(".ifb-front").find(".ifb-flip-box-section").addClass("ifb_disable_middle")}}}else if(c(this).hasClass("ifb-jq-height")){var h=c(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();h=parseInt(h);var a=c(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight();(a=parseInt(a))<=h?c(this).find(".ifb-face").css("height",h):c(this).find(".ifb-face").css("height",a)}else if(c(this).hasClass("ifb-auto-height")&&c(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")){s=c(this).find(".ifb-back").outerHeight();s=parseInt(s);e=c(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();s<=(e=parseInt(e))&&c(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle")}}else{var d=c(this).attr("data-min-height")||"";if(c(this).hasClass("style_9")){c(this).css("height","initial");var o=c(this).find(".ifb-front-1 .ifb-front").outerHeight(),l=c(this).find(".ifb-back-1 .ifb-back").outerHeight();l<o?c(this).css("height",o):c(this).css("height",l)}else if(c(this).hasClass("ifb-jq-height")){h=c(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();h=parseInt(h);a=c(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight();(a=parseInt(a))<=h?c(this).find(".ifb-face").css("height",h):c(this).find(".ifb-face").css("height",a)}else if(c(this).hasClass("ifb-auto-height")){if(c(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")){s=c(this).find(".ifb-back").outerHeight(),e=c(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();(s=parseInt(s))<(e=parseInt(e))&&c(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle")}}else if(c(this).hasClass("ifb-custom-height")){if(""!=d){if(c(this).css("min-height",d),c(this).css("height",d),c(this).find(".ifb-back").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")){s=c(this).find(".ifb-back").outerHeight();s=parseInt(s);e=c(this).find(".ifb-back").find(".ifb-flip-box-section").outerHeight();s<=(e=parseInt(e))&&c(this).find(".ifb-back").find(".ifb-flip-box-section").addClass("ifb_disable_middle")}if(c(this).find(".ifb-front").find(".ifb-flip-box-section").hasClass("ifb-flip-box-section-vertical-middle")){n=c(this).find(".ifb-front").outerHeight();n=parseInt(n);b=c(this).find(".ifb-front").find(".ifb-flip-box-section").outerHeight();b=parseInt(b),c(this).find(".ifb-front").find(".ifb-flip-box-section").addClass("ifb_disable_middle")}}}else c(this).css("height","initial")}})}c(r).on("load",function(i){f()}),c(document).ready(function(i){f()}),c(r).resize(function(i){f()})}(jQuery,window);