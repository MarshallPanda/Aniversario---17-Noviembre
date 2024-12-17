var tl = new TimelineMax();

 tl
 .set($(".book-wrapper"), {perspective: 8000, xPercent:-50, yPercent:8, left:"50%"})
 .set($(".book-container"), {transformStyle: "preserve-3d"})
 .set($(".book-front"), {transformOrigin: "0% 50% -15px", transformPerspective: 8000})
 .set(".book-left",{rotationX:0,rotationY:270,rotationZ:0,  transformPerspective: 8000});


$('.book-container').hover(
  function() { tl.to('.side', 0.75, { rotationY : "+=35" }); },
  function() { tl.to('.side', 0.75, { rotationY : '-=35' }); }
);