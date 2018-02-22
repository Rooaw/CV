window.onload = function() {
    
    
    $(".FullScreen").fadeOut();    //图片加载完后隐藏加载页
    //返回顶部按钮点击事件
    $(".back-top").on("click",function(e){     
 		e.preventDefault();
 		$(document.body).animate({scrollTop:0},800);
 	})
    
    //上下滚动事件监听
    $(window).on("scroll",function(){
        var st = $(window).scrollTop();
        var skill = parseInt($("#Skill").offset().top) - 350;
        var experience = parseInt($("#Experience").offset().top) - 350;
        var contact = parseInt($("#Contact").offset().top) - 400;
        if (st > 200) {
            $(".back-top").show();
        }else{
            $(".back-top").hide();
        }
        if (st > skill) {
            $("#Skill h3").show();
            $("#Skill p").show();
        }
        if (st > experience){
            $("#Experience h3").show();
            $("#Experience div").show();        
        }
        if (st > contact){
            $("#Contact h3").show();
            $("#Contact div").show();  
        }
    });

    // $(window).scrollTop(0);
}
       
    
// var PageAniamtion = function (liText) {
//     switch (liText) {
//         case 'About':
//         {
//             $('#page1 p').show();
//             break;
//         }
//         case 'Skill':
//         {
//             $('#page2 h3').show();
//             $('#page2 p').show();
//             break;
//         }
//         case 'Experience':
//         {
//             $('#page3 h3').show();
//             $('#page3 .exper-box').show();
//             break;
//         }
//         case 'More':
//         {
//             $('#page4 .row').show();
//             break;
//         }
//         case 'Contact':
//         {
//             $('#page5 h3').show();
//             $('#page5 article').show();
//             break;
//         }
//     }
// };

