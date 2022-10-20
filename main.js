(function (){
 let container = $(`.slideshow`),
       slideGrop = container.find(`.slideshow`),
       slides = slideGrop.find(`a`),
       nav = container.find(`.slideshow_nav`),
       indicator = container.find(`.indicator`),
       slideCount = slides.length,
       indicatorHtml = '',
       currentIndex = 0,
       duration = 500,
       easing ='saseInOutExpp',
       interval = 3500,
       timer;
       
       slides.each(function(){
        let newLeft = i * 100 + '%';
           $(this).css({left: newLeft });
           indicatorHtml += '<a href="">'+ (i+1) + '</a>'
           console.log(indicatorHtml)
       });

       indicator.html(indicatorHtml);

});