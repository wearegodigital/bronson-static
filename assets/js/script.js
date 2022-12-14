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
    {section_speed: 5, section_scale: 1, image1_speed: -10, image1_scale: 1, image2_speed: 30, image2_scale: 2, image3_speed: 80, image3_scale: 0.75},
    {section_speed: 10, section_scale: 1, image1_speed: 20, image1_scale: 1, image2_speed: 60, image2_scale: 1, image3_speed: -10, image3_scale: 1},
    {section_speed: 10, section_scale: 1, image1_speed: 10, image1_scale: 1, image2_speed: 50, image2_scale: 1, image3_speed: 25, image3_scale: 1.5},
    {section_speed: 6, section_scale: 1.5, image1_speed: 40, image1_scale: 0.5, image2_speed: 20, image2_scale: 1, image3_speed: 60, image3_scale: 1},
    {section_speed: 10, section_scale: 1, image1_speed: 50, image1_scale: 1, image2_speed: 10, image2_scale: 1, image3_speed: 25, image3_scale: 1.5},
    {section_speed: 5, section_scale: 1, image1_speed: -10, image1_scale: 1, image2_speed: 30, image2_scale: 2, image3_speed: 80, image3_scale: 0.75},
    {section_speed: 6, section_scale: 1.5, image1_speed: 40, image1_scale: 0.5, image2_speed: 20, image2_scale: 1, image3_speed: 60, image3_scale: 1},
    {section_speed: 10, section_scale: 1, image1_speed: 50, image1_scale: 1, image2_speed: 10, image2_scale: 1, image3_speed: 25, image3_scale: 1.5},
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

  /* ----------------------------------------
   * Portfolio Items Scroll Animation
   * ---------------------------------------- */

  /** Setting Portfolio layouts array */
  var portfolioLayouts = [
    {section_speed: 5, section_scale: 1, image1_speed: -10, image1_scale: 1, image2_speed: 30, image2_scale: 2, image3_speed: 80, image3_scale: 0.75},
    {section_speed: 10, section_scale: 1, image1_speed: -20, image1_scale: 1, image2_speed: 90, image2_scale: 1, image3_speed: -10, image3_scale: 1},
    {section_speed: 10, section_scale: 1, image1_speed: 80, image1_scale: 1, image2_speed: -50, image2_scale: 1.5, image3_speed: 25, image3_scale: 1.5},
    {section_speed: 6, section_scale: 1.5, image1_speed: 30, image1_scale: 1.5, image2_speed: -40, image2_scale: 1, image3_speed: 60, image3_scale: 1},
    {section_speed: 10, section_scale: 1, image1_speed: 50, image1_scale: 1.5, image2_speed: 10, image2_scale: 1, image3_speed: 25, image3_scale: 1.5},
    {section_speed: 5, section_scale: 1, image1_speed: -10, image1_scale: 1, image2_speed: 30, image2_scale: 2, image3_speed: 80, image3_scale: 0.75},
    {section_speed: 6, section_scale: 1.5, image1_speed: 40, image1_scale: 0.5, image2_speed: 20, image2_scale: 1, image3_speed: 60, image3_scale: 1},
    {section_speed: 10, section_scale: 1, image1_speed: 50, image1_scale: 1, image2_speed: 10, image2_scale: 1, image3_speed: 25, image3_scale: 1.5},
  ];

  gsap.utils.toArray(".portfolio-image").forEach((image, i) => {
    /*** Getting layout of sections from data attribute ***/
    var layoutIndex = image.getAttribute('data-layout') - 1;
    var layout = portfolioLayouts[layoutIndex]

    /*** Getting Image Number ***/
    var imageNumber = image.getAttribute('data-image-number');

    /*** Getting Trigger Section ***/
    var sectionID = image.getAttribute('data-trigger');
    var section = document.querySelector(sectionID);

    if(imageNumber == 3){
      gsap.set(image, { yPercent: layout.image3_speed});
    } else if (imageNumber == 2) {
      gsap.set(image, { yPercent: layout.image2_speed});
    } else {
      gsap.set(image, { yPercent: layout.image1_speed});
    }

    gsap.to(image, {
      yPercent:  layout.section_speed * -1 * layout.section_scale,
      ease: "sine",
      scrollTrigger: {
        trigger: section,
        scrub: 0.5,
      }, 
    });
  });

  /* ----------------------------------------
   * Color and Mode Toggle
   * ---------------------------------------- */

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
        duration: 2,
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
        duration: 2,
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


