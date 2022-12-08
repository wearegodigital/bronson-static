---
layout: default
title: "About Page Example"
type: about
body_class: "black-bg"
---

{% include modules/navigation.html css-classes="text-white text-h5 font-800 font-display" %}
{% include elements/title-element.html 
    text="About"
    id="about-title"
    css_classes="fixed top-1/2 left-8 transform -translate-y-1/2 z-30"
    element_css_classes="text-white font-800 font-display text-h1 md:text-mega text-left" 
%}
<div id="about-video" class="section relative z-40">
    <div class="video-container w-screen h-screen flex flex-row justify-center items-center">
        <iframe width="80%" height="45%" src="https://www.youtube.com/embed/-SLpbbVlw_A?wmode=opaque" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" data-mouse-x="-0.05" data-mouse-y="0.025" allowfullscreen></iframe>
    </div>
</div>
<div id="about-information" class="section content-container relative z-20 w-screen mx-auto">
    <div class="about-container grid grid-cols-1 md:grid-cols-2 gap-4 h-auto justify-items-center place-items-center">
        <div class="about-image p-4">
            <img src="https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-1/304904888_10158391129876286_1914335038852140476_n.jpg?stp=dst-jpg_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=4TRxgQLVTJwAX_jlTob&_nc_ht=scontent-lcy1-1.xx&oh=00_AfAuS8371EKQmchz2xRhzOev6J-VYeghEgwk78quDmmnSg&oe=6396273C" class="headshot w-full" data-mouse-x="0.1" data-mouse-y="0.2">
        </div>
        <div class="about-description text-white text-h4 p-4">
            <p class="text-h4">Bronson is a fun and sassy NYC-based photographer + director working in advertising, entertainment, lifestyle, portraiture, product, and editorial.  Bronson evokes heartfelt, expressive, slice-of-life images that capture authentic intimacy, whimsy, and joy.</p>
            <p class="text-h4">Wanting his work to reflect the world he lives in, he highlights  LGBTQIA, POC, and AAPI communities and advocates for civil rights for all. Bronson has an insatiable curiosity for people that is evident in his style.</p>
            <p class="text-h4">Represented by <strong>B&A REPS</strong></p>
            <p class="text-h4"><strong>Contact:</strong> Luigi@ba-reps.com</p>
        </div>
    </div>
</div>
<div id="about-clients" class="section content-container relative z-20 w-screen mx-auto mix-blend-lighten">
    <div class="about-clients-container grid grid-cols-1 gap-4 h-screen justify-items-center place-items-center">
        <div class="about-image p-4">
            <h3 class="client-title my-8 text-center text-white font-display">Clients</h3>
            <img src="https://images.squarespace-cdn.com/content/v1/586461096b8f5bbf07dbbd9f/73e7a1a8-27e9-4c8b-993c-4fa2d86e7242/logos_brands+copy.jpg?format=2500w" class="clients w-full" data-mouse-x="-0.01" data-mouse-y="-0.02">
        </div>
    </div>
</div>

{% include modules/menu-modal.html item-css-classes="font-display" %}