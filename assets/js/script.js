gsap.registerPlugin(ScrollTrigger);

$('document').ready( function(){
  
  // Setting speed (duration) variables
  var tl1speed = 110;
  var tl2speed = 115;
  var tl3speed = 110;
  var slowScale = 0.25;
  var normalScale = 1;
  
  // Adding duplicates of items to make transition smoother
  $('#cloned').append( $('#cloned .media-item').clone() );
  
  // Setting Timelines
  tl1 = new TimelineMax({repeat: -1});
  tl1.to( $('#cloned .media-item:nth-child(3n+1)'), tl1speed, { x:-($('#cloned').width()), ease: Power0.easeNone });
  
  tl2 = new TimelineMax({repeat: -1});
  tl2.to( $('#cloned .media-item:nth-child(3n+2)'), tl2speed, { x:-($('#cloned').width()), ease: Power0.easeNone });
  
  tl3 = new TimelineMax({repeat: -1});
  tl3.to( $('#cloned .media-item:nth-child(3n)'), tl3speed, { x:-($('#cloned').width()), ease: Power0.easeNone });
  
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
    {section_speed: 10, section_scale: 1, image1_speed: -20, image1_scale: 1, image2_speed: 40, image2_scale: 1.5, image3_speed: -40, image3_scale: 1},
    {section_speed: 10, section_scale: 1, image1_speed: -20, image1_scale: 1, image2_speed: 40, image2_scale: 1.5, image3_speed: -40, image3_scale: 1}
  ];

  gsap.utils.toArray(".portfolio-tease").forEach((section, i) => {
    /*** Getting layout of sections from data attribute ***/
    var layoutIndex = section.getAttribute('data-layout') - 1;
    var layout = portfolioLayouts[layoutIndex]

    /*** Getting child elements ***/
    let image1 = section.querySelector("#item-1");
    let image2 = section.querySelector("#item-2");
    let image3 = section.querySelector("#item-3");

    gsap.set(section, { yPercent: layout.section_speed});
    gsap.set(image1, { yPercent: layout.image1_speed});
    gsap.set(image2, { yPercent: layout.image2_speed});
    gsap.set(image3, { yPercent: layout.image3_speed});

    gsap.to(section, {
      yPercent:  layout.section_speed * -1 * layout.section_scale,
      ease: "sine",
      scrollTrigger: {
        trigger: section,
        end: "bottom center",
        scrub: 0.5,
        toggleClass: "active",
      }, 
    });

    gsap.to(image1, {
      yPercent: layout.image1_speed * -1 * layout.image1_scale,
      ease: "sine",
      scrollTrigger: {
        trigger: section,
        scrub: 0.5
      }, 
    });

    gsap.to(image2, {
      yPercent:  layout.image2_speed * -1 * layout.image2_scale,
      ease: "sine",
      scrollTrigger: {
        trigger: section,
        scrub: 0.5
      }, 
    });

    gsap.to(image3, {
      yPercent: layout.image3_speed * -1 * layout.image3_scale,
      ease: "sine",
      scrollTrigger: {
        trigger: section,
        scrub: 0.5
      }, 
    });
  });

  gsap.utils.toArray('.portfolio-tease').forEach((section, i) => {
  
    if(section.getAttribute('data-bg') !== null || section.getAttribute('data-display') !== null) {
      
      var colorAttr = section.getAttribute('data-bg');
      var displayAttr = section.getAttribute('data-display');
      var lastDisplayAttr = section.getAttribute('data-last-display');
      var nextDisplayAttr = section.getAttribute('data-next-display');
      
      gsap.to("body", {
        backgroundColor: colorAttr,
        immediateRender: false,
        scrollTrigger: {
          trigger: section,
          scrub: 0.5,
          start:'top bottom',
          end: '+=100%',
        }
      });

      gsap.to("body", {
        scrollTrigger: {
          trigger: section,
          scrub: 0.5,
          end: 'bottom center',
          onEnter: function(){
            if(displayAttr == "dark"){
              $("body").addClass("dark-mode");
            } else {
              $("body").removeClass("dark-mode");
            }
          },
          onEnterBack: function(){
            if(displayAttr == "dark"){
              $("body").addClass("dark-mode");
            } else {
              $("body").removeClass("dark-mode");
            }
          },
          onLeave: function(){
            if(nextDisplayAttr == "light"){
              $("body").removeClass("dark-mode");
            }
          },
          onLeaveBack: function(){
            if(lastDisplayAttr == "light"){
              $("body").removeClass("dark-mode");
            }
          },
        }
      });
  
    }
    
  });
  
});