/* ----------------------------------------
 * Menu Section
 * ---------------------------------------- */

/*** Setting Up Variables ***/

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

let path = document.querySelector("#menu #path")
MotionPathPlugin.convertToPath(path);

let points = gsap.utils.toArray("#menu .menu-item"),
    num = points.length,
    scroller = document.querySelector("#menu"),
    section = document.querySelector("#menu .menu-container"),
    wrap = document.querySelector("#menu .menu-container #rolodex-menu"),
    viewportRotations = 3;

/*** Setting up velocity based element rotation to give a more natural rolodex effect ***/

let proxy = { rotate: 0 },
    limit = 30,
    skewSetter = gsap.quickSetter(".rotateElem", "rotate", "deg"), // fast
    clamp = gsap.utils.clamp(-limit/2, limit);

/*** Primary scroll animation rotating the wrap  ***/
gsap.to(wrap,{
  rotation: -360 * viewportRotations,
  transformOrigin:'center',
  duration:1, 
  ease: "sine.inOut",
  scrollTrigger: {
    scroller: scroller,
    trigger: section,
    scrub: 2,
    start: 1,
    end: "max",
    lazy: false,
    onLeave: self => {
      // Resetting scrol when reach bottom of viewport going down
      self.scroll(2);
      ScrollTrigger.update();
    },
    onLeaveBack: self => {
      // Resetting scroll when reach top of viewport going up
      self.scroll(section.offsetHeight - scroller.offsetHeight - wrap.offsetHeight - 1);
      console.log(section.offsetHeight - scroller.offsetHeight - wrap.offsetHeight - 1);
      ScrollTrigger.update();
    },
    onUpdate: (self) => {
      // Applying velocity based rotation animation
      let rotate = clamp(self.getVelocity() / 100);
      gsap.to(".rotateElem", {
        rotate: rotate,
        duration: 0.5, 
        ease: "power1.out",
        overwrite: true,
      });
      ScrollTrigger.update();
    }
  }
})


// Make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".rotateElem", {transformOrigin: "left center", force3D: true});


/* ----------------------------------------
 * Image Reveal Script
 * ---------------------------------------- */

const items = document.querySelectorAll('.hover-reveal-item');
const imageContainer = document.getElementById('hover-reveal');
const image = document.getElementById('hover-reveal__img');
var imageDisplayed = false;

items.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    imageData = e.target.getAttribute('data-img');
    e.target.style.zIndex = 99;
    console.log(imageData);

    if(!imageDisplayed && imageData != null){
      image.setAttribute('src', imageData);
      imageContainer.classList.add("active");
      imageDisplayed = true;
    }
    
  })
  el.addEventListener('mousemove', (e) => {
    imageContainer.style.top = e.clientY + 'px';
    imageContainer.style.left = e.clientX + 'px';
  })
  el.addEventListener('mouseleave', (e) => {
    e.target.style.zIndex = 1;
    if(imageDisplayed){
      imageContainer.classList.remove("active");
      imageDisplayed = false;
    }
  })
})

/* ----------------------------------------
 * Toggle Menu
 * ---------------------------------------- */

$('document').ready( function(){
  $('a[href="#open"]').click(function (e) {
    var $menu = $('#modal-menu');

    if ($menu.hasClass('active')) {
      $menu.removeClass('active');
    } else {
      $menu.addClass('active');
    }

    /*** Loop over all points and animate the scroll around on load ***/
    points.forEach(function(point, i) {
      let move = gsap.timeline(),
          end = -1 + ((i - 2) * (1 /num));

      if(i == 0){
        let end = -0.0000001;
      }

      move.to(point, {
        motionPath:{
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5],
          autoRotate:true,
          end: end,
        },
        duration:1,
        ease: "power1.inOut",
      });
    });
  });

  $('a[href="#close"]').click(function (e) {
    var $menu = $('#modal-menu');
    var $wrap = $('#menu');

    if ($menu.hasClass('active')) {
      $menu.removeClass('active');
    } else {
      $menu.addClass('active');
    }

    /*** Loop over all points and animate the scroll around on load ***/
    points.forEach(function(point, i) {
      let move = gsap.timeline(),
          end = -0.00000001;

      if(i == 0){
        let end = -0.0000001;
      }

      move.to(point, {
        motionPath:{
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5],
          autoRotate:true,
          end: end,
        },
        duration:1,
        ease: "power1.inOut",
      });
    });

    $("#modal-menu #menu").animate({ scrollTop: 0 }, "fast");
    $("#modal-menu #menu #rolodex-menu").css('transform','rotate(-15deg');
  });
});

