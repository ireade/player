$(document).ready(function(){$(".show-more div").on("click",function(){$(this).hasClass("more")?($("#player").css("bottom","160px"),$(".show-more .less").show()):($("#player").css("bottom","0"),$(".show-more .more").show()),$(this).hide()}),$(".icon").on("click",function(){$(this).hasClass("active")?$(this).removeClass("active"):($(".icon").removeClass("active"),$(this).addClass("active"))})});