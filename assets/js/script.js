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

  $(window).on("scroll", function() {
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

  /* ----------------------------------------
   * Portfolio Images Scroll Animation
   * ---------------------------------------- */

  /** Setting Portfolio layouts array */
  var portfolioLayouts = [
    {section_speed: 5, section_scale: 1, image1_speed: -20, image1_scale: 1, image2_speed: 20, image2_scale: 2, image3_speed: 80, image3_scale: 0.75},
    {section_speed: 10, section_scale: 1, image1_speed: -20, image1_scale: 1, image2_speed: 40, image2_scale: 1.5, image3_speed: -40, image3_scale: 1}
  ];

  gsap.utils.toArray(".portfolio-tease").forEach((section, i) => {
    /*** Getting layout of sections from data attribute ***/
    var layoutIndex = section.getAttribute('data-layout') - 1;
    var layout = portfolioLayouts[layoutIndex]

    /*** Getting child elements ***/
    let image1 = section.querySelector("#image-1");
    let image2 = section.querySelector("#image-2");
    let image3 = section.querySelector("#image-3");

    gsap.set(section, { yPercent: layout.section_speed});
    gsap.set(image1, { yPercent: layout.image1_speed});
    gsap.set(image2, { yPercent: layout.image2_speed});
    gsap.set(image3, { yPercent: layout.image3_speed});

    gsap.to(section, {
      yPercent:  layout.section_speed * -1 * layout.section_scale,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        end: "bottom center",
        scrub: 1,
        toggleClass: "active",
      }, 
    });

    gsap.to(image1, {
      yPercent: layout.image1_speed * -1 * layout.image1_scale,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: 1
      }, 
    });

    gsap.to(image2, {
      yPercent:  layout.image2_speed * -1 * layout.image2_scale,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: 1
      }, 
    });

    gsap.to(image3, {
      yPercent: layout.image3_speed * -1 * layout.image3_scale,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: 1
      }, 
    });
  });

  gsap.utils.toArray('.portfolio-tease').forEach((section, i) => {
  
    if(section.getAttribute('data-bg') !== null || section.getAttribute('data-display') !== null) {
      
      var colorAttr = section.getAttribute('data-bg');
      var displayAttr = section.getAttribute('data-display');
      
      gsap.to("body", {
        backgroundColor: colorAttr,
        immediateRender: false,
        scrollTrigger: {
          trigger: section,
          scrub: true,
          start:'top bottom',
          end: '+=100%',
          onEnter: function(){
            console.log(displayAttr);
            if(displayAttr == "dark"){
              $("body").addClass("dark-mode");
            } else {
              $("body").removeClass("dark-mode");
            }
          },
          onEnterBack: function(){
            console.log(displayAttr);
            if(displayAttr == "dark"){
              $("body").addClass("dark-mode");
            } else {
              $("body").removeClass("dark-mode");
            }
          },
        }
      });
  
    }
    
  });
  
});

function mouseMoveFunc(evt) {
  const maxY1 = gsap.getProperty(".items", "height") * -0.075;
  const maxX1 = gsap.getProperty(".items", "width") * -0.0025;
  const maxY2 = gsap.getProperty(".items", "height") * -0.135;
  const maxX2 = gsap.getProperty(".items", "width") * -0.0045;
  const maxY3 = gsap.getProperty(".items", "height") * -0.075;
  const maxX3 = gsap.getProperty(".items", "width") * -0.001;
  const clonedX = gsap.getProperty(".items", "width") * -0.005;
  
  const percentY = gsap.utils.normalize(0, innerHeight, evt.pageY);
  const percentX = gsap.utils.normalize(0, innerWidth, evt.pageX) - 0.5;
  
  gsap.to("#cloned .item:nth-child(3n+1)", {
    duration: 1,
    y: percentY * maxY1 - maxY1 / 2
  });
  
  gsap.to("#cloned .item:nth-child(3n+2)", {
    duration: 1,
    y: percentY * maxY2 - maxY2 / 2
  });
  
  gsap.to("#cloned .item:nth-child(3n)", {
    duration: 1,
    y: percentY * maxY3 - maxY3 / 2
  });

  gsap.to("#cloned", {
    duration: 1,
    x: percentX * clonedX - clonedX / 2
  });
  
  gsap.to(".portfolio-tease:nth-child(2n+1) .portfolio-images .image-container:nth-child(3n+1)", {
    duration: 2,
    x: percentX * maxX1 - maxX1 / 20,
    y: percentY * maxY1 - maxY1 / 2
  });
  
  gsap.to(".portfolio-tease:nth-child(2n+1) .portfolio-images .image-container:nth-child(3n+2)", {
    duration: 2,
    x: percentX * maxX2 - maxX2 / 20,
    y: percentY * maxY2 - maxY2 / 2
  });
  
  gsap.to(".portfolio-tease:nth-child(2n+1) .portfolio-images .image-container:nth-child(3n)", {
    duration: 2,
    x: percentX * maxX3 - maxX3 / 20,
    y: percentY * maxY3 - maxY3 / 2
  });
  
  gsap.to(".portfolio-tease:nth-child(2n) .portfolio-images .image-container:nth-child(3n+1)", {
    duration: 2,
    x: -1 * percentX * maxX1 - maxX1 / 20,
    y: percentY * maxY1 - maxY1 / 2
  });
  
  gsap.to(".portfolio-tease:nth-child(2n) .portfolio-images .image-container:nth-child(3n+2)", {
    duration: 2,
    x: -1 * percentX * maxX2 - maxX2 / 20,
    y: percentY * maxY2 - maxY2 / 2
  });
  
  gsap.to(".portfolio-tease:nth-child(2n) .portfolio-images .image-container:nth-child(3n)", {
    duration: 2,
    x: -1 * percentX * maxX3 - maxX3 / 20,
    y: percentY * maxY3 - maxY3 / 2
  });
}

window.addEventListener("mousemove", mouseMoveFunc);