/* ----------------------------------------
 * Fade out project title
 * ---------------------------------------- */


const lastSection = document.querySelectorAll('.page-portfolio #gallery .section.last-section');
const headings = document.querySelectorAll('.page-portfolio .title-element.title-overlay');
const headingsBlend = document.querySelectorAll('.page-portfolio .title-element.mix-blend-difference');

headings.forEach((heading, i) => {
  gsap.fromTo(heading, 
    {opacity: 0.6},{
    opacity: 0,
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: lastSection,
      start: 'center center',
      end: `+=95%`,
      scrub: 1,
    },
  })
})

headingsBlend.forEach((heading, i) => {
  gsap.fromTo(heading, 
    {opacity: 1},{
    opacity: 0,
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: lastSection,
      start: 'center center',
      end: `+=95%`,
      scrub: 1,
    },
  })
})

/* ----------------------------------------
 * Fade out about title
 * ---------------------------------------- */
$(document).ready(function() {
  var lastSectionAbout = document.querySelectorAll('.page-about .about-description');

  if($(window).width() >= 768) {
    lastSectionAbout = document.querySelectorAll('.page-about #about-clients');
  } 

  const headingsAbout = document.querySelectorAll('.page-about .title-element.title-overlay');
  const headingsBlendAbout = document.querySelectorAll('.page-about .title-element.mix-blend-difference');

  headingsAbout.forEach((heading, i) => {
    gsap.fromTo(heading, 
      {opacity: 0.6},{
      opacity: 0,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: lastSectionAbout,
        start: 'top 50%',
        end: `+=10%`,
        scrub: 1,
      },
    })
  })

  headingsBlendAbout.forEach((heading, i) => {
    gsap.fromTo(heading, 
      {opacity: 1},{
      opacity: 0,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: lastSectionAbout,
        start: 'top 50%',
        end: `+=10%`,
        scrub: 1,
      },
    })
  })
})

/* ----------------------------------------
 * Fade out contact title
 * ---------------------------------------- */
$(document).ready(function() {

  if($(window).width() < 768) {
    var lastSectionContact = document.querySelectorAll('.page-contact .about-description');
    const headingsContact = document.querySelectorAll('.page-contact .title-element.title-overlay');
    const headingsBlendContact = document.querySelectorAll('.page-contact .title-element.mix-blend-difference');

    headingsContact.forEach((heading, i) => {
      gsap.fromTo(heading, 
        {opacity: 0.6},{
        opacity: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: lastSectionContact,
          start: 'top 50%',
          end: `+=10%`,
          scrub: 1,
        },
      })
    })

    headingsBlendContact.forEach((heading, i) => {
      gsap.fromTo(heading, 
        {opacity: 1},{
        opacity: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: lastSectionContact,
          start: 'top 50%',
          end: `+=10%`,
          scrub: 1,
        },
      })
    })
  
  } 
})

/* ----------------------------------------
 * Contact Page Carousel
 * ---------------------------------------- */

gsap.config({trialWarn:false});
let animation = gsap.timeline();
let targets = gsap.utils.toArray(".contact-image-carousel .carousel-image");
let numberOfTargets = targets.length;

console.log(numberOfTargets);

let duration = 2; //change this
let pause = 5; // change this
let outDelay = 1;
let stagger = duration + pause;
let repeatDelay = (stagger * (numberOfTargets - 1)) + pause;

