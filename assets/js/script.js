gsap.registerPlugin(ScrollTrigger);

$('document').ready( function(){
  
  // Setting speed (duration) variables
  var tl1speed = 110;
  var tl2speed = 115;
  var tl3speed = 110;
  var slowScale = 0.25;
  var normalScale = 1;
  
  // Adding duplicates of items to make transition smoother
  $('#cloned').append( $('#cloned .item').clone() );
  
  // Setting Timelines
  tl1 = new TimelineMax({repeat: -1});
  tl1.to( $('#cloned .item:nth-child(3n+1)'), tl1speed, { x:-($('#cloned').width()), ease: Power0.easeNone });
  
  tl2 = new TimelineMax({repeat: -1});
  tl2.to( $('#cloned .item:nth-child(3n+2)'), tl2speed, { x:-($('#cloned').width()), ease: Power0.easeNone });
  
  tl3 = new TimelineMax({repeat: -1});
  tl3.to( $('#cloned .item:nth-child(3n)'), tl3speed, { x:-($('#cloned').width()), ease: Power0.easeNone });
  
  // Setting timescale to slow on load
  var slowFlag = 0;
  TweenLite.to(tl1, 1, {timeScale:slowScale, ease:Quad.easeOut});
  TweenLite.to(tl2, 1, {timeScale:slowScale, ease:Quad.easeOut});
  TweenLite.to(tl3, 1, {timeScale:slowScale, ease:Quad.easeOut});
  slowFlag = 1;
  
  // Speeding up after mouse has been stationary for 2 seconds and hiding logo
  var timer;
  timer = setTimeout(function() {
    TweenLite.to(tl1, normalScale, {timeScale:1, ease:Quad.easeOut});
    TweenLite.to(tl2, normalScale, {timeScale:1, ease:Quad.easeOut});
    TweenLite.to(tl3, normalScale, {timeScale:1, ease:Quad.easeOut});
    $(".page-interface-element, .logo-container").fadeOut(1000);
    slowFlag = 0;
  }, 4000);
  
  $(document).on('mousemove', function(e){
     clearTimeout(timer);
     if(slowFlag != 1){
      TweenLite.to(tl1, 1, {timeScale:slowScale, ease:Quad.easeOut});
      TweenLite.to(tl2, 1, {timeScale:slowScale, ease:Quad.easeOut});
      TweenLite.to(tl3, 1, {timeScale:slowScale, ease:Quad.easeOut});
      $(".page-interface-element, .logo-container").fadeIn(1000);
      slowFlag = 1;
     }

     timer = setTimeout(function() {
       TweenLite.to(tl1, normalScale, {timeScale:1, ease:Quad.easeOut});
       TweenLite.to(tl2, normalScale, {timeScale:1, ease:Quad.easeOut});
       TweenLite.to(tl3, normalScale, {timeScale:1, ease:Quad.easeOut});
       $(".page-interface-element, .logo-container").fadeOut(1000);
       slowFlag = 0;
     }, 4000);
  });

  /* ------Great Horned Owl Sequence------  */
  gsap.set(".portfolio-tease.layout-1 #image-1", { yPercent: -20});
  gsap.set(".portfolio-tease.layout-1 #image-2", { yPercent: 20});
  gsap.set(".portfolio-tease.layout-1 #image-3", { yPercent: 80});
  gsap.set(".portfolio-tease.layout-1", { yPercent: 5});

  gsap.to(".portfolio-tease.layout-1 #image-1", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: ".portfolio-tease.layout-1",
      scrub: 1
    }, 
  });

  gsap.to(".portfolio-tease.layout-1 #image-2", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".portfolio-tease.layout-1",
      scrub: 1
    }, 
  });


  gsap.to(".portfolio-tease.layout-1 #image-3", {
    yPercent: -60,
    ease: "none",
    scrollTrigger: {
      trigger: ".portfolio-tease.layout-1",
      scrub: 1
    }, 
  });

  gsap.to(".portfolio-tease.layout-1", {
    yPercent: -5,
    ease: "none",
    scrollTrigger: {
      trigger: ".portfolio-tease.layout-1",
      end: "bottom center",
      scrub: 1
    }, 
  });

  gsap.utils.toArray('.portfolio-tease').forEach((section, i) => {
  
    if(section.getAttribute('data-bg') !== null) {
      
      var colorAttr = section.getAttribute('data-bg');
      
      gsap.to("body", {
        backgroundColor: colorAttr,
        immediateRender: false,
        scrollTrigger: {
          trigger: section,
          scrub: true,
          start:'top bottom',
          end: '+=100%'
        }
      });
  
    }
    
  });
  
});

function mouseMoveFunc(evt) {
  const maxY1 = gsap.getProperty(".items", "height") * -0.125;
  const maxY2 = gsap.getProperty(".items", "height") * -0.275;
  const maxY3 = gsap.getProperty(".items", "height") * -0.05;
  
  const percent = gsap.utils.normalize(0, innerHeight, evt.pageY);
  
  gsap.to("#cloned .item:nth-child(3n+1)", {
    duration: 0.2,
    y: percent * maxY1 - maxY1 / 2
  });
  
  gsap.to("#cloned .item:nth-child(3n+2)", {
    duration: 0.2,
    y: percent * maxY2 - maxY2 / 2
  });
  
  gsap.to("#cloned .item:nth-child(3n)", {
    duration: 0.2,
    y: percent * maxY3 - maxY3 / 2
  });
}

window.addEventListener("mousemove", mouseMoveFunc);


