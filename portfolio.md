---
layout: default
title: "Portfolio Page Example"
type: portfolio
body_class: "bg-black-1"
---

{% include modules/navigation.html css-classes="text-white text-h5 font-800 font-display" %}
<div id="gallery" class="portfolio-items relative overflow-x-clip">
    {% include elements/title-element.html 
        text="Theragun"
        id="portfolio-title"
        css_classes="fixed top-1/2 left-8 transform -translate-y-1/2 z-30"
        element_css_classes="text-white font-800 font-display text-h2 md:text-mega text-left" 
    %}
    {% include components/portfolio-item.html 
        title="Theragun" slug="theragun" url="#" count=1 bg="#A86BAC"
        layout=1 display="light" last_display="light" next_display="light"
        image_1="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/0a071075-0c7e-4682-bbee-7704bd4beb28/44078BD1-5B19-48D7-A24E-E35CE955BFC9.jpeg"
        image_1_vertical_position="+ 10vw" image_1_vertical_position_mobile="+ 50vw" image_1_css_classes="z-20"
    %}
    {% include components/portfolio-item.html 
        title="Theragun" slug="theragun" url="#" count=2 bg="#D480CF"
        layout=2 display="light" last_display="light" next_display="light"
        image_1="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/fb93496a-104b-4cc8-b855-900be2b46ccb/pride-posters-01.jpg "
        image_1_vertical_position="+ 10vw" image_1_vertical_position_mobile="+ 70vw" image_1_css_classes="z-40"
        image_2="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/e0f5e0af-8e5c-457d-a82d-d3481dbdbe08/Andrew_1313.jpg "
        image_2_vertical_position="- 5vw" image_2_vertical_position_mobile="- 45vw" image_2_css_classes="z-30"
    %}
    {% include components/portfolio-item.html 
        title="Theragun" slug="theragun" url="#" count=3 bg="#B8D0CE"
        layout=3 display="light" last_display="light" next_display="light"
        image_1="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1035992f-9557-4139-b58d-bb4e91f9fbca/Justin+Kevin_1169.jpg "
        image_1_vertical_position="+ 10vw" image_1_vertical_position_mobile="- 40vw" image_1_css_classes="z-20"
        image_2="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/129bbe3b-38cd-4da1-b136-387ded79b163/Justin+Kevin_1183.jpg "
        image_2_vertical_position="+ 45vw" image_2_vertical_position_mobile="+ 65vw" image_2_css_classes="z-30"
    %}
    {% include components/portfolio-item.html 
        title="Theragun" slug="theragun" url="#" count=4 bg="#6797CA"
        layout=4 display="light" last_display="light" next_display="light"
        image_1="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/3d64a7da-0632-45a2-bfb9-c4feb894f3b1/Cortni_0718.jpg"
        image_1_vertical_position="+ 15vw" image_1_vertical_position_mobile="+ 75vw" image_1_css_classes="z-20"
        image_2="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1ead349f-6356-4665-a4e2-9d3e50f3baa8/30252A13-9A03-43D4-BF70-61CCED516C42.jpeg "
        image_2_vertical_position="+ 27.5vw" image_2_vertical_position_mobile="+ 5vw" image_2_css_classes="z-30"
    %}
    {% include components/portfolio-item.html 
        title="Theragun" slug="theragun" url="#" count=5 bg="#FFB699"
        layout=1 display="light" last_display="light" next_display="light"
        image_1="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/9252a81a-dc72-49ec-a7c6-6eb37a162889/C10F9255-4CAF-4CB0-8F8D-3B97A8C07F9C.jpeg"
        image_1_vertical_position="+ 20vw" image_1_vertical_position_mobile="+ 20vw" image_1_css_classes="z-30"
    %}
    {% include components/portfolio-item.html 
        title="Theragun" slug="theragun" url="#" count=6 bg="#FFB699"
        layout=5 display="light" last_display="light" next_display="light"
        image_1="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/96e9d846-1f94-4a5b-b1e8-d988360ff86f/Cody+Rigsby_0309.jpg"
        image_1_vertical_position="+ 10vw" image_1_vertical_position_mobile="+ 10vw" image_1_css_classes="z-20"
        css_classes="last-section"
    %}
</div>
<div id="related-projects" class="portfolio-items relative overflow-x-clip">
    {% include components/related-portfolio.html 
        title="Blink Fitness" slug="blink-fitness" count=10 url="https://wearegodigital.github.io/bronson-static" bg="#0E161A"
        layout=2 display="light" last_display="light" next_display="light"
        image_1="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1578857027845-5HMCVPLG2QENQMD1ESH6/Blink+Fitness_120620198039_05.jpg"
        image_2="https://images.squarespace-cdn.com/content/v1/5dce0508d40dcb3d649e5030/1578857159044-T2HHOHYQPFU3D2KWJBQJ/Screen+Shot+2020-01-12+at+2.25.36+PM.png"
        css-classes="text-black font-800 font-display text-left" 
    %}
</div>

{% include modules/menu-modal.html item-css-classes="font-display" %}