function init() {

  gsap.set(".contact-image-carousel", {autoAlpha:1});
  animation.fromTo(targets, {
    zIndex: 100,
    x: 50, 
    opacity: 0, 
  }, {
    x: 0,
    opacity: 1,
    zIndex: 50,
    duration: duration, 
    stagger:{
      each: stagger,
      repeat: -1,
      repeatDelay: repeatDelay
    }
  }, 0)
  //use a custom ease to add a fake delay
  .to(targets, {
    x: -50, 
    duration: duration, 
    opacity: 0, 
    zIndex: 0,
    stagger:{
      each: stagger,
      repeat: -1,
      repeatDelay: repeatDelay 
    }
  }, stagger + outDelay);
  
}

init();

/* ----------------------------------------
 * Product Page Image Change
 * ---------------------------------------- */
$(document).ready(function() {
  $('#product-size').change(function(){
    var image = $(this).find(':selected').data('image');
    var price = $(this).find(':selected').data('price');

    $('#product-main-image').attr('src', image);
    $('#product-price').html(price);
  });
});

/* ----------------------------------------
 * Text Slider
 * ---------------------------------------- */

let vSlide;
let titleNum = 0;

gsap.utils.toArray('.page-tears-displays .portfolio-items section').forEach((section, i) => {
  let elementHeight = document.querySelector(".scrolling-text").clientHeight;
  let titleCount = $( ".scrolling-text .v-slides .v-slide" ).length;

  window.addEventListener("resize", function () {
    elementHeight = document.querySelector(".v-slide").clientHeight;
  });

  var vsOpts = {
    slides: document.querySelectorAll(".v-slide"),
    list: document.querySelector(".v-slides"),
    duration: 0.3,
    lineHeight: elementHeight,
  };

  vSlide = document.querySelector(".scrolling-text-mix .v-slides");
  vSlideOvelay = document.querySelector(".scrolling-text-overlay .v-slides");

  gsap.to("body", {
    scrollTrigger: {
      trigger: section,
      scrub: 0.5,
      start: 'start',
      end: '+=50%',
      onEnterBack: function(){
        titleNum--;
        console.log(titleNum);
        let label = "slide" + titleNum;
        gsap.to(vSlide,{
          duration: 0.5,
          y: titleNum * -1 * elementHeight,
          ease: 'sine:inOut',
        });      
        gsap.to(vSlideOvelay,{
          duration: 0.5,
          y: titleNum * -1 * elementHeight,
          ease: 'sine:inOut',
        });      
      },
      onLeave: function(){
        titleNum++;
        console.log(titleNum);
        let label = "slide" + titleNum;
        gsap.to(vSlide,{
          duration: 0.5,
          y: titleNum * -1 * elementHeight,
          ease: 'sine:inOut',
        });     
        gsap.to(vSlideOvelay,{
          duration: 0.5,
          y: titleNum * -1 * elementHeight,
          ease: 'sine:inOut',
        });  
      },
    }
  });

  
});

/* ----------------------------------------
 * Archive Page
 * ---------------------------------------- */

/*** Variables ***/

let holder = document.querySelector('#archive-container .archive-items .holder'),
    wrapper = document.querySelector('#archive-container'),
    overflowX, mapPositionX,
    overflowY, mapPositionY;

let archiveTL = new TimelineMax(),
    canvasHeight = gsap.getProperty(holder, "height"),
    canvasWidth = gsap.getProperty(holder, "width");

    console.log(canvasHeight);
    console.log(canvasWidth);

/*** Initial Load Animation and Image Placement ***/
$(document).ready(function() {
  setTimeout(function() {
    gsap.utils.toArray('#archive-container .archive-items .media-item').forEach((image, i) => {
      var speed = (3 - randomNumber(0,2));
      archiveTL.to(image, 
        speed, 
        {
          y: randomNumber(-canvasHeight/2, canvasHeight/2), 
          x: randomNumber(-canvasWidth/2, canvasWidth/2),
        }, 
        Math.random() * 3,
      )
    });

    setTimeout(function() {
      $("#archive-title, #archive-title-overlay").fadeOut('slow');
    }, 2000);
    
  }, 3000);
});

function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}



// console.clear();

// var vw = window.innerWidth;
// var vh = window.innerHeight;

// var pad = 6;
// var minWidth = 70;
// var maxWidth = 140;
// var bubbleHeight = 70;

// var elastic = Elastic.easeOut.config(0.3, 0.3);

// var bubbles = [];