function mouseMoveFunc(evt) {
  gsap.utils.toArray('[data-mouse-x],[data-mouse-y]').forEach((section, i) => {
  
    if(section.getAttribute('data-mouse-x') !== null ) {
      const xFactor = section.getAttribute('data-mouse-x');
      const maxX = gsap.getProperty(section, "width") * xFactor;
      const percentX = gsap.utils.normalize(0, innerWidth, evt.screenX);
      
      //let num = percentX * maxX - maxX / 2;
      //console.log("percentageX: " + percentX.toString());
      //console.log("x: " + num.toString());
      
      gsap.to(section, {
        duration: 1,
        //repeat: 1,
        //yoyo: true,
        //startAt: {x: 0},
        x: percentX * maxX - maxX / 2
      });
    }

    if(section.getAttribute('data-mouse-y') !== null ) {
      const yFactor = section.getAttribute('data-mouse-y');
      const maxY = gsap.getProperty(section, "height") * yFactor;
      const percentY = gsap.utils.normalize(0, innerHeight, evt.screenY);
      
      //let yPos = gsap.utils.clamp(-maxY, maxY, percentY * maxY - maxY/ 2);
      //let num = percentY * maxY - maxY / 2;
      //console.log("percentageY: " + percentY.toString());
      //console.log("y: " + num.toString());

      gsap.to(section, {
        duration: 1,
        //repeat: 1,
        //yoyo: true,
        //startAt: {y: 0},
        y: percentY * maxY - maxY / 2
      });
    }
    
  });
}

window.addEventListener("mousemove", mouseMoveFunc);



/***
 * 
 * 
 * 
 * function mouseLeaveFunc(e) {
  gsap.to(section, {duration: 1, x: 0, y: 0, scale: 1, ease: "sine"});
  gsap.to(image1, {duration: 1, x: 0, y: 0, scale: 1, ease: "sine"});
  gsap.to(image2, {duration: 1, x: 0, y: 0, scale: 1, ease: "sine"});
  gsap.to(image3, {duration: 1, x: 0, y: 0, scale: 1, ease: "sine"});
 };

 * window.addEventListener("mousemove", mouseMoveFunc);

var timeout;
$(document).mousemove(function(e){
  if(timeout) clearTimeout(timeout);
  setTimeout(callParallax.bind(null, e), 200);
  
});

function callParallax(e){
  gsap.utils.toArray('[data-mouse-x],[data-mouse-y]').forEach((section, i) => {
  
    if(section.getAttribute('data-mouse-x') !== null ) {
      var movementX = section.getAttribute('data-mouse-x');
      
      TweenMax.to(section, 1, {
        x: (gsap.getProperty(section, "left") - gsap.getProperty(section, "width")/2) / gsap.getProperty(section, "width") * movementX,
        ease: Power2.easeOut
      })
    }

    if(section.getAttribute('data-mouse-y') !== null ) {
      var movementY = section.getAttribute('data-mouse-y');
      
      TweenMax.to(section, 1, {
        y: (gsap.getProperty(section, "top") - gsap.getProperty(section, "height")/2) / gsap.getProperty(section, "height") * movementY,
        ease: Power2.easeOut
      })
    }
    
  });
}
 */


