function info_box_set_auto_height(){jQuery(".aio-icon-box.square_box-icon").each(function(i,t){var o=jQuery(window).width()||"";if(""!=o)if(768<=o){var e=jQuery(this).attr("data-min-height")||"";""!=e&&jQuery(this).css("min-height",e)}else jQuery(this).css("min-height","initial")})}jQuery(window).on("load",function(i){info_box_set_auto_height()}),jQuery(document).ready(function(i){info_box_set_auto_height(),jQuery(window).resize(function(i){info_box_set_auto_height()})});