// for (var i = 0; i < 200; i++) {
//   var bubble = createBubble(i);
//   bubbles.push(bubble);  
//   placeBubble(bubble);
// }

// window.addEventListener("resize", resize);

// function placeBubble(bubble) {
  
//   bubble.placed = true;
//   bubble.width  = randomInt(minWidth, maxWidth);  
//   bubble.left   = randomInt(pad, vw - (bubble.width + pad));
//   bubble.top    = randomInt(pad, vh - (bubble.height + pad));
//   bubble.right  = bubble.left + bubble.width;
//   bubble.bottom = bubble.top  + bubble.height;
  
//   // Loop through all bubbles
//   for (var i = 0; i < bubbles.length; i++) {
    
//     var b = bubbles[i];
    
//     // Skip if b is this bubble or isn't placed
//     if (b === bubble || !b.placed) {
//       continue;
//     }
    
//     // Collision detected, can't place bubble
//     if (intersects(bubble, b)) {
//       bubble.placed = false;
//       break;
//     }    
//   }
  
//   if (bubble.placed) {    
    
//     // No collisions detected. It's place is reserved and we can animate to it
//     animateBubble(bubble);    
    
//   } else {        
    
//     // Can't place bubble. Try again on next animation frame
//     requestAnimationFrame(function() {
//       placeBubble(bubble);
//     });
//   }
// }

// function animateBubble(bubble) {
  
//   TweenLite.set(bubble.element, {
//     width: bubble.width,
//     x: bubble.left,
//     y: vh
//   });
  
//   var tl = new TimelineLite({ onComplete: placeBubble, onCompleteParams: [bubble] })
//     .to(bubble.element, random(0.5, 2), { autoAlpha: 1, y: bubble.top, ease: elastic }, random(10))
//     .add("leave", "+=" + random(5, 10))
//     .add(function() { bubble.placed = false; }, "leave") // When bubble is leaving, it is no longer placed
//     .to(bubble.element, random(0.5, 2), { autoAlpha: 0, y: -vh }, "leave");
// }

// function createBubble(index) {
  
//   var element = document.createElement("div"); 
//   document.body.appendChild(element);
//   element.className = "bubble";
//   element.style.height = bubbleHeight + "px";
//   element.textContent = "#" + (index + 1);  
  
//   return {
//     element: element,
//     placed: false,
//     width: minWidth,
//     height: bubbleHeight,
//     left: 0,
//     top: 0,
//     right: minWidth,
//     bottom: bubbleHeight
//   };
// }

// function intersects(a, b) {
//   return !(b.left > a.right + pad || 
//            b.right < a.left - pad || 
//            b.top > a.bottom + pad || 
//            b.bottom < a.top - pad);
// }

// function resize() {
//   vw = window.innerWidth;
//   vh = window.innerHeight;
// }

// function random(min, max) {
//   if (max == null) { max = min; min = 0; }
//   if (min > max) { var tmp = min; min = max; max = tmp; }
//   return min + (max - min) * Math.random();
// }

// function randomInt(min, max) {
//   if (max == null) { max = min; min = 0; }
//   if (min > max) { var tmp = min; min = max; max = tmp; }
//   return Math.floor(min + (max - min + 1) * Math.random());
// }



/*** Mouse Navigation ***/

function onResize(e) {
  overflowX = holder.offsetWidth - window.innerWidth;
  mapPositionX = gsap.utils.mapRange(0, window.innerWidth, overflowX / 2, overflowX / -2);
  overflowY = holder.offsetHeight - window.innerHeight;
  mapPositionY = gsap.utils.mapRange(0, window.innerHeight, overflowY / 2, overflowY / -2);
}

function onMouseMove(e) {
  if (overflowX > 0 || overflowY > 0) {
    let x = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0;
    let y = e.clientY || (e.changedTouches && e.changedTouches[0].clientY) || 0;
    gsap.to(holder,{
      duration: 3, 
      overwrite: true, 
      ease: "power3", 
      x: mapPositionX(x), 
      y: mapPositionY(y) 
    });
  }
}

window.addEventListener("resize", onResize);
document.addEventListener("mousemove", onMouseMove);
document.addEventListener("touchmove", onMouseMove);
document.addEventListener("pointermove", onMouseMove);
onResize();

